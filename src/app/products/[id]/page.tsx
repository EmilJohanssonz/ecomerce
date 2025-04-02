import { ProductDetail } from "@/components/ui/product-details";
import { stripe } from "@/lib/stripe/stripe";

export default async function ProductPageID({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProdcut = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProdcut} />;
}
