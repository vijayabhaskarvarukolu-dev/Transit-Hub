import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookClick={scrollToContact} />
      <main>
        <HeroSection
          onBookClick={scrollToContact}
          onViewServicesClick={scrollToServices}
        />
        <ServicesSection />
        <PricingSection onSelectPlan={(plan) => {
          console.log("Selected plan:", plan);
          scrollToContact();
        }} />
        <ServiceAreasSection />
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
