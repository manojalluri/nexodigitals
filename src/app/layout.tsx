import type { Metadata } from "next";
import { Inter, Playfair_Display, Orbitron } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexo Digitals | Premium Digital Marketing Agency in Vijayawada",
  description: "Grow Your Business Faster With Digital Marketing That Delivers Results. Nexo Digitals helps businesses in Vijayawada and across India generate more leads and increase revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${orbitron.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
