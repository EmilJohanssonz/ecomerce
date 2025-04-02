import Link from "next/link";
import type Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { Button } from "./button";

interface ProductCardProps {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-sm h-[40rem] p-4 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
        {product.images?.[0] && (
          <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        )}
        <CardHeader className="p-5 bg-white">
          <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
            {product.name}
          </CardTitle>
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            {product.description && (
              <p className="text-gray-600 text-sm mb-3 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {product.description}
              </p>
            )}
            {price?.unit_amount && (
              <p className="text-lg font-bold text-gray-900">
                {(price.unit_amount / 100).toFixed(2)}€
              </p>
            )}
            <Button className="mt-4 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
              View Details
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
