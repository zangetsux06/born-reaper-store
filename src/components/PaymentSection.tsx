import { CreditCard, Smartphone, Building2, Wallet } from "lucide-react";

const paymentMethods = [
  {
    category: "E-Wallet",
    icon: Wallet,
    methods: ["GoPay", "OVO", "DANA", "ShopeePay", "LinkAja"],
  },
  {
    category: "Transfer Bank",
    icon: Building2,
    methods: ["BCA", "BNI", "BRI", "Mandiri", "CIMB Niaga"],
  },
  {
    category: "Pulsa",
    icon: Smartphone,
    methods: ["Telkomsel", "XL", "Indosat", "Tri", "Smartfren"],
  },
  {
    category: "Kartu Kredit",
    icon: CreditCard,
    methods: ["Visa", "Mastercard"],
  },
];

const PaymentSection = () => {
  return (
    <section id="payment" className="py-16 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Metode</span>{" "}
            <span className="text-gradient">Pembayaran</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tersedia berbagai metode pembayaran untuk kemudahan transaksi kamu
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((payment) => (
            <div key={payment.category} className="card-gaming">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <payment.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-gaming font-semibold text-foreground">
                  {payment.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {payment.methods.map((method) => (
                  <li
                    key={method}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="font-gaming text-2xl font-bold text-primary mb-2">⚡</div>
            <div className="font-semibold text-foreground">Proses Instan</div>
            <div className="text-sm text-muted-foreground">1-5 Menit</div>
          </div>
          <div className="p-6">
            <div className="font-gaming text-2xl font-bold text-primary mb-2">🔒</div>
            <div className="font-semibold text-foreground">100% Aman</div>
            <div className="text-sm text-muted-foreground">Transaksi Terenkripsi</div>
          </div>
          <div className="p-6">
            <div className="font-gaming text-2xl font-bold text-primary mb-2">💰</div>
            <div className="font-semibold text-foreground">Harga Terbaik</div>
            <div className="text-sm text-muted-foreground">Garansi Termurah</div>
          </div>
          <div className="p-6">
            <div className="font-gaming text-2xl font-bold text-primary mb-2">🎯</div>
            <div className="font-semibold text-foreground">Terpercaya</div>
            <div className="text-sm text-muted-foreground">Ribuan Customer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
