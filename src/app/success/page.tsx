"use client";
import { useEffect } from "react";
import { useCartStore } from "../../../store/cart-store";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for choosing
          <span className="font-semibold">LuxeCars</span>.
        </p>
        <p className="text-gray-600 mb-6">
          Your order is being processed. You will receive a confirmation email
          shortly.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
