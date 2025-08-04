import { GraduationCap, Heart, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HighSchoolProgramSection = () => {
  const qualifications = [
    'Active in a Local Church',
    'Willing to Grow in Uncomfortable Ways', 
    'Hungry to Be Like Jesus',
    'Teachable, Accountable, and Ready to Serve'
  ];

  return (
    <section id="high-school-program" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Just Graduating High School?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ages 18-21: A transformative program for career exploration and purpose solidification in your identity in Christ.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Program Description */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary">
                  The Journey Program
                </h3>
              </div>
              
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                Inspired by programs like St. Dunstan's Academy Joshua Program, our Journey Program 
                is designed for young adults seeking to discover God's calling on their lives while 
                developing practical skills and spiritual maturity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Search className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Career Exploration</h4>
                    <p className="text-muted-foreground text-sm">
                      Discover your passions and strengths through hands-on experiences across multiple trades and industries.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Identity in Christ</h4>
                    <p className="text-muted-foreground text-sm">
                      Ground your purpose and calling in biblical truth and develop a mature faith foundation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Community Formation</h4>
                    <p className="text-muted-foreground text-sm">
                      Live and learn alongside peers who share your commitment to following Christ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                >
                  <a 
                    href="https://stdunstansacademy.org/the-joshua-program/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Learn More About Similar Programs
                  </a>
                </Button>
              </div>
            </div>

            {/* Qualifications */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-center">
                    Program Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {qualifications.map((qualification, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium text-sm sm:text-base">{qualification}</span>
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Ages 18-21 • 12-Month Program
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-hero text-white border-0">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">
                  Ready to Discover Your Purpose?
                </h3>
                <p className="text-white/90 mb-6 text-sm sm:text-base">
                  Join young adults from around the world who are taking a gap year to seek God's will for their lives.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="hover:scale-105 transform transition-all duration-200"
                >
                  Apply for the Journey Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighSchoolProgramSection;