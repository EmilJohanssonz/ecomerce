import { ProductList } from "@/components/ui/product-list";
import { stripe } from "@/lib/stripe/stripe";

export default async function ProductPage() {
  // Fetch products from Stripe
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="pb-8">
      <h1 className="text-3xl font-bold font-mono leading-none tracking-light text-foreground text-center mb-8">
       Luxury Cars
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
