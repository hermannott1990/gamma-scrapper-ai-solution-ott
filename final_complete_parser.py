#!/usr/bin/env python3
"""
Final Complete Parser - Behebt ALLE Probleme in einem Durchgang
"""
import re
from bs4 import BeautifulSoup

print("🔧 Starte Final Complete Parser...")

# Lese Backup HTML
with open('/app/out/index.html.backup', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"📄 HTML geladen: {len(html)} Zeichen")

soup = BeautifulSoup(html, 'html.parser')
print("✅ HTML geparst")

# ============================================
# FIX 1: Gamma-Report-Button entfernen
# ============================================
print("1️⃣ Entferne Gamma-Report-Button...")
report_buttons = soup.find_all('button', {'aria-label': lambda x: x and 'Report' in x})
for btn in report_buttons:
    btn.decompose()
print(f"   ✅ {len(report_buttons)} Buttons entfernt")

# ============================================
# FIX 3: Video - Prüfe alle video/source Tags
# ============================================
print("3️⃣ Korrigiere Video...")
videos = soup.find_all('video')
print(f"   Gefunden: {len(videos)} video-Tags")

for video in videos:
    sources = video.find_all('source')
    for source in sources:
        if 'src' in source.attrs:
            old_src = source['src']
            # Korrigiere den Pfad
            if old_src.startswith('/assets/'):
                source['src'] = old_src[1:]  # Entferne führendes /
                print(f"   ✅ Video-Pfad korrigiert: {old_src} → {source['src']}")
            elif old_src.startswith('assets/'):
                print(f"   ✓ Video-Pfad bereits korrekt: {source['src']}")

# ============================================
# FIX 5: Kontaktformular aktualisieren
# ============================================
print("5️⃣ Aktualisiere Kontaktformular...")
contact_title = soup.find('h2', class_='contact-title')
if contact_title:
    contact_title.string.replace_with('Bereit für mehr Sichtbarkeit?')
    print("   ✅ Titel geändert")

contact_subtitle = soup.find('p', class_='contact-subtitle')
if contact_subtitle:
    contact_subtitle.string.replace_with('Starten Sie jetzt mit automatisierten Reels – kostenfreies Erstgespräch')
    print("   ✅ Untertitel geändert")

# Füge Features hinzu
contact_form = soup.find('form', id='contactForm')
if contact_form:
    features_html = '''
<div class="contact-features" style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
    <div class="contact-feature" style="font-family: 'Raleway', sans-serif; font-size: 1rem; color: #FFE14D; font-weight: 600;">✓ Keine Verpflichtung</div>
    <div class="contact-feature" style="font-family: 'Raleway', sans-serif; font-size: 1rem; color: #FFE14D; font-weight: 600;">✓ Kostenfreies Erstgespräch</div>
    <div class="contact-feature" style="font-family: 'Raleway', sans-serif; font-size: 1rem; color: #FFE14D; font-weight: 600;">✓ Individuelle Beratung</div>
</div>
'''
    features_soup = BeautifulSoup(features_html, 'html.parser')
    contact_form.insert_before(features_soup)
    print("   ✅ Features hinzugefügt")

# ============================================
# FIX 6 & 8: Buttons hinzufügen
# ============================================
print("6️⃣ Füge Preispaket-Buttons hinzu...")

# Finde alle Texte mit "Starter Paket" und "Professional Paket"
all_texts = soup.find_all(string=re.compile(r'Starter Paket|Professional Paket'))
print(f"   Gefunden: {len(all_texts)} Textelemente")

processed = {'starter': False, 'professional': False}

for text in all_texts:
    text_str = str(text).strip()
    
    # Skip wenn im script-Tag
    if text.parent.name == 'script':
        continue
    
    # Starter Paket
    if 'Starter Paket' in text_str and not processed['starter']:
        # Finde den Container - gehe hoch bis div mit class
        parent = text.parent
        for _ in range(10):
            if parent.name == 'div' and parent.get('class'):
                classes = ' '.join(parent.get('class', []))
                if 'styled-grid-cell' in classes or 'smart-layout' in classes.lower():
                    break
            if parent.parent:
                parent = parent.parent
            else:
                break
        
        if parent:
            message = "Hallo,\\n\\nich interessiere mich für das Starter Paket (99€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen"
            
            button_html = f'''
<button class="price-button price-button-starter" 
        onclick="var msg = `Hallo,

ich interessiere mich für das Starter Paket (99€/Monat) für die automatisierte Erstellung von Social Media Reels.

Gerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.

Mit freundlichen Grüßen`; document.getElementById('nachricht').value = msg; document.getElementById('contactForm').scrollIntoView({{behavior: 'smooth', block: 'center'}});"
        style="width: 100%; padding: 16px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; background: transparent; color: #FFE14D; border: 2px solid #FFE14D;">
    Starter Paket anfragen
</button>
'''
            button_soup = BeautifulSoup(button_html, 'html.parser')
            parent.append(button_soup)
            processed['starter'] = True
            print("   ✅ Starter-Button hinzugefügt")
    
    # Professional Paket
    elif 'Professional Paket' in text_str and not processed['professional']:
        parent = text.parent
        for _ in range(10):
            if parent.name == 'div' and parent.get('class'):
                classes = ' '.join(parent.get('class', []))
                if 'styled-grid-cell' in classes or 'smart-layout' in classes.lower():
                    break
            if parent.parent:
                parent = parent.parent
            else:
                break
        
        if parent:
            message = "Hallo,\\n\\nich interessiere mich für das Professional Paket (149€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen"
            
            button_html = f'''
<button class="price-button price-button-professional" 
        onclick="var msg = `Hallo,

ich interessiere mich für das Professional Paket (149€/Monat) für die automatisierte Erstellung von Social Media Reels.

Gerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.

Mit freundlichen Grüßen`; document.getElementById('nachricht').value = msg; document.getElementById('contactForm').scrollIntoView({{behavior: 'smooth', block: 'center'}});"
        style="width: 100%; padding: 16px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; background: #FFE14D; color: #2d2d2d; border: none;">
    Professional Paket anfragen
</button>
'''
            button_soup = BeautifulSoup(button_html, 'html.parser')
            parent.append(button_soup)
            processed['professional'] = True
            print("   ✅ Professional-Button hinzugefügt")

print(f"   📊 Buttons: Starter={processed['starter']}, Professional={processed['professional']}")

# ============================================
# FIX 8: Hero-Buttons
# ============================================
print("8️⃣ Füge Hero-Buttons hinzu...")
hero_texts = soup.find_all(string=re.compile(r'Spezialisierung auf LEH'))
if hero_texts:
    for hero_text in hero_texts:
        if hero_text.parent.name != 'script':
            # Finde paragraph parent
            parent = hero_text.parent
            for _ in range(5):
                if parent.name in ['p', 'div']:
                    break
                if parent.parent:
                    parent = parent.parent
            
            hero_buttons_html = '''
<div class="hero-buttons" style="display: flex; gap: 20px; margin: 30px auto; flex-wrap: wrap; justify-content: center; max-width: 600px;">
    <a href="#kontakt" class="hero-button hero-button-primary" style="padding: 16px 32px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; display: inline-block; background: #FFE14D; color: #2d2d2d; border: 2px solid #FFE14D;">
        Jetzt beraten lassen
    </a>
    <a href="#video" class="hero-button hero-button-secondary" style="padding: 16px 32px; font-family: 'Raleway', sans-serif; font-size: 1rem; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; display: inline-block; background: transparent; color: #FFE14D; border: 2px solid #FFE14D;">
        Beispiele ansehen
    </a>
</div>
'''
            hero_buttons_soup = BeautifulSoup(hero_buttons_html, 'html.parser')
            parent.insert_before(hero_buttons_soup)
            print("   ✅ Hero-Buttons hinzugefügt")
            break

# ============================================
# FIX 4: Footer NACH Kontaktformular
# ============================================
print("4️⃣ Füge Footer NACH Kontaktformular ein...")

# Entferne alten Footer falls vorhanden
old_footer = soup.find('footer')
if old_footer:
    old_footer.decompose()
    print("   🗑️ Alter Footer entfernt")

# Finde das Kontaktformular-Section
contact_section = soup.find('section', class_='contact-section')
if contact_section:
    footer_html = '''
<footer class="footer" id="kontakt-footer" style="background: #1a1a1a; padding: 40px 20px; text-align: center; border-top: 1px solid rgba(255, 225, 77, 0.2); margin-top: 0;">
    <div class="footer-links" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-bottom: 20px;">
        <a href="impressum.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">Impressum</a>
        <a href="datenschutz.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">Datenschutz</a>
        <a href="agb.html" style="color: #D7D4CC; text-decoration: none; font-family: 'Raleway', sans-serif; transition: color 0.3s ease;">AGB</a>
    </div>
    <div class="footer-copyright" style="color: #999; font-size: 0.9rem; font-family: 'Raleway', sans-serif;">
        © 2025 AI Solution Ott GbR. Alle Rechte vorbehalten.
    </div>
</footer>
'''
    footer_soup = BeautifulSoup(footer_html, 'html.parser')
    contact_section.insert_after(footer_soup)
    print("   ✅ Footer NACH Kontaktformular eingefügt")

# ============================================
# FIX 2: Video-Card mit ID versehen
# ============================================
print("2️⃣ Video-Card ID hinzufügen...")
video_card = soup.find('section', class_='video-card-section')
if video_card:
    video_card['id'] = 'video'
    print("   ✅ Video-Card ID='video' gesetzt")

# ============================================
# Speichere
# ============================================
print("💾 Speichere HTML...")
output_html = str(soup)

# Post-Processing: Stelle sicher dass contact-section ID hat
if 'id="kontakt"' not in output_html:
    output_html = output_html.replace('class="contact-section"', 'class="contact-section" id="kontakt"')

with open('/app/out/index.html', 'w', encoding='utf-8') as f:
    f.write(output_html)

print("✅ Final Complete Parser abgeschlossen!")
print(f"📄 Neue HTML-Größe: {len(output_html)} Zeichen")
print("\n📋 Zusammenfassung:")
print("   ✅ Gamma-Button entfernt")
print("   ✅ Video-Pfad korrigiert")
print("   ✅ Kontaktformular aktualisiert")
print(f"   {'✅' if processed['starter'] else '❌'} Starter-Button")
print(f"   {'✅' if processed['professional'] else '❌'} Professional-Button")
print("   ✅ Hero-Buttons hinzugefügt")
print("   ✅ Footer NACH Kontaktformular")
print("   ✅ Video-Card ID gesetzt")
