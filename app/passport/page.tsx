"use client";

import BottomNav from "../../components/BottomNav";

export default function PassportPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Header */}
      <div className="p-6 pt-12 relative z-10 text-center">
        <h1 className="text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 mb-2">Beauty Passport</h1>
        <p className="text-sm font-medium text-slate-400 tracking-wide">Your Cyber K-Beauty Ticket</p>
      </div>

      <div className="flex-1 px-6 relative z-10">
        {/* Passport Card (Cyberpunk Style) */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-[32px] p-6 shadow-[0_0_40px_rgba(124,58,237,0.15)] border border-white/10 relative overflow-hidden mt-4">
          
          {/* Card Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none" />
          <div className="absolute -left-4 top-1/4 w-1 h-12 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(124,58,237,1)]" />

          {/* Card Header */}
          <div className="flex justify-between items-start pb-6 border-b border-white/10">
             <div>
                <h2 className="text-xl font-playfair font-bold text-white mb-1">BEAUTY PASSPORT</h2>
                <p className="text-[10px] font-bold text-slate-400 tracking-widest">REPUBLIC OF K-BEAUTY</p>
             </div>
             <div className="text-right">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-[10px] font-bold rounded-full mb-1 shadow-lg">Level 1</span>
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Explorer</p>
             </div>
          </div>

          {/* Stamps Grid */}
          <div className="py-8">
            <p className="text-[10px] font-bold text-pink-400 mb-4 tracking-widest">REWARDS STAMPS MISSION</p>
            <div className="grid grid-cols-5 gap-3">
               <div className="bg-white/10 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">🛍️</div>
               <div className="bg-white/10 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">🏪</div>
               <div className="bg-white/10 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">💊</div>
               <div className="bg-slate-900 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/5 opacity-30 grayscale">💰</div>
               <div className="bg-slate-900 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/5 opacity-30 grayscale">💄</div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-4 pb-2 text-sm">
             <div className="flex items-center gap-3 text-emerald-400 font-medium">
                <span className="w-5 font-bold">✓</span>
                Purchase 5 Products
             </div>
             <div className="flex items-center gap-3 text-emerald-400 font-medium">
                <span className="w-5 font-bold">✓</span>
                Visit Olive Young
             </div>
             <div className="flex items-center gap-3 text-emerald-400 font-medium">
                <span className="w-5 font-bold">✓</span>
                Visit Beauty Pharmacy
             </div>
             <div className="flex items-center gap-3 text-slate-500">
                <span className="w-5 font-bold text-slate-700">□</span>
                Get Tax Refund
             </div>
             <div className="flex items-center gap-3 text-slate-500">
                <span className="w-5 font-bold text-slate-700">□</span>
                Try Beauty Experience
             </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <button className="w-full bg-white text-slate-950 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm">
            📸 Share My Beauty Journey to Instagram
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
