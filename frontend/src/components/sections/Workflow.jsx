import React from 'react';

const Workflow = () => {
  const steps = [
    {
      number: '01',
      title: 'Sie senden ein Foto vom Markteingang',
      description: 'Ein einziges Foto Ihres Supermarkt-Eingangs reicht aus - wir nutzen es als einladenden Einstieg für Ihr persönliches Reel. Dieser erste Schritt ist einmalig beim Setup und muss danach nicht wiederholt werden.'
    },
    {
      number: '02',
      title: 'Wir holen Ihren aktuellen Handzettel',
      description: 'Unsere intelligente Software greift automatisch auf die offizielle Webseite zu und lädt Ihren aktuellen Wochenhandzettel herunter. Kein manueller Upload nötig - alles geschieht vollautomatisch im Hintergrund.'
    },
    {
      number: '03',
      title: 'KI erstellt das Reel',
      description: 'Unsere fortschrittliche KI-Technologie verwandelt Ihre Angebote in ein professionelles, animiertes Reel. Produkte fliegen dynamisch durch die sich öffnende Tür, Preise werden hervorgehoben, und alles wird perfekt auf die Plattform-Anforderungen abgestimmt.'
    },
    {
      number: '04',
      title: 'Freigabe & Posting',
      description: 'Sie erhalten das fertige Video zur Freigabe - komplett mit wirkungsvoller Caption und strategisch ausgewählten Hashtags. Nach Ihrer Zustimmung können Sie es sofort auf Instagram, TikTok oder Facebook veröffentlichen.'
    }
  ];

  return (
    <section
      id="workflow"
      data-testid="workflow-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl mb-8 font-poppins"
          data-testid="workflow-headline"
        >
          Unsere vollautomatische Lösung: Der Workflow
        </h2>

        {/* Introduction */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mb-16"
          data-testid="workflow-intro"
        >
          Vergessen Sie komplizierte Produktionsprozesse und teure Agenturen. Unser innovativer, KI-gestützter Workflow macht professionelle Video-Reels zum Kinderspiel. In nur drei einfachen Schritten verwandeln wir Ihre Wochenangebote in ansprechendes Social-Media-Material.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-8" data-testid="workflow-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#3A3F47] p-8 rounded-xl border-l-4 border-[#F4CA45] hover:shadow-xl transition-shadow"
                data-testid={`workflow-step-${index}`}
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-[#F4CA45] font-bold text-6xl opacity-20 font-poppins">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="relative z-10">
                  <h3 className="text-[#FFFFFF] font-semibold text-xl lg:text-2xl mb-4 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-[#B8BCC4] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting line (except last) */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-8 left-8 w-0.5 h-8 bg-gradient-to-b from-[#F4CA45] to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Workflow Visualization */}
          <div className="relative flex justify-center items-center" data-testid="workflow-image">
            <div className="relative w-full max-w-[500px]">
              <img
                src="https://customer-assets.emergentagent.com/job_34ab7295-3f19-4de6-b6b8-aef8f45864c0/artifacts/l4humt42_3_Unsere-vollautomatische-Losung-Der-Workflow.png"
                alt="Isometrische Workflow-Visualisierung"
                className="w-full h-auto"
                loading="lazy"
              />

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#F4CA45]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#F4CA45]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;