import ServiceCard from "./ServiceCard";
import { Car, Bus, Truck, Users } from "lucide-react";

// todo: remove mock functionality - replace with real data from API
const services = [
  {
    icon: Car,
    title: "Executive Sedan",
    description:
      "Luxury sedan service for business travelers and executives. Comfortable, reliable, and professional.",
    capacity: "3 passengers",
    routes: ["Airport", "Downtown", "Hotels"],
    startingPrice: "$35",
    popular: true,
  },
  {
    icon: Users,
    title: "Premium SUV",
    description:
      "Spacious SUV for families or groups. Perfect for airport pickups with extra luggage space.",
    capacity: "6 passengers",
    routes: ["Airport", "Suburbs", "Events"],
    startingPrice: "$55",
  },
  {
    icon: Bus,
    title: "Shuttle Service",
    description:
      "Scheduled shuttle routes between major destinations. Affordable and convenient.",
    capacity: "12 passengers",
    routes: ["Airport Express", "City Loop", "Station"],
    startingPrice: "$15",
  },
  {
    icon: Truck,
    title: "Van Service",
    description:
      "Large capacity van for group travel, corporate events, or team transportation needs.",
    capacity: "8 passengers",
    routes: ["Corporate", "Events", "Tours"],
    startingPrice: "$75",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Transportation Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional transportation options
            designed to meet your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
