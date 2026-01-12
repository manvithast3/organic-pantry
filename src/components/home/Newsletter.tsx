import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Newsletter subscription section
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you for subscribing!");
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="py-16 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-50" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/20 mb-6">
            <Mail className="h-8 w-8 text-cream" />
          </div>

          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay Fresh & Updated
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Subscribe to get exclusive offers, healthy recipes, and updates on new organic arrivals
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-cream"
            />
            <Button 
              type="submit" 
              variant="hero" 
              className="bg-cream text-primary hover:bg-cream/90"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-primary-foreground/60 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
