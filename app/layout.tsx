import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-Beauty Companion",
  description: "Find the Best Korean Beauty for Your Skin",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
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
      <body className={`${inter.className} min-h-screen bg-stone-100 flex justify-center antialiased`}>
        <div className="w-full max-w-md bg-stone-50 min-h-screen relative shadow-2xl overflow-x-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
