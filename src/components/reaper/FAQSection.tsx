import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara menemukan User ID dan Zone ID?",
    answer: "Buka game Mobile Legends, klik Profile, User ID dan Zone ID tertera di bawah avatar Anda. Pastikan memasukkan dengan benar untuk menghindari kesalahan pengiriman.",
  },
  {
    question: "Berapa lama proses top up diamond?",
    answer: "Proses top up biasanya memakan waktu 1-5 menit setelah pembayaran dikonfirmasi. Pada jam sibuk, proses mungkin memakan waktu hingga 15 menit.",
  },
  {
    question: "Apakah transaksi di Born Reaper Store aman?",
    answer: "Ya, 100% aman! Kami adalah reseller resmi dan menggunakan sistem pembayaran terenkripsi. Semua transaksi dijamin aman dan terpercaya.",
  },
  {
    question: "Bagaimana jika diamond tidak masuk ke akun saya?",
    answer: "Jika dalam 30 menit diamond belum masuk, silakan hubungi customer service kami via WhatsApp dengan menyertakan bukti pembayaran dan ID transaksi.",
  },
  {
    question: "Apakah ada batasan jumlah top up per hari?",
    answer: "Tidak ada batasan jumlah top up. Anda bisa melakukan top up sebanyak yang diinginkan kapan saja.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran termasuk E-Wallet (GoPay, OVO, DANA, ShopeePay), Transfer Bank (BCA, BNI, Mandiri, BRI), QRIS, Pulsa, dan Kartu Kredit/Debit.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 border border-blue-800/50 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Bantuan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
