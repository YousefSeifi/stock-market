import Link from "next/link";

const allBrands = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
];

const topBrands = [
  { name: "Nike", href: "/brands/nike" },
  { name: "Jordan", href: "/brands/jordan" },
  { name: "adidas", href: "/brands/adidas" },
  { name: "Fear of God", href: "/brands/fear-of-god" },
  { name: "Pop Mart", href: "/brands/pop-mart" },
  { name: "New Balance", href: "/brands/new-balance" },
  { name: "ASICS", href: "/brands/asics" },
  { name: "Supreme", href: "/brands/supreme" },
  { name: "Pokemon", href: "/brands/pokemon" },
  { name: "Puma", href: "/brands/puma" },
  { name: "Crocs", href: "/brands/crocs" },
  { name: "BAPE", href: "/brands/bape" },
  { name: "Converse", href: "/brands/converse" },
  { name: "UGG", href: "/brands/ugg" },
];

const trendingBrands = [
  { name: "Yeezy", href: "/brands/yeezy" },
  { name: "Maison Mihara Yasuhiro", href: "/brands/maison-mihara-yasuhiro" },
  { name: "Louis Vuitton", href: "/brands/louis-vuitton" },
  { name: "Balenciaga", href: "/brands/balenciaga" },
  { name: "Timberland", href: "/brands/timberland" },
  { name: "Vans", href: "/brands/vans" },
  { name: "Sp5der", href: "/brands/sp5der" },
  { name: "Gucci", href: "/brands/gucci" },
  { name: "Salomon", href: "/brands/salomon" },
  { name: "Denim Tears", href: "/brands/denim-tears" },
  { name: "Travis Scott", href: "/brands/travis-scott" },
  { name: "Kith", href: "/brands/kith" },
  { name: "Chrome Hearts", href: "/brands/chrome-hearts" },
  { name: "Bravest Studios", href: "/brands/bravest-studios" },
];

export default function BrandNavigation() {
  return (
    <div className="w-full">
      <div className="flex justify-center max-w-screen-2xl mx-auto px-8 py-4">
        {/* 👇 سه ستون کنار هم */}
        <div className="grid grid-cols-3 gap-16">
          {/* All Brands */}
          <div>
            <Link href="/brands" className="text-lg font-semibold block mb-4">
              All Brands
            </Link>

            <ul className="grid grid-cols-7 gap-2">
              {allBrands.map((letter) => (
                <li key={letter}>
                  <Link
                    href={`/brands#${letter}`}
                    className="text-sm hover:text-green-600"
                  >
                    {letter}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Brands */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Top Brands</h2>

            <ul className="grid grid-cols-2 gap-3">
              {topBrands.map((brand) => (
                <li key={brand.href}>
                  <Link
                    href={brand.href}
                    className="text-sm hover:text-green-600"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Trending Brands */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Trending Brands</h2>

            <ul className="grid grid-cols-2 gap-3">
              {trendingBrands.map((brand) => (
                <li key={brand.href}>
                  <Link
                    href={brand.href}
                    className="text-sm hover:text-green-600"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
