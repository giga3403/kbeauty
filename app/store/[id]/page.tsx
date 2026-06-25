"use client";

import { Heart, Navigation, ChevronLeft } from "lucide-react";
import BottomNav from "../../../components/BottomNav";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function StoreDetailPage() {
  const router = useRouter();

  const mockStock = [
    { id: "1", name: "Toner (이지듀 EGF)", status: "High Stock", color: "text-emerald-500" },
    { id: "2", name: "Spot Care (노스카나겔)", status: "Medium Stock", color: "text-amber-500" },
    { id: "4", name: "Sunscreen (SPF 50+)", status: "Out of Stock", color: "text-red-400" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-stone-50 pb-24">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors">
            <ChevronLeft className="w-5 h-5 text-stone-600" />
          </button>
          <span className="font-medium text-stone-800">Myeongdong Main Store</span>
        </div>
        <button className="text-stone-400 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Store Info Banner */}
        <div className="bg-white p-6 border-b border-stone-100">
          <div className="flex gap-2 mb-4">
             <span className="px-2 py-1 bg-[#eef1ed] text-primary-dark text-xs font-semibold tracking-wider rounded">OLIVE YOUNG</span>
             <span className="px-2 py-1 bg-stone-100 text-stone-500 text-xs font-semibold tracking-wider rounded">★ 4.9 (120 REVIEWS)</span>
          </div>
          <h1 className="text-2xl font-serif text-stone-800 mb-2">Olive Young Myeongdong</h1>
          <p className="text-sm text-stone-400">Tax Free Center | English Available</p>
        </div>

        {/* Products From My List */}
        <div className="p-6">
          <h2 className="text-sm font-bold tracking-wider text-stone-500 mb-6">PRODUCTS FROM MY LIST</h2>
          
          <div className="space-y-3">
            {mockStock.map((item) => (
              <div key={item.id} className="bg-white border border-stone-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                   <div className="w-4 h-4 border border-stone-300 rounded-sm flex items-center justify-center">
                     {item.status !== "Out of Stock" && <div className="w-2 h-2 bg-stone-400 rounded-sm" />}
                   </div>
                   <span className={`text-sm ${item.status === "Out of Stock" ? 'text-stone-400 line-through' : 'text-stone-700'}`}>
                     {item.name}
                   </span>
                </div>
                <span className={`text-xs font-bold ${item.color}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Navigation CTA */}
        <div className="px-6 mt-4">
          <button className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Navigation className="w-5 h-5" fill="currentColor" />
            Open Navigation
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
