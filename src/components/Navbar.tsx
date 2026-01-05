import { Gamepad2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use current origin in development, fallback to production domain
  const getBase = () => {
    if (typeof window !== "undefined") return window.location.origin;
    return process.env.NEXT_PUBLIC_BASE_URL || "https://bornreaper.store";
  };
  const BASE = getBase();

  // create dummy transaction and save to localStorage
  useEffect(() => {
    const handlePaymentClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest ? target.closest("a") : null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.includes("#payment")) {
        e.preventDefault();
        if (typeof window === "undefined") return;
        const tx = {
          id: `TX-${Date.now()}`,
          amount: 10000,
          status: "pending",
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem("bornreaper_dummy_tx", JSON.stringify(tx));
        // simulate processing
        setTimeout(() => {
          const completed = {
            ...tx,
            status: "completed",
            completedAt: new Date().toISOString(),
          };
          localStorage.setItem(
            "bornreaper_dummy_tx",
            JSON.stringify(completed)
          );
        }, 1500);
        // navigate to fragment after creating tx
        window.location.href = `${BASE}#payment`;
      }
    };

    document.addEventListener("click", handlePaymentClick);
    return () => document.removeEventListener("click", handlePaymentClick);
  }, [BASE]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gaming-gradient flex items-center justify-center gaming-glow">
              <Gamepad2 className="w-6 h-6 text-foreground" />
            </div>
            <a
              href={BASE}
              className="font-gaming text-xl font-bold text-gradient"
            >
              BORN REAPER
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href={`${BASE}#home`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href={`${BASE}#topup`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Top Up
            </a>
            <a
              href={`${BASE}#promo`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Promo
            </a>
            <a
              href={`${BASE}#faq`}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href={`${BASE}#payment`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pembayaran
            </a>
            <a
              href={`${BASE}#contact`}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href={`${BASE}#home`}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href={`${BASE}#topup`}
                className="text-foreground hover:text-primary transition-colors"
              >
                Top Up
              </a>
              <a
                href={`${BASE}#promo`}
                className="text-foreground hover:text-primary transition-colors"
              >
                Promo
              </a>
              <a
                href={`${BASE}#faq`}
                className="text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href={`${BASE}#payment`}
                className="text-foreground hover:text-primary transition-colors"
              >
                Pembayaran
              </a>
              <a
                href={`${BASE}#contact`}
                className="text-foreground hover:text-primary transition-colors"
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
