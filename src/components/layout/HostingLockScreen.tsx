"use client";

import React, { useEffect } from "react";
import { Server, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./HostingLockScreen.module.css";

export default function HostingLockScreen() {
  useEffect(() => {
    // Disable scrolling when the overlay is active
    document.body.style.overflow = "hidden";
    
    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={styles.overlayWrapper}>
      <motion.div 
        className={styles.glassCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={styles.iconContainer}>
          <Server size={40} className={styles.icon} />
          <div className={styles.warningBadge}>
            <AlertTriangle size={16} />
          </div>
        </div>
        
        <h1 className={styles.title}>🚧 Website Temporarily Unavailable</h1>
        
        <p className={styles.description}>
          This website is currently deployed using a <strong>Free Hosting Plan</strong>.
        </p>

        <p className={styles.subtitle}>
          To continue accessing this application, please choose one of the following:
        </p>
        
        <ul className={styles.optionsList}>
          <li>• Upgrade this website to a dedicated Vercel Pro plan.</li>
          <li className={styles.orText}>OR</li>
          <li>• Add this project to your existing Vercel Pro Team/Pro account.</li>
        </ul>

        <p className={styles.footerText}>
          Once the hosting has been upgraded, the website will become fully accessible.
        </p>
        <p className={styles.footerTextSmall}>
          For assistance, please contact the website owner.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            Upgrade Hosting
          </button>
          <button className={styles.secondaryButton}>
            Contact Owner
          </button>
        </div>
      </motion.div>
    </div>
  );
}
