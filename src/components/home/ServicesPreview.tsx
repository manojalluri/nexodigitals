"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, BarChart2, Share2, Code, PenTool, Target } from 'lucide-react';
import styles from './ServicesPreview.module.css';

const services = [
  {
    title: "SEO Services",
    desc: "Rank higher on Google and drive organic traffic that converts into paying customers.",
    icon: <Search size={32} />,
    href: "/services/seo"
  },
  {
    title: "Google Ads",
    desc: "High-ROI paid search campaigns targeting users actively looking for your services.",
    icon: <Target size={32} />,
    href: "/services/google-ads"
  },
  {
    title: "Meta Ads",
    desc: "Advanced Facebook & Instagram advertising to scale your brand awareness and leads.",
    icon: <BarChart2 size={32} />,
    href: "/services/meta-ads"
  },
  {
    title: "Social Media",
    desc: "Engaging content and community management to build a loyal audience.",
    icon: <Share2 size={32} />,
    href: "/services/social-media"
  },
  {
    title: "Website Development",
    desc: "Premium, fast, and SEO-optimized websites designed to maximize conversions.",
    icon: <Code size={32} />,
    href: "/services/web-development"
  },
  {
    title: "Branding & Design",
    desc: "Logo design, brand identity, and marketing materials that make you stand out.",
    icon: <PenTool size={32} />,
    href: "/services/branding"
  }
];

export default function ServicesPreview() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={`heading-primary ${styles.title}`}>Our Premium <span className="text-gradient">Services</span></h2>
          <p className={styles.subtitle}>Comprehensive digital marketing solutions tailored to accelerate your business growth.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardBottom}>
                <Link href={service.href} className={styles.learnMore}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
