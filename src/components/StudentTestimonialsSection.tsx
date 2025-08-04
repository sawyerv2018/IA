import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const StudentTestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marcus Rodriguez',
      program: 'Entrepreneurship Track',
      location: 'Buenos Aires, Argentina',
      testimonial: 'InteGRITy Academy didn\'t just teach me business skills - it transformed my heart. I learned to see my work as worship and my business as a platform for ministry. The mentorship and brotherhood I experienced will impact me for life.',
      rating: 5
    },
    {
      name: 'David Kim',
      program: 'Maintenance Technology',
      location: 'Raleigh, North Carolina',
      testimonial: 'Coming into the program, I thought I was just learning a trade. But God used this year to build my character, deepen my faith, and prepare me for lifelong service. The practical skills are incredible, but the spiritual formation is what makes this program unique.',
      rating: 5
    },
    {
      name: 'Samuel Thompson',
      program: 'Journey Program',
      location: 'Gap Year Student',
      testimonial: 'I was lost after high school, unsure of God\'s calling on my life. The Journey Program helped me discover my passions, solidify my identity in Christ, and prepare for my next steps. I can\'t imagine a better way to spend a gap year.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Student Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from graduates who have experienced the life-changing impact of InteGRITy Academy's approach to faith, work, and character formation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm sm:text-base italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Student Info */}
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.program}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <Card className="bg-gradient-hero text-white border-0 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">
                Ready to Write Your Own Story?
              </h3>
              <p className="text-white/90 mb-6 text-sm sm:text-base">
                Join hundreds of young men and women who have discovered their calling and built unshakeable character through InteGRITy Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Apply Now
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Visit Campus
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;