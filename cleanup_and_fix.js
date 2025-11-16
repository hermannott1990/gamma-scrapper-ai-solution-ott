const fs = require('fs');

console.log('🔧 Starte Cleanup und direkte Fixes...');

let html = fs.readFileSync('/app/out/index.html', 'utf8');

// ============================================
// ENTFERNE FALSCHE RESPONSIVE CSS-REGELN
// ============================================
console.log('1️⃣ Entferne falsche responsive CSS...');

// Entferne die section width rules die das Layout kaputt gemacht haben
html = html.replace(/\/\* FIX 7: Cards immer 100% viewport \*\/[\s\S]*?section \{[\s\S]*?box-sizing: border-box;\s*\}/g, '');

// Entferne body/html width rules
html = html.replace(/body, html \{[\s\S]*?overflow-x: hidden;[\s\S]*?width: 100%;[\s\S]*?\}/g, '');

// ============================================
// ENTFERNE JAVASCRIPT-INJEKTOREN (funktionieren nicht richtig)
// ============================================
console.log('2️⃣ Entferne JavaScript-Injektoren...');

html = html.replace(/<script src="\/enhancements\.js"><\/script>/g, '');
html = html.replace(/<script src="\/injector\.js"><\/script>/g, '');

// ============================================
// VIDEO-PFAD KORRIGIEREN
// ============================================
console.log('3️⃣ Korrigiere Video-Pfad...');

// Finde alle video source Tags und korrigiere
html = html.replace(/src="\/assets\/beispiel-reel\.mp4"/g, 'src="assets/beispiel-reel.mp4"');

console.log('✅ Cleanup abgeschlossen!');

fs.writeFileSync('/app/out/index.html', html, 'utf8');

console.log('');
console.log('📝 Nächster Schritt: Direkte HTML-Manipulation für:');
console.log('   - Buttons bei Preispaketen');
console.log('   - Hero-Buttons');
console.log('   - Video-Card Repositionierung');
console.log('   - EDEKA-Grafik');
