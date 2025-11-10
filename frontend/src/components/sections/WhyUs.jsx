import React from 'react';
import { Check } from 'lucide-react';

const WhyUs = () => {
  const expertise = [
    { label: 'Erfolgreiche Pilotprojekte', text: 'Messbare Ergebnisse bei EDEKA-Märkten mit deutlichen Reichweiten-Steigerungen' },
    { label: 'LEH-Spezialisierung', text: 'Wir kennen die Branche und ihre spezifischen Anforderungen aus erster Hand' },
    { label: 'Technische Excellence', text: 'Eigens entwickelte KI-Algorithmen für optimale Video-Qualität' },
    { label: 'Verlässliche Partnerschaft', text: 'Persönlicher Ansprechpartner und schneller Support bei Fragen' },
    { label: 'Kontinuierliche Verbesserung', text: 'Wir entwickeln unsere Technologie ständig weiter' }
  ];

  const security = [
    { label: 'Flexible Laufzeiten', text: 'Vertragsbindung ab nur 3 Monaten, danach monatlich kündbar' },
    { label: 'Transparente Preise', text: 'Keine versteckten Kosten oder überraschende Zusatzgebühren' },
    { label: 'Persönlicher Service', text: 'Ihr fester Ansprechpartner kennt Ihre Bedürfnisse' },
    { label: 'Datenschutz', text: 'DSGVO-konform und sicher gehostet in Deutschland' }
  ];

  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-12" data-testid="why-us-content">
            {/* Main Headline */}
            <h2 className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl font-poppins">
              Warum AI Solution Ott?
            </h2>

            {/* Introduction */}
            <p className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed">
              Wir sind mehr als nur ein Dienstleister - wir sind Ihr strategischer Partner für digitales Marketing im Lebensmitteleinzelhandel. Unsere Kombination aus technologischer Innovation und branchenspezifischer Expertise macht den Unterschied. Wir verstehen die besonderen Herausforderungen lokaler Supermärkte und haben darauf maßgeschneiderte Lösungen entwickelt.
            </p>

            {/* Section 1: Innovation trifft Handwerk */}
            <div className="space-y-6">
              <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl font-poppins">
                Innovation trifft Handwerk
              </h3>
              <p className="text-[#B8BCC4] text-base leading-relaxed">
                Wir kombinieren modernste KI-Technologie mit tiefem Verständnis für lokales Marketing. Unser automatisierter Workflow wurde speziell für Supermärkte entwickelt und berücksichtigt die einzigartigen Anforderungen des LEH-Sektors. Jahrelange Erfahrung im Einzelhandel trifft auf cutting-edge Technologie.
              </p>
              <p className="text-[#F4CA45] font-medium text-base">
                Unsere Expertise
              </p>

              {/* Expertise List */}
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`expertise-item-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-[#F4CA45] mt-2 flex-shrink-0" />
                    <p className="text-[#B8BCC4] text-base leading-relaxed">
                      <span className="font-semibold text-[#FFFFFF]">{item.label}:</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Ihre Sicherheit */}
            <div className="space-y-6">
              <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl font-poppins">
                Ihre Sicherheit
              </h3>

              {/* Security List */}
              <div className="space-y-4">
                {security.map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`security-item-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-[#F4CA45] mt-2 flex-shrink-0" />
                    <p className="text-[#B8BCC4] text-base leading-relaxed">
                      <span className="font-semibold text-[#FFFFFF]">{item.label}:</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - EDEKA Store + Testimonial */}
          <div className="space-y-10" data-testid="why-us-media">
            {/* EDEKA Store Photo */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/mn32qmt5_10_Warum-AI-Solution-Ott.png"
                alt="EDEKA Ott Store Außenansicht"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            {/* Testimonial Box */}
            <div className="bg-[#3A3F47] p-8 rounded-2xl border-l-6 border-[#F4CA45] shadow-xl relative">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-[#F4CA45]/20 text-6xl font-serif leading-none">
                “
              </div>

              {/* Testimonial Text */}
              <p className="text-[#FFFFFF] text-base lg:text-lg leading-relaxed italic mb-6 relative z-10">
                Das automatische Reel hat bei uns für Begeisterung gesorgt. Die Kunden finden es super modern und wir sparen uns jede Woche viel Zeit!
              </p>

              {/* Attribution */}
              <p className="text-[#F4CA45] font-semibold text-base">
                - EDEKA Ott Pilot-Projekt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;