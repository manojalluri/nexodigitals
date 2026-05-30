import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Nexo Digitals Logo" width={80} height={80} className={styles.logoImage} unoptimized />
            <div className={styles.logoText}>
              <span className={styles.logoTextNexo}>
                NE
                <span className={styles.xWrapper}>
                  <span className={styles.xBlueLine}></span>
                  <span className={styles.xOrangeLine}></span>
                </span>
                O
              </span>
              <span className={styles.logoTextDigitals}>Digitals</span>
            </div>
          </Link>
          <p className={styles.description}>
            Helping businesses in Vijayawada and across India generate more leads, increase revenue, and build powerful brands through strategic digital marketing solutions.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><FaFacebookF size={18} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube"><FaYoutube size={18} /></a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.linkList}>
            <li><Link href="/services/seo">SEO Services</Link></li>
            <li><Link href="/services/google-ads">Google Ads</Link></li>
            <li><Link href="/services/meta-ads">Meta Ads</Link></li>
            <li><Link href="/services/web-development">Website Development</Link></li>
            <li><Link href="/services/branding">Branding</Link></li>
            <li><Link href="/services/lead-generation">Lead Generation</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <a href="tel:+918886969130">+91 88869 69130</a>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <a href="mailto:nexodigitals00@gmail.com">nexodigitals00@gmail.com</a>
            </li>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} Nexo Digitals. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
