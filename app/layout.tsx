import type { Metadata, Viewport } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto" });

export const metadata: Metadata = {
  title: "Beauty Passport",
  description: "Your K-Beauty Journey Ticket",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.variable} ${playfair.variable} font-sans min-h-screen bg-slate-950 flex justify-center antialiased text-white`}>
        <div className="w-full max-w-md bg-slate-950 min-h-screen relative shadow-2xl overflow-x-hidden flex flex-col border-x border-white/10">
          {children}
        </div>
      </body>
    </html>
  );
}
