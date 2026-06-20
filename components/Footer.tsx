import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; // opsional, bisa pakai SVGs jika belum install react-icons

export default function Footer() {
  return (
     <footer className="relative bg-gradient-to-br from-pink-500 to-rose-500 text-white mt-10 rounded-t-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-5xl mx-auto px-6 py-14 text-center">
          <div className="inline-flex items-center gap-2 font-outfit font-extrabold text-2xl mb-4">
            SISTECH CAFE
          </div>
          <p className="text-white/85 max-w-md mx-auto mb-6 text-sm">
            Come find us in Jakarta, Bandung, Yogyakarta & beyond.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6 text-sm text-white/80">
            {/* <MapPin className="w-4 h-4" /> Jl. Sister Coffee No. 7, Jakarta */}
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            {[FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full bg-white/15 backdrop-blur hover:bg-white hover:text-pink-500 hover:scale-110 transition flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-white/80 text-sm flex items-center justify-center gap-1.5">
            Made with love by Tria
          </p>
        </div>
      </footer>

  );
}