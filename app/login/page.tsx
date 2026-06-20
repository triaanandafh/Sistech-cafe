"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Coffee, Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles, ArrowLeft } from "lucide-react";

export default function SistechLogin () {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div id="login" className="min-h-screen bg-[#fdf7f9] font-inter text-slate-800 overflow-hidden relative flex items-center justify-center px-5 py-10">
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-md h-112 rounded-full bg-pink-300/40 blur-3xl animate-[blobFloat_14s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-20 w-lg h-128 rounded-full bg-fuchsia-300/30 blur-3xl animate-[blobFloat_18s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-88 h-88 rounded-full bg-rose-200/40 blur-3xl animate-[blobFloat_22s_ease-in-out_infinite]" />
      </div>

      <style>{`
        @keyframes blobFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,-30px) scale(1.08); }
        }
        @keyframes steamUp {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          20% { opacity: .7; }
          100% { transform: translateY(-50px) scaleX(1.6); opacity: 0; }
        }
        @keyframes wiggle {
          0%,100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>

      {/* Back link */}
      <Link
        href="/"
        className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-pink-100 text-sm text-slate-700 hover:text-pink-500 hover:border-pink-300 transition shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="w-full max-w-md relative">
        {/* Header / brand */}
        <div className="text-center mb-7">
          {/* <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute inset-x-0 -top-7 flex justify-center gap-2 pointer-events-none">
              <span className="block w-1.5 h-7 rounded-full bg-pink-300/60 blur-sm" style={{ animation: "steamUp 2.4s ease-in infinite" }} />
              <span className="block w-1.5 h-7 rounded-full bg-pink-300/60 blur-sm" style={{ animation: "steamUp 2.4s ease-in infinite .6s" }} />
              <span className="block w-1.5 h-7 rounded-full bg-pink-300/60 blur-sm" style={{ animation: "steamUp 2.4s ease-in infinite 1.2s" }} />
            </div>
            <div className="w-14 h-14 rounded-full bg-white shadow-xl shadow-pink-200 flex items-center justify-center" style={{ animation: "wiggle 4s ease-in-out infinite" }}>
              <Coffee className="w-7 h-7 text-pink-500" />
            </div>
          </div> */}
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-pink-200 text-pink-600 text-[11px] font-semibold mb-3">
            <Sparkles className="w-3 h-3" /> Welcome back, sister
          </span> */}
          <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
            Sign in to <span className="text-pink-500">Sistech</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2">Your daily cup is just a click away</p>
        </div>

        {/* Card */}
        <form
          onSubmit={onSubmit}
          className="bg-white/80 backdrop-blur-xl rounded-4xl border border-pink-100 shadow-2xl shadow-pink-200/40 p-6 sm:p-8"
        >
          {/* Email */}
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 ml-1">Email</label>
          <div className="relative mb-4 group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400 group-focus-within:text-pink-500 transition" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sister@sistech.cafe"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-pink-50/60 border border-pink-100 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/40 text-sm transition placeholder:text-slate-400"
            />
          </div>

          {/* Password */}
          <label className="block text-xs font-semibold text-slate-600 mb-1.5 ml-1">Password</label>
          <div className="relative mb-2 group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400 group-focus-within:text-pink-500 transition" />
            <input
              type={showPw ? "text" : "password"}
              required
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-11 pr-11 py-3 rounded-2xl bg-pink-50/60 border border-pink-100 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-pink-200/40 text-sm transition placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition"
              aria-label="Toggle password"
            >
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="flex items-center justify-between mb-6 text-xs">
            <label className="inline-flex items-center gap-2 text-slate-600 cursor-pointer select-none">
              <input type="checkbox" className="w-4 h-4 rounded-md accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="text-pink-500 font-semibold hover:underline">Forgot password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-pink-500 text-white font-semibold shadow-lg shadow-pink-300/50 hover:bg-pink-600 hover:scale-[1.02] active:scale-95 transition"
          >
            Sign in
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5 text-[11px] text-slate-400">
            <span className="flex-1 h-px bg-pink-100" />
            or continue with
            <span className="flex-1 h-px bg-pink-100" />
          </div>

          {/* Socials */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 hover:-translate-y-0.5 transition text-sm font-medium text-slate-700 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.74 4.1-5.5 4.1-3.32 0-6-2.75-6-6.2s2.68-6.2 6-6.2c1.88 0 3.16.8 3.88 1.5l2.65-2.55C16.95 2.96 14.7 2 12 2 6.92 2 2.8 6.12 2.8 11.2S6.92 20.4 12 20.4c6.94 0 9.2-4.86 9.2-7.4 0-.5-.06-.88-.12-1.2H12z"/></svg>
              Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 hover:-translate-y-0.5 transition text-sm font-medium text-slate-700 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.78 2.27-4.12 2.37-4.18-1.29-1.88-3.3-2.14-4.02-2.17-1.7-.17-3.34 1.01-4.21 1.01-.88 0-2.21-.99-3.64-.96-1.87.03-3.6 1.09-4.56 2.76-1.94 3.37-.5 8.36 1.4 11.1.92 1.34 2.02 2.85 3.46 2.8 1.39-.06 1.92-.9 3.6-.9s2.16.9 3.63.87c1.5-.03 2.45-1.37 3.37-2.71 1.06-1.55 1.5-3.05 1.52-3.13-.03-.01-2.92-1.12-2.95-4.45zM14.3 4.05c.77-.93 1.29-2.23 1.15-3.52-1.11.04-2.46.74-3.26 1.67-.72.83-1.35 2.15-1.18 3.42 1.24.1 2.51-.63 3.29-1.57z"/></svg>
              Apple
            </button>
          </div>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm text-slate-600 mt-6">
          New to Sistech?{" "}
          <Link href="/signup" className="text-pink-500 font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

