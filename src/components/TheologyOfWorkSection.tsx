import { Hammer, Target, Mountain, Sword } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TheologyOfWorkSection = () => {
  const hebrewVsGreek = [
    {
      aspect: 'Learning Style',
      hebrew: 'Doing & Experience',
      greek: 'Thinking & Theory',
      icon: <Hammer className="h-5 w-5" />
    },
    {
      aspect: 'Evidence',
      hebrew: 'Portfolios of Work',
      greek: 'Resumes & Credentials',
      icon: <Target className="h-5 w-5" />
    },
    {
      aspect: 'Value System',
      hebrew: 'What You Do',
      greek: 'What You Know',
      icon: <Mountain className="h-5 w-5" />
    },
    {
      aspect: 'Approach',
      hebrew: 'Showing Truth',
      greek: 'Telling Truth',
      icon: <Sword className="h-5 w-5" />
    }
  ];

  return (
    <section id="theology-of-work" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 sm:mb-6">
            Theology of Work
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Embracing the Hebrew way of thinking: where doing matters more than theorizing, 
            and where work is worship unto the Lord.
          </p>
        </div>

        {/* Hebrew vs Greek Thinking */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-primary">
              Hebrew vs Greek Thinking
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {hebrewVsGreek.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-card-hover transition-all duration-300 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-3">
                    <div className="text-primary mr-2">
                      {item.icon}
                    </div>
                    <CardTitle className="text-base sm:text-lg">{item.aspect}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <Badge variant="secondary" className="mb-2 bg-green-100 text-green-800">
                      Hebrew Way
                    </Badge>
                    <p className="text-sm font-medium text-green-800">{item.hebrew}</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <Badge variant="outline" className="mb-2">
                      Greek Way
                    </Badge>
                    <p className="text-sm text-gray-600">{item.greek}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Boys Were Made for More */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero text-white border-0 overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
                  Boys Were Made for More Than Screens and Safety
                </h3>
              </div>

              <div className="prose prose-lg prose-invert max-w-none space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  When a boy stands at the edge of manhood, something awakens. His body begins to ache—not just with growth, 
                  but with hunger. A hunger to climb, to fight, to build, to matter. His soul strains for something larger than himself. 
                  He is no longer content with comfort. At this age, passivity becomes a prison.
                </p>

                <blockquote className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-white/90 my-6 sm:my-8">
                  "Hardship often prepares an ordinary man for an extraordinary destiny."
                  <footer className="text-white/70 mt-2">— C.S. Lewis</footer>
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold">He doesn't need comfort—</p>
                    <p className="text-white/90">he needs a challenge.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold">He doesn't need more digital noise—</p>
                    <p className="text-white/90">he needs a real mission.</p>
                  </div>
                </div>

                <blockquote className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-white/90 my-6 sm:my-8">
                  "God designed men to be dangerous... A man is not fully alive if he's denied a battle to fight, 
                  an adventure to live, and a beauty to rescue."
                  <footer className="text-white/70 mt-2">— John Eldredge, Wild at Heart</footer>
                </blockquote>

                <p>
                  Boys become men not by merely knowing truth, but by enduring struggle.
                </p>

                <blockquote className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-white/90 my-6 sm:my-8">
                  "A soft, easy life is not worth living... The highest form of success comes... to the man who 
                  does not shrink from danger, from hardship, or from bitter toil."
                  <footer className="text-white/70 mt-2">— Theodore Roosevelt</footer>
                </blockquote>

                <p>
                  This is why, for centuries, boys have chased storms across the sea, driven cattle across the plains, 
                  or disappeared into the woods with nothing but a compass and a knife. They're not running away from 
                  responsibility—they're running toward it.
                </p>

                <blockquote className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-white/90 my-6 sm:my-8">
                  "Be watchful, stand firm in the faith, act like men, be strong."
                  <footer className="text-white/70 mt-2">— 1 Corinthians 16:13</footer>
                </blockquote>

                <div className="bg-white/20 rounded-lg p-4 sm:p-6 my-6 sm:my-8">
                  <p className="font-semibold mb-3">In the Kingdom of God, strength is not for self-preservation but for self-giving.</p>
                  <p className="font-semibold mb-3">A man's salvation compels him to fight for the souls of others.</p>
                  <p className="font-semibold">Salvation is not a seat—it's a summons.</p>
                </div>

                <blockquote className="border-l-4 border-white/30 pl-4 sm:pl-6 italic text-white/90 text-center">
                  "Is it possible for a man to be saved if he does not work for the salvation of others?"
                  <footer className="text-white/70 mt-2">— St. John Chrysostom</footer>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TheologyOfWorkSection;