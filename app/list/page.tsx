"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckSquare, Square, Apple, Mail } from "lucide-react";
import { useBeautyStore } from "../../store/useBeautyStore";
import { motion, AnimatePresence } from "framer-motion";

export default function ShoppingListPage() {
  const router = useRouter();
  const [showSaveOverlay, setShowSaveOverlay] = useState(false);
  
  // Hardcoded for MVP, in real app would generate based on store
  const mockProducts = [
    { id: "1", name: "Toner (이지듀 EGF)" },
    { id: "2", name: "Spot Care (노스카나겔)" },
    { id: "3", name: "Serum (시카 에센스)" },
    { id: "4", name: "Sunscreen (SPF 50+)" }
  ];

  const [checked, setChecked] = useState<string[]>(["1", "2"]);

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
    // Navigate to dashboard after login/save
    router.push("/dashboard");
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen relative">
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-serif text-stone-800">My Korea Beauty List</span>
          <div className="w-8 h-8 bg-stone-200 rounded-full flex items-center justify-center">
             <div className="w-4 h-4 bg-primary rounded-sm" />
          </div>
        </div>

        {/* Budget Card */}
        <div className="mt-6 bg-white border border-stone-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
          <span className="text-sm text-stone-400 mb-2">Estimated Budget</span>
          <span className="text-4xl font-serif text-primary-dark">$85.00</span>
        </div>

        {/* Checklist */}
        <div className="mt-8 space-y-4 flex-1">
          {mockProducts.map((product) => (
            <button 
              key={product.id}
              onClick={() => toggleCheck(product.id)}
              className="w-full flex items-center gap-3 text-left group"
            >
              {checked.includes(product.id) ? (
                <CheckSquare className="w-5 h-5 text-primary" />
              ) : (
                <Square className="w-5 h-5 text-stone-300 group-hover:text-primary/50" />
              )}
              <span className={`text-stone-700 ${checked.includes(product.id) ? 'font-medium' : ''}`}>
                {product.name}
              </span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-3 mb-8">
          <button 
             onClick={() => router.push("/map")}
             className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors"
          >
            Find Nearby Stores
          </button>
          <button 
             onClick={handleSaveList}
             className="w-full bg-white border border-stone-200 text-stone-600 py-4 rounded-xl font-medium hover:bg-stone-50 transition-colors"
          >
            Save My List
          </button>
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
              className="absolute inset-0 bg-stone-900/40 z-40"
              onClick={() => setShowSaveOverlay(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-stone-50 rounded-t-3xl z-50 p-6 pb-12 shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-stone-300 rounded-full mx-auto mb-8" />
              
              <h3 className="text-2xl font-serif text-center text-stone-800 mb-8 leading-tight">
                Save Your List & Get<br />Coupons
              </h3>

              <div className="space-y-3">
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 text-stone-700 py-4 rounded-xl font-medium hover:bg-stone-50">
                  <span className="font-bold text-lg">G</span>
                  Continue with Google
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-black">
                  <Apple className="w-5 h-5" />
                  Continue with Apple
                </button>
                <button onClick={handleAuth} className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark">
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
