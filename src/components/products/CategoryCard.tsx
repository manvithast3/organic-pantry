import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

// Category card component for displaying product categories
export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className={cn(
        "group relative overflow-hidden border-0 h-48 cursor-pointer transition-all duration-300 hover:shadow-organic-lg",
        className
      )}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-4">
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
            {category.name}
          </h3>
          <p className="text-sm text-primary-foreground/80 line-clamp-1 mb-2">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <span className="text-sm font-medium">
              {category.productCount} products
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
