import { Leaf, Heart, Truck, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Features/benefits data
const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All products are certified organic, free from harmful chemicals and pesticides",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Nutrient-rich foods to support your health and wellness journey",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to ensure freshness at your doorstep",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality checks to maintain the highest standards",
  },
  {
    icon: Users,
    title: "Local Farmers",
    description: "Supporting local farming communities and sustainable practices",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Farm-to-table freshness with daily restocking of produce",
  },
];

// Why choose us section component
export function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            We're committed to bringing you the finest organic products with care and dedication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-organic"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
