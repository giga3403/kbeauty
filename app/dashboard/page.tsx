import { MapPin, Sparkles } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="p-6 pb-2 pt-10 relative z-10 flex items-center justify-between">
        <h1 className="text-3xl font-playfair font-bold text-white">Hello, Emily 👋</h1>
        <div className="w-10 h-10 rounded-full border-2 border-pink-500 overflow-hidden">
          <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-5 flex-1 relative z-10">
        
        {/* Today's Beauty Mission */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/10">
          <span className="text-xs font-bold text-violet-400 mb-1 block tracking-widest">TODAY'S BEAUTY MISSION</span>
          <h3 className="text-xl font-bold text-white mb-4">3 / 5 Products Purchased</h3>
          
          <div className="w-full bg-slate-800 h-2 rounded-full mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-pink-500 h-2 rounded-full w-[60%]" />
          </div>
          
          <p className="text-amber-300 font-bold text-sm">Estimated Tax Refund: ₩7,000</p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-4">
          <Link href="/map" className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-white/10 hover:bg-white/10 transition-colors group">
             <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
               <span className="text-2xl">📍</span>
             </div>
             <span className="text-sm font-bold text-slate-200">Nearby Stores</span>
          </Link>
          <Link href="/experiences" className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img src="/images/sample/다운로드 (3).jpeg" className="w-full h-full object-cover" alt="bg" />
             </div>
             <div className="relative z-10 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
               <span className="text-2xl">🔥</span>
             </div>
             <span className="relative z-10 text-sm font-bold text-white drop-shadow-md">Experiences</span>
          </Link>
        </div>

        {/* Beauty Passport Level */}
        <div className="bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl p-6 shadow-lg shadow-pink-500/20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 blur-xl" />
          <span className="text-xs font-bold text-white/70 mb-1 block tracking-wider">BEAUTY PASSPORT LEVEL</span>
          <h3 className="text-2xl font-playfair font-bold text-white">Lv.1 Beauty Explorer</h3>
        </div>

      </div>

      <BottomNav />
    </div>
  );
}
