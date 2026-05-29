import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Refund Policy | Nexo Digitals",
  description: "Refund policy for Nexo Digitals.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Refund"
        gradientWord="Policy"
        subtitle="Last updated: May 2026"
      />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)', color: 'var(--muted-text)', lineHeight: 1.8 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>1. Digital Marketing Services</h2>
          <p style={{ marginBottom: '32px' }}>Due to the nature of digital marketing services (SEO, PPC, Social Media Management), we do not offer refunds on services that have already been rendered or campaigns that have already been executed. Our team invests significant time and resources into strategy and execution from day one.</p>
          
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>2. Web Development</h2>
          <p style={{ marginBottom: '32px' }}>For website development projects, a 50% non-refundable deposit is required to begin work. If a project is cancelled before completion, the client will be billed for the hours worked up to that point.</p>

          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>3. Cancellation</h2>
          <p style={{ marginBottom: '32px' }}>Clients may cancel monthly retainer services with a 30-day written notice. You will be billed for the final 30 days of service, during which time our team will continue to manage your accounts.</p>
        </div>
      </section>
    </>
  );
}
