import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    name: "Kopi Susu Sister",
    price: "28K",
    description: "Smooth espresso, fresh milk & palm sugar — brewed by our local roasters.",
    badge: "Signature",
    badgeColor: "text-pink-500",
    image: "/assets/kopi susu.jpg",
    stars: 5,
  },
  {
    name: "Pandan Latte",
    price: "32K",
    description: "Aromatic pandan infusion layered with silky steamed milk.",
    badge: "New",
    badgeColor: "text-pink-500",
    image: "/assets/pandan latte.jpg",
    stars: 5,
  },
  {
    name: "Cold Brew Melati",
    price: "30K",
    description: "12-hour cold brew with a whisper of jasmine. Light, bright, alive.",
    badge: "Floral",
    badgeColor: "text-purple-400",
    image: "/assets/cold brew melati.jpg",
    stars: 5,
  },
  {
    name: "Gula Aren Mocha",
    price: "34K",
    description: "Dark cocoa, espresso & Indonesian palm sugar. Cozy in a cup.",
    badge: "Loved",
    badgeColor: "text-pink-500",
    image: "/assets/gula aren.jpg",
    stars: 5,
  },
];


export default function MenuPage() {
  return (
    <div id="menu" className="bg-pink-50 min-h-screen py-20 px-6">
      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <span className="bg-pink-100 text-pink-500 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
          OUR MENU
        </span>
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          Sip the{" "}
          <span className="text-pink-500 font-extrabold">signature</span>
        </h2>
        <p className="text-gray-500 text-lg">Drinks crafted by our resident baristas.</p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item, i) => (
          <div
            key={item.name}
            className=" group bg-white rounded-3xl p-4 shadow-sm flex flex-col gap-4 hover:shadow-2xl hover:shadow-pink-200/60 transition-all duration-300 cursor-pointer" style={{ animationDelay: `${i * 100}ms` }}

          >
            {/* Image area with badge */}
            <div className={`relative rounded-2xl bg-gradient-to-br h-52 flex items-center justify-center`}>
                <Image
        src={item.image} // Mengambil path dari data array di atas
        alt={item.name}
        fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" priority={true}
      />
              <span className={`absolute top-3 right-3 bg-white text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                {item.badge}
              </span>
              {/* <CupIcon className="w-24 h-24 text-pink-500" /> */}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 px-1">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-gray-900 text-base">{item.name}</h3>
                <span className="text-pink-500 font-extrabold text-base">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              <StarRating count={item.stars} />
            </div>
          </div>
        ))}
      </div>

      {/* Back link */}
      <div className="flex justify-center mt-14">
        <Link
          href="/"
          className="text-pink-500 font-semibold hover:underline text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
