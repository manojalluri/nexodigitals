"use client";

import styles from './TrustSection.module.css';

export default function TrustSection() {
  const logos = [
    "Google Partner",
    "Meta Business",
    "Shopify Expert",
    "HubSpot Certified",
    "Semrush Agency",
    "Mailchimp Pro"
  ];

  return (
    <section className={styles.trustSection}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>Trusted By Growing Businesses & Partners Across Industries</p>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
