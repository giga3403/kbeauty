"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { MapPin, Sparkles, LogOut } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // 현재 세션 확인
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      }

      // 세션 상태 변경 리스너 (로그인/로그아웃 시 실시간 반영)
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });

      return () => subscription.unsubscribe();
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  // 구글 로그인 시 user_metadata에 풀네임과 프로필 사진이 저장됩니다.
  const displayName = user?.user_metadata?.full_name || "Guest";
  const avatarUrl = user?.user_metadata?.avatar_url || "https://i.pravatar.cc/150?img=47";

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-10 right-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="p-6 pb-2 pt-10 relative z-10 flex items-center justify-between">
        <h1 className="text-3xl font-playfair font-bold text-white line-clamp-1 mr-4">
          Hello, {displayName.split(' ')[0]} 👋
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-pink-500 overflow-hidden shrink-0">
            <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-5 flex-1 relative z-10">
        
        {/* Today's Beauty Mission */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/10">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-bold text-violet-400 tracking-widest">TODAY'S BEAUTY MISSION</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">3 / 5 Products Purchased</h3>
          
          <div className="w-full bg-slate-800 h-2 rounded-full mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-pink-500 h-2 rounded-full w-[60%]" />
          </div>
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

      </div>

      <BottomNav />
    </div>
  );
}
