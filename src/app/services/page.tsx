import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ServicesPreview from "@/components/home/ServicesPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Nexo Digitals",
  description: "Explore our premium digital marketing services including SEO, Google Ads, Meta Ads, Website Development, and Lead Generation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Digital Marketing"
        gradientWord="Services"
        subtitle="Comprehensive data-driven marketing solutions engineered to scale your business, generate qualified leads, and maximize your ROI."
      />
      <ServicesPreview />
      <FinalCTA />
    </>
  );
}
