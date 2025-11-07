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
git commit -m "✨ Alle Fixes: Footer, Impressum/Datenschutz/AGB, Video-Card, Mobile-Fix, Gamma entfernt"

# Push
echo "🔄 Pushe zu GitHub..."
git push origin main

echo ""
echo "✅ Fertig! Alle Änderungen wurden deployed:"
echo "   ✅ Weißer Strich entfernt"
echo "   ✅ Impressum, Datenschutz, AGB hinzugefügt"
echo "   ✅ Video-Card 'Sehen Sie selbst' integriert"
echo "   ✅ Gamma-Fähnchen vollständig entfernt"
echo "   ✅ Mobile Kompatibilität behoben"
echo ""
echo "⏳ Vercel wird jetzt automatisch neu deployen..."
echo "📱 Überprüfe dein Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "🧪 Nach Deployment testen:"
echo "   1. Scrolle zum Kontaktformular (Desktop & Mobile)"
echo "   2. Teste Video-Wiedergabe"
echo "   3. Klicke Footer-Links (Impressum, Datenschutz, AGB)"
echo "   4. Prüfe, ob Gamma-Fähnchen weg ist"
echo ""
echo "⚠️  E-Mail-Funktion:"
echo "   Siehe VERCEL_DEPLOYMENT.md für E-Mail-Service Setup"

