import { ExternalLink, Cross, Heart, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BeliefsSection = () => {
  const coreBeliefs = [
    {
      icon: <Cross className="h-6 w-6" />,
      title: 'Scripture',
      description: 'We believe in the inspiration, infallibility, and authority of Scripture as God\'s Word.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Salvation',
      description: 'Salvation by grace alone through faith alone in Christ alone for God\'s glory alone.'
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: 'Conservative Evangelical',
      description: 'We hold to historic Christian orthodoxy and conservative evangelical principles.'
    }
  ];

  return (
    <section id="beliefs" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Our Beliefs
          </h2>
        </div>

        {/* Core Beliefs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {coreBeliefs.map((belief, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in text-center border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {belief.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{belief.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {belief.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-muted/50 border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-primary">
                  Statement of Faith
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  We are committed to biblical truth and historic Christian orthodoxy. Our statement of faith 
                  reflects our conservative evangelical convictions and serves as the foundation for all our 
                  educational programs and community life.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-8">
                <div className="bg-background rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Biblical Foundation</h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    We believe the Bible is the inspired, inerrant, and authoritative Word of God. 
                    It is our final authority for faith and practice, and shapes every aspect of our academy.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Christian Character</h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    We are committed to developing not just skilled workers, but men and women of godly character 
                    who will impact their communities and workplaces for Christ.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Kingdom Mission</h4>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Everything we do is motivated by love for Christ and a desire to see His Kingdom advanced 
                    through excellence in work and faithful witness.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                >
                  <a 
                    href="https://docs.google.com/document/d/13jH_C-cAD36usO5VzZgJHVfu3iOSarqMRrpJZ5RTwAA/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Read Our Full Statement of Faith
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;