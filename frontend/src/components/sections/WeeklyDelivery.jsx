import React from 'react';
import { Store, Wrench, FileText } from 'lucide-react';

const WeeklyDelivery = () => {
  const components = [
    {
      icon: <Store className="w-10 h-10 text-[#F4CA45]" />,
      title: 'Startframe',
      description: 'Ihr Supermarkt-Eingang als einladender Einstieg - persönlich, wiedererkennbar und authentisch. Kunden sehen sofort, dass es um ihren lokalen Lieblingssupermarkt geht.'
    },
    {
      icon: <Wrench className="w-10 h-10 text-[#F4CA45]" />,
      title: 'Animierte Produkte',
      description: 'Die Produkte fliegen dynamisch durch die sich öffnende Tür ins Bild. Angebote werden mit Preisen und Rabatten hervorgehoben - professionell animiert und perfekt getimed für maximale Aufmerksamkeit.'
    },
    {
      icon: <FileText className="w-10 h-10 text-[#F4CA45]" />,
      title: 'Endframe',
      description: 'Ihr aktueller Handzettel der Woche wird perfekt präsentiert - als Abschluss und Call-to-Action. Hier können Zuschauer alle Details auf einen Blick erfassen.'
    }
  ];

  const additionalItems = [
    'Eine auf den Lebensmittelhandel maßgeschneiderte Caption für Ihre Social Media Post',
    'Strategisch ausgewählte Hashtags für maximale Reichweite',
    'Optimale Video-Formate für Instagram Reels und TikTok'
  ];

  return (
    <section
      id="weekly-delivery"
      data-testid="weekly-delivery-section"
      className="relative bg-[#2D3137] py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Headline */}
        <h2
          className="text-[#F4CA45] font-bold text-3xl lg:text-4xl xl:text-5xl text-center mb-8 font-poppins"
          data-testid="weekly-delivery-headline"
        >
          Was Sie jede Woche erhalten
        </h2>

        {/* Description */}
        <p
          className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-16"
          data-testid="weekly-delivery-description"
        >
          Jedes Reel besteht aus drei sorgfältig gestalteten Komponenten, die zusammen eine perfekte Video-Story für Ihre Wochenangebote ergeben. Die Kombination aus Wiedererkennung und dynamischer Animation macht Ihre Inhalte unverwechselbar und einprägsam.
        </p>

        {/* 3 Reel Examples - Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-20" data-testid="reel-examples">
          <div className="bg-[#3A3F47] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <img
              src="https://customer-assets.emergentagent.com/job_34ab7295-3f19-4de6-b6b8-aef8f45864c0/artifacts/inv9e6dp_4_Was-Sie-jede-Woche-erhalten.png"
              alt="Reel Beispiel - Startframe, Produkte, Endframe"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3 Component Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20" data-testid="component-cards">
          {components.map((component, index) => (
            <div
              key={index}
              className="text-center space-y-6"
              data-testid={`component-card-${index}`}
            >
              {/* Icon Container */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-[#3A3F47] rounded-full flex items-center justify-center">
                  {component.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#FFFFFF] font-semibold text-xl lg:text-2xl font-poppins">
                {component.title}
              </h3>

              {/* Description */}
              <p className="text-[#B8BCC4] text-base leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8" data-testid="additional-services">
          <h3 className="text-[#F4CA45] font-semibold text-2xl lg:text-3xl font-poppins">
            Zusätzlich erhalten Sie:
          </h3>

          <div className="space-y-6">
            {additionalItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3" data-testid={`additional-item-${index}`}>
                <div className="w-2 h-2 rounded-full bg-[#F4CA45] mt-2 flex-shrink-0" />
                <p className="text-[#B8BCC4] text-base lg:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyDelivery;