"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
const footerSections = [
  {
    title: "Air Jordan",
    links: [
      { name: "Air Jordan 1", href: "/brands/jordan?model=1" },
      { name: "Air Jordan 3", href: "/brands/jordan?model=3" },
      { name: "Air Jordan 4", href: "/brands/jordan?model=4" },
      { name: "Air Jordan 5", href: "/brands/jordan?model=5" },
      { name: "Air Jordan 11", href: "/brands/jordan?model=11" },
      { name: "Air Jordan 12", href: "/brands/jordan?model=12" },
    ],
  },
  {
    title: "Adidas",
    links: [
      { name: "Adidas Yeezy", href: "/brands/yeezy" },
      { name: "Yeezy Slides", href: "/brands/yeezy?category=slides" },
      { name: "Yeezy Foam RNR", href: "/brands/yeezy?model=foam-rnnr" },
      { name: "Yeezy Boost 350", href: "/brands/yeezy?model=350" },
      { name: "Yeezy 700", href: "/brands/yeezy?model=700" },
      { name: "Campus 00s", href: "/brands/adidas?model=campus-00s" },
    ],
  },
  {
    title: "New Balance",
    links: [
      { name: "New Balance 2002R", href: "/brands/new-balance?model=2002r" },
      { name: "New Balance 1906R", href: "/brands/new-balance?model=1906r" },
      { name: "New Balance 530", href: "/brands/new-balance?model=530" },
      { name: "New Balance 550", href: "/brands/new-balance?model=550" },
      { name: "New Balance 9060", href: "/brands/new-balance?model=9060" },
      { name: "New Balance 990 V1", href: "/brands/new-balance?model=990V1" },
    ],
  },
  {
    title: "Nike",
    links: [
      { name: "Air Force 1", href: "/brands/nike?model=air-force-1" },
      { name: "Air Max", href: "/brands/nike?product-line=air-max" },
      { name: "Nike Ja", href: "brands/nike?category=sneakers&model=ja-1" },
      { name: "Nike Kobe", href: "/brands/nike?product-line=kobe" },
      { name: "Nike Vomero 5", href: "/brands/nike?model=vomero-5" },
    ],
  },
  {
    title: "ASICS",
    links: [
      {
        name: "Asics Gel 1130",
        href: "/brands/asics?category=sneakers&model=gel-1130",
      },
      {
        name: "Asics Kayano 14",
        href: "/brands/asics?category=sneakers&model=gel-kayano-14",
      },
      {
        name: "Asics Gel-NYC",
        href: "/brands/asics?category=sneakers&model=gel-nyc",
      },
      {
        name: "Asics for Men",
        href: "/brands/asics?category=sneakers&gender=men",
      },
      {
        name: "Asics for Women",
        href: "/brands/asics?category=sneakers&gender=women",
      },
      {
        name: "Asics for Kids",
        href: "/brands/asics?category=sneakers&gender=kids",
      },
    ],
  },
  {
    title: "Fear of God",
    links: [
      {
        name: "Essentials Hoodies",
        href: "/brands/fear-of-god?category=hoodies-and-sweatshirts",
      },
      {
        name: "Essentials Sweatpants",
        href: "/brands/fear-of-god?category=sweatpants",
      },
      {
        name: "Essentials T-Shirts",
        href: "/brands/fear-of-god?category=t-shirts",
      },
      {
        name: "Essentials Pants",
        href: "/brands/fear-of-god?category=pants",
      },
      {
        name: "Essentials Kids",
        href: "/brands/fear-of-god?category=apparel&gender=kids",
      },
      {
        name: "Essentials Women's",
        href: "/brands/fear-of-god?category=apparel&gender=women",
      },
    ],
  },
  // second row
  {
    title: "Popular Releases",
    links: [
      {
        name: "Jordan 3 Retro Black Cat (2025)",
        href: "/air-jordan-3-retro-black-cat-2025",
      },
      {
        name: "Jordan 5 Retro OG Black Metallic Reimagined",
        href: "/air-jordan-5-retro-og-black-metallic-reimagined",
      },
      {
        name: "Jordan 1 Retro High '85 OG Bred (2025)",
        href: "/air-jordan-1-retro-high-85-bred",
      },
      {
        name: "Nintendo Switch 2 MarioKart World",
        href: "/nintendo-switch-2-mariokart-world-console-bundle-6614325",
      },
      {
        name: "Jordan 1 Retro High OG Black Toe Reimagined",
        href: "Jordan 1 Retro High OG Black Toe Reimagined",
      },
      {
        name: "LABUBU Time to Chill Vinyl Plush Doll",
        href: "/pop-mart-labubu-time-to-chill-vinyl-plush-doll",
      },
    ],
  },
  {
    title: "Apparel",
    links: [
      { name: "Denim Tears", href: "/brands/denim-tears" },
      { name: "BAPE", href: "/brands/bape?category=apparel" },
      { name: "Nike Apparel", href: "/brands/nike?category=apparel" },
      { name: "Supreme", href: "/brands/supreme?category=apparel" },
      { name: "Travis Scott", href: "/brands/travis-scott?category=apparel" },
      { name: "Yeezy", href: "/brands/yeezy?category=apparel" },
    ],
  },
  {
    title: "Accessories",
    links: [
      { name: "Swatch X Omega", href: "/brands/swatch" },
      { name: "Stanley", href: "/brands/stanley" },
      { name: "Designer Sunglasses", href: "/category/accessories/eyewear" },
      { name: "Louis Vuitton Accessories", href: "/brands/louis-vuitton" },
      { name: "Gucci Accessories", href: "/brands/gucci" },
      {
        name: "Supreme Accessories",
        href: "/brands/supreme?category=accessories",
      },
    ],
  },
  {
    title: "About",
    links: [
      { name: "How It Works", href: "/about/how-it-works/" },
      { name: "Our Process", href: "/about/our-process/" },
      { name: "Newsroom", href: "/about/newsroom/" },
      { name: "Company", href: "/about/company/" },
      { name: "Careers", href: "https://careers.stockx.com/" },
      { name: "StockX Reviews", href: "/about/reviews/" },
      {
        name: "Give $10, Get $10",
        href: "/refer?utm_medium=site_footer&utm_source=web",
      },
    ],
  },
  {
    title: "Sell",
    links: [
      { name: "Selling Guide", href: "/about/selling-on-stockx/" },
      { name: "Professional Tools", href: "/about/our-process/" },
      { name: "StockX Pro", href: "https://pro.stockx.com/" },
      { name: "Sponsored Asks", href: "/about/sponsored-asks/" },
      { name: "Developers", href: "https://developer.stockx.com/" },
    ],
  },
  {
    title: "Hellp",
    links: [
      { name: "Help Center", href: "/help/home" },
      { name: "Contact Us", href: "/help/home?contactsupport=true" },
      { name: "Product Suggestions", href: "/product-suggestion" },
      {
        name: "Size Guide",
        href: "/help/articles/I-dont-know-how-an-item-fits-Can-you-make-a-size-recommendation",
      },
    ],
  },
];

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  console.log("theme:", theme);
  console.log("resolvedTheme:", resolvedTheme);
  return (
    <footer className="h-40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Logo */}
        <section className="mb-12">
          <h2
            className="text-3xl font-bold tracking-tight text-black! dark:text-white!"
            style={{ color: "black" }}
          >
            StockX
          </h2>
        </section>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-sm tracking-wider text-black dark:text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-black dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} StockX Clone. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
