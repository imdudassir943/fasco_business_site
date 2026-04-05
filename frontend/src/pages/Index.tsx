import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/ui/BrandLogos";
import DealsSection from "@/components/dealsPage/DealsSection";
const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <DealsSection />
    </main>
  );
};

export default Index;
