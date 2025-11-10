from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Form Submission Models
class FormSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    phone: Optional[str] = None
    supermarket_name: Optional[str] = None
    message: Optional[str] = Field(None, max_length=1000)
    preferred_contact: Optional[str] = "email"

class FormSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    supermarket_name: Optional[str] = None
    message: Optional[str] = None
    preferred_contact: str = "email"
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"
    source: str = "website_contact_form"

# Video Example Models
class VideoExample(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    youtube_url: str
    embed_id: str
    caption_headline: str
    caption_text: str
    caption_emojis: List[str] = []
    hashtags: List[str] = []
    order: int = 1
    active: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Routes
@api_router.get("/")
async def root():
    return {"message": "AI Solution Ott API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/form-submissions", response_model=FormSubmission)
async def create_form_submission(input: FormSubmissionCreate):
    submission_dict = input.model_dump()
    submission_obj = FormSubmission(**submission_dict)
    
    doc = submission_obj.model_dump()
    doc['submitted_at'] = doc['submitted_at'].isoformat()
    
    try:
        await db.form_submissions.insert_one(doc)
        logger.info(f"Form submission created: {doc['email']}")
        return submission_obj
    except Exception as e:
        logger.error(f"Error creating form submission: {e}")
        raise HTTPException(status_code=500, detail="Fehler beim Speichern des Formulars")

@api_router.get("/form-submissions", response_model=List[FormSubmission])
async def get_form_submissions():
    submissions = await db.form_submissions.find({}, {"_id": 0}).to_list(1000)
    
    for sub in submissions:
        if isinstance(sub.get('submitted_at'), str):
            sub['submitted_at'] = datetime.fromisoformat(sub['submitted_at'])
    
    return submissions

@api_router.get("/video-examples", response_model=List[VideoExample])
async def get_video_examples():
    videos = await db.video_examples.find({"active": True}, {"_id": 0}).sort("order", 1).to_list(100)
    
    for video in videos:
        if isinstance(video.get('created_at'), str):
            video['created_at'] = datetime.fromisoformat(video['created_at'])
    
    return videos

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db():
    # Insert default video example if none exists
    count = await db.video_examples.count_documents({})
    if count == 0:
        default_video = VideoExample(
            youtube_url="https://www.youtube.com/embed/BecNmG2ddCM?rel=0",
            embed_id="BecNmG2ddCM",
            caption_headline="Die fertige Caption - Bereit für Ihren Social Media Post",
            caption_text="Frisch, vielfältig, fantastisch! 🔥 Die neue Woche startet mit unglaublichen Angeboten bei EDEKA Ott in Harrislee! 😍 Schnapp dir deine Lieblingsprodukte zu unschlagbaren Preisen. Ob für den großen Wocheneinkauf oder den kleinen Genuss zwischendurch – bei uns findest du alles, was das Herz begehrt. 🛒 Verpasse nicht unsere sensationellen Deals! Komm vorbei und lass dich inspirieren! ✨",
            caption_emojis=["🔥", "😍", "🛒", "✨"],
            hashtags=["#EDEKAOtt", "#Harrislee", "#Wochenangebote", "#FrischeParadies", "#Sparen", "#edekaharrislee", "#wassersleben", "#einkaufen", "#edeka"],
            order=1,
            active=True
        )
        doc = default_video.model_dump()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.video_examples.insert_one(doc)
        logger.info("Default video example inserted")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()