#!/usr/bin/env python3
"""
Advanced HTML Parser - Bearbeitet Gamma HTML direkt
"""
import re
from bs4 import BeautifulSoup

print("🔧 Starte Advanced HTML Parser...")

# Lese HTML mit Backup
with open('/app/out/index.html.backup', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"📄 HTML geladen: {len(html)} Zeichen")

# Erstelle BeautifulSoup Object
soup = BeautifulSoup(html, 'html.parser')
print("✅ HTML geparst")

# ============================================
# FIX 1: Gamma-Fähnchen entfernen
# ============================================
print("1️⃣ Entferne Gamma-Report-Button...")
report_buttons = soup.find_all('button', {'aria-label': lambda x: x and 'Report' in x})
for btn in report_buttons:
    btn.decompose()
print(f"   Entfernt: {len(report_buttons)} Report-Buttons")

# ============================================
# FIX 3: Video-Pfad korrigieren
# ============================================
print("3️⃣ Korrigiere Video-Quellen...")
video_sources = soup.find_all('source', src=re.compile(r'/assets/'))
for source in video_sources:
    old_src = source['src']
    source['src'] = source['src'].replace('/assets/', 'assets/')
    print(f"   {old_src} → {source['src']}")

# ============================================
# FIX 5: Kontaktformular-Texte ändern
# ============================================
print("5️⃣ Aktualisiere Kontaktformular-Texte...")

# Finde "Kontaktieren Sie uns"
contact_title = soup.find('h2', class_='contact-title')
if contact_title:
    contact_title.string = 'Bereit für mehr Sichtbarkeit?'
    print("   ✅ Titel geändert")

# Finde Untertitel
contact_subtitle = soup.find('p', class_='contact-subtitle')
if contact_subtitle:
    contact_subtitle.string = 'Starten Sie jetzt mit automatisierten Reels – kostenfreies Erstgespräch'
    print("   ✅ Untertitel geändert")

# Füge Features hinzu
contact_form = soup.find('form', id='contactForm')
if contact_form:
    features_html = '''
<div class="contact-features">
    <div class="contact-feature">✓ Keine Verpflichtung</div>
    <div class="contact-feature">✓ Kostenfreies Erstgespräch</div>
    <div class="contact-feature">✓ Individuelle Beratung</div>
</div>
'''
    features_soup = BeautifulSoup(features_html, 'html.parser')
    contact_form.insert_before(features_soup)
    print("   ✅ Features hinzugefügt")

# ============================================
# FIX 6 & 8: Buttons direkt in HTML einfügen
# ============================================
print("6️⃣ + 8️⃣ Füge Buttons direkt in HTML ein...")

# Hero-Buttons - Finde den Text "Spezialisierung auf LEH"
hero_texts = soup.find_all(string=re.compile(r'Spezialisierung auf LEH'))
if hero_texts:
    hero_parent = hero_texts[0].parent
    # Gehe mehrere Ebenen hoch
    for _ in range(3):
        if hero_parent.parent:
            hero_parent = hero_parent.parent
    
    hero_buttons_html = '''
<div class="hero-buttons" style="display: flex; gap: 20px; margin: 30px 0; flex-wrap: wrap; justify-content: center;">
    <a href="#kontakt" class="hero-button hero-button-primary" style="padding: 16px 32px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; display: inline-block; background: #FFE14D; color: #2d2d2d; border: 2px solid #FFE14D;">
        Jetzt beraten lassen
    </a>
    <a href="#video" class="hero-button hero-button-secondary" style="padding: 16px 32px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; display: inline-block; background: transparent; color: #FFE14D; border: 2px solid #FFE14D;">
        Beispiele ansehen
    </a>
</div>
'''
    hero_buttons_soup = BeautifulSoup(hero_buttons_html, 'html.parser')
    hero_texts[0].parent.insert_before(hero_buttons_soup)
    print("   ✅ Hero-Buttons hinzugefügt")

# Preispaket-Buttons - Finde "99" und "149"
price_sections = soup.find_all(string=re.compile(r'99.*Monat|149.*Monat'))
print(f"   Gefunden: {len(price_sections)} Preis-Sections")

