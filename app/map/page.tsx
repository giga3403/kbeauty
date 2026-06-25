"use client";

import { useState } from "react";
import { Search, MapPin, Navigation } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("Tax Free");
  const filters = ["Tax Free", "English Support", "Open Now"];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-stone-100 relative">
      {/* Top Bar / Search */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 bg-gradient-to-b from-white/80 to-transparent">
        <div className="bg-white shadow-sm rounded-full px-6 py-4 flex justify-between items-center border border-stone-100">
          <span className="font-serif text-stone-800 font-medium">Beauty Map</span>
          <Search className="w-5 h-5 text-stone-400" />
        </div>
      </div>

      {/* Mock Map View */}
      <div className="flex-1 bg-[#e6e2dd] relative overflow-hidden flex items-center justify-center">
        {/* Map Background Pattern (Dots) */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5d4c 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        
        {/* Mock Pins */}
        <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg relative cursor-pointer">
            <MapPin className="w-5 h-5" />
            <div className="absolute -bottom-1 w-2 h-2 bg-primary rotate-45" />
          </div>
          <span className="mt-3 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-stone-200 text-stone-700">Olive Young</span>
        </div>

        <div className="absolute top-1/2 right-1/4 flex flex-col items-center">
          <div className="w-10 h-10 bg-[#8c7b6c] text-white rounded-full flex items-center justify-center shadow-lg relative cursor-pointer">
            <MapPin className="w-5 h-5" />
            <div className="absolute -bottom-1 w-2 h-2 bg-[#8c7b6c] rotate-45" />
          </div>
          <span className="mt-3 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-stone-200 text-stone-700">Pharma</span>
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="absolute bottom-24 left-0 w-full z-20 px-6 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm ${
                activeFilter === f 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              {activeFilter === f && "✓ "}
              {f}
            </button>
          ))}
        </div>

        {/* Selected Store Card */}
        <Link href="/store/olive-young-myeongdong" className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-lg border border-stone-100 block group">
          <div>
            <h3 className="font-serif font-medium text-stone-800 text-lg mb-1">Olive Young Myeongdong</h3>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Navigation className="w-3 h-3" /> 2 min walk</span>
              <span>|</span>
              <span>Tax Free</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <span className="text-stone-400 group-hover:text-primary">❯</span>
          </div>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
