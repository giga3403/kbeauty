"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckSquare, Square, Apple, Mail, MapPin, Sparkles, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShoppingListPage() {
  const router = useRouter();
  const [showSaveOverlay, setShowSaveOverlay] = useState(false);
  
  const mockProducts = [
    { id: "1", name: "Toner (이지듀 EGF)", checked: true },
    { id: "2", name: "Spot Care (노스카나겔)", checked: true },
    { id: "3", name: "Serum (시카에센스)", checked: false },
    { id: "4", name: "Sunscreen (SPF50+)", checked: false }
  ];

  const [checked, setChecked] = useState<string[]>(mockProducts.filter(p => p.checked).map(p => p.id));

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
        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 flex flex-col shadow-2xl border border-white/10 relative">
          
          {/* Circular Cutouts for Ticket Effect */}
          <div className="absolute top-1/3 -left-4 w-8 h-8 bg-slate-950 rounded-full border-r border-white/10" />
          <div className="absolute top-1/3 -right-4 w-8 h-8 bg-slate-950 rounded-full border-l border-white/10" />

          <div className="text-center mb-8 pb-8 border-b-2 border-dashed border-white/10">
            <span className="text-xs font-bold text-violet-400 mb-1 block tracking-widest">ESTIMATED BUDGET</span>
            <span className="text-5xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300 font-bold">$85.00</span>
          </div>

          {/* Checklist */}
          <div className="space-y-5 flex-1 px-2">
            {mockProducts.map((product) => (
              <button 
                key={product.id}
                onClick={() => toggleCheck(product.id)}
                className="w-full flex items-center gap-4 text-left group"
              >
                {checked.includes(product.id) ? (
                  <CheckSquare className="w-6 h-6 text-pink-500" />
                ) : (
                  <Square className="w-6 h-6 text-slate-600 group-hover:text-pink-500/50" />
                )}
                <span className={`text-base font-medium ${checked.includes(product.id) ? 'text-white' : 'text-slate-400'}`}>
                  {product.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <button 
               onClick={handleSaveList}
               className="w-full bg-white text-slate-950 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
                  Get Exclusive Tax-Free Coupons
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
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-white text-slate-950 py-4 rounded-full font-bold shadow-sm hover:bg-slate-200">
                  <span className="font-bold text-lg">G</span>
                  Continue with Google
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-slate-800 border border-white/10 text-white py-4 rounded-full font-bold shadow-sm hover:bg-slate-700">
                  <Apple className="w-5 h-5" />
                  Continue with Apple
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white py-4 rounded-full font-bold shadow-sm hover:bg-opacity-90">
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
