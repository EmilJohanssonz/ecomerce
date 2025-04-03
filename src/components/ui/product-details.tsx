"use client";
import type Stripe from "stripe";
import Image from "next/image";
import { Button } from "./button";
import { useCartStore } from "../../../store/cart-store";

interface ProductDetailProps {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const CartItem = items.find((item) => item.id === product.id);
  const quantity = CartItem ? CartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="pt-4 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 items-center bg-white shadow-lg rounded-lg overflow-hidden opacity-0 animate-fadeIn">
      {product.images?.[0] && (
        <div className="relative w-full md:w-1/2 h-96 overflow-hidden rounded-lg shadow-lg backdrop-blur-lg bg-white/20 border border-gray-200">
          <Image
            alt={product.name}
            src={product.images[0]}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      )}
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h1 className="text-4xl font-bold font-sans text-gray-900 mb-6">
          {product.name}
        </h1>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed tracking-wide">
          {product.description}
        </p>
        {price?.unit_amount && (
          <p className="text-2xl text-gray-900 font-semibold mb-6">
            Price: {(price.unit_amount / 100).toFixed(2)}€
          </p>
        )}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="px-5 py-2 text-xl rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 transition-all duration-300"
            disabled={quantity === 0}
            onClick={() => removeItem(product.id)}
          >
            -
          </Button>
          <span className="text-xl font-semibold transition-all duration-300 transform scale-100 hover:scale-110">{quantity}</span>
          <Button
            variant="outline"
            className="px-5 py-2 text-xl rounded-lg border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 transition-all duration-300"
            onClick={onAddItem}
            disabled={quantity > 0}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
