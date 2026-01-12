import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/layout/Footer";

/**
 * Home Page Component
 * Main landing page with hero, featured products, categories, and more
 */
const Index = () => {
  const navigate = useNavigate();
  
  // Handle search from header
  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/categories?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Layout onSearch={handleSearch}>
      {/* Hero Section with main banner */}
      <HeroSection />
      
      {/* Featured Products Grid */}
      <FeaturedProducts />
      
      {/* Shop by Category Section */}
      <CategoriesSection />
      
      {/* Why Choose Us Features */}
      <WhyChooseUs />
      
      {/* Newsletter Subscription */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Index;
