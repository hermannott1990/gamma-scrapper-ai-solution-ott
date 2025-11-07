const fs = require('fs');

// Lese die HTML-Datei
let html = fs.readFileSync('/app/out/index.html', 'utf8');

// 1. FIX: Entferne weißen Strich - füge CSS am Ende des Style-Blocks hinzu (vor </style>)
const contactFormStyles = `

/* FIX 1: Entferne weißen Streifen vor Kontaktformular */
.contact-section {
    margin-top: 0 !important;
    padding-top: 80px;
}

/* FIX 6: Verstärke Gamma-Branding Entfernung */
[class*="gamma"], 
[id*="gamma"],
a[href*="gamma.app"]:not([href*="assets"]),
img[alt*="gamma" i],
img[title*="gamma" i],
div[style*="gamma"],
span:contains("gamma"),
.watermark,
[data-watermark],
[style*="position: fixed"][style*="bottom"][style*="right"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
}

/* FIX 7: Mobile Kompatibilität für Kontaktformular */
@media (max-width: 768px) {
    .contact-section {
        position: relative;
        z-index: 9999 !important;
        background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
        padding: 60px 15px;
        margin-top: 0;
    }
    
    .contact-container {
        position: relative;
        z-index: 10000 !important;
    }
    
    .contact-form {
        position: relative;
        z-index: 10001 !important;
        background: rgba(255, 255, 255, 0.08);
        padding: 30px 20px;
    }
    
    body {
        overflow-x: hidden;
    }
}

/* Footer Styles */
.footer {
    background: #1a1a1a;
    padding: 40px 20px;
    text-align: center;
    border-top: 1px solid rgba(255, 225, 77, 0.2);
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.footer-links a {
    color: #D7D4CC;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #FFE14D;
}

.footer-copyright {
    color: #999;
    font-size: 0.9rem;
    font-family: 'Raleway', sans-serif;
}

/* Video Card Styles */
.video-card-section {
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
    padding: 80px 20px;
}

.video-card-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.video-card-title {
    font-family: 'Comfortaa', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFE14D;
    margin-bottom: 15px;
}

.video-card-subtitle {
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    color: #D7D4CC;
    margin-bottom: 50px;
}

.video-container {
    max-width: 400px;
    margin: 0 auto;
    position: relative;
    aspect-ratio: 9 / 16;
    background: #000;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 768px) {
    .video-card-title {
        font-size: 2rem;
    }
    
    .video-card-subtitle {
        font-size: 1rem;
    }
    
    .video-container {
        max-width: 100%;
    }
}
`;

// Finde die letzte </style> und füge die Styles davor ein
const lastStyleIndex = html.lastIndexOf('</style>');
if (lastStyleIndex !== -1) {
    html = html.substring(0, lastStyleIndex) + contactFormStyles + html.substring(lastStyleIndex);
}

// 2. FIX: Füge Video-Card VOR dem Kontaktformular ein
const videoCard = `
<section class="video-card-section">
    <div class="video-card-container">
        <h2 class="video-card-title">Sehen Sie selbst</h2>
        <p class="video-card-subtitle">Erleben Sie ein Beispiel unserer automatisierten Reels in Aktion.</p>
        
        <div class="video-container">
            <video 
                controls 
                playsinline 
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Crect fill='%23000' width='9' height='16'/%3E%3C/svg%3E"
            >
                <source src="assets/beispiel-reel.mp4" type="video/mp4">
                Ihr Browser unterstützt das Video-Tag nicht.
            </video>
        </div>
    </div>
</section>
`;

// Füge die Video-Card VOR dem Kontaktformular ein
const contactFormIndex = html.indexOf('<section class="contact-section"');
if (contactFormIndex !== -1) {
    html = html.substring(0, contactFormIndex) + videoCard + html.substring(contactFormIndex);
}

// 3. FIX: Füge Footer NACH dem Kontaktformular ein
const footer = `

<footer class="footer">
    <div class="footer-links">
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="agb.html">AGB</a>
    </div>
    <div class="footer-copyright">
        © 2025 AI Solution Ott GbR. Alle Rechte vorbehalten.
    </div>
</footer>

</body>
</html>`;

// Ersetze das schließende </body></html>
html = html.replace(/<\/body>\s*<\/html>\s*$/, footer);

// Speichere die aktualisierte HTML
fs.writeFileSync('/app/out/index.html', html, 'utf8');

console.log('✅ Alle Fixes wurden angewendet!');
