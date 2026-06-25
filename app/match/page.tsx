"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBeautyStore } from "../../store/useBeautyStore";

export default function BeautyMatchPage() {
  const router = useRouter();
  const { skinType, setSkinType } = useBeautyStore();
  const [step, setStep] = useState(1);

  const skinTypes = [
    { id: "dry", label: "Dry (건성)" },
    { id: "oily", label: "Oily (지성)" },
    { id: "combination", label: "Combination (복합성)" },
    { id: "sensitive", label: "Sensitive (민감성)" },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/list");
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <span className="text-sm font-medium text-stone-500">Beauty Match ({step}/3)</span>
        <span className="text-sm font-medium text-stone-500">Step {step}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-200 h-1.5 rounded-full mb-8">
        <div 
          className="bg-primary h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {step === 1 && (
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">SKIN TYPE</span>
            <h2 className="text-2xl font-serif text-stone-800">What's your skin type?</h2>
            
            <div className="space-y-3 mt-8">
              {skinTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSkinType(type.id)}
                  className={`w-full text-left px-4 py-4 rounded-xl border transition-colors flex items-center gap-3 ${
                    skinType === type.id 
                      ? 'border-primary bg-[#eef1ed] text-primary-dark' 
                      : 'border-stone-200 hover:border-primary/50 text-stone-600 bg-white'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    skinType === type.id ? 'border-primary' : 'border-stone-300'
                  }`}>
                    {skinType === type.id && <div className="w-2 h-2 bg-primary rounded-full" />}
                  </div>
                  <span className="font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">CONCERNS</span>
            <h2 className="text-2xl font-serif text-stone-800">Any specific concerns?</h2>
            <p className="text-stone-500 text-sm">Select all that apply.</p>
            {/* Placeholder for concerns */}
            <div className="grid grid-cols-2 gap-3 mt-8">
               {['Acne', 'Wrinkles', 'Pores', 'Pigmentation'].map((concern) => (
                 <button key={concern} className="p-4 rounded-xl border border-stone-200 text-center bg-white hover:border-primary/50 text-stone-600">
                    {concern}
                 </button>
               ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <span className="text-xs font-semibold tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">BUDGET</span>
            <h2 className="text-2xl font-serif text-stone-800">What's your budget?</h2>
            {/* Placeholder for budget */}
            <div className="py-12 flex justify-center">
               <span className="text-4xl font-serif text-stone-800">$100</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 mb-8">
        <button 
          onClick={handleNext}
          className="w-full bg-stone-900 text-white py-4 rounded-xl text-center font-medium hover:bg-black transition-colors"
        >
          {step === 3 ? 'Generate My List' : `Next Step (${step + 1}/3)`}
        </button>
      </div>
    </div>
  );
}
