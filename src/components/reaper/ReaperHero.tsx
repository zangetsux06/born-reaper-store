import { Zap, Shield, Clock, Award } from "lucide-react";

const ReaperHero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Background watermark logo - use provided logo if available */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/born-reaper-logo.jpg"
            alt="Born Reaper"
            className="max-w-[48rem] opacity-10 filter blur-sm grayscale"
          />
        </div>
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Platform Top Up Terpercaya #1
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Top Up Game
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Tercepat & Termurah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Nikmati pengalaman top up game favorit kamu dengan proses instan,
            harga bersaing, dan layanan pelanggan 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#topup"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary/60 rounded-xl text-primary-foreground font-semibold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
            >
              Mulai Top Up Sekarang
            </a>
            <a
              href="#games"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-semibold transition-all duration-300"
            >
              Lihat Semua Game
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Zap, value: "500K+", label: "Transaksi Sukses" },
              { icon: Clock, value: "1-3 Min", label: "Proses Cepat" },
              { icon: Shield, value: "100%", label: "Aman & Legal" },
              { icon: Award, value: "24/7", label: "Support Online" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReaperHero;
