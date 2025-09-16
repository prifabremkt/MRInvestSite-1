import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InsightsSection from "@/components/InsightsSection";
import EbookSection from "@/components/EbookSection";
import CredibilitySection from "@/components/CredibilitySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ProjectsSection />
      <HowItWorksSection />
      <InsightsSection />
      <EbookSection />
      <CredibilitySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}