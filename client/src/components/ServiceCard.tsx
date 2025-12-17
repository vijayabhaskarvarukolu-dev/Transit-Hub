import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  capacity: string;
  routes: string[];
  startingPrice: string;
  popular?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  capacity,
  routes,
  startingPrice,
  popular,
}: ServiceCardProps) {
  return (
    <Card
      className="relative group transition-shadow duration-300 hover:shadow-lg border-border"
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {popular && (
        <Badge
          className="absolute -top-2 right-4 bg-[#09BC8A] text-white border-0"
          data-testid="badge-popular"
        >
          Popular
        </Badge>
      )}
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-xl bg-[#09BC8A]/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-[#09BC8A]" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>On-demand</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Popular Routes
          </p>
          <div className="flex flex-wrap gap-2">
            {routes.map((route, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs font-normal"
              >
                {route}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Starting from</p>
          <p className="text-2xl font-bold text-foreground">
            {startingPrice}
            <span className="text-sm font-normal text-muted-foreground">
              /trip
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
