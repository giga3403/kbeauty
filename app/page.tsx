import Link from "next/link";
import { Sparkles, ShoppingBag, Gift } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col h-[100dvh] bg-slate-950 text-white overflow-hidden pb-8">
      {/* Background Loop / Cinematic Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-10 px-6 overflow-hidden">
        <div className="text-center mb-6 mt-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-medium text-violet-300 backdrop-blur-md mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
            </span>
            K-Vibe Beauty Companion
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-3 font-playfair">
            Experience <br/>
            <span className="bg-gradient-to-r from-amber-300 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              K-Beauty
            </span>
          </h1>
          <p className="text-slate-300 font-medium text-sm max-w-[280px] mx-auto">
            Find the Best Korean Beauty Products for Your Skin
          </p>
        </div>

        {/* Feature List Glass Card */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-4 rounded-[20px] mb-6 space-y-3 shadow-2xl mx-auto w-full max-w-sm">
          <div className="flex items-center gap-4">
            <div className="bg-violet-500/20 p-2 rounded-full">
               <Sparkles className="w-4 h-4 text-pink-400" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Find Your Perfect AI Routine</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-pink-500/20 p-2 rounded-full">
               <ShoppingBag className="w-4 h-4 text-pink-400" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Check Nearby Store Stock</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-2 rounded-full">
               <Gift className="w-4 h-4 text-amber-300" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Unlock Exclusive Benefits</span>
          </div>
        </div>

        {/* Floating Image Collage (Mobile friendly size) */}
        <div className="relative flex-1 min-h-[120px] w-full mb-4 mt-auto">
           <div className="absolute left-1/2 -translate-x-[105%] top-0 w-28 h-36 rounded-2xl overflow-hidden border border-white/10 shadow-lg -rotate-6 z-10">
              <img src="/images/sample/vibe1.png" alt="K-beauty Vibe" className="w-full h-full object-cover" />
           </div>
           <div className="absolute left-1/2 translate-x-[5%] top-6 w-32 h-28 rounded-2xl overflow-hidden border border-white/10 shadow-lg rotate-3 z-20">
              <img src="/images/sample/vibe2.png" alt="Seoul Vibe" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 w-full px-6 mt-auto">
        <Link 
          href="/match" 
          className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 py-3.5 text-lg font-bold text-white shadow-[0_0_30px_-10px_rgba(236,72,153,0.6)] transition-transform active:scale-95"
        >
          Start Beauty Match
        </Link>
      </div>
    </div>
  );
}
