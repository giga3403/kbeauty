"use client";

import { Settings2, CalendarCheck, Sparkles } from "lucide-react";
import BottomNav from "../../components/BottomNav";

export default function ExperiencesPage() {
  const experiences = [
    {
      id: "1",
      title: "Personal Color Consultation",
      location: "Color Studio Hongdae",
      price: "$120.00",
      tags: "English Available",
      color: "bg-[#eef1ed]",
      icon: <Sparkles className="w-5 h-5 text-primary" />
    },
    {
      id: "2",
      title: "Idol Hair & Makeup Styling",
      location: "Seoul Glam Salon",
      price: "$95.00",
      tags: "Foreigner Friendly",
      color: "bg-[#f2ece9]",
      icon: <Sparkles className="w-5 h-5 text-[#8c7b6c]" />
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-stone-50 pb-24">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-white shadow-sm relative z-10">
        <h1 className="text-xl font-serif text-stone-800">K-Beauty Experiences</h1>
        <button className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-200">
          <Settings2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <p className="text-sm text-stone-500 mb-6">
          Highly recommended local K-Wellness studios in Seoul
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm">
              <div className={`h-32 ${exp.color} p-4 flex flex-col justify-end relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/30 rounded-full blur-xl" />
                <div className="flex items-center gap-2 mb-2 z-10">
                  {exp.icon}
                  <h3 className="font-serif text-lg text-stone-800 font-medium">{exp.title}</h3>
                </div>
              </div>
              
              <div className="p-5 flex justify-between items-end bg-white">
                <div>
                  <h4 className="font-medium text-stone-800 mb-1">{exp.location}</h4>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span className="font-medium">{exp.price}</span>
                    <span>|</span>
                    <span>{exp.tags}</span>
                  </div>
                </div>
                <button className="bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors flex items-center gap-2">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
