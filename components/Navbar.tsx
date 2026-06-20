import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-wider text-cafe-pink uppercase">
          Sistech Cafe
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/#menu" className="hover:text-pink-500 transition-colors">Menu</Link>
          <Link href="/#about" className="hover:text-pink-500 transition-colors">About Us</Link>
          <Link href="/#promo" className="hover:text-pink-500 transition-colors">Promo</Link>
          <Link 
            href="/login" 
            className="bg-cafe-pink text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}