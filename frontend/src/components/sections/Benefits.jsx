import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      image: 'https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/j58hdi10_Uhr.png',
      title: 'Zeitersparnis',
      description: 'Kein eigener Aufwand nötig - wir übernehmen die komplette Produktion. Von der Datenerfassung bis zum fertigen Reel läuft alles automatisch ab. Ihr Team kann sich auf das konzentrieren, was wirklich zählt: den Kundenservice vor Ort.'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/uys0q6jb_Unbenannt-2.jpg',
      title: 'Professionalität',
      description: 'KI-gestützte, hochwertige Produktion jede Woche - auf dem Niveau großer Handelsketten. Professionelle Animationen, optimale Timings und ansprechende Übergänge heben Ihre Inhalte von der Masse ab.'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/lwbj8qmf_Shop.avif',
      title: 'Moderne Präsenz',
      description: 'Zeigen Sie, dass Ihr Supermarkt innovativ und zukunftsorientiert ist. Video-Content signalisiert Modernität und spricht besonders jüngere Zielgruppen an, die digital-affin sind und aktiv nach Inspiration suchen.'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/akdkh68w_tSxjzdICkJYYORSaHo_zp.png',
      title: 'Reichweite',
      description: 'Erreichen Sie jüngere, digitale Zielgruppen effektiv dort, wo sie täglich unterwegs sind. Nutzen Sie den Algorithmus-Boost von Instagram und TikTok, um Ihre Sichtbarkeit exponentiell zu steigern und neue Kundengruppen zu erschließen.'
    }
  ];

  return (
    <section
      id="benefits"
      data-testid="benefits-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl text-center mb-8 font-poppins"
          data-testid="benefits-headline"
        >
          Ihre Vorteile auf einen Blick
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-20"
          data-testid="benefits-description"
        >
          Mit AI Solution Ott positionieren Sie Ihren Supermarkt als modernen, kundenorientierten Anbieter. Unsere automatisierte Lösung bringt Ihnen messbare Vorteile - ohne zusätzlichen Arbeitsaufwand für Ihr Team. Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir Ihre digitale Präsenz stärken.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" data-testid="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#3A3F47] p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all"
              data-testid={`benefit-card-${index}`}
            >
              {/* Circular Image Container */}
              <div className="flex justify-center mb-8">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-[#4A5057] shadow-inner">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#FFFFFF] font-semibold text-2xl lg:text-3xl text-center mb-5 font-poppins">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#B8BCC4] text-base leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;