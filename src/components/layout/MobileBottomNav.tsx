"use client";

import Link from 'next/link';
import { Phone, MessageCircle, CalendarClock } from 'lucide-react';
import styles from './MobileBottomNav.module.css';

export default function MobileBottomNav() {
  return (
    <div className={styles.bottomNav}>
      <a href="tel:+918886969130" className={styles.navItem}>
        <Phone size={20} />
        <span>Call Now</span>
      </a>
      <a href="https://wa.me/918886969130" target="_blank" rel="noreferrer" className={`${styles.navItem} ${styles.whatsapp}`}>
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <Link href="/contact" className={`${styles.navItem} ${styles.primary}`}>
        <CalendarClock size={20} />
        <span>Book Audit</span>
      </Link>
    </div>
  );
}
