import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Collaboration = () => {
  const steps = [
    {
      number: '1',
      title: 'Erstgespräch (kostenfrei)',
      description: 'Wir lernen Ihren Supermarkt kennen und zeigen Ihnen konkrete Beispiele unserer Arbeit. In einem unverbindlichen 30-minütigen Gespräch beantworten wir alle Ihre Fragen und besprechen Ihre individuellen Anforderungen. Sie erhalten außerdem eine Demo unserer Reel-Produktion.'
    },
    {
      number: '2',
      title: 'Setup (einmalig, inklusive)',
      description: 'Wir tauschen alle notwendigen Informationen aus und richten Ihr persönliches System ein. Gemeinsam wählen wir das optimale Foto Ihres Markteingangs aus, stimmen die gewünschte Musik oder den Sound ab und definieren Ihre Markenfarben sowie bevorzugte Caption-Styles. Dieser Schritt dauert etwa eine Woche.'
    },
    {
      number: '3',
      title: 'Wöchentliche Routine',
      description: 'Ab jetzt läuft alles automatisch: Jeden Sonntag verwenden wir den aktuellen EDEKA-Handzettel für Ihr individuelles Reel. Sie erhalten das fertige Video zur Freigabe per E-Mail und können es sofort auf Ihren Social-Media-Kanälen veröffentlichen. Der gesamte Prozess ist nahtlos und erfordert von Ihnen nur wenige Minuten Aufwand pro Woche.'
    },
    {
      number: '4',
      title: 'Erfolg messen',
      description: 'Wir beobachten die Performance Ihrer Reels.'
    }
  ];

  return (
    <section
      id="collaboration"
      data-testid="collaboration-section"
      className="relative bg-gradient-to-b from-[#2D3137] to-[#3A3F47] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl mb-8 font-poppins"
          data-testid="collaboration-headline"
        >
          So einfach ist die Zusammenarbeit
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mb-20"
          data-testid="collaboration-description"
        >
          Von der ersten Kontaktaufnahme bis zum regelmäßigen Posting - unser Prozess ist transparent, unkompliziert und auf Ihre Bedürfnisse zugeschnitten. In nur vier Schritten sind Sie startklar für professionelle Video-Reels, die Ihre Kunden begeistern werden.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Handshake Image */}
          <div className="relative flex justify-center items-center" data-testid="collaboration-image">
            <div className="relative w-full max-w-[500px]">
              <img
                src="https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/6b0x43g7_9_So-einfach-ist-die-Zusammenarbeit.png"
                alt="Business Handshake - Zusammenarbeit"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Timeline Steps */}
          <div className="relative space-y-14" data-testid="collaboration-steps">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F4CA45] to-[#8A8E96] rounded-full hidden lg:block" />

            {steps.map((step, index) => (
              <div key={index} className="relative" data-testid={`collaboration-step-${index}`}>
                {/* Step Number Badge */}
                <div className="absolute -left-1 lg:left-0 top-0">
                  <div className="w-14 h-14 bg-[#F4CA45] rounded-full flex items-center justify-center border-4 border-[#2D3137] shadow-lg z-10">
                    <span className="text-[#2D3137] font-bold text-2xl font-poppins">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="ml-20 lg:ml-24">
                  <h3 className="text-[#FFFFFF] font-semibold text-xl lg:text-2xl mb-4 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-[#B8BCC4] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Icon Badge */}
                <div className="absolute -left-1 lg:left-0 top-16">
                  <div className="w-8 h-8 bg-[#F4CA45]/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#F4CA45]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;