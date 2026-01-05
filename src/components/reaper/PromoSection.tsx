import { Gift, Clock, Percent, Copy, Check } from "lucide-react";
import { useState } from "react";

const promos = [
  {
    id: 1,
    code: "REAPER10",
    title: "Diskon 10% Semua Game",
    description: "Berlaku untuk semua pembelian diamond",
    discount: "10%",
    validUntil: "31 Januari 2026",
    color: "from-primary to-secondary",
  },
  {
    id: 2,
    code: "NEWUSER",
    title: "Welcome Bonus",
    description: "Khusus pengguna baru Born Reaper Store",
    discount: "10%",
    validUntil: "Selamanya",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    code: "MLBB2026",
    title: "Promo Mobile Legends",
    description: "Khusus top up Mobile Legends",
    discount: "15%",
    validUntil: "15 Januari 2026",
    color: "from-blue-600 to-cyan-600",
  },
];

const PromoSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [usedCode, setUsedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleUseCode = (code: string) => {
    // set in localStorage for TopUp modal to read
    if (typeof window !== "undefined") {
      localStorage.setItem("bornreaper_selected_promo", code);
    }
    setUsedCode(code);
    setTimeout(() => setUsedCode(null), 2000);
  };

  return (
    <section id="promo" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-800/50 rounded-full mb-4">
            <Gift className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Promo Spesial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Promo & Diskon
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Dapatkan harga terbaik dengan kode promo eksklusif kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Gradient Banner */}
              <div
                className={`h-24 bg-gradient-to-r ${promo.color} flex items-center justify-center`}
              >
                <div className="text-center">
                  <Percent className="w-8 h-8 text-white/80 mx-auto mb-1" />
                  <span className="text-3xl font-bold text-white">
                    {promo.discount}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {promo.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {promo.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Clock className="w-3 h-3" />
                  <span>Berlaku sampai {promo.validUntil}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 px-4 py-2 bg-black/30 border border-dashed border-white/20 rounded-lg">
                    <span className="font-mono text-white tracking-wider">
                      {promo.code}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(promo.code)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    title="Salin kode"
                  >
                    {copiedCode === promo.code ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <button
                    onClick={() => handleUseCode(promo.code)}
                    className="ml-2 px-3 py-2 rounded-lg bg-primary text-black font-semibold"
                    title="Gunakan kode ini"
                  >
                    {usedCode === promo.code ? "Digunakan" : "Gunakan"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
