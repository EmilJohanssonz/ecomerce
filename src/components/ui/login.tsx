"use client";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/ui/loginCaracel";
import type Stripe from "stripe";

interface Props {
  products: Stripe.Product[];
}

export default function LoginPageSplit({ products }: Props) {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div
        className={`relative w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-2xl border border-gray-300 ${
          isRegister ? "flex-row-reverse" : ""
        }`}
      >
        {/* Bildcarousel */}
        <div className="w-1/2 hidden lg:block relative">
          <ImageCarousel products={products} />
        </div>

        {/* Formulär */}
        <motion.div
          initial={{ opacity: 0, x: isRegister ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-white px-8 py-12"
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6 tracking-wide">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h2>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
              required
            />
            {isRegister && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
                required
              />
            )}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition font-semibold text-lg"
            >
              {isRegister ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Social */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm">
              <FaGoogle /> Google
            </button>
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition text-sm">
              <FaFacebook /> Facebook
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="text-gray-800 font-semibold hover:underline ml-1"
              >
                {isRegister ? "Login" : "Register"}
              </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
