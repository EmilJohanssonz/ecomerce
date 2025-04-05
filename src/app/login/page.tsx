import LoginPageSplit from "@/components/ui/login";
import { stripe } from "@/lib/stripe/stripe";

export default async function Page() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return <LoginPageSplit products={products.data} />;
}
