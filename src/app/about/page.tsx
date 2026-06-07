import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import FinalCTA from "@/components/home/FinalCTA";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Nexo Digitals",
  description: "Learn about Nexo Digitals, Vijayawada's premier digital marketing agency helping businesses scale.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About"
        gradientWord="Nexo Digitals"
        subtitle="We are a premium digital marketing agency driven by data, creativity, and a relentless focus on ROI."
      />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', opacity: 0.05, pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="heading-secondary" style={{ marginBottom: '40px' }}>Our <span className="text-gradient">Mission</span></h2>
          
          <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px', marginBottom: '48px', textAlign: 'left' }}>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '24px' }}>
              At Nexo Digitals, our mission is simple: to help ambitious businesses scale profitably through world-class digital marketing and web development. 
              We believe that every business, regardless of size, deserves enterprise-grade marketing solutions.
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', lineHeight: 1.8 }}>
              Located in the heart of Vijayawada, we&apos;ve built a team of specialized experts across SEO, Paid Advertising, Social Media, and Web Development.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {[
              "Data-Driven Strategies",
              "Transparent Reporting",
              "Dedicated Account Managers"
            ].map((feature, i) => (
              <div key={i} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 28px', borderRadius: '100px' }}>
                <CheckCircle2 color="var(--success)" size={20} />
                <span style={{ color: 'var(--white)', fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
