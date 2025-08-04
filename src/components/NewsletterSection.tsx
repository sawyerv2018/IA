import { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - in production, integrate with Mailchimp or similar
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    "Program updates and new apprenticeship announcements",
    "Success stories from graduates around the world",
    "Spiritual formation resources and devotionals",
    "Career guidance and industry insights",
    "Exclusive scholarship and funding opportunities",
    "Virtual events and webinar invitations"
  ];

  if (isSubscribed) {
    return (
      <section id="newsletter" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <Card className="border-0 shadow-floating">
              <CardContent className="p-12">
                <div className="text-success mb-6">
                  <CheckCircle size={64} className="mx-auto" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-primary mb-4">
                  Welcome to the Family!
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  You're now subscribed to InteGRITy Academy updates. 
                  Check your email for a welcome message and confirmation.
                </p>
                <Button 
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="hover:scale-105 transform transition-all duration-200"
                >
                  Subscribe Another Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <Mail className="text-secondary" size={32} />
                </div>
                <h2 className="font-heading font-bold text-4xl">
                  Stay Connected
                </h2>
              </div>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Join thousands of students, graduates, and supporters who receive our monthly updates 
                with inspiring stories, new opportunities, and practical resources for your journey.
              </p>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-secondary mb-4">You'll receive:</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-secondary mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signup Form */}
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 shadow-floating">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-2">
                      Join Our Newsletter
                    </h3>
                    <p className="text-muted-foreground">
                      Get the latest updates delivered to your inbox
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-lg"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full h-12 text-lg bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Subscribing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="mr-2" size={20} />
                          Subscribe Now
                        </div>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. Unsubscribe at any time.
                      <br />
                      We'll never share your email or send spam.
                    </p>
                  </form>

                  {/* Social Proof */}
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Join 5,000+ subscribers worldwide
                    </p>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-primary/20 rounded-full"></div>
                      ))}
                      <div className="flex items-center ml-2 text-sm text-muted-foreground">
                        +4,995 others
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;