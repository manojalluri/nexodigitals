import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexo Digitals",
  description: "Privacy Policy for Nexo Digitals.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Privacy"
        gradientWord="Policy"
        subtitle="Last updated: May 2026"
      />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)', color: 'var(--muted-text)', lineHeight: 1.8 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>1. Introduction</h2>
          <p style={{ marginBottom: '32px' }}>Welcome to Nexo Digitals. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          
          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>2. Data We Collect</h2>
          <p style={{ marginBottom: '32px' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Technical Data, Usage Data, and Marketing and Communications Data.</p>

          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>3. How We Use Your Data</h2>
          <p style={{ marginBottom: '32px' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</p>

          <h2 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '16px' }}>4. Data Security</h2>
          <p style={{ marginBottom: '32px' }}>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
        </div>
      </section>
    </>
  );
}
