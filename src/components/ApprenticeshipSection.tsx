import { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Clock, Users, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface ApprenticeshipProgram {
  id: string;
  title: string;
  track: string;
  location: string;
  region: string;
  country: string;
  environment: 'Urban' | 'Rural' | 'Remote' | 'Online';
  duration: string;
  startDate: string;
  capacity: number;
  enrolled: number;
  mentor: {
    name: string;
    title: string;
    experience: string;
    image: string;
  };
  description: string;
  skills: string[];
  highlights: string[];
  image: string;
  featured: boolean;
}

const ApprenticeshipSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [selectedEnvironments, setSelectedEnvironments] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Program data for Integrity Academy
  const programs: ApprenticeshipProgram[] = [
    {
      id: '1',
      title: 'Maintenance Technology',
      track: 'Maintenance Technology',
      location: 'Raleigh, North Carolina',
      region: 'North America',
      country: 'United States',
      environment: 'Urban',
      duration: '12 months',
      startDate: 'September 2024',
      capacity: 20,
      enrolled: 15,
      mentor: {
        name: 'Mike Johnson',
        title: 'Master Technician & Ministry Leader',
        experience: '20+ years in maintenance technology, 10 years in discipleship training',
        image: '/api/placeholder/80/80'
      },
      description: 'Master essential maintenance and repair skills while growing in Christian character. Learn HVAC, electrical, plumbing, and general facility maintenance with biblical principles.',
      skills: ['HVAC Systems', 'Electrical Work', 'Plumbing', 'Preventive Maintenance', 'Safety Protocols'],
      highlights: ['Industry Certifications', 'Real-World Experience', 'Character Development'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: '2',
      title: 'Entrepreneurship',
      track: 'Business & Entrepreneurship',
      location: 'Buenos Aires, Argentina',
      region: 'South America',
      country: 'Argentina',
      environment: 'Urban',
      duration: '9 months',
      startDate: 'March 2025',
      capacity: 15,
      enrolled: 8,
      mentor: {
        name: 'Carlos Martinez',
        title: 'Business Coach & Kingdom Entrepreneur',
        experience: '15+ years in business development, 8 years in ministry leadership',
        image: '/api/placeholder/80/80'
      },
      description: 'Launch your own business with biblical principles and entrepreneurial excellence. Learn business planning, financial management, and market strategy while developing integrity and tenacity.',
      skills: ['Business Planning', 'Financial Management', 'Marketing Strategy', 'Leadership', 'Cross-Cultural Business'],
      highlights: ['Real Business Launch', 'Mentorship Network', 'International Experience'],
      image: '/api/placeholder/400/250',
      featured: true
    }
  ];

  const regions = ['all', ...new Set(programs.map(p => p.region))];
  const tracks = ['all', ...new Set(programs.map(p => p.track))];
  const environments = ['Urban', 'Rural', 'Remote', 'Online'];

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = searchTerm === '' || 
        program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.track.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === 'all' || program.region === selectedRegion;
      const matchesTrack = selectedTrack === 'all' || program.track === selectedTrack;
      const matchesEnvironment = selectedEnvironments.length === 0 || selectedEnvironments.includes(program.environment);

      return matchesSearch && matchesRegion && matchesTrack && matchesEnvironment;
    });
  }, [searchTerm, selectedRegion, selectedTrack, selectedEnvironments, programs]);

  const handleEnvironmentChange = (environment: string, checked: boolean) => {
    if (checked) {
      setSelectedEnvironments([...selectedEnvironments, environment]);
    } else {
      setSelectedEnvironments(selectedEnvironments.filter(env => env !== environment));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setSelectedTrack('all');
    setSelectedEnvironments([]);
  };

  return (
    <section id="apprenticeships" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Apprenticeship Guilds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since we learn more from our failures, we are a safe place to fail and learn. 
            Discover hands-on learning opportunities that combine spiritual formation with practical skills. 
            Start your journey today!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-xl shadow-card p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search by program, location, skills, or track..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            {(selectedRegion !== 'all' || selectedTrack !== 'all' || selectedEnvironments.length > 0) && (
              <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                Clear All Filters
              </Button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border animate-fade-in">
              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map(region => (
                      <SelectItem key={region} value={region}>
                        {region === 'all' ? 'All Regions' : region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Track Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Track</label>
                <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select track" />
                  </SelectTrigger>
                  <SelectContent>
                    {tracks.map(track => (
                      <SelectItem key={track} value={track}>
                        {track === 'all' ? 'All Tracks' : track}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Environment Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">Environment</label>
                <div className="space-y-2">
                  {environments.map(environment => (
                    <div key={environment} className="flex items-center space-x-2">
                      <Checkbox
                        id={environment}
                        checked={selectedEnvironments.includes(environment)}
                        onCheckedChange={(checked) => handleEnvironmentChange(environment, checked as boolean)}
                      />
                      <label htmlFor={environment} className="text-sm">
                        {environment}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((program, index) => (
            <Card 
              key={program.id} 
              className={`group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0 overflow-hidden ${
                program.featured ? 'ring-2 ring-secondary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <div className="font-semibold">{program.track}</div>
                  </div>
                </div>
                {program.featured && (
                  <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                    <Star size={12} className="mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {program.environment}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin size={14} className="mr-1" />
                  {program.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Program Details */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {program.skills.slice(0, 4).map(skill => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {program.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{program.skills.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Program Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={14} className="mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users size={14} className="mr-2" />
                    <span>{program.enrolled}/{program.capacity} enrolled</span>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold text-sm">
                        {program.mentor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{program.mentor.name}</div>
                      <div className="text-xs text-muted-foreground">{program.mentor.title}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 bg-gradient-cta hover:scale-105 transform transition-all duration-200">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-105 transform transition-all duration-200">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-muted-foreground mb-4">
              <Search size={48} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No programs found</h3>
              <p>Try adjusting your search terms or filters to find more programs.</p>
            </div>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="font-heading font-bold text-2xl mb-4">Can't Find the Right Program?</h3>
            <p className="mb-6 text-white/90">We're constantly expanding our network. Let us know what you're looking for and we'll help connect you with opportunities.</p>
            <Button variant="secondary" size="lg" className="hover:scale-105 transform transition-all duration-200">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprenticeshipSection;