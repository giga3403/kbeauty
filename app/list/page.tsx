"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckSquare, Square, Apple, Mail, MapPin, Sparkles, Gift, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBeautyStore } from "../../store/useBeautyStore";
import { supabase } from "../../lib/supabase";

export default function ShoppingListPage() {
  const router = useRouter();
  const { skinType, concerns } = useBeautyStore();
  
  const [showSaveOverlay, setShowSaveOverlay] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatchedProducts = async () => {
      setLoading(true);
      
      try {
        let query = supabase.from('products').select('*');
        
        const orConditions = [];
        if (skinType) {
          orConditions.push(`skin_type.eq.${skinType}`);
        }
        if (concerns && concerns.length > 0) {
          concerns.forEach(c => {
            orConditions.push(`concern.eq.${c}`);
          });
        }
        
        if (orConditions.length > 0) {
          query = query.or(orConditions.join(','));
        }

        const { data, error } = await query;
        
        if (error) {
          console.error("Error fetching products:", error);
        } else if (data) {
          setProducts(data);
          // 기본적으로 매칭된 모든 상품을 체크 상태로 만듭니다.
          setChecked(data.map(p => p.id.toString()));
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchedProducts();
  }, [skinType, concerns]);

  const toggleCheck = (id: string) => {
    if (checked.includes(id)) {
      setChecked(checked.filter(i => i !== id));
    } else {
      setChecked([...checked, id]);
    }
  };

  const handleSaveList = () => {
    setShowSaveOverlay(true);
  };

  const handleAuth = () => {
    router.push("/dashboard");
  };

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          // 환경에 맞게 리다이렉트 URL 자동 설정
          redirectTo: `${window.location.origin}/dashboard`,
          // 구글 로그인 시 항상 계정 선택창을 띄우도록 설정
          queryParams: {
            prompt: 'select_account'
          }
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error("Google login error:", error);
      alert("구글 로그인 중 오류가 발생했습니다.");
    }
  };

  // 체크된 상품들의 총 가격 계산
  const estimatedTotal = products
    .filter(p => checked.includes(p.id.toString()))
    .reduce((sum, p) => sum + Number(p.price), 0);

  return (
    <div className="flex-1 flex flex-col min-h-screen relative bg-slate-950 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="p-6 flex-1 flex flex-col pb-24 relative z-10">
        {/* Header */}
        <div className="flex justify-center items-center py-6">
          <h1 className="text-2xl font-playfair text-white font-bold tracking-wide">My Shopping List</h1>
        </div>

        {/* Cyber Ticket Layout Card */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 flex flex-col shadow-2xl border border-white/10 relative min-h-[400px]">
          
          {/* Circular Cutouts for Ticket Effect */}
          <div className="absolute top-[30%] -left-4 w-8 h-8 bg-slate-950 rounded-full border-r border-white/10" />
          <div className="absolute top-[30%] -right-4 w-8 h-8 bg-slate-950 rounded-full border-l border-white/10" />

          <div className="text-center mb-8 pb-8 border-b-2 border-dashed border-white/10">
            <span className="text-xs font-bold text-violet-400 mb-1 block tracking-widest">ESTIMATED TOTAL</span>
            <span className="text-5xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 font-bold">
              {estimatedTotal.toLocaleString()}원
            </span>
          </div>

          {/* Checklist */}
          <div className="space-y-4 flex-1 px-2 overflow-y-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-40 text-slate-400 space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-pink-500" />
                <p>AI Beauty Matching...</p>
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <button 
                  key={product.id}
                  onClick={() => toggleCheck(product.id.toString())}
                  className="w-full flex items-center gap-4 text-left group bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  {checked.includes(product.id.toString()) ? (
                    <CheckSquare className="w-6 h-6 text-pink-500 shrink-0" />
                  ) : (
                    <Square className="w-6 h-6 text-slate-600 group-hover:text-pink-500/50 shrink-0" />
                  )}
                  <div className={`flex-1 ${checked.includes(product.id.toString()) ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="text-xs font-bold text-violet-400 mb-1">{product.brand} · {product.category}</div>
                    <div className="text-base font-medium text-white line-clamp-1">{product.product_name}</div>
                    <div className="text-sm font-semibold text-slate-300 mt-1">{Number(product.price).toLocaleString()}원</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center text-slate-400 py-10">
                <p>조건에 맞는 매칭 상품이 없습니다.</p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button 
               onClick={handleSaveList}
               disabled={loading || products.length === 0}
               className="w-full bg-white text-slate-950 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save My List
            </button>
          </div>
        </div>
      </div>

      {/* Save Overlay Bottom Sheet */}
      <AnimatePresence>
        {showSaveOverlay && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 z-40 backdrop-blur-sm"
              onClick={() => setShowSaveOverlay(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-white/10 rounded-t-[40px] z-50 p-8 pb-12 shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-8" />
              
              <h3 className="text-3xl font-playfair text-center text-white mb-8 font-bold">
                Save Your Beauty<br/>Journey ✨
              </h3>

              <div className="space-y-4 mb-8 bg-white/5 border border-white/10 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  Save Your Shopping List
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <Gift className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-white group-hover:text-amber-300 transition-colors">Get Exclusive Beauty Benefits</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  Access Nearby Beauty Stores
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <CheckSquare className="w-5 h-5 text-pink-400" />
                  Unlock Beauty Experiences
                </div>
              </div>

              <div className="space-y-3">
                <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white text-slate-950 py-4 rounded-full font-bold shadow-sm hover:bg-slate-200 transition-colors">
                  <span className="font-bold text-lg">G</span>
                  Continue with Google
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-slate-800 border border-white/10 text-white py-4 rounded-full font-bold shadow-sm hover:bg-slate-700 transition-colors">
                  <Apple className="w-5 h-5" />
                  Continue with Apple
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white py-4 rounded-full font-bold shadow-sm hover:opacity-90 transition-opacity">
                  <Mail className="w-5 h-5" />
                  Sign up with Email
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
