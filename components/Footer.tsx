import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; // opsional, bisa pakai SVGs jika belum install react-icons

export default function Footer() {
  return (
    <footer className="bg-cafe-pink text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Social Media Icons Simulators */}
        <div className="flex gap-6 text-2xl">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity p-1"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity p-1"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://wa.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity p-1"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm font-medium tracking-wide">
          Made with Love by <span className="font-bold">Tria</span>
        </p>
      </div>
    </footer>
  );
}