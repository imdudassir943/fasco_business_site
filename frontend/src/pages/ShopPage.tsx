import ShopNavbar from "@/components/ShopPage/ShopNavbar";
import { ProductListing } from "@/components/ShopPage";
import PeakyBlinders from "@/components/peakyBlinders/PeakyBlinders"
import ValueBar from "@/components/peakyBlinders/ValueBar"
import SocialGallery from "@/components/socialGallery/SocialGallery"
import NewsLetter  from "@/components/NewsLetter"
import Footer from "@/components/Footer"

const ShopPage = () => {
    return (
        <main className="min-h-screen bg-[#FFFFFF] pb-20">
            <ShopNavbar />
            <div className="pt-8">
                <ProductListing />
                <PeakyBlinders />
                <ValueBar />
                <SocialGallery />
                <NewsLetter />
                <Footer />
            </div>

        </main>
    );
};

export default ShopPage;