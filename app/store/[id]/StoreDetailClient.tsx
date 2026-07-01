"use client";

import { Navigation, ChevronLeft, Heart } from "lucide-react";
import BottomNav from "../../../components/BottomNav";
import { useRouter } from "next/navigation";

export default function StoreDetailClient() {
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
        <h2 className="text-lg font-bold text-white">Myeongdong Main Store</h2>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-white/10 shadow-sm hover:bg-slate-800 transition-colors">
          <Heart className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex-1 px-6 relative z-10 mt-6">
        {/* Store Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block px-2 py-1 bg-[#60735E]/20 text-[#8B9D89] text-[10px] font-bold rounded border border-[#60735E]/30 tracking-wider">OLIVE YOUNG</span>
            <span className="text-xs font-semibold text-[#8B9D89] flex items-center gap-1">★ 4.9 <span className="text-slate-400 font-normal">(120 REVIEWS)</span></span>
          </div>
          <h1 className="text-3xl font-playfair font-bold text-white mb-2">Olive Young Myeongdong</h1>
          <p className="text-xs text-slate-400 font-medium">English Available</p>
        </div>

        {/* Products From My List */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
          <p className="text-sm font-semibold text-slate-300 mb-4 border-b border-white/10 pb-4">
            Products From My List
          </p>
          
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-white/20 checked:bg-violet-500 accent-violet-500" defaultChecked />
                <span className="text-sm font-medium text-slate-200">Toner (이지듀 EGF)</span>
              </label>
              <span className="text-[11px] font-bold text-emerald-400">High Stock</span>
            </div>
            {/* Item 2 */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-white/20 checked:bg-violet-500 accent-violet-500" defaultChecked />
                <span className="text-sm font-medium text-slate-200">Spot Care (노스카나겔)</span>
              </label>
              <span className="text-[11px] font-bold text-amber-400">Medium Stock</span>
            </div>
            {/* Item 3 */}
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-slate-800 border-white/20 accent-violet-500" />
                <span className="text-sm font-medium text-slate-500">Sunscreen (SPF 50+)</span>
              </label>
              <span className="text-[11px] font-bold text-rose-400">Out of Stock</span>
            </div>
          </div>
        </div>

        {/* Direct Navigation CTA */}
        <div className="mt-8">
          <button className="w-full bg-[#60735E] text-white py-4 rounded-xl font-bold hover:bg-[#4a5a48] transition-colors flex items-center justify-center gap-2 shadow-lg text-base">
            <span className="text-lg">⬦</span> Open Navigation
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
