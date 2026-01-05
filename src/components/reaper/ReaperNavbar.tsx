import { Skull, Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

const ReaperNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50">
              <Skull className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-wide">
                BORN REAPER
              </span>
              <span className="text-[10px] text-primary -mt-1 tracking-widest">
                STORE
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
            >
              Beranda
            </a>
            <a
              href="#games"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
            >
              Games
            </a>
            <a
              href="#topup"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
            >
              Top Up
            </a>
            <a
              href="#promo"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
            >
              Promo
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[10px] flex items-center justify-center text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-primary-foreground text-sm font-medium transition-colors">
              <User className="w-4 h-4" />
              Masuk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
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
          <div className="md:hidden py-4 border-t border-primary/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Beranda
              </a>
              <a
                href="#games"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Games
              </a>
              <a
                href="#topup"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Top Up
              </a>
              <a
                href="#promo"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Promo
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-primary-foreground text-sm font-medium transition-colors">
                <User className="w-4 h-4" />
                Masuk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ReaperNavbar;
