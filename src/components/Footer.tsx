import { Gamepad2, Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gaming-gradient flex items-center justify-center gaming-glow">
                <Gamepad2 className="w-6 h-6 text-foreground" />
              </div>
              <span className="font-gaming text-xl font-bold text-gradient">
                icannstore
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Platform top up diamond Mobile Legends terpercaya dengan harga termurah dan proses tercepat. Melayani ribuan customer setiap harinya.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-gaming font-semibold text-foreground mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#topup" className="text-muted-foreground hover:text-primary transition-colors">
                  Top Up Diamond
                </a>
              </li>
              <li>
                <a href="#payment" className="text-muted-foreground hover:text-primary transition-colors">
                  Metode Pembayaran
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-gaming font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@icannstore.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 icannstore. All rights reserved. Not affiliated with Moonton.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
