"use client";

import BottomNav from "../../components/BottomNav";
import { User, Settings, Heart, Bell, ChevronRight, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-white relative pb-24">
      {/* Header */}
      <div className="p-6 pt-12 pb-6 relative z-10">
        <h1 className="text-3xl font-playfair font-bold text-white">My Profile</h1>
      </div>

      <div className="flex-1 px-6 space-y-6 relative z-10">
        {/* User Info Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/10 flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center shadow-lg p-1 shrink-0">
             <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-10 h-10 text-pink-400" />
             </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Emily</h2>
            <p className="text-sm text-pink-400 font-medium">Global Traveler</p>
            <div className="mt-2 inline-flex px-2 py-1 bg-white/10 rounded-full border border-white/10 text-[10px] font-bold text-slate-300">
               SKIN TYPE: DRY
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-2 shadow-xl border border-white/10">
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors text-left group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-violet-400" />
              </div>
              <span className="font-semibold text-slate-200">Saved Stores</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors text-left group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Bell className="w-5 h-5 text-pink-400" />
              </div>
              <span className="font-semibold text-slate-200">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors text-left group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-semibold text-slate-200">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Logout Button */}
        <button className="w-full mt-6 py-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-400 font-bold hover:bg-rose-500/20 transition-colors flex items-center justify-center gap-2">
           <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
