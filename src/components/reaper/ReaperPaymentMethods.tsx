import {
  CreditCard,
  Wallet,
  Building2,
  QrCode,
  Smartphone,
} from "lucide-react";

const paymentCategories = [
  {
    icon: Wallet,
    title: "E-Wallet",
    methods: ["GoPay", "OVO", "DANA", "ShopeePay", "LinkAja"],
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Building2,
    title: "Transfer Bank",
    methods: ["BCA", "BNI", "Mandiri", "BRI", "CIMB Niaga", "BSI"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: QrCode,
    title: "QRIS",
    methods: ["Semua aplikasi QRIS"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Pulsa",
    methods: ["Telkomsel", "XL", "Indosat", "Tri", "Smartfren"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: CreditCard,
    title: "Kartu",
    methods: ["Visa", "Mastercard", "JCB"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const ReaperPaymentMethods = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Metode Pembayaran
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Berbagai pilihan pembayaran yang aman dan mudah
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {paymentCategories.map((category, index) => (
            <div
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
            >
              <div
                className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}
              >
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-white mb-3">
                {category.title}
              </h3>
              <div className="space-y-1">
                {category.methods.map((method, idx) => (
                  <p key={idx} className="text-xs text-gray-500">
                    {method}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReaperPaymentMethods;
