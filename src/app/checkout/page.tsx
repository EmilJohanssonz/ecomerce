"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "../../../store/cart-store";
import { Button } from "@/components/ui/button";
import { CheckoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, addItem, removeItem , clearCart} = useCartStore();
  const [removingItemId, setRemovingItemId] = useState<string | null>(null);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleRemoveItem = (id: string) => {
    setRemovingItemId(id); // Set the item to be removed
    setTimeout(() => {
      removeItem(id); // Remove the item after the animation
      setRemovingItemId(null); // Reset the state
    }, 300); // Match the animation duration
  };

  const handleAddItem = (item: (typeof items)[0]) => {
    const existingItem = items.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      addItem(item); // Add the item only if it doesn't already exist
    }
  };

  if (total === 0 || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-gray-600">
          Your cart is empty...
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <Card className="shadow-lg p-6 max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`flex justify-between items-center border-b pb-4 transition-opacity duration-300 ${
                  removingItemId === item.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <div>
                  <span className="text-lg font-medium">{item.name}</span>
                  <p className="text-gray-600">
                    {((item.price * item.quantity) / 100).toFixed(2)}€
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    className="px-4 py-2 text-xl"
                    disabled={item.quantity === 0}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    className="px-4 py-2 text-xl"
                    onClick={() => handleAddItem(item)}
                    disabled={item.quantity > 0}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <form action={CheckoutAction} className="mt-6 text-right">
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            <p className="text-xl font-bold">
              Total: {(total / 100).toFixed(2)}€
            </p>
            <Button className="mt-4 w-full bg-black text-white py-2">
              Proceed to Payment
            </Button>
            <Button
              onClick={() => clearCart()}
              variant="default"
              className="mt-4 w-full bg-red-600 text-white py-2"
            >
              Clear Cart
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
