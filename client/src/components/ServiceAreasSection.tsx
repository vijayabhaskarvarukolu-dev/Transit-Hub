import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Check, Phone, Clock } from "lucide-react";

// todo: remove mock functionality - replace with real data from API
const serviceAreas = [
  "Downtown Financial District",
  "International Airport",
  "Convention Center",
  "University District",
  "Midtown Business Park",
  "Central Station",
  "Waterfront District",
  "Tech Hub Campus",
];

const operatingInfo = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Available around the clock",
  },
  {
    icon: MapPin,
    title: "City-wide Coverage",
    description: "50+ mile service radius",
  },
  {
    icon: Phone,
    title: "Quick Response",
    description: "Average 8 min pickup time",
  },
];

export default function ServiceAreasSection() {
  return (
    <section
      id="areas"
      className="py-20 bg-background"
      data-testid="section-areas"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-areas-title"
          >
            Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We cover all major destinations across the metropolitan area with
            reliable, on-time service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="overflow-hidden border-border">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-[#09BC8A]/10 to-[#276EF1]/10 h-80 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-2 border-dashed border-[#09BC8A]/30 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#276EF1]/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#09BC8A]/50 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#09BC8A] flex items-center justify-center shadow-lg">
                          <MapPin className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-8 left-12 w-3 h-3 rounded-full bg-[#09BC8A] animate-pulse"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-20 right-16 w-2 h-2 rounded-full bg-[#276EF1]"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-16 left-20 w-2 h-2 rounded-full bg-[#276EF1] animate-pulse"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-24 right-24 w-3 h-3 rounded-full bg-[#09BC8A]"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-muted-foreground/50"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-muted-foreground/50"
                  aria-hidden="true"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  data-testid={`area-item-${index}`}
                >
                  <Check className="w-5 h-5 text-[#09BC8A] flex-shrink-0" />
                  <span className="text-sm text-foreground">{area}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {operatingInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-muted/30"
                >
                  <div className="w-10 h-10 rounded-full bg-[#09BC8A]/10 flex items-center justify-center mx-auto mb-2">
                    <info.icon className="w-5 h-5 text-[#09BC8A]" />
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {info.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
