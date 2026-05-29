import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import FinalCTA from '@/components/home/FinalCTA';
import styles from './ServiceDetail.module.css';
import { CheckCircle2 } from 'lucide-react';

const servicesData = {
  'seo': {
    title: 'SEO',
    gradientWord: 'Services',
    subtitle: 'Dominate search engine rankings, drive qualified organic traffic, and become the undisputed leader in your industry.',
    features: [
      { title: 'Technical SEO', desc: 'Optimizing site speed, mobile-friendliness, and crawlability.' },
      { title: 'On-Page Optimization', desc: 'Keyword-rich content, meta tags, and structured data.' },
      { title: 'Off-Page SEO', desc: 'High-quality backlink building and local citations.' },
      { title: 'Local SEO', desc: 'Google Business Profile optimization for Vijayawada & beyond.' }
    ],
    pricing: [
      { name: 'Starter SEO', price: '₹9,999/mo', benefits: ['10 Keywords tracked', 'On-page optimization', 'Basic reporting'] },
      { name: 'Growth SEO', price: '₹19,999/mo', benefits: ['30 Keywords tracked', 'Content creation', 'Link building', 'Monthly consultation'] },
    ]
  },
  'google-ads': {
    title: 'Google',
    gradientWord: 'Ads',
    subtitle: 'High-converting pay-per-click campaigns that put your business right in front of customers actively searching for your services.',
    features: [
      { title: 'Search Campaigns', desc: 'Targeting high-intent keywords to drive immediate leads.' },
      { title: 'Display Ads', desc: 'Building brand awareness across millions of websites.' },
      { title: 'Retargeting', desc: 'Bringing back visitors who left without converting.' },
      { title: 'Performance Max', desc: 'Leveraging AI for maximum conversion across all Google channels.' }
    ],
    pricing: [
      { name: 'Standard Management', price: '₹15,000/mo', benefits: ['Up to ₹1L ad spend', 'Search & Display', 'Weekly reporting'] },
      { name: 'Premium Management', price: '₹25,000/mo', benefits: ['Up to ₹5L ad spend', 'All campaign types', 'Conversion tracking setup'] },
    ]
  },
  'meta-ads': {
    title: 'Meta',
    gradientWord: 'Ads',
    subtitle: 'Scalable Facebook and Instagram advertising campaigns designed to generate high-quality leads and explosive growth.',
    features: [
      { title: 'Audience Targeting', desc: 'Laser-focused targeting based on interests, behaviors, and demographics.' },
      { title: 'Creative Development', desc: 'Scroll-stopping ad creatives and compelling copy.' },
      { title: 'Lead Generation', desc: 'Native lead forms to capture inquiries seamlessly.' },
      { title: 'A/B Testing', desc: 'Continuous testing of creatives and audiences to lower cost-per-lead.' }
    ],
    pricing: [
      { name: 'Growth Campaign', price: '₹12,000/mo', benefits: ['Up to ₹50K ad spend', '2 Ad creatives/mo', 'Lead form integration'] },
      { name: 'Scale Campaign', price: '₹20,000/mo', benefits: ['Up to ₹2L ad spend', '5 Ad creatives/mo', 'Advanced retargeting'] },
    ]
  },
  'web-development': {
    title: 'Website',
    gradientWord: 'Development',
    subtitle: 'Custom, lightning-fast, and premium websites built to convert visitors into loyal customers.',
    features: [
      { title: 'Custom UI/UX Design', desc: 'Premium designs tailored to your brand identity.' },
      { title: 'Mobile-First', desc: 'Flawless performance across all devices.' },
      { title: 'SEO Optimized Structure', desc: 'Built from the ground up for maximum search engine visibility.' },
      { title: 'CMS Integration', desc: 'Easy-to-use backend for managing your content.' }
    ],
    pricing: [
      { name: 'Landing Page', price: '₹19,999', benefits: ['Single page design', 'Contact form', 'Mobile responsive', '1-week delivery'] },
      { name: 'Corporate Website', price: '₹45,000', benefits: ['Up to 10 pages', 'Blog setup', 'Basic SEO', 'Analytics integration'] },
    ]
  },
  'social-media': {
    title: 'Social Media',
    gradientWord: 'Management',
    subtitle: 'Build a loyal community, increase brand awareness, and engage with your audience through powerful social media strategies.',
    features: [
      { title: 'Content Strategy', desc: 'Data-driven content calendars aligned with your goals.' },
      { title: 'Visual Design', desc: 'High-quality graphics and short-form video content.' },
      { title: 'Community Management', desc: 'Engaging with followers and responding to comments.' },
      { title: 'Analytics', desc: 'Detailed reporting on reach, engagement, and follower growth.' }
    ],
    pricing: [
      { name: 'Essential Social', price: '₹8,999/mo', benefits: ['12 Posts/month', '2 Platforms', 'Basic reporting'] },
      { name: 'Premium Social', price: '₹15,999/mo', benefits: ['20 Posts/month', '4 Reels/month', '3 Platforms', 'Community management'] },
    ]
  },
  'branding': {
    title: 'Branding &',
    gradientWord: 'Design',
    subtitle: 'Create a memorable and luxurious brand identity that sets you apart from the competition and builds instant trust.',
    features: [
      { title: 'Logo Design', desc: 'Unique, timeless logos that represent your vision.' },
      { title: 'Brand Guidelines', desc: 'Comprehensive manuals for typography, colors, and usage.' },
      { title: 'Marketing Materials', desc: 'Brochures, business cards, and social media templates.' },
      { title: 'Brand Strategy', desc: 'Defining your brand voice, mission, and positioning.' }
    ],
    pricing: [
      { name: 'Brand Starter', price: 'Custom Quote', benefits: ['Logo design', 'Color palette', 'Typography selection'] },
      { name: 'Full Identity', price: 'Custom Quote', benefits: ['Logo + variations', 'Brand book', 'Stationery design', 'Social media kit'] },
    ]
  },
  'lead-generation': {
    title: 'Lead',
    gradientWord: 'Generation',
    subtitle: 'End-to-end multi-channel lead generation systems that provide a consistent flow of qualified prospects.',
    features: [
      { title: 'Omnichannel Strategy', desc: 'Combining SEO, Ads, and Email for maximum reach.' },
      { title: 'Landing Page Optimization', desc: 'High-converting pages dedicated to capturing leads.' },
      { title: 'CRM Integration', desc: 'Seamlessly sending leads to your sales team.' },
      { title: 'Lead Nurturing', desc: 'Automated email/WhatsApp sequences to warm up prospects.' }
    ],
    pricing: [
      { name: 'B2B Lead Gen', price: 'Custom Quote', benefits: ['LinkedIn outreach', 'Cold email campaigns', 'CRM setup'] },
      { name: 'B2C Lead Gen', price: 'Custom Quote', benefits: ['Local SEO', 'Meta Lead Ads', 'WhatsApp automation'] },
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: `${service.title} ${service.gradientWord} | Nexo Digitals`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader 
        title={service.title} 
        gradientWord={service.gradientWord} 
        subtitle={service.subtitle} 
      />
      
      <section className={`section-padding ${styles.contentSection}`}>
        <div className={`container`}>
          <div className={styles.sectionHeader}>
            <h2 className="heading-secondary">What's Included in our <span className="text-gradient">Service</span></h2>
          </div>
          
          <div className={styles.featuresGrid}>
            {service.features.map((feature, i) => (
              <div key={i} className={`glass-panel ${styles.featureCard}`}>
                <CheckCircle2 className={styles.checkIcon} size={28} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.pricingSection}`}>
        <div className={`container`}>
          <div className={styles.sectionHeader}>
            <h2 className="heading-secondary">Transparent <span className="text-gradient">Pricing</span></h2>
            <p className={styles.pricingSub}>Premium services structured for measurable ROI.</p>
          </div>

          <div className={styles.pricingGrid}>
            {service.pricing.map((plan, i) => (
              <div key={i} className={`glass-panel ${styles.pricingCard} ${i === 1 ? styles.popular : ''}`}>
                {i === 1 && <div className={styles.popularBadge}>Most Popular</div>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>{plan.price}</div>
                <ul className={styles.planBenefits}>
                  {plan.benefits.map((benefit, j) => (
                    <li key={j}><CheckCircle2 size={18} className={styles.benefitIcon}/> {benefit}</li>
                  ))}
                </ul>
                <button className={`btn-primary ${styles.planBtn}`}>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
