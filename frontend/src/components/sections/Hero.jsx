import React from 'react';
import { MessageSquare, Check } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative bg-[#2D3137] pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in-up">
            {/* Logo */}
            <div className="flex items-center gap-3" data-testid="hero-logo">
              <MessageSquare className="w-8 h-8 text-[#FFFFFF]" />
              <span className="text-[#FFFFFF] font-bold text-2xl font-poppins">
                AI SOLUTION OTT GBR
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[#F4CA45] font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight font-poppins"
              data-testid="hero-headline"
            >
              Ihre Wochenangebote. Professionell animiert. Vollautomatisch.
            </h1>

            {/* Description */}
            <p
              className="text-[#B8BCC4] text-lg lg:text-xl leading-relaxed"
              data-testid="hero-description"
            >
              Wir verwandeln Ihren Handzettel in virale Social-Media Reels - jede Woche, ohne Ihr Zutun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" data-testid="hero-cta-buttons">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#F4CA45] text-[#2D3137] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#FDD563] hover:scale-105 transition-all shadow-lg"
                data-testid="hero-primary-cta"
              >
                Jetzt kostenlos beraten lassen
              </button>
              <button
                onClick={() => scrollToSection('live-example')}
                className="bg-transparent border-2 border-[#F4CA45] text-[#F4CA45] px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#F4CA45] hover:text-[#2D3137] transition-all"
                data-testid="hero-secondary-cta"
              >
                Beispiele ansehen
              </button>
            </div>

            {/* USP Points */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8" data-testid="hero-usp-points">
              {/* USP 1 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F4CA45] mt-1.5" />
                  <div>
                    <h3 className="text-[#FFFFFF] font-semibold text-base lg:text-lg font-poppins">
                      Spezialisierung auf LEH
                    </h3>
                    <p className="text-[#B8BCC4] text-sm leading-relaxed">
                      Maßgeschneidert für den Lebensmitteleinzelhandel
                    </p>
                  </div>
                </div>
              </div>

              {/* USP 2 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F4CA45] mt-1.5" />
                  <div>
                    <h3 className="text-[#FFFFFF] font-semibold text-base lg:text-lg font-poppins">
                      Bewährt bei EDEKA
                    </h3>
                    <p className="text-[#B8BCC4] text-sm leading-relaxed">
                      Erfolgreich getestet in Pilot-Projekten
                    </p>
                  </div>
                </div>
              </div>

              {/* USP 3 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F4CA45] mt-1.5" />
                  <div>
                    <h3 className="text-[#FFFFFF] font-semibold text-base lg:text-lg font-poppins">
                      100% automatisiert
                    </h3>
                    <p className="text-[#B8BCC4] text-sm leading-relaxed">
                      Keine manuelle Arbeit erforderlich
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Smartphone Mockup */}
          <div className="relative flex justify-center items-center lg:justify-end" data-testid="hero-image">
            <div className="relative">
              {/* Gold glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-[#F4CA45]/30 via-transparent to-transparent blur-3xl scale-150" />
              
              {/* Smartphone Container */}
              <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] rounded-[30px] overflow-hidden shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_supermarket-reels/artifacts/n9q1jk02_Handy%204.png"
                  alt="EDEKA Ott Handzettel auf Smartphone"
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>

              {/* Floating particles - decorative */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#F4CA45]/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#F4CA45]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;