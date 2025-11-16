#!/usr/bin/env python3
"""
HTML Injector - Fügt Buttons, Video und Grafiken direkt in die HTML ein
"""
import re

print("🔧 Starte HTML-Injektor...")

# Lese HTML
with open('/app/out/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"📄 HTML geladen: {len(html)} Zeichen")

# ============================================
# FIX 1: Video-Pfad korrigieren (relativ)
# ============================================
print("3️⃣ Korrigiere Video-Pfad...")
html = html.replace('src="/assets/beispiel-reel.mp4"', 'src="assets/beispiel-reel.mp4"')
html = html.replace('src="/assets/', 'src="assets/')

# ============================================
# FIX 2: Füge Inline-Script für Buttons hinzu
# ============================================
print("6️⃣ + 8️⃣ Füge Button-Funktionalität hinzu...")

button_script = '''
<script>
// Button-Funktionalität
function scrollToContact(prefilledMessage) {
    const contactForm = document.getElementById('contactForm');
    const messageField = document.getElementById('nachricht');
    
    if (prefilledMessage && messageField) {
        messageField.value = prefilledMessage;
    }
    
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { if (messageField) messageField.focus(); }, 1000);
    }
}

function scrollToVideo() {
    const videoSection = document.querySelector('.video-card-section');
    if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Füge Buttons beim Laden hinzu
document.addEventListener('DOMContentLoaded', function() {
    // Hero-Buttons
    const heroText = document.evaluate(
        "//div[contains(text(), '✓ Spezialisierung auf LEH')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
    
    if (heroText && !document.querySelector('.hero-buttons-injected')) {
        const heroButtons = document.createElement('div');
        heroButtons.className = 'hero-buttons hero-buttons-injected';
        heroButtons.innerHTML = `
            <button class="hero-button hero-button-primary" onclick="scrollToContact()">Jetzt beraten lassen</button>
            <button class="hero-button hero-button-secondary" onclick="scrollToVideo()">Beispiele ansehen</button>
        `;
        heroText.parentNode.insertBefore(heroButtons, heroText);
    }
    
    // Starter Paket Button
    const starterText = document.evaluate(
        "//div[contains(text(), '99') and contains(text(), 'Monat')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
    
    if (starterText && !document.querySelector('.price-button-starter-injected')) {
        const starterBtn = document.createElement('button');
        starterBtn.className = 'price-button price-button-starter price-button-starter-injected';
        starterBtn.textContent = 'Starter Paket anfragen';
        starterBtn.onclick = function() {
            scrollToContact(`Hallo,\\n\\nich interessiere mich für das Starter Paket (99€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen`);
        };
        
        let container = starterText.parentNode;
        for (let i = 0; i < 5; i++) {
            container = container.parentNode;
            if (container.tagName === 'DIV' && container.className.includes('card')) break;
        }
        container.appendChild(starterBtn);
    }
    
    // Professional Paket Button
    const professionalText = document.evaluate(
        "//div[contains(text(), '149') and contains(text(), 'Monat')]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
    
    if (professionalText && !document.querySelector('.price-button-professional-injected')) {
        const professionalBtn = document.createElement('button');
        professionalBtn.className = 'price-button price-button-professional price-button-professional-injected';
        professionalBtn.textContent = 'Professional Paket anfragen';
        professionalBtn.onclick = function() {
            scrollToContact(`Hallo,\\n\\nich interessiere mich für das Professional Paket (149€/Monat) für die automatisierte Erstellung von Social Media Reels.\\n\\nGerne würde ich mehr über Ihre Leistungen erfahren und ein kostenfreies Erstgespräch vereinbaren.\\n\\nMit freundlichen Grüßen`);
        };
        
        let container = professionalText.parentNode;
        for (let i = 0; i < 5; i++) {
            container = container.parentNode;
            if (container.tagName === 'DIV' && container.className.includes('card')) break;
        }
        container.appendChild(professionalBtn);
    }
});
</script>
'''

# Füge Script vor </body> ein
html = html.replace('</body>', button_script + '\n</body>')

# ============================================
# Speichere
# ============================================
with open('/app/out/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ HTML-Injektor abgeschlossen!")
print("📝 Hinweis: Buttons werden beim Laden dynamisch eingefügt")
