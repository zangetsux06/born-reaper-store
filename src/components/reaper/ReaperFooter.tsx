import { Skull, Mail, Phone, MapPin, MessageCircle, Instagram, Youtube, Send } from "lucide-react";

const ReaperFooter = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050508]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center">
                <Skull className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block">BORN REAPER</span>
                <span className="text-[10px] text-red-500 tracking-widest">STORE</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Platform top up game terpercaya dengan harga terbaik dan proses tercepat.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Send className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {["Beranda", "Games", "Top Up", "Promo", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div>
            <h4 className="text-white font-semibold mb-4">Game Populer</h4>
            <ul className="space-y-2">
              {["Mobile Legends", "Free Fire", "PUBG Mobile", "Genshin Impact", "Valorant"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-500 text-sm">support@bornreaper.store</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-500 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
                <span className="text-gray-500 text-sm">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Born Reaper Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReaperFooter;
