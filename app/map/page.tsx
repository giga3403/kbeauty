"use client";

import { useState } from "react";
import { Search, Navigation } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("Olive Young");
  const filters = ["Olive Young", "Beauty Pharmacy", "Personal Color", "Idol Makeup", "Skin Clinic"];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Top Bar / Search */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-slate-950 to-transparent pt-10">
        <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl px-5 py-4 flex justify-between items-center border border-white/20">
          <span className="font-playfair text-white font-bold text-lg">Beauty Map</span>
          <Search className="w-5 h-5 text-slate-300" />
        </div>
      </div>

      {/* Mock Map View - Dark Mode */}
      <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Map Background Pattern (Dots) */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#475569 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        {/* Mock Pins */}
        <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] relative cursor-pointer z-10 border-2 border-white">
            <span className="text-lg font-bold">O</span>
          </div>
          <span className="mt-2 bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-lg text-white border border-white/10">Olive Young</span>
        </div>

        <div className="absolute top-1/2 right-1/4 flex flex-col items-center">
          <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg relative cursor-pointer z-10 border-2 border-white/20">
            <span className="text-sm font-bold">P</span>
          </div>
          <span className="mt-2 bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-lg text-slate-300 border border-white/10">Pharmacy</span>
        </div>
        
        {/* User Location */}
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.6)] border-2 border-white">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-[90px] left-0 w-full z-20 px-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-lg border ${
                activeFilter === f 
                  ? 'bg-white text-slate-950 border-white' 
                  : 'bg-slate-900/80 backdrop-blur-sm text-slate-300 border-white/10 hover:bg-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Selected Store Card */}
        <Link href="/store/olive-young-myeongdong" className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 flex justify-between items-center shadow-2xl border border-white/10 block group">
          <div>
            <div className="flex gap-2 mb-1">
               <span className="px-2 py-0.5 bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-bold rounded">OLIVE YOUNG</span>
            </div>
            <h3 className="font-playfair font-semibold text-white text-lg mb-1">Myeongdong Main</h3>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1 text-pink-400"><Navigation className="w-3 h-3" /> 2 min walk</span>

            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors text-white border border-white/20">
            <span className="font-bold">❯</span>
          </div>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
