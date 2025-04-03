"use client";
import type Stripe from "stripe";
import { ProductCard } from "./product-card";
import { useState, useEffect } from "react";

interface ProductListProps {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const filterProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(term);
  });

  // Handle search with a delay to simulate loading
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // Simulate a 300ms delay

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8 opacity-0 animate-fadeIn">
      {/* Search Field */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Find your dream car..."
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-lg focus:outline-none focus:ring-gray-500 focus:ring-2 transition-all duration-300"
        />
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center py-4">
          <img
            src="/Processing Buffering GIF by Mashable.gif"
            alt="Loading..."
            className="h-12 w-12"
          />
        </div>
      )}

      {/* Grid for Cards */}
      {!loading && filterProduct.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 transition-opacity duration-300">
          {filterProduct.map((product) => (
            <li
              key={product.id}
              className="transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && (
          <p className="text-center text-gray-500 text-lg mt-8">
            🚗 No luxury cars found. Try another search.
          </p>
        )
      )}
    </div>
  );
};
