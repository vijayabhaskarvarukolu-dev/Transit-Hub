import ServiceCard from "../ServiceCard";
import { Car } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ServiceCard
        icon={Car}
        title="Executive Sedan"
        description="Luxury sedan service for business travelers and executives."
        capacity="3 passengers"
        routes={["Airport", "Downtown", "Business District"]}
        startingPrice="$35"
        popular
      />
    </div>
  );
}
