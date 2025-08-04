import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const LeadershipTeamSection = () => {
  const leaders = [
    {
      name: 'Dr. John Anderson',
      title: 'Founder & Director',
      bio: 'Former business executive turned educator, Dr. Anderson has dedicated his life to training the next generation of Kingdom workers. With 25+ years in ministry and education.',
      expertise: ['Leadership Development', 'Business Strategy', 'Discipleship'],
      education: 'PhD in Education, MBA',
      experience: '25+ years'
    },
    {
      name: 'Sarah Mitchell',
      title: 'Director of Student Life',
      bio: 'A passionate advocate for young adults, Sarah oversees spiritual formation and community life. Her heart is to see students grow in Christ-like character.',
      expertise: ['Student Development', 'Counseling', 'Spiritual Formation'],
      education: 'MA in Counseling',
      experience: '15+ years'
    },
    {
      name: 'Rev. Marcus Williams',
      title: 'Director of Spiritual Formation',
      bio: 'A seasoned pastor and mentor, Rev. Williams leads our discipleship programs and ensures every student grows in their relationship with Christ.',
      expertise: ['Biblical Teaching', 'Mentorship', 'Cross-Cultural Ministry'],
      education: 'MDiv, ThM',
      experience: '20+ years'
    },
    {
      name: 'Dr. Emily Chen',
      title: 'Academic Director',
      bio: 'With expertise in experiential learning, Dr. Chen designs curricula that integrate faith and work. She ensures our programs meet the highest academic standards.',
      expertise: ['Curriculum Development', 'Assessment', 'Educational Innovation'],
      education: 'PhD in Education',
      experience: '18+ years'
    }
  ];

  return (
    <section id="leadership-team" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our experienced leaders bring decades of expertise in education, ministry, and practical skills training to guide your journey.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start mb-6">
                  <Avatar className="h-16 w-16 mr-4 flex-shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-grow">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm sm:text-base mb-2">
                      {leader.title}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>{leader.education}</span>
                      <span>•</span>
                      <span>{leader.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail size={14} className="mr-1" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background border-0 shadow-card">
            <CardContent className="p-6 sm:p-8 text-center">
              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-primary">
                Advisory Board
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Our leadership team is supported by an advisory board of industry experts, 
                ministry leaders, and successful entrepreneurs who provide strategic guidance 
                and ensure our programs remain relevant and effective.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">25+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Combined Ministry</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Business Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Countries Represented</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Students Mentored</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;