import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'apprenticeships', label: 'Apprenticeships' },
    { id: 'partners', label: 'Partners' },
    { id: 'beliefs', label: 'Beliefs' },
    { id: 'application-process', label: 'Apply' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className={`flex items-center font-heading font-bold text-xl transition-colors ${
                isScrolled ? 'text-primary hover:text-primary/80' : 'text-white hover:text-white/80'
              }`}
            >
              <img 
                src="/lovable-uploads/45407ab3-06a6-4748-8404-83cdbfbf6579.png" 
                alt="InteGRITy Academy Logo" 
                className="h-8 w-8 mr-2"
              />
              Inte<span className="text-secondary">GRIT</span>y<br />Academy
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-200 ${
                    isScrolled
                      ? `hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-foreground'}`
                      : `hover:text-white/80 ${activeSection === item.id ? 'text-white' : 'text-white/70'}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('application-process')}
                variant="default"
                size="lg"
                className="bg-gradient-cta hover:scale-105 transform transition-all duration-200 text-lg px-6 py-3"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-foreground' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-foreground' : 'text-white'} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t border-border animate-slide-in-left">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-muted'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection('application-process')}
                    className="w-full bg-gradient-cta text-lg py-6"
                    size="lg"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-floating hover:bg-primary-hover transform hover:scale-110 transition-all duration-200 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;