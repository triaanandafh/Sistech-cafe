import { Sparkles, ArrowRight } from "lucide-react";

const promos = [
  {
    title: "Sisters Combo",
    subtitle: "Beli 2 Kopi Susu Sister hanya dengan 50K setiap hari Jumat.",
    color: "bg-cafe-pink", // Menggunakan warna pink kustommu
  },
  {
    title: "Morning Booster",
    subtitle: "Diskon 15% untuk semua varian Cold Brew sebelum jam 10 pagi.",
    color: "bg-rose-400",
  },
  {
    title: "First Order Treat",
    subtitle: "Khusus pengguna baru, dapatkan gratis Gula Aren Mocha.",
    color: "bg-pink-500", // Warna cokelat gelap kafe untuk variasi
  },
];

export default function PromoPage() {
    return(
        <section id="promo" className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold tracking-wider mb-3">PROMO</span>
          <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-slate-900">Treat <span className="text-pink-500">yourself</span></h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {promos.map((p, i) => (
            <div key={p.title} className={`${p.color} text-white rounded-3xl p-7 relative overflow-hidden hover:-translate-y-2 hover:rotate-1 transition shadow-xl shadow-pink-200/50 cursor-pointer`}>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/15" />
              <Sparkles className="w-6 h-6 mb-3" />
              <h3 className="font-outfit font-bold text-2xl mb-1">{p.title}</h3>
              <p className="text-white/85 text-sm">{p.subtitle}</p>
              <button className="mt-5 text-sm font-semibold inline-flex items-center gap-1 group">
                Claim <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          ))}
        </div>
      </section>
    )
 }
 
