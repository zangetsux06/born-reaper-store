import { useState } from "react";
import { Gem, CheckCircle2 } from "lucide-react";

const diamondPackages = [
  { id: 1, diamonds: 86, bonus: 0, price: 19000 },
  { id: 2, diamonds: 172, bonus: 0, price: 38000 },
  { id: 3, diamonds: 257, bonus: 0, price: 57000 },
  { id: 4, diamonds: 344, bonus: 0, price: 76000 },
  { id: 5, diamonds: 429, bonus: 0, price: 95000 },
  { id: 6, diamonds: 514, bonus: 0, price: 114000 },
  { id: 7, diamonds: 600, bonus: 0, price: 133000 },
  { id: 8, diamonds: 706, bonus: 0, price: 152000 },
  { id: 9, diamonds: 878, bonus: 0, price: 190000 },
  { id: 10, diamonds: 1050, bonus: 0, price: 228000 },
  { id: 11, diamonds: 2010, bonus: 0, price: 456000 },
  { id: 12, diamonds: 4830, bonus: 0, price: 1140000 },
];

const TopUpSection = () => {
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="topup" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Top Up</span>{" "}
            <span className="text-foreground">Diamond</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pilih jumlah diamond yang ingin kamu beli, masukkan User ID dan Zone ID, lalu pilih metode pembayaran.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1: Input User ID */}
          <div className="card-gaming">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full gaming-gradient flex items-center justify-center font-gaming font-bold">
                1
              </div>
              <h3 className="font-gaming text-lg font-semibold">Masukkan Data Akun</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">User ID</label>
                <input
                  type="text"
                  placeholder="Masukkan User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="input-gaming"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Zone ID</label>
                <input
                  type="text"
                  placeholder="Masukkan Zone ID"
                  value={zoneId}
                  onChange={(e) => setZoneId(e.target.value)}
                  className="input-gaming"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                * User ID dan Zone ID dapat ditemukan di profil game kamu
              </p>
            </div>
          </div>

          {/* Step 2: Select Diamond Package */}
          <div className="lg:col-span-2">
            <div className="card-gaming">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full gaming-gradient flex items-center justify-center font-gaming font-bold">
                  2
                </div>
                <h3 className="font-gaming text-lg font-semibold">Pilih Jumlah Diamond</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {diamondPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative p-4 rounded-lg border transition-all duration-300 text-left ${
                      selectedPackage === pkg.id
                        ? "border-primary bg-primary/10 gaming-glow"
                        : "border-border bg-muted/50 hover:border-primary/50"
                    }`}
                  >
                    {selectedPackage === pkg.id && (
                      <CheckCircle2 className="absolute top-2 right-2 w-5 h-5 text-primary" />
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-5 h-5 text-primary" />
                      <span className="font-gaming font-bold text-foreground">
                        {pkg.diamonds}
                      </span>
                    </div>
                    <div className="text-sm text-secondary font-semibold">
                      {formatPrice(pkg.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        {selectedPackage && (
          <div className="mt-8 card-gaming gaming-glow max-w-md mx-auto">
            <h3 className="font-gaming text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">User ID</span>
                <span className="text-foreground">{userId || "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Zone ID</span>
                <span className="text-foreground">{zoneId || "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Diamond</span>
                <span className="text-foreground flex items-center gap-1">
                  <Gem className="w-4 h-4 text-primary" />
                  {diamondPackages.find((p) => p.id === selectedPackage)?.diamonds}
                </span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-gaming font-bold text-secondary">
                  {formatPrice(
                    diamondPackages.find((p) => p.id === selectedPackage)?.price || 0
                  )}
                </span>
              </div>
            </div>
            <button className="btn-gaming w-full">Lanjut ke Pembayaran</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopUpSection;
