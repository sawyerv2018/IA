import { ArrowRight, Globe, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToApprenticeship = () => {
    const element = document.getElementById('apprenticeships');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Diverse young people engaged in various skilled trades and Christian discipleship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Inte<span className="text-secondary">GRIT</span>y Academy
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Hands on learning to build your craft, in a community to deepen your faith, and accountability to live on mission Monday through Friday
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={scrollToApprenticeship}
              className="bg-gradient-cta hover:scale-105 transform transition-all duration-200 shadow-floating text-lg px-8 py-4"
            >
              Explore Apprenticeships
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToAbout}
              className="hover:scale-105 transform transition-all duration-200 text-lg px-8 py-4"
            >
              Learn Our Mission
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
                <Globe className="text-secondary" size={32} />
              </div>
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-white/80">Locations</div>
            </div>
            
            <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
                <Award className="text-secondary" size={32} />
              </div>
              <div className="text-2xl font-bold mb-1">2</div>
              <div className="text-white/80">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full relative">
          <div className="w-1 h-8 bg-white rounded-full absolute top-0 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;