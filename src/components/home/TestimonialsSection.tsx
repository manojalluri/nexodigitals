"use client";

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Sharma Clinics",
    text: "Nexo Digitals completely transformed our online presence. Our patient inquiries increased by 300% within the first 3 months. Highly recommended for healthcare marketing.",
    rating: 5,
  },
  {
    name: "Priya Reddy",
    company: "Elite Real Estate",
    text: "The lead generation campaigns run by Nexo are top-notch. We closed 5 properties just from the Facebook ads they managed last month.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "TechStart Solutions",
    text: "Their website development and SEO services are incredible. We now rank #1 for our main keywords in Vijayawada. Best agency experience so far.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const scrollTo = (index: number) => {
    if (!scrollContainerRef.current) return;
    const { clientWidth } = scrollContainerRef.current;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth'
    });
  };

  const scrollPrev = () => {
    if (activeIndex > 0) scrollTo(activeIndex - 1);
  };

  const scrollNext = () => {
    if (activeIndex < testimonials.length - 1) scrollTo(activeIndex + 1);
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    
    const handleScroll = () => {
      if (!currentRef) return;
      const { scrollLeft, clientWidth } = currentRef;
      const newIndex = Math.round(scrollLeft / clientWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section className={`section-padding ${styles.testimonials}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className="heading-secondary">What Our <span className="text-gradient">Clients</span> Say</h2>
          <p className={styles.subtitle}>Don&apos;t just take our word for it. Here is what business owners have to say about working with Nexo Digitals.</p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.grid} ref={scrollContainerRef}>
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`glass-panel ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-orange)" color="var(--accent-orange)" />
                ))}
              </div>

              <p className={styles.text}>&quot;{testimonial.text}&quot;</p>
              
              <div className={styles.author}>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.company}>{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
          </div>

          <div className={styles.controls}>
            <button 
              className={`${styles.arrowBtn} ${activeIndex === 0 ? styles.disabled : ''}`} 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className={styles.pagination}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
              className={`${styles.arrowBtn} ${activeIndex === testimonials.length - 1 ? styles.disabled : ''}`} 
              onClick={scrollNext}
              disabled={activeIndex === testimonials.length - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
