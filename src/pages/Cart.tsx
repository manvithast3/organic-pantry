import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

/**
 * Cart Page Component
 * Shows cart items with quantity controls and checkout option
 */
const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();
  const deliveryFee = totalPrice > 500 ? 0 : 40;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <Layout>
      <div className="container py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Your Cart
          </h1>
          {items.length > 0 && (
            <Button variant="ghost" onClick={clearCart} className="text-destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          )}
        </div>

        {items.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(({ product, quantity }) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary/30 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          ₹{product.price.toFixed(2)} / {product.unit}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="font-medium w-8 text-center">{quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="text-right flex flex-col justify-between">
                        <p className="font-bold text-primary">
                          ₹{(product.price * quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className={deliveryFee === 0 ? "text-primary" : ""}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    {deliveryFee > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Add ₹{(500 - totalPrice).toFixed(2)} more for free delivery
                      </p>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span className="text-primary">₹{finalTotal.toFixed(2)}</span>
                  </div>

                  <Link to="/account">
                    <Button variant="hero" size="lg" className="w-full">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Login required for checkout
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Add some organic goodness to your cart!
            </p>
            <Link to="/categories">
              <Button variant="default" size="lg">
                Start Shopping
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </Layout>
  );
};

export default Cart;
