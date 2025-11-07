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
git commit -m "Kontaktformular hinzugefügt, Made with Gamma entfernt, Vercel-Konfiguration"

# Push
echo "🔄 Pushe zu GitHub..."
git push origin main

echo ""
echo "✅ Fertig!"
echo ""
echo "⏳ Vercel wird jetzt automatisch neu deployen..."
echo "📱 Überprüfe dein Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "⚠️  Vergiss nicht:"
echo "   1. E-Mail-Service API-Key in Vercel Environment Variables hinzufügen"
echo "   2. Siehe VERCEL_DEPLOYMENT.md für Details"

