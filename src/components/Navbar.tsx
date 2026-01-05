import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gaming-gradient flex items-center justify-center gaming-glow">
              <Gamepad2 className="w-6 h-6 text-foreground" />
            </div>
            <span className="font-gaming text-xl font-bold text-gradient">
              icannstore
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#topup" className="text-foreground hover:text-primary transition-colors">
              Top Up
            </a>
            <a href="#payment" className="text-foreground hover:text-primary transition-colors">
              Pembayaran
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#topup" className="text-foreground hover:text-primary transition-colors">
                Top Up
              </a>
              <a href="#payment" className="text-foreground hover:text-primary transition-colors">
                Pembayaran
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
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
