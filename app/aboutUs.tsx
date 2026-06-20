export default function AboutUs(){
    return(
        <section id="about" className="relative px-6 py-20 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-pink-500 to-rose-400 rounded-[2.5rem] p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl shadow-pink-300/50">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative">
            {/* <Heart className="w-10 h-10 mb-4 fill-white/30" /> */}
            <h2 className="font-outfit font-bold text-3xl sm:text-5xl mb-4 max-w-2xl leading-tight">
              More than coffee — a movement of women in tech & taste.
            </h2>
            <p className="text-white/90 max-w-xl mb-6">
              Sistech Cafe is a cozy corner where Indonesian women baristas, engineers, and creators meet, build, and brew. Every order helps us train one more sister in coffee craft & tech skills.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium">☕ Local beans</div>
              <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium">👩‍💻 100% women-led</div>
              <div className="px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium">💖 Community first</div>
            </div>
          </div>
        </div>
      </section>
    )
}

