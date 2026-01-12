import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero section component for the home page
export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with leaf pattern */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 leaf-pattern" />
      
      <div className="container relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Leaf className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">100% Certified Organic</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up">
              Fresh Organic <br />
              <span className="text-cream">Goodness Delivered</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0" style={{ animationDelay: "0.1s" }}>
              From farm to your table. Discover nature's finest organic produce, 
              carefully curated for health-conscious families.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: "0.2s" }}>
              <Link to="/categories">
                <Button variant="hero" size="xl" className="bg-cream text-primary hover:bg-cream/90">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="ghost" size="xl" className="border border-cream/40 text-cream hover:bg-cream/10">
                  View Categories
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-cream/20 animate-float" />
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&h=600&fit=crop"
                alt="Fresh organic produce"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl animate-float"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Leaf, title: "100% Organic", desc: "Certified organic products" },
            { icon: Truck, title: "Free Delivery", desc: "On orders above ₹500" },
            { icon: Shield, title: "Quality Assured", desc: "Farm-fresh guarantee" },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream/20 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-cream" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
