import { Clock, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DayAtIASection = () => {
  const schedule = [
    { time: '5:30–6:00 AM', activity: 'Wake-Up & Personal Preparation' },
    { time: '6:00–7:00 AM', activity: 'Morning Devotion, Prayer & Scripture Study' },
    { time: '8:00–1:00 PM', activity: 'Apprenticeship/Missionary Work' },
    { time: '2:00–6:00 PM', activity: 'Certification, On-the-Job Training, Scripture Memory' },
    { time: '7:00–8:30 PM', activity: 'Shared Dinner, Table Discussion, Clean-up' },
    { time: '8:30–9:15 PM', activity: 'Accountability, Leadership Reading' },
    { time: '9:15–10:00 PM', activity: 'Family Meeting, Worship' },
    { time: '10:00–10:30 PM', activity: 'Journal, Reflection, Thankfulness' }
  ];

  return (
    <section id="day-at-ia" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            A Look at a Day at IA
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the rhythm of discipleship, learning, and spiritual formation that shapes our apprentices into Kingdom workers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl sm:text-2xl text-center">Daily Schedule</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-0">
              {/* Daily Schedule */}
              <div className="divide-y divide-border">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center py-4 px-2 sm:px-4 hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-2 sm:mb-0 sm:w-1/3">
                      <Clock size={16} className="text-primary mr-2 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{item.time}</span>
                    </div>
                    <div className="sm:w-2/3 text-muted-foreground text-sm sm:text-base">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Weekend Activities */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-lg mb-4 text-primary">Weekend Activities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">Saturdays</h5>
                    <p className="text-muted-foreground text-sm">Outdoor adventures & community service</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">Sundays</h5>
                    <p className="text-muted-foreground text-sm">Sabbath rest, church, and personal reflection</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mt-8 pt-6 border-t border-border">
                <Button 
                  size="lg" 
                  className="bg-gradient-cta hover:scale-105 transform transition-all duration-200"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Sample PDF Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DayAtIASection;