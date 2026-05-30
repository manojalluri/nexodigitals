"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Nexo Digitals Logo" width={60} height={60} className={styles.logoImage} priority unoptimized />
          <div className={styles.logoText}>
            <span className={styles.logoTextNexo}>
              NE
              <svg viewBox="0 0 100 100" className={styles.svgX} aria-label="X">
                <path d="M 0,0 L 35,0 L 100,100 L 65,100 Z" fill="var(--primary-blue)" />
                <path d="M 65,0 L 100,0 L 35,100 L 0,100 Z" fill="var(--accent-orange)" />
              </svg>
              O
            </span>
            <span className={styles.logoTextDigitals}>Digitals</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className={styles.navActions}>
          {/* CTA — only on desktop via CSS */}
          <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>
            Book Consultation
          </Link>

          {/* Hamburger — hidden on desktop via CSS */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Quick Actions */}
            <div className={styles.mobileContactRow}>
              <a href="tel:+918886969130" className={styles.mobileContactBtn}>
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/918886969130" target="_blank" rel="noreferrer" className={styles.mobileContactBtn}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            <div className={styles.mobileActions}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
