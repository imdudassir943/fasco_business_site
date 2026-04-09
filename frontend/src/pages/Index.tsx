import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/ui/BrandLogos";
import DealsSection from "@/components/dealsPage/DealsSection";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import PeakyBlinders from "@/components/peakyBlinders/PeakyBlinders";
import ValueBar from "@/components/peakyBlinders/ValueBar";
import Footer from "@/components/Footer";
import SocialGallery from "@/components/socialGallery/SocialGallery";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Newsletter from "@/components/NewsLetter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <DealsSection />
      <NewArrivals />
      <PeakyBlinders />
      <ValueBar />
      <SocialGallery />
      <TestimonialsCarousel />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
