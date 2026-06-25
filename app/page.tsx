import Link from "next/link";
import { Sparkles, ShoppingBag, Music } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-slate-950 text-white overflow-hidden pb-24">
      {/* Background Loop / Cinematic Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/40 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col pt-20 px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
            </span>
            K-Vibe Beauty Passport
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 font-playfair">
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
        <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-[24px] mb-10 space-y-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="bg-violet-500/20 p-2 rounded-full">
               <Sparkles className="w-5 h-5 text-pink-400" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Personalized AI Journey</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-pink-500/20 p-2 rounded-full">
               <ShoppingBag className="w-5 h-5 text-pink-400" />
            </div>
            <span className="text-sm font-semibold text-slate-200">Real-time Stock Match</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-2 rounded-full">
               <Music className="w-5 h-5 text-amber-300" />
            </div>
            <span className="text-sm font-semibold text-slate-200">K-POP Experiences</span>
          </div>
        </div>

        {/* Floating Image Collage (Mobile friendly size) */}
        <div className="relative h-[220px] w-full mb-8">
           <div className="absolute left-4 top-0 w-32 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg -rotate-6 z-10">
              <img src="/images/sample/karina aespa.jpeg" alt="K-pop" className="w-full h-full object-cover" />
           </div>
           <div className="absolute right-4 top-8 w-40 h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg rotate-3 z-20">
              <img src="/images/sample/Seoul Cityscape, South Korea Travel Inspiration.jpeg" alt="Seoul" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 w-full px-6">
        <Link 
          href="/match" 
          className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 py-4 text-lg font-bold text-white shadow-[0_0_30px_-10px_rgba(236,72,153,0.6)] transition-transform active:scale-95"
        >
          Start Beauty Match
        </Link>
      </div>
    </div>
  );
}
