import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoDesk",
  description: "created by Harsh Mahajan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className,'min-h-screen font-sans antialised grainy')}>
        <Navbar/>
        {children}
        </body>
        
    </html>
  );
}
