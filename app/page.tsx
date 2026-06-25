import Link from "next/link";
import { Check, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-between p-6 h-full min-h-screen">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">K-Beauty Finder</span>
        </div>
        <Globe className="w-5 h-5 text-stone-400" />
      </div>

      {/* Main Content */}
      <div className="w-full flex-1 flex flex-col justify-center mt-12 mb-20 space-y-8">
        <h1 className="text-4xl font-serif text-stone-800 leading-[1.2]">
          Find the Best Korean<br />Beauty for Your Skin
        </h1>

        <div className="space-y-4 text-stone-500 mt-8">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-stone-400" />
            <span className="text-sm">Personalized Product List</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-stone-400" />
            <span className="text-sm">Tax-Free Stores</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-stone-400" />
            <span className="text-sm">Beauty Experience Mapping</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full flex flex-col items-center gap-4 mb-8">
        <Link 
          href="/match" 
          className="w-full bg-primary text-white py-4 rounded-xl text-center font-medium hover:bg-primary-dark transition-colors shadow-sm"
        >
          Start Beauty Match
        </Link>
        <p className="text-xs text-stone-400">Trusted by Global Travelers</p>
      </div>
    </div>
  );
}
