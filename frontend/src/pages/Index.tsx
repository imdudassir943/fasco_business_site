import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/ui/BrandLogos";
import DealsSection from "@/components/dealsPage/DealsSection";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import PeakyBlinders from "@/components/peakyBlinders/PeakyBlinders";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <DealsSection />
      <NewArrivals />
      <PeakyBlinders />
      <Footer />
    </main>
  );
};

export default Index;
