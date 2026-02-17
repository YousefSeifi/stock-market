"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import ArrowIcon from "../buttons/ArrowIcon";
import BrandNavigation from "./BrandNavigation";
import TrendingNavigation from "./TrendingNavigation";
import NewNavigation from "./NewNavigation";

export default function ProductCategoryNav() {
  const navRef = useRef(null);
  const underlineRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!activeItem || !underlineRef.current || !navRef.current) return;

    const rect = activeItem.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    underlineRef.current.style.width = `${rect.width}px`;
    underlineRef.current.style.marginLeft = `${rect.left - navRect.left}px`;
    underlineRef.current.style.opacity = 1;
  }, [activeItem]);

  const isDark = mounted && theme === "dark";

  const menuItems = [
    { name: "Brands", mega: "brands" },
    { name: "Trending", mega: "trending" },
    { name: "New", mega: "new" },
    { name: "Men" },
    { name: "Women" },
    { name: "Kids" },
    { name: "Sneakers" },
    { name: "Shoes" },
    { name: "Apparel" },
    { name: "Accessories" },
    { name: "Collectibles" },
    { name: "Trading Cards" },
    { name: "More" },
  ];

  return (
    <nav
      ref={navRef}
      aria-label="Product Category Switcher"
      data-testid="MainNavigation"
      className="w-full border-b relative"
    >
      <div className="container mx-auto px-4">
        <ul className="flex items-center space-x-1 relative">
          {/* All Categories */}
          <li
            className="relative group"
            onMouseEnter={(e) => {
              setActiveItem(e.currentTarget);
              setIsMegaOpen(true);
            }}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <button className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:text-green-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 50 50" fill="currentColor">
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 16.25V14H43V16.25H7Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43 26.5H7V24.25H43V26.5Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43 36.75H7V34.5H43V36.75Z"
                  />
                </g>
              </svg>
              All
            </button>

            {/* Mega Menu */}
            {mounted && isMegaOpen && (
              <div
                className={`absolute left-0 top-full w-60 h-75 rounded-xl shadow-xl z-50 p-6 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible border ${
                  isDark ? "border-gray-700" : "border-gray-200"
                } ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
              >
                <div className="grid grid-cols-3 gap-8 h-full">
                  <MegaColumn isDark={isDark} />
                </div>
              </div>
            )}
          </li>

          {/* Simple Links */}
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={(e) => {
                setActiveItem(e.currentTarget);
                if (item.mega) setOpenMega(item.mega);
              }}
              onMouseLeave={() => {
                if (item.mega) setOpenMega(null);
              }}
            >
              <Link
                href="/"
                className="block px-4 py-3 text-sm font-medium hover:text-green-600 transition-colors"
              >
                {item.name}
              </Link>

              {/* Mega Menu for specific items */}
              {mounted && item.mega === "brands" && openMega === "brands" && (
                <div
                  className={`absolute left-12 -translate-x-1/10 top-full w-screen rounded-xl shadow-xl z-50 border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } ${isDark ? "bg-gray-900" : "bg-white"}`}
                >
                  <BrandNavigation />
                </div>
              )}

              {mounted &&
                item.mega === "trending" &&
                openMega === "trending" && (
                  <div
                    className={`absolute left-0 -translate-x-1/8 top-full w-screen rounded-xl shadow-xl z-50 border ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    } ${isDark ? "bg-gray-900" : "bg-white"}`}
                  >
                    <TrendingNavigation />
                  </div>
                )}

              {mounted && item.mega === "new" && openMega === "new" && (
                <div
                  className={`absolute left-5 -translate-x-1/5 top-full w-screen rounded-xl shadow-xl z-50 border ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  } ${isDark ? "bg-gray-900" : "bg-white"}`}
                >
                  <NewNavigation />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Underline */}
      <div
        ref={underlineRef}
        className="absolute bottom-0 h-0.5 bg-red-500 transition-all duration-300"
        style={{ opacity: 0 }}
      />
    </nav>

  );
}

/* ---------- Reusable Column Component ---------- */
function MegaColumn({ isDark }) {
  return (
    <div className="relative">
      <ul className="space-y-3">
        <li className="relative group/item">
          <Link
            href="/"
            className={`flex justify-between items-center gap-30 text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            } hover:text-green-600`}
          >
            <span>Categories</span>
            <span>
              <ArrowIcon size={20} className="text-green-600" />
            </span>
          </Link>

          {/* Flyout */}
          <div
            className={`absolute left-50 -top-5 ml-4 w-60 h-75 border shadow-xl rounded-xl p-6 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 ${
              isDark
                ? "border-gray-700 bg-gray-900 text-gray-300"
                : "border-gray-200 bg-white text-gray-600"
            }`}
          >
            <ul className="space-y-2">
              <li className="relative group">
                <Link
                  href="/"
                  className={`flex items-center justify-between text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } hover:text-green-600`}
                >
                  Sneakers
                  <ArrowIcon size={20} className="text-green-600" />
                </Link>
                <div
                  className={`absolute left-full top-0 ml-2 w-full min-w-32 rounded-xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border ${
                    isDark
                      ? "border-gray-700 bg-gray-900 text-gray-300"
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/"
                        className="text-sm text-inherit hover:text-green-600"
                      >
                        Nike
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-sm text-inherit hover:text-green-600"
                      >
                        Adidas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-sm text-inherit hover:text-green-600"
                      >
                        Jordan
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <Link
                  href="/"
                  className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} hover:text-green-600`}
                >
                  Shoes
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} hover:text-green-600`}
                >
                  Apparel
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link
            href="/"
            className={`flex items-center justify-between gap-36 text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            } hover:text-green-600`}
          >
            <span>Brands</span>
            <span>
              <ArrowIcon size={20} className="text-green-600" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
