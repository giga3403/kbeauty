"use client";

import { Home, ListChecks, MapPin, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "List", href: "/list", icon: ListChecks },
    { name: "Map", href: "/map", icon: MapPin },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-stone-50 border-t border-stone-200 px-6 py-4 flex justify-between items-center z-40 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
          </Link>
        );
      })}
    </div>
  );
}
