import { ArrowRight, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ReadyToStartSection = () => {
  const highlights = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Life-Changing Community',
      description: 'Join a brotherhood/sisterhood committed to growth, accountability, and Kingdom impact.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Industry Certifications',
      description: 'Graduate with recognized credentials that open doors to immediate employment opportunities.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Network',
      description: 'Connect with alumni and partners around the world who share your values and vision.'
    }
  ];

  return (
    <section id="ready-to-start" className="py-16 sm:py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't let another year slip by wondering what God has called you to do. 
            Take the first step toward becoming the Kingdom worker He's designed you to be.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="text-white mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3">
                  {highlight.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/5 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <CheckCircle className="h-16 w-16 text-white mx-auto mb-6" />
              
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                Your Calling Awaits
              </h3>
              
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                Join hundreds of young adults who have discovered their purpose, developed unshakeable character, 
                and gained practical skills through InteGRITy Academy. Your journey toward Kingdom impact starts now.
              </p>

              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-200 font-semibold text-lg px-8 py-4"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-200 font-semibold text-lg px-8 py-4"
                >
                  Schedule a Visit
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white/70 text-sm">
                  Questions? Call us at{' '}
                  <a href="mailto:admin@integrityacademy.info" className="text-white hover:text-white/80 underline">
                    admin@integrityacademy.info
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStartSection;