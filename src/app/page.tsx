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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nexo Digitals",
            "image": "https://nexodigitals.vercel.app/logo.png",
            "@id": "https://nexodigitals.vercel.app",
            "url": "https://nexodigitals.vercel.app",
            "telephone": "+918886969130",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vijayawada",
              "addressRegion": "Andhra Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 16.506174,
              "longitude": 80.648015
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            }
          })
        }}
      />
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
