import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

// Featured products section for home page
export function FeaturedProducts() {
  // Get first 8 products as featured
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground mt-2">
              Handpicked organic goodness for your family
            </p>
          </div>
          <Link to="/categories" className="hidden sm:block">
            <Button variant="ghost" className="group">
              View All
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/categories">
            <Button variant="outline" className="w-full max-w-xs">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
