import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <section className="flex-1 flex flex-col items-center justify-center text-center  py-24 px-6">
      <h1 className="text-5xl font-bold text-pink-400 tracking-wide uppercase mb-3">
        SISTECH CAFE
      </h1>
      <p className="text-gray-500 text-base mb-8">
        Local Coffee brewed by Extraordinary Women in Indonesia
      </p>
      <Link
        href="#menu"
        className="bg-pink-400 hover:bg-pink-500 text-white text-sm font-semibold px-6 py-2.5 rounded transition-colors"
      >
        See our Menu
      </Link>
    </section>
    </div>
  );
}
