import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#2D3137]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="container mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          data-testid="logo-button"
        >
          <MessageSquare className="w-8 h-8 text-[#F4CA45]" />
          <span className="text-[#F4CA45] font-bold text-xl lg:text-2xl font-poppins">
            AI Solution Ott
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('workflow')}
            className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base transition-colors"
            data-testid="nav-workflow"
          >
            Workflow
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base transition-colors"
            data-testid="nav-pricing"
          >
            Pakete
          </button>
          <button
            onClick={() => scrollToSection('live-example')}
            className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base transition-colors"
            data-testid="nav-examples"
          >
            Beispiele
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base transition-colors"
            data-testid="nav-contact"
          >
            Kontakt
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#F4CA45] text-[#2D3137] px-7 py-3 rounded-lg font-semibold text-sm hover:bg-[#FDD563] hover:scale-105 transition-all"
            data-testid="nav-cta-button"
          >
            Jetzt starten
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          data-testid="mobile-menu-button"
        >
          <span className={`w-full h-0.5 bg-[#F4CA45] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-[#F4CA45] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-[#F4CA45] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-[#2D3137] border-t border-[#3A3F47] shadow-xl"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col p-6 gap-4">
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base text-left transition-colors"
              data-testid="mobile-nav-workflow"
            >
              Workflow
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base text-left transition-colors"
              data-testid="mobile-nav-pricing"
            >
              Pakete
            </button>
            <button
              onClick={() => scrollToSection('live-example')}
              className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base text-left transition-colors"
              data-testid="mobile-nav-examples"
            >
              Beispiele
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#B8BCC4] hover:text-[#F4CA45] font-medium text-base text-left transition-colors"
              data-testid="mobile-nav-contact"
            >
              Kontakt
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#F4CA45] text-[#2D3137] px-7 py-3 rounded-lg font-semibold text-sm hover:bg-[#FDD563] transition-colors mt-2"
              data-testid="mobile-nav-cta-button"
            >
              Jetzt starten
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;