import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined FAQ responses
  const faqResponses: { [key: string]: string } = {
    "application": "To apply for our apprenticeship programs, visit our Apprenticeships section above, find a program that interests you, and click 'Apply Now'. You'll need to complete an application form, provide references, and may be invited for an interview.",
    "requirements": "General requirements include: age 16-28, willingness to engage with Christian discipleship, basic education completion, and commitment to the program duration. Specific requirements vary by track and location.",
    "cost": "Program costs vary by location and duration. We offer scholarships, work-study programs, and payment plans. Many programs include housing and meals. Contact our admissions team for specific pricing and financial aid options.",
    "duration": "Programs range from 9-24 months depending on the track and location. Most include both classroom instruction and hands-on apprenticeship experience with local mentors and businesses.",
    "housing": "Many programs offer residential options including dormitories, host families, or shared apartments. Some locations are commuter-based. Housing details are provided during the application process.",
    "international": "Yes! We welcome international students and provide visa assistance, cultural orientation, and ongoing support. We have programs across 25+ countries with local coordinators to help with transitions.",
    "locations": "We have apprenticeship guilds across North America, Europe, Asia Pacific, Africa, South America, and Oceania. Use our filter system above to find programs in your preferred region.",
    "tracks": "We offer tracks in: Entrepreneurship, Maintenance Technology, Agriculture (in process), and many more to come! Each combines practical skills with spiritual formation."
  };

  const quickQuestions = [
    "How do I apply?",
    "What are the requirements?",
    "What does it cost?",
    "Where are programs located?",
    "What tracks are available?"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm here to help answer questions about InteGRITy Academy. Ask me about our programs, applications, locations, costs, or anything else you'd like to know!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (lowerMessage.includes(keyword) || 
          (keyword === "application" && (lowerMessage.includes("apply") || lowerMessage.includes("admission"))) ||
          (keyword === "cost" && (lowerMessage.includes("price") || lowerMessage.includes("fee") || lowerMessage.includes("money"))) ||
          (keyword === "locations" && (lowerMessage.includes("where") || lowerMessage.includes("place"))) ||
          (keyword === "tracks" && (lowerMessage.includes("program") || lowerMessage.includes("course")))) {
        return response;
      }
    }

    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Great to meet you. I'm here to help you learn about InteGRITy Academy. What would you like to know about our apprenticeship programs?";
    }

    // Contact information
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      return "You can reach us at admin@integrityacademy.info or check our Contact section below. Our admissions team typically responds within 24 hours!";
    }

    // Default response
    return "I'd be happy to help with that! For detailed information, please scroll up to explore our About and Apprenticeships sections, or contact our team directly through the Contact form below. Is there something specific about our programs you'd like to know?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(question),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-gradient-cta hover:scale-110 transform transition-all duration-200 shadow-floating"
          size="icon"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 left-6 z-50 w-80 h-96 shadow-floating border-0 animate-scale-in">
          <CardHeader className="bg-gradient-hero text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <Bot size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg">InteGRITy Assistant</CardTitle>
                  <div className="text-white/80 text-sm">Online now</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-2' : 'mr-2'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user' ? 'bg-primary' : 'bg-muted'
                      }`}>
                        {message.sender === 'user' ? (
                          <User size={16} className="text-white" />
                        ) : (
                          <Bot size={16} className="text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <div
                      className={`rounded-lg p-3 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-2">
                      <Bot size={16} className="text-muted-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t border-border">
                <div className="text-xs text-muted-foreground mb-2 flex items-center">
                  <HelpCircle size={12} className="mr-1" />
                  Quick questions:
                </div>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  size="icon"
                  className="bg-primary hover:bg-primary-hover"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatbot;