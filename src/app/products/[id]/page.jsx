import ProductClient from "./ProductClient";
import { notFound } from "next/navigation";

// Securely fetch product data by ID, returns null if not found
async function fetchProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Unexpected server error");

  return res.json();
}

// Server component for dynamic product page
const ProductPage = async ({ params }) => {
  const resolvedParams = await params; // unwrap dynamic route params
  const id = resolvedParams?.id;

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
};

export default ProductPage;