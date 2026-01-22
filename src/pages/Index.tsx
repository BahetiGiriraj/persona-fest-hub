import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ImpactNumbers from "@/components/home/ImpactNumbers";
import EventCategories from "@/components/home/EventCategories";
import ExperienceHighlights from "@/components/home/ExperienceHighlights";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSnapshot />
        <ImpactNumbers />
        <EventCategories />
        <ExperienceHighlights />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
