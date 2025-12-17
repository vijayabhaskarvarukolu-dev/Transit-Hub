import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/luxury_sedan_urban_transport.png";

interface HeroSectionProps {
  onBookClick?: () => void;
  onViewServicesClick?: () => void;
}

export default function HeroSection({
  onBookClick,
  onViewServicesClick,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Your Reliable
            <br />
            <span className="text-[#09BC8A]">Transportation</span> Partner
          </h1>
          <p
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Premium rides, professional drivers, and seamless city travel.
            Experience comfort and reliability with every journey.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={onBookClick}
              size="lg"
              className="bg-[#09BC8A] hover:bg-[#08a97d] text-white px-8 py-6 text-base"
              data-testid="button-hero-book"
            >
              Book Your Ride
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={onViewServicesClick}
              variant="outline"
              size="lg"
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-6 text-base"
              data-testid="button-hero-services"
            >
              View Services
            </Button>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#09BC8A]" />
              </div>
              <span className="text-white/90 text-sm">Safe & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#09BC8A]" />
              </div>
              <span className="text-white/90 text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#09BC8A]" />
              </div>
              <span className="text-white/90 text-sm">City-wide Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
