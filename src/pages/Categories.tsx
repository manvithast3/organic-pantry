import { useState, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { CategoryCard } from "@/components/products/CategoryCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/products";

/**
 * Categories Page Component
 * Shows all categories or products from a specific category
 */
const Categories = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  
  // Get current category if viewing a specific one
  const currentCategory = categoryId 
    ? categories.find(c => c.id === categoryId) 
    : null;

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Filter by category
    if (categoryId) {
      result = result.filter(p => p.category === categoryId);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [categoryId, searchQuery]);

  return (
    <Layout onSearch={setSearchQuery}>
      <div className="container py-8">
        {/* Breadcrumb / Back Navigation */}
        {categoryId && (
          <div className="mb-6">
            <Link to="/categories">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
          </div>
        )}

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {currentCategory ? currentCategory.name : "Shop by Category"}
          </h1>
          {currentCategory && (
            <p className="text-muted-foreground mt-2">{currentCategory.description}</p>
          )}
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Show Categories Grid if no specific category selected */}
        {!categoryId && !searchQuery && (
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Products Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {searchQuery 
                ? `Search Results for "${searchQuery}"` 
                : categoryId 
                  ? "Products" 
                  : "All Products"}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </Layout>
  );
};

export default Categories;
