"use client";

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={`section-padding ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={`glass-panel ${styles.ctaBox}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>Ready To Scale Your Business?</h2>
            <p className={styles.subtitle}>
              Book a free consultation and discover how Nexo Digitals can help you attract more customers and increase revenue predictably.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={`btn-primary ${styles.btnPrimary}`}>
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <a href="tel:+919876543210" className={`btn-secondary ${styles.btnSecondary}`}>
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className={styles.decorCircle1}></div>
          <div className={styles.decorCircle2}></div>
        </div>
      </div>
    </section>
  );
}
