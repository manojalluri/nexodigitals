"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import styles from './LeadMagnet.module.css';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  businessName: z.string().min(2, 'Business name is required'),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadMagnet() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // In a real app, this would send data to the API / Resend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
  };

  return (
    <section className={`section-padding ${styles.leadMagnet}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <ShieldCheck size={16} /> Free Consultation & Audit
            </div>
            <h2 className={`heading-secondary ${styles.title}`}>
              Get Your <span className="text-gradient">Free Marketing Audit</span> Valued at ₹10,000
            </h2>
            <p className={styles.description}>
              Discover exactly why your competitors are outranking you and get a step-by-step roadmap to dominate your local market in Vijayawada.
            </p>
            
            <ul className={styles.benefits}>
              <li>
                <CheckCircle2 size={24} className={styles.checkIcon} />
                <div>
                  <strong>Comprehensive SEO Analysis</strong>
                  <p>Identify technical issues holding back your website.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={24} className={styles.checkIcon} />
                <div>
                  <strong>Competitor Benchmarking</strong>
                  <p>See exactly what strategies top agencies are using.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 size={24} className={styles.checkIcon} />
                <div>
                  <strong>Custom Growth Roadmap</strong>
                  <p>Actionable steps to increase leads by 300% in 90 days.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className={`glass-panel ${styles.formWrapper}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitSuccessful ? (
              <div className={styles.successMessage}>
                <TrendingUp size={48} className={styles.successIcon} />
                <h3>Request Received!</h3>
                <p>Our growth experts will analyze your digital presence and contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Claim Your Free Audit</h3>
                <p className={styles.formSubtitle}>No commitment required. Limited slots available.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      {...register('name')}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input 
                      type="tel" 
                      placeholder="Phone Number (e.g. 8886969130)" 
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      {...register('phone')}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
                  </div>

                  <div className={styles.inputGroup}>
                    <input 
                      type="email" 
                      placeholder="Work Email Address" 
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      {...register('email')}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                  </div>

                  <div className={styles.inputGroup}>
                    <input 
                      type="text" 
                      placeholder="Business/Company Name" 
                      className={`${styles.input} ${errors.businessName ? styles.inputError : ''}`}
                      {...register('businessName')}
                    />
                    {errors.businessName && <span className={styles.errorText}>{errors.businessName.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className={`btn-primary ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Get My Free Audit Now'}
                  </button>
                  
                  <p className={styles.privacyText}>
                    By submitting, you agree to our Privacy Policy. We never spam.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
