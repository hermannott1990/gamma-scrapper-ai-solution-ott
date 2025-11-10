import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Facebook, Instagram, TikTok, Smartphone } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LiveExample = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${API}/video-examples`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const currentVideo = videos[currentIndex] || {
    youtube_url: 'https://www.youtube.com/embed/BecNmG2ddCM?rel=0',
    embed_id: 'BecNmG2ddCM',
    caption_headline: 'Die fertige Caption - Bereit für Ihren Social Media Post',
    caption_text: 'Frisch, vielfältig, fantastisch! 🔥 Die neue Woche startet mit unglaublichen Angeboten bei EDEKA Ott in Harrislee! 😍 Schnapp dir deine Lieblingsprodukte zu unschlagbaren Preisen. Ob für den großen Wocheneinkauf oder den kleinen Genuss zwischendurch – bei uns findest du alles, was das Herz begehrt. 🛒 Verpasse nicht unsere sensationellen Deals! Komm vorbei und lass dich inspirieren! ✨',
    hashtags: ['#EDEKAOtt', '#Harrislee', '#Wochenangebote', '#FrischeParadies', '#Sparen', '#edekaharrislee', '#wassersleben', '#einkaufen', '#edeka']
  };

  return (
    <section
      id="live-example"
      data-testid="live-example-section"
      className="relative bg-[#2D3137] py-20 lg:py-32 overflow-hidden"
    >
      {/* Social Media Icons Banner */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden" data-testid="social-icons-banner">
        <div className="flex justify-around items-center h-full bg-gradient-to-r from-[#FFD700] via-[#4A90E2] to-[#FFD700]">
          <div className="w-28 h-28 bg-[#1877F2] rounded-full flex items-center justify-center transform -translate-y-10 opacity-80">
            <Facebook className="w-16 h-16 text-white" fill="white" />
          </div>
          <div className="w-28 h-28 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center transform -translate-y-10 opacity-80">
            <Instagram className="w-16 h-16 text-white" />
          </div>
          <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center transform -translate-y-10 opacity-80">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="#00F2EA">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </div>
          <div className="w-28 h-28 bg-[#25D366] rounded-full flex items-center justify-center transform -translate-y-10 opacity-80">
            <Smartphone className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 pt-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl mb-8 font-poppins"
          data-testid="live-example-headline"
        >
          Live-Beispiel unserer Automatisierung
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mb-16"
          data-testid="live-example-description"
        >
          Erleben Sie hautnah, wie aus einem einfachen Handzettel ein professionelles, animiertes Social-Media-Reel entsteht. Dieses Beispiel zeigt die Qualität und den Stil unserer vollautomatischen Video-Produktion.
        </p>

        {/* Video and Caption Grid */}
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16">
          {/* Left Column - YouTube Video */}
          <div data-testid="video-container">
            <div className="bg-[#25282C] p-6 rounded-2xl shadow-2xl">
              <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={currentVideo.youtube_url}
                  title="AI Solution Ott - EDEKA Beispiel"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  data-testid="youtube-video"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Caption & Hashtags */}
          <div className="space-y-8" data-testid="caption-container">
            <div className="bg-[#3A3F47] p-8 lg:p-12 rounded-2xl border-l-4 border-[#F4CA45]">
              {/* Headline */}
              <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl mb-8 font-poppins">
                {currentVideo.caption_headline}
              </h3>

              {/* Caption Text */}
              <p className="text-[#FFFFFF] text-base lg:text-lg leading-relaxed mb-10 whitespace-pre-wrap">
                {currentVideo.caption_text}
              </p>

              {/* Hashtags Section */}
              <div className="space-y-4">
                <h4 className="text-[#8A8E96] font-semibold text-sm uppercase tracking-wide">
                  Hashtags:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentVideo.hashtags && currentVideo.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[#4A9EFF] text-base font-medium"
                      data-testid={`hashtag-${index}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExample;