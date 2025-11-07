const fs = require('fs');

console.log('🔧 Starte umfassende Fixes...');

// Lese HTML
let html = fs.readFileSync('/app/out/index.html', 'utf8');

// ============================================
// FIX 1: Gamma-Fähnchen (Button mit Flag) entfernen
// ============================================
console.log('1️⃣ Entferne Gamma-Fähnchen...');

// Füge CSS hinzu, um den Report-Button zu verstecken
const hideGammaFlag = `
/* FIX 1: Verstecke Gamma Report-Button (Fähnchen) */
button[aria-label*="Report"],
button[class*="css-1joqpk8"],
.fa-flag-swallowtail,
svg[data-icon="flag-swallowtail"],
button:has(svg[data-icon="flag-swallowtail"]) {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    position: absolute !important;
    left: -9999px !important;
}
`;

// ============================================
// FIX 3: Video-Pfad korrigieren
// ============================================
console.log('3️⃣ Korrigiere Video-Pfad...');

// Ändere relativen Pfad zu absolutem Pfad
html = html.replace(
    'src="assets/beispiel-reel.mp4"',
    'src="/assets/beispiel-reel.mp4"'
);

// ============================================
// FIX 5: Kontaktformular-Text ändern
// ============================================
console.log('5️⃣ Ändere Kontaktformular-Texte...');

html = html.replace(
    '<h2 class="contact-title">Kontaktieren Sie uns</h2>',
    '<h2 class="contact-title">Bereit für mehr Sichtbarkeit?</h2>'
);

html = html.replace(
    'Interessiert an unserer Lösung? Schreiben Sie uns und wir melden uns schnellstmöglich bei Ihnen!',
    'Starten Sie jetzt mit automatisierten Reels – kostenfreies Erstgespräch'
);

// Füge Features vor dem Formular ein
const contactFeatures = `
        <div class="contact-features">
            <div class="contact-feature">✓ Keine Verpflichtung</div>
            <div class="contact-feature">✓ Kostenfreies Erstgespräch</div>
            <div class="contact-feature">✓ Individuelle Beratung</div>
        </div>
`;

html = html.replace(
    '<form class="contact-form"',
    contactFeatures + '\n        <form class="contact-form"'
);

// ============================================
// FIX 7: Responsive Card-Größen (100% viewport)
// ============================================
console.log('7️⃣ Füge responsive Card-Styles hinzu...');

const responsiveStyles = `
/* FIX 7: Cards immer 100% viewport */
body, html {
    overflow-x: hidden;
    width: 100%;
}

section {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
}

.contact-features {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.contact-feature {
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    color: #FFE14D;
    font-weight: 600;
}

@media (max-width: 768px) {
    .contact-features {
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
    
    .contact-feature {
        font-size: 0.9rem;
    }
}

/* Buttons für Preispakete */
.price-button {
    width: 100%;
    padding: 16px;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 20px;
}

.price-button-starter {
    background: transparent;
    color: #FFE14D;
    border: 2px solid #FFE14D;
}

.price-button-starter:hover {
    background: rgba(255, 225, 77, 0.1);
    transform: translateY(-2px);
}

.price-button-professional {
    background: #FFE14D;
    color: #2d2d2d;
}

.price-button-professional:hover {
    background: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 225, 77, 0.3);
}

/* Hero Buttons */
.hero-buttons {
    display: flex;
    gap: 20px;
    margin: 30px 0;
    flex-wrap: wrap;
    justify-content: center;
}

.hero-button {
    padding: 16px 32px;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    display: inline-block;
}

.hero-button-primary {
    background: #FFE14D;
    color: #2d2d2d;
    border: 2px solid #FFE14D;
}

.hero-button-primary:hover {
    background: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 225, 77, 0.3);
}

.hero-button-secondary {
    background: transparent;
    color: #FFE14D;
    border: 2px solid #FFE14D;
}

.hero-button-secondary:hover {
    background: rgba(255, 225, 77, 0.1);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }
    
    .hero-button {
        width: 100%;
        text-align: center;
    }
}
`;

// Füge alle Styles hinzu
const allNewStyles = hideGammaFlag + responsiveStyles;
const lastStyleIndex = html.lastIndexOf('</style>');
if (lastStyleIndex !== -1) {
    html = html.substring(0, lastStyleIndex) + allNewStyles + html.substring(lastStyleIndex);
}

// ============================================
// Speichere HTML
// ============================================
fs.writeFileSync('/app/out/index.html', html, 'utf8');

console.log('✅ Basis-Fixes angewendet!');
console.log('📝 Manuelle Anpassungen erforderlich für:');
console.log('   - Position der Video-Card (nach "Was Sie jede Woche erhalten")');
console.log('   - Buttons bei Preispaketen');
console.log('   - Hero-Buttons auf erster Card');
console.log('   - SVG-Grafik bei EDEKA-Bildern');
console.log('');
console.log('👉 Diese werden in einem zweiten Schritt hinzugefügt...');
