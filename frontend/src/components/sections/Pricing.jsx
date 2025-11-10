import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl text-center mb-8 font-poppins"
          data-testid="pricing-headline"
        >
          Unsere Pakete - Passend für jeden Bedarf
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-20"
          data-testid="pricing-description"
        >
          Wir bieten flexible Lösungen, die sich Ihren Anforderungen anpassen. Ob Sie erst in die Welt des Video-Marketings einsteigen oder bereits eine professionelle Social-Media-Strategie verfolgen - wir haben das richtige Paket für Sie. Beide Optionen beinhalten unsere vollautomatische KI-Produktion ohne versteckte Kosten.
        </p>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto" data-testid="pricing-cards">
          {/* Starter Package */}
          <div
            className="bg-[#3A3F47] p-10 lg:p-14 rounded-2xl border-2 border-[#4A5057] shadow-xl hover:shadow-2xl transition-shadow"
            data-testid="starter-package"
          >
            {/* Package Name */}
            <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl mb-6 font-poppins">
              Starter Paket
            </h3>

            {/* Price */}
            <div className="mb-8">
              <span className="text-[#F4CA45] font-bold text-6xl lg:text-7xl font-poppins">
                99€
              </span>
              <span className="text-[#8A8E96] text-base ml-2">pro Monat</span>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-[#4A5057] mb-10" />

            {/* Features */}
            <div className="space-y-4 mb-10">
              <h4 className="text-[#F4CA45] font-semibold text-xl mb-6 font-poppins">
                Leistungsumfang:
              </h4>
              {[
                '2 automatische Reels (2x pro Monat)',
                'Standardinformationen als Caption',
                'Integration Ihres eigenen Markteingangs',
                'Lieferung zur Freigabe per E-Mail',
                'Ihre eigene Musik/Sound optional',
                'Grundlegende Hashtag-Strategie'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`starter-feature-${index}`}>
                  <Check className="w-5 h-5 text-[#F4CA45] flex-shrink-0 mt-0.5" />
                  <span className="text-[#B8BCC4] text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Ideal For Box */}
            <div className="bg-[#2D3137] p-6 rounded-xl" data-testid="starter-ideal-for">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F4CA45] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#2D3137]" />
                </div>
                <p className="text-[#B8BCC4] text-sm leading-relaxed">
                  <span className="font-semibold text-[#FFFFFF]">Ideal für:</span> Einzelne Supermärkte, die Social Media testen möchten und erst in die Video-Content-Welt einsteigen. Perfekt für kleinere Märkte mit begrenztem Budget.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Package - RECOMMENDED */}
          <div
            className="relative bg-[#3A3F47] p-10 lg:p-14 rounded-2xl border-3 border-[#F4CA45] shadow-2xl gold-glow"
            data-testid="professional-package"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-4 right-8">
              <div className="bg-[#F4CA45] text-[#2D3137] px-6 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                EMPFOHLEN
              </div>
            </div>

            {/* Package Name */}
            <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl mb-6 font-poppins">
              Professional Paket
            </h3>

            {/* Price */}
            <div className="mb-8">
              <span className="text-[#F4CA45] font-bold text-6xl lg:text-7xl font-poppins">
                149€
              </span>
              <span className="text-[#8A8E96] text-base ml-2">pro Monat</span>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-[#4A5057] mb-10" />

            {/* Features */}
            <div className="space-y-4 mb-10">
              <h4 className="text-[#F4CA45] font-semibold text-xl mb-6 font-poppins">
                Leistungsumfang:
              </h4>
              {[
                { text: '4 automatische Reels (wöchentlich)', highlight: true },
                { text: 'Professionelle Caption passend zum Post', highlight: true },
                { text: 'Strategische Hashtag-Optimierung', highlight: true },
                { text: 'Integration Ihres eigenen Markteingangs', highlight: false },
                { text: 'Lieferung zur Freigabe per E-Mail', highlight: false },
                { text: 'Ihre eigene Musik/Sound optional', highlight: false }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${feature.highlight ? 'bg-[#F4CA45]/15 border-l-4 border-[#F4CA45] p-3 rounded-md' : ''}`}
                  data-testid={`professional-feature-${index}`}
                >
                  <Check className="w-5 h-5 text-[#F4CA45] flex-shrink-0 mt-0.5" />
                  <span className={`text-base leading-relaxed ${feature.highlight ? 'text-[#FFFFFF] font-medium' : 'text-[#B8BCC4]'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Ideal For Box */}
            <div className="bg-[#F4CA45]/10 border-2 border-[#F4CA45] p-6 rounded-xl" data-testid="professional-ideal-for">
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-[#F4CA45] fill-current flex-shrink-0" />
                <p className="text-[#FFFFFF] text-sm leading-relaxed">
                  <span className="font-semibold">Ideal für:</span> Supermärkte mit professionellem Anspruch, die kontinuierliche Präsenz zeigen und maximale Reichweite erzielen möchten. Empfohlen für mittlere bis größere Märkte.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#F4CA45] text-[#2D3137] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#FDD563] hover:scale-105 transition-all shadow-lg"
            data-testid="pricing-cta-button"
          >
            Jetzt kostenloses Beratungsgespräch vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;