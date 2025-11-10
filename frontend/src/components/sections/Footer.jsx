import React from 'react';
import { MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1D21] border-t border-[#3A3F47]" data-testid="footer">
      <div className="container mx-auto px-6 lg:px-20 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Branding */}
          <div className="space-y-4" data-testid="footer-branding">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#F4CA45]" />
              <span className="text-[#F4CA45] font-bold text-lg font-poppins">
                AI Solution Ott GBR
              </span>
            </div>
            <p className="text-[#8A8E96] text-sm leading-relaxed">
              Automatisierte Social Media Reels für moderne Supermärkte. Ihr Partner für digitale Sichtbarkeit im Lebensmitteleinzelhandel. Gemeinsam bringen wir Ihre Wochenangebote auf Instagram und TikTok.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" data-testid="footer-links">
            <h4 className="text-[#F4CA45] font-semibold text-base font-poppins">Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('live-example')}
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm text-left transition-colors"
                data-testid="footer-link-examples"
              >
                Beispiele
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm text-left transition-colors"
                data-testid="footer-link-packages"
              >
                Pakete
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm text-left transition-colors"
                data-testid="footer-link-about"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm text-left transition-colors"
                data-testid="footer-link-contact"
              >
                Kontakt
              </button>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4" data-testid="footer-legal">
            <h4 className="text-[#F4CA45] font-semibold text-base font-poppins">Rechtliches</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#"
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm transition-colors"
                data-testid="footer-link-imprint"
              >
                Impressum
              </a>
              <a
                href="#"
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm transition-colors"
                data-testid="footer-link-privacy"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="text-[#B8BCC4] hover:text-[#F4CA45] text-sm transition-colors"
                data-testid="footer-link-terms"
              >
                AGB
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3A3F47]" data-testid="footer-bottom">
          <p className="text-[#6B7280] text-sm text-center">
            © 2024 AI Solution Ott GBR. Alle Rechte vorbehalten. Made with GAMMA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;