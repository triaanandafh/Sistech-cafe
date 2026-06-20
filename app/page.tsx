import Image from "next/image";
import Link from "next/link";
import MenuPage from "./menu/page";
import AboutUs from "./aboutUs";
import PromoPage from "./promo";

export default function Home() {
  return (
    <div className="bg-pink-50 min-h-screen  items-center">
      <section className="flex-1 flex flex-col items-center justify-center text-center  py-24 px-6">
      <h1 className="text-center leading-none mb-6">
        <span className="block text-8xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">SISTECH</span>
        <span className="block text-8xl font-extrabold text-gray-900 uppercase tracking-tight">CAFE</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        Local Coffee brewed by  in Indonesia
        <span className="text-pink-500 font-semibold"> Extraordinary Women </span>{" "}
        in Indonesia. <br />Every cup tells a story of craft, community & courage.
      </p>
      <Link
        href="#menu"
        className="bg-pink-400 hover:bg-pink-500 text-white text-sm font-semibold px-8 py-4 rounded-full transition-colors"
      >
        See our Menu
      </Link>
    </section>

    <MenuPage></MenuPage>
    <AboutUs />
    <PromoPage />
    </div>
  );
}
