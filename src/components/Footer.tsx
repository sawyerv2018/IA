import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Apprenticeships', href: '#apprenticeships' },
    { label: 'Newsletter', href: '#newsletter' },
    { label: 'Contact', href: '#contact' },
  ];

  const programTracks = [
    'Entrepreneurship',
    'Maintenance Technology',
    'Agriculture (in process)',
    'Many more to come!'
  ];

  const resources = [
    'Student Portal',
    'Academic Calendar',
    'Scholarship Info',
    'Career Services',
    'Alumni Network',
    'Blog & Resources'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Student Handbook',
    'Code of Conduct',
    'Accreditation',
    'Accessibility'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/45407ab3-06a6-4748-8404-83cdbfbf6579.png" 
                  alt="InteGRITy Academy Logo" 
                  className="h-12 w-12 mr-3"
                />
                <h3 className="font-heading font-bold text-xl sm:text-2xl">InteGRITy Academy</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm sm:text-base">
                Building the next generation of Kingdom workers through practical skills, 
                spiritual formation, and global community. Join us in advancing God's Kingdom 
                through excellence in every vocation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Instagram size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Youtube size={20} />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <Mail size={16} className="mr-3 flex-shrink-0" />
                <a href="mailto:admin@integrityacademy.info" className="hover:text-secondary transition-colors text-sm sm:text-base">
                  admin@integrityacademy.info
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm sm:text-base text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Program Tracks</h4>
            <ul className="space-y-3">
              {programTracks.map((track, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#apprenticeships')}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-left text-sm sm:text-base"
                  >
                    {track}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} InteGRITy Academy. All rights reserved.
            </div>
            
            <div className="flex items-center text-primary-foreground/80 text-sm">
              Made with
              <Heart className="mx-2 text-secondary" size={16} />
              for the next generation of Kingdom builders
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "InteGRITy Academy",
            "description": "Global Christian trade school combining discipleship, practical skills, and spiritual formation",
            "url": "https://integrityacademy.info",
            "logo": "https://integrityacademy.info/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "admin@integrityacademy.info"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Multiple Locations",
              "addressCountry": "Global"
            },
            "sameAs": [
              "https://facebook.com/integrityacademy",
              "https://instagram.com/integrityacademy",
              "https://youtube.com/integrityacademy"
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;