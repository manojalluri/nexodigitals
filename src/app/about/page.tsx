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
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 className="heading-secondary" style={{ marginBottom: '24px' }}>Our <span className="text-gradient">Mission</span></h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
              At Nexo Digitals, our mission is simple: to help ambitious businesses scale profitably through world-class digital marketing and web development. 
              We believe that every business, regardless of size, deserves enterprise-grade marketing solutions.
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
              Located in the heart of Vijayawada, we&apos;ve built a team of specialized experts across SEO, Paid Advertising, Social Media, and Web Development.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--white)', fontWeight: 600 }}><CheckCircle2 color="var(--success)"/> Data-Driven Strategies</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--white)', fontWeight: 600 }}><CheckCircle2 color="var(--success)"/> Transparent Reporting</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--white)', fontWeight: 600 }}><CheckCircle2 color="var(--success)"/> Dedicated Account Managers</li>
            </ul>
          </div>
          <div className="glass-panel" style={{ height: '500px', backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px' }} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
