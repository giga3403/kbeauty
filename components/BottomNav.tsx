"use client";

import { Home, ShoppingCart, MapPin, Ticket, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "List", href: "/list", icon: ShoppingCart },
    { name: "Map", href: "/map", icon: MapPin },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-slate-950/80 backdrop-blur-md border-t border-white/10 px-2 py-3 flex justify-between items-center z-40 pb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        const Icon = item.icon;
        
        return (
          <Link 
            key={item.name} 
            href={item.href}
            className={`flex flex-col items-center gap-1 w-1/5 transition-colors ${isActive ? 'text-pink-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'fill-pink-500/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-bold">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
