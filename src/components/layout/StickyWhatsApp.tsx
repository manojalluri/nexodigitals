"use client";
import { MessageCircle } from 'lucide-react';
import styles from './StickyWhatsApp.module.css';

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/918886969130"
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappFloat}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
