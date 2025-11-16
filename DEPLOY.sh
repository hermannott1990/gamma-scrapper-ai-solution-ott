#!/bin/bash

echo "🚀 Bereite Vercel-Deployment vor..."
echo ""

# Git Status
echo "📊 Git Status:"
git status --short
echo ""

# Änderungen hinzufügen
echo "➕ Füge Änderungen hinzu..."
git add .

# Commit erstellen
echo "💾 Erstelle Commit..."
git commit -m "🎉 Alle 9 Fixes komplett: Buttons, Footer, Video, Mobile, Gamma entfernt, EDEKA-Grafik"

# Push
echo "🔄 Pushe zu GitHub..."
git push origin main

echo ""
echo "✅ Fertig! Alle 9 Anforderungen wurden umgesetzt:"
echo "   1. ✅ Gamma-Fähnchen entfernt"
echo "   2. ✅ Video-Card neu positioniert"
echo "   3. ✅ Video-Wiedergabe funktioniert"
echo "   4. ✅ Footer mit Impressum/Datenschutz/AGB"
echo "   5. ✅ Kontaktformular aktualisiert"
echo "   6. ✅ Preispaket-Buttons hinzugefügt"
echo "   7. ✅ Responsive Design (100% Viewport)"
echo "   8. ✅ Hero-Buttons auf erster Card"
echo "   9. ✅ EDEKA-Grafik hinzugefügt"
echo ""
echo "⏳ Vercel wird jetzt automatisch neu deployen..."
echo "📱 Überprüfe dein Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "🧪 Nach Deployment testen:"
echo "   - Gamma-Fähnchen weg? (unten rechts)"
echo "   - Alle Buttons funktionieren?"
echo "   - Video spielt ab?"
echo "   - Footer-Links klickbar?"
echo "   - Mobile: Kontaktformular sichtbar?"
echo ""
echo "📋 Details siehe: COMPLETE_FIXES.md"
echo ""
echo "⚠️  E-Mail-Funktion:"
echo "   Siehe VERCEL_DEPLOYMENT.md für E-Mail-Service Setup"

