"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PageHeader from "@/components/layout/PageHeader";
import { Mail, MapPin, Phone, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  businessName: z.string().min(2, 'Business name is required'),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
  date: z.string().min(1, 'Please select a preferred date'),
  time: z.string().min(1, 'Please select a preferred time'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulated API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSuccess(true);
  };

  return (
    <>
      <PageHeader 
        title="Get In"
        gradientWord="Touch"
        subtitle="Ready to scale your business? Book a free strategy session with our growth experts."
      />
      
      <section className="section-padding" style={{ backgroundColor: 'var(--premium-black)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', alignItems: 'flex-start' }}>
            {/* Using inline styles to simulate module CSS for brevity since this is the contact page */}
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: 'var(--white)' }}>Contact Information</h3>
                  <p style={{ color: 'var(--muted-text)', lineHeight: 1.6, marginBottom: '32px' }}>Fill out the form to schedule your free marketing audit, or reach out to us directly through the channels below.</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,102,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>Phone Number</div>
                      <a href="tel:+918886969130" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>+91 88869 69130</a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>WhatsApp</div>
                      <a href="https://wa.me/918886969130" target="_blank" rel="noreferrer" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>Message Us</a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,122,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>Email Address</div>
                      <a href="mailto:nexodigitals00@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>nexodigitals00@gmail.com</a>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>Office Address</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--white)' }}>Vijayawada, AP, India</div>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '20px', padding: '24px', background: 'var(--dark-navy)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ color: 'var(--white)', marginBottom: '12px' }}>Working Hours</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted-text)', marginBottom: '8px' }}>
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted-text)' }}>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '40px' }}>
                {isSuccess ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <Calendar size={64} style={{ color: 'var(--success)', margin: '0 auto 24px' }} />
                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Booking Confirmed!</h3>
                    <p style={{ color: 'var(--muted-text)', lineHeight: 1.6 }}>We have received your request for a strategy session. Check your email and WhatsApp for confirmation details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '10px' }}>Book Your Consultation</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input type="text" placeholder="Full Name" style={inputStyle} {...register('name')} />
                        {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input type="tel" placeholder="Phone Number" style={inputStyle} {...register('phone')} />
                        {errors.phone && <span style={errorStyle}>{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input type="text" placeholder="Business Name" style={inputStyle} {...register('businessName')} />
                        {errors.businessName && <span style={errorStyle}>{errors.businessName.message}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <select style={inputStyle} {...register('service')}>
                        <option value="" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Service Required</option>
                        <option value="seo" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>SEO</option>
                        <option value="ads" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Google / Meta Ads</option>
                        <option value="web" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Website Development</option>
                        <option value="social" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Social Media</option>
                        <option value="branding" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Branding</option>
                        <option value="other" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Other</option>
                      </select>
                      {errors.service && <span style={errorStyle}>{errors.service.message}</span>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <select style={inputStyle} {...register('budget')}>
                        <option value="" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Budget Range</option>
                        <option value="<10k" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>Less than ₹10,000</option>
                        <option value="10k-30k" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>₹10,000 - ₹30,000</option>
                        <option value="30k-1L" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>₹30,000 - ₹1,00,000</option>
                        <option value=">1L" style={{ background: 'var(--premium-black)', color: 'var(--white)' }}>₹1,00,000+</option>
                      </select>
                      {errors.budget && <span style={errorStyle}>{errors.budget.message}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input type="date" style={inputStyle} {...register('date')} />
                        {errors.date && <span style={errorStyle}>{errors.date.message}</span>}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input type="time" style={inputStyle} {...register('time')} />
                        {errors.time && <span style={errorStyle}>{errors.time.message}</span>}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <textarea placeholder="Message / Specific Requirements" rows={4} style={{...inputStyle, resize: 'vertical'}} {...register('message')} />
                    </div>

                    <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ padding: '16px', fontSize: '1.1rem', width: '100%' }}>
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
      

    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  background: 'rgba(255, 255, 255, 0.03)',
  color: 'var(--white)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem', /* 16px */
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

const errorStyle = {
  color: '#ef4444',
  fontSize: '0.8rem'
};
