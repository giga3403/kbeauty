"use client";

import { Navigation, ChevronLeft } from "lucide-react";
import BottomNav from "../../../components/BottomNav";
import { useRouter } from "next/navigation";

export default function StoreDetailPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 pb-24 text-white relative">
      
      {/* Store Header Image */}
      <div className="absolute top-0 left-0 w-full h-[300px] z-0">
         <img src="/images/sample/Seoul Cityscape, South Korea Travel Inspiration.jpeg" alt="Seoul" className="w-full h-full object-cover opacity-40" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Header */}
      <div className="p-6 pb-4 flex justify-between items-center relative z-10 pt-10">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-white/10 shadow-sm hover:bg-slate-800 transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex-1 px-6 relative z-10 mt-10">
        {/* Store Title Section */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <span className="inline-block px-2 py-1 bg-violet-600 text-white text-[10px] font-bold rounded mb-2 shadow-[0_0_10px_rgba(124,58,237,0.5)]">OLIVE YOUNG</span>
            <h1 className="text-4xl font-playfair font-bold text-white mb-2 leading-tight">Myeongdong <br/>Main</h1>
            <p className="text-xs text-slate-300 font-medium">Tax Free | English Available</p>
          </div>
          
          {/* Match Score Badge */}
          <div className="w-20 h-20 rounded-full border-4 border-pink-500 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur shadow-[0_0_20px_rgba(236,72,153,0.4)] shrink-0">
             <span className="text-[10px] text-pink-400 font-bold mt-1 tracking-widest">SCORE</span>
             <span className="text-2xl font-bold text-white -mt-1">80%</span>
          </div>
        </div>

        {/* Products From My List */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/10">
          <p className="text-sm font-bold text-white mb-6 flex justify-between items-center">
            Products From My List 
            <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full border border-pink-500/30">4 / 5 Available</span>
          </p>
          
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-sm font-medium text-slate-200">☑ Toner (이지듀 EGF)</span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded">High Stock</span>
            </div>
            {/* Item 2 */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-sm font-medium text-slate-200">☑ Spot Care (노스카나)</span>
              <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded">Med Stock</span>
            </div>
            {/* Item 3 */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-500">☐ Sunscreen (SPF 50+)</span>
              <span className="text-[11px] font-bold text-rose-400 bg-rose-400/10 border border-rose-400/20 px-2 py-1 rounded">Out of Stock</span>
            </div>
          </div>
        </div>

        {/* Direct Navigation CTA */}
        <div className="mt-8">
          <button className="w-full bg-white text-slate-950 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-lg">
            <Navigation className="w-5 h-5" /> Open Navigation
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
