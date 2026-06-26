import type { Metadata } from "next";
import { Inter, Playfair_Display, Orbitron } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import StickyWhatsApp from "@/components/layout/StickyWhatsApp";
import HostingLockScreen from "@/components/layout/HostingLockScreen";
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
  title: "Best Digital Marketing Company in Vijayawada | Nexo Digitals",
  description: "Grow your business with the top digital marketing agency in Vijayawada. We offer expert SEO, Google Ads, Social Media, & Web Development services.",
  metadataBase: new URL('https://nexodigitals.vercel.app'),
  openGraph: {
    title: "Best Digital Marketing Company in Vijayawada | Nexo Digitals",
    description: "Grow your business with the top digital marketing agency in Vijayawada. We offer expert SEO, Google Ads, Social Media, & Web Development services.",
    url: "https://nexodigitals.vercel.app",
    siteName: "Nexo Digitals",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Vijayawada | Nexo Digitals",
    description: "Grow your business with the top digital marketing agency in Vijayawada.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${orbitron.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexo Digitals",
              "url": "https://nexodigitals.vercel.app",
              "logo": "https://nexodigitals.vercel.app/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vijayawada",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8886969130",
                "contactType": "customer service"
              }
            })
          }}
        />
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
        <StickyWhatsApp />
        <HostingLockScreen />
      </body>
    </html>
  );
}
