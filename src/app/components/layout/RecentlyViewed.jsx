import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=12", {
    cache: "no-store", // اگر نخوای کش بشه
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function RecentlyViewed() {
  const data = await getProducts();
  const products = data.products;
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Recently Viewed</h2>

      <div
        className="
          flex gap-4 overflow-x-auto pb-4
          snap-x snap-mandatory
          lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-visible
        "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              min-w-55 snap-start
              border rounded-xl p-4 hover:shadow-lg transition
              lg:min-w-0
            "
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative w-full h-28 mb-4">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-medium line-clamp-2 mb-2 hover:underline">
                {product.title}
              </h3>

              <p className="text-xs text-gray-500">Price</p>
              <p className="font-semibold">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
