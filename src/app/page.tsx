import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carasel";
import { stripe } from "@/lib/stripe/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // Fetch products from Stripe
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(products);
  return (
    <div>
      <section
        className="rounded  py-8 sm:py-12"
        style={{
          background: "linear-gradient(to bottom, #f8f8f8, #e6e6e6)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold font-mono  tracking-light md:text-4xl">
              Welcome to LuxeCars
            </h2>
            <p className="text-neutral-600">The best selling sport car.</p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-neutral-300"
            >
              <Link
                href="/products"
                className="bg-gray-200 text-gray-800 shadow-md hover:bg-gray-300 transition-all duration-300"
              >
                Browse all products
              </Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
            className="rounded"
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
