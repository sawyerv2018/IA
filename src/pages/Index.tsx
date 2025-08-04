import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ApprenticeshipSection from '@/components/ApprenticeshipSection';
import BeliefsSection from '@/components/BeliefsSection';
import TheologyOfWorkSection from '@/components/TheologyOfWorkSection';
import ApplicationProcessSection from '@/components/ApplicationProcessSection';
import ApplicationRequirementsSection from '@/components/ApplicationRequirementsSection';
import ReadyToStartSection from '@/components/ReadyToStartSection';
import JoinMissionSection from '@/components/JoinMissionSection';
import StudentTestimonialsSection from '@/components/StudentTestimonialsSection';
import LeadershipTeamSection from '@/components/LeadershipTeamSection';
import FAQSection from '@/components/FAQSection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';
import DayAtIASection from '@/components/DayAtIASection';
import HighSchoolProgramSection from '@/components/HighSchoolProgramSection';
import AIChatbot from '@/components/AIChatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ApprenticeshipSection />
        <BeliefsSection />
        <TheologyOfWorkSection />
        <ApplicationProcessSection />
        <ApplicationRequirementsSection />
        <ReadyToStartSection />
        <JoinMissionSection />
        <StudentTestimonialsSection />
        <LeadershipTeamSection />
        <FAQSection />
        <DayAtIASection />
        <HighSchoolProgramSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
