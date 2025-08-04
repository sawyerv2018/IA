import { CheckCircle, FileText, Users, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ApplicationProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: <FileText className="h-6 w-6" />,
      title: 'Submit Application',
      description: 'Complete our online application form with personal information, background, and ministry references.',
      details: ['Personal information form', 'Educational background', 'Work experience', 'Ministry references'],
      timeframe: '15-20 minutes'
    },
    {
      number: 2,
      icon: <MessageSquare className="h-6 w-6" />,
      title: 'Initial Interview',
      description: 'Video call with our admissions team to discuss your calling, goals, and program fit.',
      details: ['30-minute video interview', 'Discuss your calling', 'Program expectations', 'Answer questions'],
      timeframe: '30 minutes'
    },
    {
      number: 3,
      icon: <Users className="h-6 w-6" />,
      title: 'Reference Check',
      description: 'We contact your pastoral and personal references to learn more about your character and readiness.',
      details: ['Pastoral reference contact', 'Personal reference review', 'Character assessment', 'Ministry involvement'],
      timeframe: '1-2 weeks'
    },
    {
      number: 4,
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Acceptance Decision',
      description: 'Our admissions committee reviews your application and provides a decision within two weeks.',
      details: ['Committee review', 'Final decision made', 'Acceptance notification', 'Next steps provided'],
      timeframe: '2 weeks'
    },
    {
      number: 5,
      icon: <Calendar className="h-6 w-6" />,
      title: 'Enrollment & Preparation',
      description: 'Complete enrollment paperwork, housing arrangements, and pre-program preparation.',
      details: ['Enrollment confirmation', 'Housing arrangements', 'Program materials', 'Orientation schedule'],
      timeframe: '2-4 weeks'
    }
  ];

  const requirements = [
    'Age 18-30 (exceptions considered)',
    'Personal relationship with Jesus Christ',
    'Pastoral recommendation required',
    'Commitment to program duration',
    'Willingness to live in community',
    'Basic physical fitness for trade work'
  ];

  return (
    <section id="application-process" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Application Process
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your apprenticeship journey? Here's how to apply for our programs 
            and what you can expect throughout the process.
          </p>
        </div>

        {/* Application Steps */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-cta text-white">
                    Step {step.number}
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{step.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Timeframe:</span>
                      <Badge variant="outline" className="text-xs">
                        {step.timeframe}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Requirements */}
          <Card className="border-0 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-primary">
                Application Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm font-medium mb-2">
                  Financial Aid Available
                </p>
                <p className="text-blue-700 text-sm">
                  We offer need-based financial assistance and work-study opportunities. 
                  Don't let finances prevent you from applying.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-hero text-white border-0">
            <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                  Take the first step toward combining your faith with practical skills. 
                  Our admissions team is here to help guide you through the process.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full hover:scale-105 transform transition-all duration-200"
                >
                  Start Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-2">Questions about applying?</p>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/20 p-0 h-auto"
                  >
                    Contact our admissions team →
                  </Button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/70 text-xs">
                  Applications are reviewed on a rolling basis. Apply early for best consideration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;