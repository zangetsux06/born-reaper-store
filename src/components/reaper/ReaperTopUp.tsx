import { useState, useEffect } from "react";
import {
  Diamond,
  Check,
  AlertCircle,
  Loader2,
  CheckCircle2,
  Copy,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Per-game packages (ids are strings: `<gameId>-<n>`)
const GAME_PACKAGES: Record<
  string,
  Array<{ id: string; diamonds: number; bonus: number; price: number }>
> = {
  ml: [
    { id: "ml-1", diamonds: 86, bonus: 0, price: 19000 },
    { id: "ml-2", diamonds: 172, bonus: 0, price: 38000 },
    { id: "ml-3", diamonds: 257, bonus: 0, price: 57000 },
    { id: "ml-4", diamonds: 344, bonus: 0, price: 76000 },
    { id: "ml-5", diamonds: 600, bonus: 60, price: 133000 },
  ],
  ff: [
    { id: "ff-1", diamonds: 30, bonus: 0, price: 5000 },
    { id: "ff-2", diamonds: 80, bonus: 0, price: 12000 },
    { id: "ff-3", diamonds: 170, bonus: 0, price: 25000 },
    { id: "ff-4", diamonds: 355, bonus: 0, price: 50000 },
  ],
  pubg: [
    { id: "pubg-1", diamonds: 60, bonus: 0, price: 12000 },
    { id: "pubg-2", diamonds: 300, bonus: 0, price: 58000 },
    { id: "pubg-3", diamonds: 600, bonus: 0, price: 114000 },
  ],
  genshin: [
    { id: "genshin-1", diamonds: 160, bonus: 0, price: 20000 },
    { id: "genshin-2", diamonds: 480, bonus: 0, price: 58000 },
    { id: "genshin-3", diamonds: 980, bonus: 0, price: 114000 },
  ],
  valorant: [
    { id: "valorant-1", diamonds: 100, bonus: 0, price: 20000 },
    { id: "valorant-2", diamonds: 300, bonus: 0, price: 58000 },
  ],
  codm: [
    { id: "codm-1", diamonds: 40, bonus: 0, price: 10000 },
    { id: "codm-2", diamonds: 100, bonus: 0, price: 24000 },
  ],
  hsr: [
    { id: "hsr-1", diamonds: 50, bonus: 0, price: 12000 },
    { id: "hsr-2", diamonds: 200, bonus: 0, price: 48000 },
  ],
  roblox: [
    { id: "roblox-1", diamonds: 60, bonus: 0, price: 15000 },
    { id: "roblox-2", diamonds: 200, bonus: 0, price: 48000 },
  ],
};

const paymentMethods = [
  { id: "gopay", name: "GoPay", category: "E-Wallet" },
  { id: "ovo", name: "OVO", category: "E-Wallet" },
  { id: "dana", name: "DANA", category: "E-Wallet" },
  { id: "shopeepay", name: "ShopeePay", category: "E-Wallet" },
  { id: "bca", name: "BCA", category: "Bank" },
  { id: "bni", name: "BNI", category: "Bank" },
  { id: "mandiri", name: "Mandiri", category: "Bank" },
  { id: "bri", name: "BRI", category: "Bank" },
  { id: "qris", name: "QRIS", category: "QRIS" },
];

type Step = "form" | "payment" | "processing" | "success";

const ReaperTopUp = () => {
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedGameId, setSelectedGameId] = useState<string>("ml");
  const [packages, setPackages] = useState(GAME_PACKAGES["ml"]);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    valid: boolean;
    username?: string;
  } | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const selectedPkg = packages.find((p) => p.id === selectedPackage);
  const discount = promoApplied ? 0.1 : 0; // 10% discount
  const totalPrice = selectedPkg ? selectedPkg.price * (1 - discount) : 0;

  const handleValidateUser = () => {
    if (!userId || !zoneId) return;

    setIsValidating(true);
    setValidationResult(null);

    // Simulate API call
    setTimeout(() => {
      setIsValidating(false);
      // Dummy validation - always succeeds with random username
      const dummyUsernames = [
        "ProGamer123",
        "ReaperKing",
        "MLBBMaster",
        "DiamondHunter",
        "LegendPlayer",
      ];
      const randomUsername =
        dummyUsernames[Math.floor(Math.random() * dummyUsernames.length)];
      setValidationResult({ valid: true, username: randomUsername });
    }, 1500);
  };

  const handleApplyPromo = () => {
    if (
      promoCode.toLowerCase() === "reaper10" ||
      promoCode.toLowerCase() === "newuser"
    ) {
      setPromoApplied(true);
    }
  };

  useEffect(() => {
    // initialize selected game from localStorage
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("bornreaper_selected_game");
      if (stored && GAME_PACKAGES[stored]) {
        setSelectedGameId(stored);
        setPackages(GAME_PACKAGES[stored]);
        setSelectedPackage(null);
      }

      const handler = (e: Event) => {
        // CustomEvent with detail { gameId }
        // @ts-ignore
        const detail = e.detail as { gameId: string } | undefined;
        const gameId =
          detail?.gameId ||
          window.localStorage.getItem("bornreaper_selected_game");
        if (gameId && GAME_PACKAGES[gameId]) {
          setSelectedGameId(gameId);
          setPackages(GAME_PACKAGES[gameId]);
          setSelectedPackage(null);
        }
      };

      window.addEventListener(
        "bornreaper:gameSelected",
        handler as EventListener
      );
      return () =>
        window.removeEventListener(
          "bornreaper:gameSelected",
          handler as EventListener
        );
    }
  }, []);

  const handleProceedToPayment = () => {
    if (!userId || !zoneId || !selectedPackage) return;
    setStep("payment");
    setIsCheckoutOpen(true);
  };

  const handleConfirmPayment = () => {
    if (!selectedPayment) return;
    setStep("processing");

    // Simulate payment processing
    setTimeout(() => {
      setStep("success");
    }, 3000);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => {
      setStep("form");
      setSelectedPayment(null);
    }, 300);
  };

  const transactionId = `TRX${Date.now().toString().slice(-8)}`;

  return (
    <section id="topup" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Top Up Diamond
          </h2>
          <p className="text-gray-400">
            Masukkan data akun dan pilih nominal diamond yang diinginkan
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: User ID */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Masukkan Data Akun
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      User ID
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan User ID"
                      value={userId}
                      onChange={(e) => {
                        setUserId(e.target.value);
                        setValidationResult(null);
                      }}
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Zone ID
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan Zone ID"
                      value={zoneId}
                      onChange={(e) => {
                        setZoneId(e.target.value);
                        setValidationResult(null);
                      }}
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={handleValidateUser}
                  disabled={!userId || !zoneId || isValidating}
                  className="w-full py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isValidating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Memvalidasi...
                    </>
                  ) : (
                    "Validasi Akun"
                  )}
                </button>

                {validationResult && (
                  <div
                    className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                      validationResult.valid
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-primary/10 border border-primary/30"
                    }`}
                  >
                    {validationResult.valid ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="text-green-500 font-medium">
                            Akun Tervalidasi!
                          </p>
                          <p className="text-sm text-gray-400">
                            Username: {validationResult.username}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-primary" />
                        <p className="text-primary">Akun tidak ditemukan</p>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Step 2: Diamond Package */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Pilih Nominal
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`relative p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                        selectedPackage === pkg.id
                          ? "bg-primary/20 border-primary shadow-lg shadow-primary/20"
                          : "bg-black/20 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {pkg.bonus > 0 && (
                        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-yellow-500 rounded-full text-[10px] font-bold text-black">
                          +{pkg.bonus}
                        </div>
                      )}
                      <div className="flex items-center gap-1 mb-2">
                        <Diamond className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-bold">
                          {pkg.diamonds}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {formatPrice(pkg.price)}
                      </div>

                      {selectedPackage === pkg.id && (
                        <div className="absolute top-2 right-2">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Kode Promo (Opsional)
                  </h3>
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Masukkan kode promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="flex-1 px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!promoCode || promoApplied}
                    className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-xl text-primary-foreground font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {promoApplied ? "Diterapkan" : "Terapkan"}
                  </button>
                </div>

                {promoApplied && (
                  <div className="mt-3 p-3 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 text-sm">
                      Diskon 10% berhasil diterapkan!
                    </span>
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-3">
                  Coba: REAPER10 atau NEWUSER untuk diskon 10%
                </p>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Ringkasan Pesanan
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">User ID</span>
                    <span className="text-white">{userId || "-"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Zone ID</span>
                    <span className="text-white">{zoneId || "-"}</span>
                  </div>
                  {validationResult?.username && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Username</span>
                      <span className="text-green-500">
                        {validationResult.username}
                      </span>
                    </div>
                  )}
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Item</span>
                    <span className="text-white">
                      {selectedPkg ? (
                        <span className="flex items-center gap-1">
                          <Diamond className="w-3 h-3 text-blue-400" />
                          {selectedPkg.diamonds}
                          {selectedPkg.bonus > 0 && (
                            <span className="text-yellow-500">
                              +{selectedPkg.bonus}
                            </span>
                          )}
                        </span>
                      ) : (
                        "-"
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Harga</span>
                    <span className="text-white">
                      {selectedPkg ? formatPrice(selectedPkg.price) : "-"}
                    </span>
                  </div>
                  {promoApplied && selectedPkg && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Diskon (10%)</span>
                      <span className="text-green-500">
                        -{formatPrice(selectedPkg.price * 0.1)}
                      </span>
                    </div>
                  )}
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-xl font-bold text-primary">
                      {selectedPkg ? formatPrice(totalPrice) : "-"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleProceedToPayment}
                  disabled={!userId || !zoneId || !selectedPackage}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary/60 rounded-xl text-primary-foreground font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                >
                  Lanjutkan ke Pembayaran
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Dengan melanjutkan, Anda menyetujui syarat & ketentuan kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="bg-[#0f0f15] border-white/10 text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {step === "payment" && "Pilih Metode Pembayaran"}
              {step === "processing" && "Memproses Pembayaran"}
              {step === "success" && "Pembayaran Berhasil!"}
            </DialogTitle>
          </DialogHeader>

          {step === "payment" && (
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Total Pembayaran</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Diamond className="w-4 h-4 text-blue-400" />
                  <span>
                    {selectedPkg?.diamonds} Diamond
                    {selectedPkg?.bonus ? ` +${selectedPkg.bonus} Bonus` : ""}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {["E-Wallet", "Bank", "QRIS"].map((category) => (
                  <div key={category}>
                    <p className="text-xs text-gray-500 uppercase mb-2">
                      {category}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {paymentMethods
                        .filter((m) => m.category === category)
                        .map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={`p-3 rounded-xl border transition-all ${
                              selectedPayment === method.id
                                ? "bg-primary/20 border-primary"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                          >
                            <span className="text-white font-medium text-sm">
                              {method.name}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleConfirmPayment}
                disabled={!selectedPayment}
                className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary/60 rounded-xl text-primary-foreground font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Bayar Sekarang
              </button>
            </div>
          )}

          {step === "processing" && (
            <div className="py-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
              <p className="text-lg font-medium text-white mb-2">
                Memproses Pembayaran...
              </p>
              <p className="text-gray-400 text-sm">
                Mohon tunggu, jangan tutup halaman ini
              </p>
            </div>
          )}

          {step === "success" && (
            <div className="py-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <p className="text-lg font-medium text-white mb-2">
                Transaksi Berhasil!
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Diamond akan masuk ke akun Anda dalam 1-5 menit
              </p>

              <div className="p-4 bg-white/5 rounded-xl text-left space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">ID Transaksi</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono">
                      {transactionId}
                    </span>
                    <button className="text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">User ID</span>
                  <span className="text-white">
                    {userId} ({zoneId})
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Item</span>
                  <span className="text-white">
                    {selectedPkg?.diamonds} Diamond
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total</span>
                  <span className="text-green-500 font-bold">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCloseCheckout}
                className="w-full py-3 bg-white/10 hover:bg-white/15 rounded-xl text-white font-medium transition-colors"
              >
                Kembali ke Beranda
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ReaperTopUp;