for price_text in price_sections:
    price_value = '99' if '99' in price_text else '149'
    paket_name = 'Starter' if price_value == '99' else 'Professional'
    
    # Finde Container
    container = price_text.parent
    for _ in range(5):
        if container and container.name == 'div':
            break
        if container:
            container = container.parent
    
    if container:
        message = f"Hallo,\\n\\nich interessiere mich für das {paket_name} Paket ({price_value}€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen"
        
        button_style = 'background: #FFE14D; color: #2d2d2d;' if paket_name == 'Professional' else 'background: transparent; color: #FFE14D; border: 2px solid #FFE14D;'
        
        button_html = f'''
<button class="price-button price-button-{paket_name.lower()}" 
        onclick="document.getElementById('nachricht').value='{message}'; document.getElementById('contactForm').scrollIntoView({{behavior: 'smooth', block: 'center'}});"
        style="width: 100%; padding: 16px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; {button_style}">
    {paket_name} Paket anfragen
</button>
'''
        button_soup = BeautifulSoup(button_html, 'html.parser')
        container.append(button_soup)
        print(f"   ✅ {paket_name}-Button hinzugefügt")

# ============================================
# FIX 2 & 9: Video-Card und EDEKA-Grafik
# ============================================
print("2️⃣ Video-Card Positionierung...")
video_card = soup.find('section', class_='video-card-section')
was_sie_text = soup.find_all(string=re.compile(r'Was Sie jede Woche erhalten'))

if video_card and was_sie_text:
    # Finde die Card nach "Was Sie jede Woche erhalten"
    target_card = was_sie_text[0].parent
    for _ in range(10):
        if target_card and target_card.name in ['div', 'section'] and 'card' in target_card.get('class', []):
            break
        if target_card:
            target_card = target_card.parent
    
    if target_card and target_card.parent:
        # Verschiebe Video-Card
        video_card.extract()
        target_card.insert_after(video_card)
        # Füge ID hinzu
        video_card['id'] = 'video'
        print("   ✅ Video-Card verschoben")

print("9️⃣ EDEKA-Grafik hinzufügen...")
# Finde EDEKA-Bilder Container
edeka_imgs = soup.find_all('img', src=re.compile(r'Unbenannt-2\.jpg'))
if edeka_imgs:
    container = edeka_imgs[0].parent.parent
    grafik_html = '<img src="assets/edeka-grafik.svg" alt="EDEKA Grafik" style="max-width: 300px; margin-right: 30px;" class="edeka-grafik">'
    grafik_soup = BeautifulSoup(grafik_html, 'html.parser')
    container.insert(0, grafik_soup)
    print("   ✅ EDEKA-Grafik hinzugefügt")

# ============================================
# FIX 4: Footer sicherstellen
# ============================================
print("4️⃣ Footer prüfen...")
footer = soup.find('footer', class_='footer')
if not footer:
    footer_html = '''
<footer class="footer" id="kontakt" style="background: #1a1a1a; padding: 40px 20px; text-align: center; border-top: 1px solid rgba(255, 225, 77, 0.2);">
    <div class="footer-links" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;">
        <a href="impressum.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif;">Impressum</a>
        <a href="datenschutz.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif;">Datenschutz</a>
        <a href="agb.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif;">AGB</a>
    </div>
    <div class="footer-copyright" style="color: #999; font-size: 0.9rem; font-family: 'Raleway', sans-serif;">
        © 2025 AI Solution Ott GbR. Alle Rechte vorbehalten.
    </div>
</footer>
'''
    footer_soup = BeautifulSoup(footer_html, 'html.parser')
    body = soup.find('body')
    if body:
        body.append(footer_soup)
        print("   ✅ Footer hinzugefügt")

# ============================================
# Speichere
# ============================================
print("💾 Speichere HTML...")
with open('/app/out/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("✅ Advanced HTML Parser abgeschlossen!")
print(f"📄 Neue HTML-Größe: {len(str(soup))} Zeichen")
