const fs = require('fs');

let html = fs.readFileSync('/app/out/index.html', 'utf8');

// Füge beide Scripts hinzu
if (!html.includes('enhancements.js')) {
    html = html.replace('</body>', '<script src="/enhancements.js"></script>\n</body>');
}

if (!html.includes('injector.js')) {
    html = html.replace('</body>', '<script src="/injector.js"></script>\n</body>');
}

fs.writeFileSync('/app/out/index.html', html, 'utf8');

console.log('✅ Scripts hinzugefügt!');
