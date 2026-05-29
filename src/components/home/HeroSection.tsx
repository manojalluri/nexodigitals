"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle, Star } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className={styles.gradientBg} />
      <div className={styles.dotGrid} />
      <div className={styles.particles} aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + (i % 4) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.container}`}>
        {/* ---- Centered Content ---- */}
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={styles.motionContent}
          >
            {/* Rating Badge */}
            <div className={styles.ratingBadge}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FFB800" color="#FFB800" />
                ))}
              </div>
              <span>4.9/5 · 100+ Happy Clients</span>
            </div>

            {/* Headline */}
            <h1 className={styles.title}>
              Grow Your Business Faster With{' '}
              <span className="text-gradient" style={{ whiteSpace: 'nowrap' }}>Digital Marketing</span>{' '}
              That Delivers Results
            </h1>

            {/* Subtitle — explicit color override */}
            <p className={styles.subtitle}>
              Helping businesses in Vijayawada and across India generate more leads,
              increase revenue, and build powerful brands through strategic digital
              marketing solutions.
            </p>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <CheckCircle size={15} className={styles.checkIcon} />
                100+ Businesses Served
              </div>
              <div className={styles.badge}>
                <CheckCircle size={15} className={styles.checkIcon} />
                Proven Growth Strategies
              </div>
              <div className={styles.badge}>
                <CheckCircle size={15} className={styles.checkIcon} />
                Transparent Reporting
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <Link href="/contact" className="btn-primary">
                Book Free Consultation <ArrowRight size={17} />
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                <PhoneCall size={17} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
