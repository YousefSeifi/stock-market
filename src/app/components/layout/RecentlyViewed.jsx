import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Pop Mart LABUBU Time to Chill Vinyl Plush Doll",
    price: "€55",
    image: "/images/product1.avif",
    href: "/pop-mart-labubu-time-to-chill-vinyl-plush-doll",
  },
  {
    id: 2,
    title: "Nintendo Switch 2 MarioKart World Console Bundle",
    price: "€413",
    image: "/images/product2.avif",
    href: "/nintendo-switch-2-mariokart-world-console-bundle-6614325",
  },
  {
    id: 3,
    title: "Jordan 1 Retro High '85 OG Bred (2025)",
    price: "€118",
    image: "/images/product3.avif",
    href: "/air-jordan-1-retro-high-85-bred",
  },
  {
    id: 4,
    title: "Jordan 5 Retro OG Black Metallic Reimagined",
    price: "€192",
    image: "/images/product4.avif",
    href: "/air-jordan-5-retro-og-black-metallic-reimagined",
  },
  {
    id: 5,
    title: "Jordan 3 Retro Black Cat (2025)",
    price: "€212",
    image: "/images/product5.avif",
    href: "/air-jordan-3-retro-black-cat-2025",
  },
  {
    id: 6,
    title: "Versace V-Legend Chrono Eco Ceramic VE9L00224",
    price: "€736",
    image: "/images/product6.avif",
    href: "/versace-v-legend-chrono-eco-ceramic-ve9l00224-black-guilloche",
  },
];

export default function RecentlyViewed() {
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
            <Link href={product.href} className="block">
              <div className="relative w-full h-28 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-medium line-clamp-2 mb-2 hover:underline">
                {product.title}
              </h3>

              <p className="text-xs text-gray-500">Lowest Ask</p>
              <p className="font-semibold">{product.price}</p>
            </Link>

            <button className="mt-3 text-sm text-gray-500 hover:text-black transition">
              ♡ Follow
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
