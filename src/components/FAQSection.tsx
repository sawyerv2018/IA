import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: 'What makes InteGRITy Academy different from other trade schools?',
      answer: 'InteGRITy Academy uniquely combines practical skills training with intentional spiritual formation and character development. We follow the Hebrew way of learning—through doing and experiencing—while grounding everything in biblical principles. Our students don\'t just learn a trade; they develop into Kingdom workers who see their work as worship.'
    },
    {
      question: 'Do you offer mission trips or international experiences?',
      answer: 'Yes! We believe exposure to international cultures and missions is essential for developing well-rounded Kingdom workers. Our programs include mission trips and cross-cultural experiences that broaden perspectives, deepen faith, and provide practical ministry opportunities. These experiences help students understand God\'s heart for all nations while applying their skills in service to others.'
    },
    {
      question: 'What are the housing and living arrangements?',
      answer: 'Students live in intentional community with their cohort, following a structured daily rhythm that includes devotions, work, study, and fellowship. Housing varies by location but always emphasizes community living, accountability, and spiritual formation. Shared meals, group activities, and mentorship are integral parts of the residential experience.'
    },
    {
      question: 'How much does the program cost and what financial aid is available?',
      answer: 'Program costs vary by location and track. We are committed to making our programs accessible and offer various financial aid options including work-study programs, partial scholarships, and payment plans. Contact our admissions team for detailed pricing and to discuss financial assistance options.'
    },
    {
      question: 'What happens after graduation?',
      answer: 'Graduates receive industry-recognized certifications and are prepared for immediate employment or entrepreneurship. We maintain strong relationships with employers and provide job placement assistance. Many graduates also pursue further education while others start their own businesses. Most importantly, they\'re equipped to be Kingdom workers wherever God calls them.'
    },
    {
      question: 'Can women participate in all program tracks?',
      answer: 'Yes, we welcome both men and women in our programs. While some of our messaging speaks specifically to young men (recognizing unique challenges they face), our programs are designed to develop godly character and practical skills in all students, regardless of gender. We maintain appropriate housing and mentorship arrangements for all participants.'
    },
    {
      question: 'What if I\'m not sure which track is right for me?',
      answer: 'That\'s exactly what our Journey Program (for 18-21 year olds) is designed for! This gap year program helps you explore different trades and discover your passions while solidifying your identity in Christ. Even in our specific tracks, we provide exposure to multiple areas to help you find your calling.'
    },
    {
      question: 'Do I need any prior experience or certifications to apply?',
      answer: 'No prior experience is required! We accept students from all backgrounds who demonstrate strong character, teachability, and commitment to growing in Christ. Our programs are designed to take you from beginner to certified professional. The most important qualifications are a heart for God and willingness to work hard.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our programs, application process, and what makes InteGRITy Academy unique.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-0 shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-base sm:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact for More Questions */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="bg-muted/50 border-0 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-primary">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                We're here to help! Reach out to our admissions team and we'll be happy to answer any questions about our programs.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                Contact Admissions Team
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;