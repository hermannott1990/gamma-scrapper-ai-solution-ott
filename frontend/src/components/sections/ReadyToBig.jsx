import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ReadyToBig = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="ready"
      data-testid="ready-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Supermarket Scene */}
          <div className="relative flex justify-center items-center" data-testid="ready-image">
            <div className="relative w-full max-w-[550px]">
              <img
                src="https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/6aws1h8g_11_Bereit-fur-mehr-Sichtbarkeit.png"
                alt="Supermarkt Szene mit Kunden"
                className="w-full h-auto rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8" data-testid="ready-content">
            {/* Headline */}
            <h2 className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl font-poppins">
              Bereit für mehr Sichtbarkeit?
            </h2>

            {/* Sub-Headline */}
            <h3 className="text-[#FFFFFF] font-semibold text-2xl lg:text-4xl font-poppins">
              Jetzt starten
            </h3>

            {/* Introduction */}
            <p className="text-[#B8BCC4] text-base leading-relaxed">
              Lassen Sie uns gemeinsam besprechen, wie AI Solution Ott Ihren Supermarkt ins digitale Rampenlicht rückt. Vereinbaren Sie noch heute Ihr kostenfreies und unverbindliches Erstgespräch. Wir zeigen Ihnen konkrete Beispiele, beantworten alle Ihre Fragen und entwickeln gemeinsam die optimale Strategie für Ihre Social-Media-Präsenz.
            </p>

            {/* CTA Highlight */}
            <div className="bg-[#F4CA45]/10 border-l-4 border-[#F4CA45] p-6 rounded-xl">
              <p className="text-[#FFFFFF] text-base lg:text-lg leading-relaxed font-medium">
                Profitieren Sie von der Chance, Ihre Wochenangebote professionell zu präsentieren - ohne zusätzlichen Aufwand, ohne technisches Know-how, ohne hohe Investitionen. Starten Sie jetzt durch mit automatisierten Social-Media-Reels, die Ihre Kunden begeistern.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#F4CA45] text-[#2D3137] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#FDD563] hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
                data-testid="ready-cta-button"
              >
                Kostenloses Erstgespräch vereinbaren
              </button>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8" data-testid="ready-contact-cards">
              {/* Phone Card */}
              <a
                href="tel:01713484003"
                className="bg-[#3A3F47] p-6 rounded-xl hover:bg-[#4A5057] transition-colors cursor-pointer group"
                data-testid="phone-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4CA45] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#2D3137]" />
                  </div>
                  <div>
                    <h4 className="text-[#FFFFFF] font-semibold text-lg font-poppins mb-1">Telefon</h4>
                    <p className="text-[#F4CA45] text-base">0171-3484003</p>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:H.Ott@ai-solution-ott.de"
                className="bg-[#3A3F47] p-6 rounded-xl hover:bg-[#4A5057] transition-colors cursor-pointer group"
                data-testid="email-card"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F4CA45] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#2D3137]" />
                  </div>
                  <div>
                    <h4 className="text-[#FFFFFF] font-semibold text-lg font-poppins mb-1">E-Mail</h4>
                    <p className="text-[#F4CA45] text-base break-all">H.Ott@ai-solution-ott.de</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBig;