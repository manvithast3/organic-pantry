import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types";
import { toast } from "sonner";

// Define the shape of our cart context
interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component that wraps the app
export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize cart from localStorage if available
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("organic-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("organic-cart", JSON.stringify(items));
  }, [items]);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // If product already in cart, increase quantity
        toast.success(`Added another ${product.name} to cart`);
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If product not in cart, add it with quantity 1
      toast.success(`${product.name} added to cart`);
      return [...currentItems, { product, quantity: 1 }];
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: string) => {
    setItems((currentItems) => {
      const item = currentItems.find((i) => i.product.id === productId);
      if (item) {
        toast.info(`${item.product.name} removed from cart`);
      }
      return currentItems.filter((item) => item.product.id !== productId);
    });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  // Get total number of items in cart
  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price of all items in cart
  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
