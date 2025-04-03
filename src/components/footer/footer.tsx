"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="text-black py-12"
      style={{
        background: "linear-gradient(to bottom, #f0f0f0, #d6d6d6)",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-lg text-gray-700 tracking-wide uppercase font-mono">
          LuxeCars
        </div>

        <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Product
          </Link>
          <Link
            href="/checkout"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Checkout
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="text-gray-600 text-center mt-6 md:mt-0">
          <p>
            Email:
            <span className="font-medium text-gray-800">
              support@luxecars.com
            </span>
          </p>
          <p>
            Phone:
            <span className="font-medium text-gray-800">+46 123 456 789</span>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-110"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-300 transform hover:scale-110"
          >
            <FaTwitter size={22} />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} LuxeCars. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
