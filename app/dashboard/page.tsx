import { Bell, MapPin, Receipt, Target } from "lucide-react";
import BottomNav from "../../components/BottomNav";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-stone-50 pb-24">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-white rounded-b-3xl shadow-sm relative z-10">
        <div>
          <h1 className="text-xl font-serif text-stone-800">Hello, Emily 👋</h1>
        </div>
        <button className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center relative text-stone-600 hover:bg-stone-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-stone-100" />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6 flex-1 mt-2">
        {/* Active Shopping List */}
        <div className="bg-[#f2ece9] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-10 translate-x-10 blur-xl" />
          <span className="text-xs font-bold tracking-wider text-stone-500 mb-2 block">ACTIVE SHOPPING LIST</span>
          <h2 className="text-3xl font-serif text-stone-800 mb-2">5 Products Selected</h2>
          <div className="flex items-center gap-2 text-primary-dark">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Under $100 Budget Safe</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/map" className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors shadow-sm">
             <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
             </div>
             <div className="text-center">
                <h3 className="font-medium text-stone-800">Nearby Stores</h3>
                <p className="text-xs text-stone-400">3 Active Pins</p>
             </div>
          </Link>

          <Link href="/map?filter=tax-free" className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-colors shadow-sm">
             <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center">
                <Receipt className="w-6 h-6" />
             </div>
             <div className="text-center">
                <h3 className="font-medium text-stone-800">Tax Free</h3>
                <p className="text-xs text-stone-400">All Pharmacy Map</p>
             </div>
          </Link>
        </div>

        {/* Action Button */}
        <Link 
          href="/experiences" 
          className="block w-full bg-[#eef1ed] border border-primary/20 text-primary-dark py-4 rounded-xl text-center font-medium hover:bg-primary/20 transition-colors mt-2"
        >
          <span className="mr-2">💄</span> BOOK K-BEAUTY CLINIC
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
