"use client";

import { Trophy, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-stone-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center py-4 mb-8">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-stone-50 transition-colors">
          <ArrowLeft className="w-5 h-5 text-stone-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Trophy */}
        <div className="w-24 h-24 bg-[#eef1ed] rounded-full flex items-center justify-center mb-6 shadow-sm relative">
           <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75" />
           <Trophy className="w-10 h-10 text-primary-dark relative z-10" />
        </div>

        <h1 className="text-3xl font-serif text-stone-800 text-center mb-2">Beauty Mission<br/>Complete!</h1>
        <p className="text-stone-500 text-sm mb-12">5 out of 5 Skincare Items Purchased</p>

      </div>

      {/* Action Button */}
      <div className="mt-8 mb-8">
        <button className="w-full bg-primary-dark text-white py-4 rounded-xl text-center font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-sm">
          <Share2 className="w-5 h-5" />
          Share My Beauty Journey
        </button>
        <Link href="/dashboard" className="block text-center mt-4 text-sm text-stone-500 hover:text-stone-800 transition-colors">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
