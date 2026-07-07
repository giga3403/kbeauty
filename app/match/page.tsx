"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBeautyStore } from "../../store/useBeautyStore";

export default function BeautyMatchPage() {
  const router = useRouter();
  const { skinType, setSkinType, concerns, setConcerns, budget, setBudget } = useBeautyStore();
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const skinTypes = [
    { id: "Dry", label: "Dry" },
    { id: "Oily", label: "Oily" },
    { id: "Combination", label: "Combination" },
    { id: "Sensitive", label: "Sensitive" },
    { id: "Normal", label: "Normal" },
  ];

  const concernOptions = [
    { id: "Acne", label: "Acne & Trouble" },
    { id: "Brightening", label: "Brightening" },
    { id: "Aging", label: "Anti-Aging" },
    { id: "Hydration", label: "Hydration & Moisture" },
    { id: "Soothing", label: "Soothing & Calming" },
    { id: "Pore Care", label: "Pore Care" },
  ];

  const budgetOptions = [
    { id: "50", label: "Under $50", value: 50 },
    { id: "100", label: "Under $100", value: 100 },
    { id: "premium", label: "Premium", value: 999 },
  ];

  const toggleConcern = (id: string) => {
    if (concerns.includes(id)) {
      setConcerns(concerns.filter(c => c !== id));
    } else {
      setConcerns([...concerns, id]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !skinType) {
      setErrorMsg("피부 타입을 먼저 선택해주세요.");
      return;
    }
    if (step === 2 && concerns.length === 0) {
      setErrorMsg("피부 고민을 하나 이상 선택해주세요.");
      return;
    }
    
    setErrorMsg("");
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/list");
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center py-4 mb-4">
        <span className="text-sm font-semibold text-slate-400">Beauty Match ({step}/3)</span>
        <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full text-pink-400 border border-white/10">Step {step}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 w-full bg-slate-800 h-2 rounded-full mb-10 shadow-inner overflow-hidden">
        <div 
          className="bg-gradient-to-r from-violet-500 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold text-white leading-tight">What's Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Skin Type?</span></h2>
            
            <div className="space-y-4 mt-8">
              {skinTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSkinType(type.id)}
                  className={`w-full text-left px-5 py-5 rounded-2xl border transition-all flex items-center gap-4 ${
                    skinType === type.id 
                      ? 'border-pink-500/50 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.15)] text-white' 
                      : 'border-white/10 bg-slate-900/50 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    skinType === type.id ? 'border-pink-500' : 'border-slate-500'
                  }`}>
                    {skinType === type.id && <div className="w-2.5 h-2.5 bg-pink-500 rounded-full" />}
                  </div>
                  <span className="text-lg font-semibold">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold text-white leading-tight">Your Main <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Concern?</span></h2>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               {concernOptions.map((opt) => (
                 <button 
                   key={opt.id} 
                   onClick={() => toggleConcern(opt.id)}
                   className={`p-5 rounded-2xl border text-center transition-all ${
                     concerns.includes(opt.id) 
                       ? 'border-pink-500/50 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.15)] text-white font-bold' 
                       : 'border-white/10 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-medium'
                   }`}
                 >
                    {opt.label}
                 </button>
               ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-playfair font-bold text-white leading-tight">Shopping <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Budget</span></h2>
            
            <div className="space-y-4 mt-8">
              {budgetOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBudget(opt.value)}
                  className={`w-full text-center px-5 py-5 rounded-2xl border transition-all ${
                    budget === opt.value 
                      ? 'border-pink-500/50 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.15)] text-white font-bold' 
                      : 'border-white/10 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-medium'
                  }`}
                >
                  <span className="text-lg">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 mt-8 mb-8">
        {errorMsg && (
          <div className="text-pink-400 text-sm font-semibold mb-4 text-center animate-pulse">
            {errorMsg}
          </div>
        )}
        <button 
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-violet-600 to-pink-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all active:scale-95"
        >
          {step === 3 ? 'Generate My List' : 'Next Step'}
        </button>
      </div>
    </div>
  );
}
