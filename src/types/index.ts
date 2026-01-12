// Product type definition
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  inStock: boolean;
  organic: boolean;
  rating: number;
}

// Category type definition
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

// Cart item type
export interface CartItem {
  product: Product;
  quantity: number;
}

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

// Order type
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
  shippingAddress: string;
}
