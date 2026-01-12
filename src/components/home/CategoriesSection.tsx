import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/products/CategoryCard";
import { categories } from "@/data/products";

// Categories showcase section for home page
export function CategoriesSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
            Explore our wide range of organic products, from fresh produce to pantry essentials
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Browse All Link */}
        <div className="mt-10 text-center">
          <Link to="/categories">
            <Button variant="default" size="lg">
              Browse All Categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
