#!/usr/bin/env python3
"""
Improved HTML Parser - Findet beide Preispakete
"""
import re
from bs4 import BeautifulSoup

print("🔧 Starte Improved HTML Parser...")

# Lese Backup HTML
with open('/app/out/index.html.backup', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"📄 HTML geladen: {len(html)} Zeichen")

soup = BeautifulSoup(html, 'html.parser')
print("✅ HTML geparst")

# ============================================
# FIX: Buttons bei BEIDEN Preispaketen
# ============================================
print("6️⃣ Füge Preispaket-Buttons hinzu...")

# Finde alle heading3 die "Starter Paket" oder "Professional Paket" enthalten
headings = soup.find_all('heading', attrs={'level': '3'})
print(f"   Gefunden: {len(headings)} heading3 Elemente")

buttons_added = 0

for heading in headings:
    heading_text = heading.get_text()
    
    if 'Starter Paket' in heading_text:
        print(f"   → Gefunden: {heading_text}")
        
        # Finde Parent smartLayoutCell
        parent = heading.parent
        while parent and parent.name != 'smartLayoutCell':
            parent = parent.parent
        
        if parent:
            message = "Hallo,\\n\\nich interessiere mich für das Starter Paket (99€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen"
            
            button_html = f'''
<button class="price-button price-button-starter" 
        onclick="document.getElementById('nachricht').value='{message}'; document.getElementById('contactForm').scrollIntoView({{behavior: 'smooth', block: 'center'}});"
        style="width: 100%; padding: 16px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; background: transparent; color: #FFE14D; border: 2px solid #FFE14D;">
    Starter Paket anfragen
</button>
'''
            button_soup = BeautifulSoup(button_html, 'html.parser')
            parent.append(button_soup)
            buttons_added += 1
            print(f"   ✅ Starter-Button hinzugefügt")
    
    elif 'Professional Paket' in heading_text:
        print(f"   → Gefunden: {heading_text}")
        
        parent = heading.parent
        while parent and parent.name != 'smartLayoutCell':
            parent = parent.parent
        
        if parent:
            message = "Hallo,\\n\\nich interessiere mich für das Professional Paket (149€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen"
            
            button_html = f'''
<button class="price-button price-button-professional" 
        onclick="document.getElementById('nachricht').value='{message}'; document.getElementById('contactForm').scrollIntoView({{behavior: 'smooth', block: 'center'}});"
        style="width: 100%; padding: 16px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; background: #FFE14D; color: #2d2d2d; border: none;">
    Professional Paket anfragen
</button>
'''
            button_soup = BeautifulSoup(button_html, 'html.parser')
            parent.append(button_soup)
            buttons_added += 1
            print(f"   ✅ Professional-Button hinzugefügt")

print(f"\n📊 Buttons hinzugefügt: {buttons_added}/2")

# Speichere
with open('/app/out/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("✅ Parser abgeschlossen!")
