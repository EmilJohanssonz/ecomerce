"use client";
import type Stripe from "stripe";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const ImageCarousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  return (
    <div className="relative w-full h-full">
      {currentProduct.images?.[0] && (
        <Image
          src={currentProduct.images[0]}
          alt={currentProduct.name}
          layout="fill"
          objectFit="cover"
          className="opacity-80 transition-opacity duration-1000"
        />
      )}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-4 py-2 rounded-xl">
        Explore luxury with LuxeCars
      </div>
    </div>
  );
};
