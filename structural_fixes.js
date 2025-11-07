const fs = require('fs');

console.log('🔧 Starte strukturelle Fixes...');

let html = fs.readFileSync('/app/out/index.html', 'utf8');

// ============================================
// Script-Tag für Enhancements hinzufügen
// ============================================
console.log('📜 Füge enhancements.js hinzu...');

html = html.replace(
    '</body>',
    '<script src="/enhancements.js"></script>\n</body>'
);

// ============================================
// Footer korrigieren (sichtbar machen)
// ============================================
console.log('4️⃣ Korrigiere Footer...');

// Stelle sicher, dass der Footer existiert und richtig formatiert ist
if (html.includes('<footer class="footer">')) {
    console.log('✅ Footer bereits vorhanden');
} else {
    console.log('⚠️ Footer wird am Ende hinzugefügt');
    
    const footer = `
<footer class="footer" style="background: #1a1a1a; padding: 40px 20px; text-align: center; border-top: 1px solid rgba(255, 225, 77, 0.2);">
    <div class="footer-links" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;">
        <a href="/impressum.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">Impressum</a>
        <a href="/datenschutz.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">Datenschutz</a>
        <a href="/agb.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">AGB</a>
    </div>
    <div class="footer-copyright" style="color: #999; font-size: 0.9rem; font-family: 'Raleway', sans-serif;">
        © 2025 AI Solution Ott GbR. Alle Rechte vorbehalten.
    </div>
</footer>
`;
    
    html = html.replace('</body>', footer + '\n</body>');
}

// ============================================
// Speichere
// ============================================
fs.writeFileSync('/app/out/index.html', html, 'utf8');

console.log('✅ Strukturelle Fixes angewendet!');
console.log('');
console.log('⚠️ Hinweis: Da die HTML komprimiert ist, müssen folgende Elemente');
console.log('   manuell über die Browser-DevTools oder durch Neuaufbau hinzugefügt werden:');
console.log('   - Hero-Buttons auf erster Card');
console.log('   - Preispaket-Buttons');
console.log('   - SVG-Grafik bei EDEKA-Bildern');
console.log('   - Video-Card Neupositionierung');
