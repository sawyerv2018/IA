import { Heart, Target, Users, BookOpen, Lightbulb, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description: "Every program integrates Christian discipleship with practical learning, building character alongside competence."
    },
    {
      icon: Lightbulb,
      title: "Hands-On Learning",
      description: "Master real skills through mentorship, apprenticeships, and project-based training in your chosen field."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with believers worldwide through our network of apprenticeship guilds across continents."
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Prepare for careers that make a difference, serving God and community through your unique calling."
    }
  ];

  const faqs = [
    {
      question: "What makes InteGRITy Academy different from other trade schools?",
      answer: "We uniquely combine Christian discipleship with practical vocational training. Our apprenticeship guilds integrate spiritual formation, biblical worldview, and hands-on skill development, preparing students for both career success and kingdom impact."
    },
    {
      question: "Do I need to be a Christian to apply?",
      answer: "While we welcome students from all backgrounds, our programs are designed around Christian principles and include regular spiritual formation activities. We ask that all students respect our faith-based approach and be open to exploring Christian teachings."
    },
    {
      question: "How are programs structured across different locations?",
      answer: "Each apprenticeship guild is tailored to its local context while maintaining our core educational standards. Programs vary in duration (3-24 months) and may be residential, commuter-based, or hybrid depending on the location and track."
    },
    {
      question: "What support is available for international students?",
      answer: "We provide comprehensive support including visa assistance, housing coordination, cultural integration programs, and ongoing mentorship. Many locations offer host family programs and local church partnerships."
    },
    {
      question: "Are there scholarships or financial aid available?",
      answer: "Yes! We offer need-based scholarships, work-study programs, and partnership funding through churches and ministry organizations. We believe financial barriers shouldn't prevent called students from participating."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Singapore - Creative Arts Track",
      quote: "The combination of artistic training and spiritual growth has transformed not just my skills, but my heart. I'm now using design to serve churches across Southeast Asia.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Marcus Thompson",
      location: "Colorado, USA - Carpentry Guild",
      quote: "Learning construction skills while diving deep into discipleship prepared me to start a business that builds homes and builds up communities in Christ's name.",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Elena Rodriguez",
      location: "Costa Rica - Healthcare Track",
      quote: "The medical training combined with missions focus equipped me to serve in rural clinics where I can heal bodies and share the Gospel.",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To equip young Christians with both practical skills and spiritual depth, 
            preparing them to excel in their vocations while advancing God's kingdom 
            through their work and witness.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 animate-scale-in border-0 bg-gradient-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl text-center text-primary mb-12">
            Student Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-3xl text-center text-primary mb-12">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border-0 shadow-card">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Leadership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="font-heading font-bold text-2xl mb-4">Meet Our Leadership Team</h3>
            <p className="mb-6 text-white/90">Learn about the experienced leaders guiding our global network of apprenticeship guilds.</p>
            <Button variant="secondary" size="lg" className="hover:scale-105 transform transition-all duration-200">
              <Users className="mr-2" size={20} />
              View Leadership Profiles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;