import React from 'react';

const Challenge = () => {
  const challenges = [
    {
      label: 'Zeitaufwand',
      text: 'Content-Erstellung kostet wertvolle Stunden, die im Tagesgeschäft fehlen'
    },
    {
      label: 'Hohe Kosten',
      text: 'Professionelle Video-Produktion durch Agenturen ist teuer und nicht nachhaltig'
    },
    {
      label: 'Konsistenz',
      text: 'Wöchentliche Posts erfordern kontinuierliche Planung und Umsetzung'
    },
    {
      label: 'Fehlende Expertise',
      text: 'Ihr Team hat andere Prioritäten und oft nicht das nötige Know-how'
    },
    {
      label: 'Technische Hürden',
      text: 'Software, Schnitt, Animation - alles erfordert Spezialwissen'
    }
  ];

  return (
    <section
      id="challenge"
      data-testid="challenge-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Main Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl text-center mb-12 lg:mb-20 font-poppins"
          data-testid="challenge-headline"
        >
          Die digitale Herausforderung für Supermärkte
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10" data-testid="challenge-content">
            {/* Section 1: Wo Ihre Kunden sind */}
            <div className="space-y-6">
              <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl font-poppins">
                Wo Ihre Kunden sind
              </h3>
              <p className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed">
                Moderne Kunden informieren sich auf Instagram und TikTok über Angebote. Doch die Erstellung von professionellem Video-Content kostet Zeit, Know-how und Ressourcen, die in Ihrem Tagesgeschäft fehlen.
              </p>
            </div>

            {/* Section 2: Die täglichen Hürden */}
            <div className="space-y-6">
              <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl font-poppins">
                Die täglichen Hürden
              </h3>
              <p className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed mb-6">
                Die Erstellung von professionellem Video-Content stellt viele Supermarkt-Betreiber vor große Herausforderungen:
              </p>

              {/* Challenge List */}
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`challenge-item-${index}`}>
                    <div className="w-2 h-2 rounded-full bg-[#F4CA45] mt-2 flex-shrink-0" />
                    <p className="text-[#B8BCC4] text-base leading-relaxed">
                      <span className="font-semibold text-[#FFFFFF]">{challenge.label}:</span> {challenge.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Smartphone Scene */}
          <div className="relative flex justify-center items-center" data-testid="challenge-image">
            <div className="relative">
              {/* Decorative arch background */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[400px] h-[500px] bg-gradient-to-b from-[#8B6F5C] to-[#6B5447] rounded-t-full opacity-40 blur-xl" />
              </div>

              {/* Podium */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-[280px] sm:w-[320px] mb-6">
                  <img
                    src="https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/izv5hzbi_MkWbsboWjnbs4GRXLZe5R.png"
                    alt="Smartphone mit Instagram und TikTok"
                    className="w-full h-auto rounded-[30px] shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Decorative podium base */}
                <div className="w-[280px] h-10 bg-gradient-to-br from-[#D4B5A8] to-[#C9A69D] rounded-full shadow-2xl" />
                
                {/* Decorative spheres */}
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#F4CA45]/30 rounded-full blur-md" />
                <div className="absolute -bottom-4 -right-6 w-8 h-8 bg-[#F4CA45]/20 rounded-full blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;