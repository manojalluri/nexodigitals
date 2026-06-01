"use client";

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './ResultsSection.module.css';

const stats = [
  { label: "Lead Growth", value: 350, suffix: "%" },
  { label: "Website Traffic", value: 420, suffix: "%" },
  { label: "Conversion Rate", value: 280, suffix: "%" },
  { label: "Brand Reach", value: 500, suffix: "%" }
];

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeProgress * (to - from) + from));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>+{count}{suffix}</span>;
}

export default function ResultsSection() {
  return (
    <section className={`section-padding ${styles.resultsSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-secondary">Proven <span className="text-gradient">Results</span> That Speak For Themselves</h2>
            <p className={styles.description}>
              We don&apos;t just run campaigns; we build growth engines. Our data-driven approach ensures every rupee spent delivers measurable ROI.
            </p>
          </motion.div>
        </div>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`glass-panel ${styles.statBox}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.statValue}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
