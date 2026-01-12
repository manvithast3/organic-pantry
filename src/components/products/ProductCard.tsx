import { ShoppingCart, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

// Product card component for displaying individual products
export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  // Handle adding product to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className={cn(
      "group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-organic",
      className
    )}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Organic Badge */}
        {product.organic && (
          <Badge className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm">
            <Leaf className="h-3 w-3 mr-1" />
            Organic
          </Badge>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <Badge className="absolute top-2 right-2 bg-terracotta">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm text-muted-foreground">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xs text-muted-foreground">/{product.unit}</span>
        </div>

        {/* Add to Cart Button */}
        <Button 
          variant="organic" 
          size="sm" 
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardContent>
    </Card>
  );
}
