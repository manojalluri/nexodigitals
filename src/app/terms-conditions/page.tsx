import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nexo Digitals",
  description: "Terms and conditions of service for Nexo Digitals.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHeader 
        title="Terms &"
        gradientWord="Conditions"
        subtitle="Last updated: May 2026"
      />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)', color: 'var(--muted-text)', lineHeight: 1.8 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: '32px' }}>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
          
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>2. Services Provided</h2>
          <p style={{ marginBottom: '32px' }}>Nexo Digitals provides digital marketing services including but not limited to SEO, paid advertising, social media management, and web development. Specific deliverables will be outlined in a separate service agreement.</p>

          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>3. Limitation of Liability</h2>
          <p style={{ marginBottom: '32px' }}>In no event shall Nexo Digitals or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        </div>
      </section>
    </>
  );
}
