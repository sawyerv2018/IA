import { CheckCircle, FileText, Heart, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ApplicationRequirementsSection = () => {
  const requirements = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Completed Application',
      description: 'Fill out our comprehensive application form with personal information, educational background, and goals.'
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Personal Testimony',
      description: 'Share your faith journey and how Christ has transformed your life in a written testimony.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Church Recommendation',
      description: 'Letter of recommendation from your pastor or church leadership confirming your character and commitment.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Academic Records',
      description: 'High school diploma or equivalent, plus any relevant trade certifications or college coursework.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Interview Process',
      description: 'Complete our multi-stage interview process including video call and potential in-person meeting.'
    }
  ];

  return (
    <section id="application-requirements" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Application Requirements
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're looking for committed young men and women who are ready to grow in faith, 
            character, and practical skills. Here's what you'll need to apply.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {requirements.map((requirement, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {requirement.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl">{requirement.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {requirement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-0 shadow-card">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-primary">
                  Important Information
                </h3>
              </div>

              <div className="space-y-6 text-sm sm:text-base">
                <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Age Requirements</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Applicants must be between 18-25 years old at the time of program start. 
                    Special consideration may be given for exceptional circumstances.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Financial Commitment</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Program costs vary by location and track. Financial aid and work-study 
                    opportunities are available for qualified applicants. Contact us for detailed pricing.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Physical Requirements</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Most programs involve physical labor and outdoor activities. Applicants should be 
                    in good health and able to participate in manual work and adventure activities.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Timeline</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Applications are reviewed on a rolling basis. We recommend applying 3-6 months 
                    before your desired start date to ensure adequate time for processing and preparation.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                >
                  Start Your Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationRequirementsSection;