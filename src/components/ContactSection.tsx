import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Globe, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      region: 'North America',
      location: 'Denver, Colorado, USA',
      address: '123 Kingdom Way, Denver, CO 80201',
      phone: '+1 (555) 123-4567',
      email: 'northamerica@kingdombuildersacademy.org',
      hours: 'Mon-Fri: 9AM-5PM MST'
    },
    {
      region: 'Europe',
      location: 'London, United Kingdom',
      address: '456 Faith Street, London E1 6AN, UK',
      phone: '+44 20 7123 4567',
      email: 'europe@kingdombuildersacademy.org',
      hours: 'Mon-Fri: 9AM-5PM GMT'
    },
    {
      region: 'Asia Pacific',
      location: 'Singapore',
      address: '789 Grace Avenue, Singapore 018956',
      phone: '+65 6123 4567',
      email: 'asiapacific@kingdombuildersacademy.org',
      hours: 'Mon-Fri: 9AM-5PM SGT'
    },
    {
      region: 'Africa',
      location: 'Nairobi, Kenya',
      address: '321 Hope Road, Nairobi 00100, Kenya',
      phone: '+254 20 123 4567',
      email: 'africa@kingdombuildersacademy.org',
      hours: 'Mon-Fri: 8AM-4PM EAT'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Apprenticeship Application',
    'Partnership Opportunities',
    'Volunteer/Mentor Interest',
    'Media/Press Inquiry',
    'Scholarship Information',
    'Technical Support',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - in production, integrate with your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        region: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Have questions about our programs? 
            We'd love to hear from you and help you find your path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium mb-2">
                        Your Region
                      </label>
                      <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="south-america">South America</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What is this regarding?" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map(subject => (
                          <SelectItem key={subject} value={subject.toLowerCase().replace(/\s+/g, '-')}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your interests, questions, or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2" size={16} />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Regional Offices */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Globe className="mr-2" size={24} />
                  Regional Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-primary mb-2">{office.region}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <div>
                          <div>{office.location}</div>
                          <div>{office.address}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 flex-shrink-0" size={14} />
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 flex-shrink-0" size={14} />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div className="text-xs opacity-75">{office.hours}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media & Quick Links */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-3">Follow Our Journey</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:scale-110 transform transition-all duration-200">
                      <Facebook size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:scale-110 transform transition-all duration-200">
                      <Instagram size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:scale-110 transform transition-all duration-200">
                      <Youtube size={20} />
                    </Button>
                  </div>
                </div>

                {/* Quick Contact */}
                <div>
                  <h4 className="font-semibold mb-3">Quick Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">General Inquiries:</span>
                      <br />
                      <a href="mailto:info@kingdombuildersacademy.org" className="text-primary hover:underline">
                        info@kingdombuildersacademy.org
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Admissions:</span>
                      <br />
                      <a href="mailto:admissions@kingdombuildersacademy.org" className="text-primary hover:underline">
                        admissions@kingdombuildersacademy.org
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Partnerships:</span>
                      <br />
                      <a href="mailto:partnerships@kingdombuildersacademy.org" className="text-primary hover:underline">
                        partnerships@kingdombuildersacademy.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-destructive">Emergency Contact</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    For urgent matters regarding current students:
                  </p>
                  <a href="tel:+1-555-911-HELP" className="text-primary font-medium hover:underline">
                    +1 (555) 911-HELP
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;