import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopUpSection from "@/components/TopUpSection";
import PaymentSection from "@/components/PaymentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TopUpSection />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
