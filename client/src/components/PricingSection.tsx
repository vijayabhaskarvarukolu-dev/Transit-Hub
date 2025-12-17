import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

// todo: remove mock functionality - replace with real data from API
const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    price: "$2.50",
    unit: "/mile",
    description: "Affordable everyday rides",
    features: [
      "Economy vehicles",
      "City-wide pickup",
      "Standard wait time",
      "Basic trip insurance",
    ],
    buttonText: "Select Standard",
  },
  {
    name: "Premium",
    price: "$4.00",
    unit: "/mile",
    description: "Comfort and style combined",
    features: [
      "Luxury sedans & SUVs",
      "Priority pickup",
      "Extended wait time",
      "Premium insurance",
      "Professional drivers",
    ],
    popular: true,
    buttonText: "Select Premium",
  },
  {
    name: "Business",
    price: "$5.50",
    unit: "/mile",
    description: "For corporate travelers",
    features: [
      "Executive vehicles",
      "Instant pickup",
      "Flexible scheduling",
      "Full coverage insurance",
      "Invoice billing",
      "Dedicated support",
    ],
    buttonText: "Contact Sales",
  },
];

interface PricingSectionProps {
  onSelectPlan?: (plan: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="py-20 bg-muted/30"
      data-testid="section-pricing"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-pricing-title"
          >
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, clear pricing with no hidden fees. Choose the tier that fits
            your travel style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${
                tier.popular
                  ? "border-[#09BC8A] border-2 shadow-lg"
                  : "border-border"
              }`}
              data-testid={`card-pricing-${tier.name.toLowerCase()}`}
            >
              {tier.popular && (
                <Badge
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#09BC8A] text-white border-0 px-4"
                  data-testid="badge-most-popular"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.unit}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#09BC8A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => onSelectPlan?.(tier.name)}
                  className={`w-full ${
                    tier.popular
                      ? "bg-[#09BC8A] hover:bg-[#08a97d] text-white"
                      : "bg-primary text-primary-foreground"
                  }`}
                  data-testid={`button-select-${tier.name.toLowerCase()}`}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Base fare of $5.00 applies to all rides. Prices may vary during peak
            hours.
          </p>
        </div>
      </div>
    </section>
  );
}
