import { Sparkles, Camera, Palette, Zap, Scissors } from "lucide-react";
import BottomNav from "../../components/BottomNav";

export default function ExperiencesPage() {
  const experiences = [
    {
      id: "1",
      title: "Seongsu Aesthetics Custom Tour",
      category: "Instagram Spot",
      image: "/images/sample/다운로드 (1).jpeg",
    },
    {
      id: "2",
      title: "K-POP Star Glass-Skin Styling",
      category: "Idol Makeup",
      image: "/images/sample/karina aespa.jpeg",
    },
    {
      id: "3",
      title: "1:1 English Tone Analysis",
      category: "Personal Color",
      image: "/images/sample/다운로드 (3).jpeg",
    },
    {
      id: "4",
      title: "K-Wellness Fast Skin Clinic",
      category: "Glass Skin Treatment",
      image: "/images/sample/Seoul Cityscape, South Korea Travel Inspiration.jpeg",
    },
    {
      id: "5",
      title: "Premium Layered Cut & Perm",
      category: "Korean Hair Styling",
      image: "/images/sample/다운로드 (1).jpeg",
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-violet-900/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="p-6 pb-4 pt-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300 backdrop-blur-md mb-4">
          TRENDING NOW
        </div>
        <h1 className="text-4xl font-playfair font-bold text-white mb-2 leading-tight">Unlock K-Beauty <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-500">Experiences</span></h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-2 pb-6 space-y-4 relative z-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-lg border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all group cursor-pointer">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/20 shadow-md relative">
               <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-1">{exp.category}</p>
              <h3 className="font-playfair text-lg font-bold text-white leading-tight">{exp.title}</h3>
            </div>
            <div className="shrink-0 text-slate-500 group-hover:text-pink-400 transition-colors">
               <span className="font-bold">❯</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
