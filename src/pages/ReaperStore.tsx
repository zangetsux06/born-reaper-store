import ReaperNavbar from "@/components/reaper/ReaperNavbar";
import ReaperHero from "@/components/reaper/ReaperHero";
import GameSelector from "@/components/reaper/GameSelector";
import ReaperTopUp from "@/components/reaper/ReaperTopUp";
import PromoSection from "@/components/reaper/PromoSection";
import ReaperPaymentMethods from "@/components/reaper/ReaperPaymentMethods";
import FAQSection from "@/components/reaper/FAQSection";
import ReaperFooter from "@/components/reaper/ReaperFooter";

const ReaperStore = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <ReaperNavbar />
      <main>
        <ReaperHero />
        <GameSelector />
        <ReaperTopUp />
        <PromoSection />
        <ReaperPaymentMethods />
        <FAQSection />
      </main>
      <ReaperFooter />
    </div>
  );
};

export default ReaperStore;
