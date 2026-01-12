import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

// Import pages
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

// Create React Query client
const queryClient = new QueryClient();

/**
 * Main App Component
 * Sets up providers and routing for the organic food store
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Index />} />
            
            {/* Categories - all categories or specific category */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryId" element={<Categories />} />
            
            {/* Shopping Cart */}
            <Route path="/cart" element={<Cart />} />
            
            {/* User Account (Login/Register/Profile/Orders) */}
            <Route path="/account" element={<Account />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
