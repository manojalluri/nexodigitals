"use client";

import { motion } from 'framer-motion';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  gradientWord?: string;
}

export default function PageHeader({ title, subtitle, gradientWord }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.particles}></div>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>
            {title} {gradientWord && <span className="text-gradient">{gradientWord}</span>}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
      </div>
    </div>
  );
}
