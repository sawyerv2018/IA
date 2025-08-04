import { Users, Building, TrendingUp, Church, ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PartnerSection = () => {
  const partnerTypes = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partners',
      description: 'Organizations with synergy in our missions',
      details: 'Join us in building a network of like-minded organizations committed to developing the next generation of Kingdom workers through practical skills and spiritual formation.',
      action: 'Partner With Us',
      color: 'text-blue-600'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Employers',
      description: 'Take on apprentices from our programs',
      details: 'Hire skilled, character-driven apprentices who combine technical excellence with integrity. Our graduates bring both practical skills and biblical values to your workplace.',
      action: 'Hire Apprentices',
      color: 'text-green-600'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Investors',
      description: 'Fund businesses for a Christian ecosystem',
      details: 'Invest in the future by funding the buying and building of businesses that operate on biblical principles, creating sustainable employment for our graduates.',
      action: 'Invest With Us',
      color: 'text-purple-600'
    },
    {
      icon: <Church className="h-8 w-8" />,
      title: 'Churches',
      description: 'Pray and send local missionaries',
      details: 'Partner with us in prayer and sending missionaries to the field in your city. Help us reach young people with the gospel through practical training and mentorship.',
      action: 'Church Partnership',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're an organization, employer, investor, or church, there's a place for you 
            in our mission to develop the next generation of Kingdom workers.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {partnerTypes.map((partner, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`${partner.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {partner.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl mb-2">{partner.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {partner.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {partner.details}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {partner.action}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Call-to-Action */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-white border-0 max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/90 mb-6 text-sm sm:text-base leading-relaxed">
                Contact us today to discuss how we can work together to build God's Kingdom 
                through practical training and spiritual formation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto hover:scale-105 transform transition-all duration-200"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  admin@integrityacademy.info
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;