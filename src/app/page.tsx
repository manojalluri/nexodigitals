import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import ResultsSection from '@/components/home/ResultsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LeadMagnet from '@/components/home/LeadMagnet';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <ResultsSection />
      <TestimonialsSection />
      <LeadMagnet />
      <FinalCTA />
    </>
  );
}
