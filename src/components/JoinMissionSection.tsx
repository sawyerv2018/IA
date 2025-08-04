import { Heart, Users, Globe, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const JoinMissionSection = () => {
  const missionAreas = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partner with Us',
      description: 'Join organizations with synergy in our mission to train Kingdom workers.',
      action: 'Become a Partner',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Hire Our Graduates',
      description: 'Connect with skilled, character-driven apprentices ready to serve your organization.',
      action: 'Partner as Employer',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Invest in Impact',
      description: 'Fund the buying and building of businesses for a thriving Christian ecosystem.',
      action: 'Learn About Investment',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Send Local Missionaries',
      description: 'Churches can pray and send more local missionaries to the field in your city.',
      action: 'Partner as Church',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-800',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="join-mission" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Join Our Mission
          </h2>
          <h3 className="font-heading font-semibold text-xl sm:text-2xl text-secondary mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're an organization, employer, investor, or church, there's a place for you 
            in our mission to train the next generation of Kingdom workers.
          </p>
        </div>

        {/* Mission Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {missionAreas.map((area, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${area.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className={area.iconColor}>
                    {area.icon}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-center">{area.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                  size="lg"
                >
                  {area.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-white border-0 overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
                Together, We're Building Something Extraordinary
              </h3>
              
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                InteGRITy Academy isn't just about individual transformation—it's about creating a 
                network of Kingdom-minded businesses, organizations, and churches that impact 
                communities around the world.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80 text-sm sm:text-base">Graduates Placed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/80 text-sm sm:text-base">Partner Organizations</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/80 text-sm sm:text-base">Countries Impacted</div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto hover:scale-105 transform transition-all duration-200 font-semibold text-lg px-8 py-4"
                >
                  Schedule Partnership Meeting
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-200 font-semibold text-lg px-8 py-4"
                >
                  Download Partnership Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinMissionSection;