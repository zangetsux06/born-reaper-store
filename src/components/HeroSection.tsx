import diamondHero from "@/assets/diamond-hero.png";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-gaming text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Top Up</span>{" "}
              <span className="text-gradient">Diamond</span>
              <br />
              <span className="text-foreground">Mobile Legends</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Proses cepat, harga termurah, dan terpercaya. Top up diamond Mobile Legends Bang Bang dengan mudah dan aman di icannstore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#topup" className="btn-gaming text-center">
                Top Up Sekarang
              </a>
              <a
                href="#payment"
                className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-center"
              >
                Lihat Metode Pembayaran
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="font-gaming text-3xl font-bold text-gradient">50K+</div>
                <div className="text-muted-foreground text-sm">Transaksi</div>
              </div>
              <div className="text-center">
                <div className="font-gaming text-3xl font-bold text-gradient">99%</div>
                <div className="text-muted-foreground text-sm">Sukses</div>
              </div>
              <div className="text-center">
                <div className="font-gaming text-3xl font-bold text-gradient">24/7</div>
                <div className="text-muted-foreground text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img
                src={diamondHero}
                alt="Mobile Legends Diamond"
                className="w-72 md:w-96 animate-float"
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
