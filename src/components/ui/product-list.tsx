"use client";
import type Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState } from "react";

interface ProductListProps {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(term);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sökfält */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for cars..."
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-gray-500 focus:ring-2"
        />
      </div>

      {/* Grid för korten */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
        {filterProduct.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
