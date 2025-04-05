"use client";

import type Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./card";
import { useEffect, useState } from "react";
import Image from "next/image";

 export interface CarouselProps {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: CarouselProps) => {
  const [current, setCurrent] = useState<number>(0);


  // en timer som byter produkt var 3:e sekund
  // och sätter current till nästa produkt i listan
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length); // loopar tillbaka till 0 när den når slutet av listan
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);


  // om det inte finns några produkter så returnera den första produkten
  // hämtar listan från stripe
  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card
      className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-105 p-4"
      style={{
        background: "linear-gradient(to bottom, #f8f8f8, #e6e6e6)",
      }}
    >
      {currentProduct.images?.[0] && (
        <div className="relative w-full h-[30rem]">
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full opacity-70"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-center p-6 transition-opacity duration-300 hover:bg-opacity-80">
        <CardTitle className="text-black text-3xl font-bold drop-shadow-lg">
          {currentProduct.name}
        </CardTitle>
        {price?.unit_amount && (
          <p className="text-lg text-black font-semibold mt-2">
            {(price.unit_amount / 100).toFixed(2)}€
          </p>
        )}
      </CardContent>
    </Card>
  );
};
