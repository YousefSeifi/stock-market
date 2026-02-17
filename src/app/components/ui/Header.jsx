"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Search, Menu, X, Bell } from "lucide-react";
import Logo from "../buttons/Logo";
import MegaMenu from "../navigation/MegaMenu";
import { useTheme } from "next-themes";

const menuItems = [
  { name: "News", path: "/news" },
  {
    name: "About",
    path: "/about",
    dropdown: [
      { name: "How StockX Works", path: "/about/how-it-works/" },
      { name: "Buying Guide", path: "/about/buying" },
      { name: "Selling Guide", path: "/about/selling" },
      { name: "Our Process", path: "/about/verification" },
      { name: "Newsroom", path: "/about/newsroom" },
      { name: "Company", path: "/about/company" },
    ],
  },
  { name: "Help", path: "/help" },
  {
    name: "Sell",
    path: "/sell",
    dropdown: [
      { name: "New Listing", path: "/sell" },
      { name: "Current Listings", path: "/sell/fees" },
      { name: "Pending Sales", path: "/sell/tips" },
      { name: "History", path: "/sell/success" },
      { name: "Professional Tools", path: "" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const handleMouseEnter = (itemName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <header className="border-b font-medium">
      <nav className="flex items-center px-6 py-4 w-full">
        {/* Left Section: Hamburger (left) + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger - left side for mobile & tablet (under 768: left, 768+: left) */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="منو"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <Logo />
        </div>

        {/* Desktop Search - hidden on mobile/tablet, visible from lg breakpoint */}
        <div className="hidden lg:block relative ml-4">
          <input
            type="text"
            placeholder="Search for brand, color, etc."
            className="border pl-10 pr-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-96"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Desktop Menu - hidden on mobile, visible from lg breakpoint */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <ul className="flex gap-6">
            {menuItems.map((item) => (
              <li
                key={item.name}         
                className={`relative ${activeDropdown === item.name ? `z-50 shadow-xl ${isDark ? "bg-gray-800" : "bg-white"}` :               ""}`}
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.name)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <>
                    <button className="hover:text-green-600 transition flex items-center gap-1">
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      <div                        
                        className={`absolute top-full right-0 mt-2 w-48 border rounded-md shadow-lg py-2 z-50 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
                        onMouseEnter={() => {
                          if (timeoutRef.current)
                            clearTimeout(timeoutRef.current);
                        }}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className={`block px-4 py-2 text-sm hover:text-green-600 ${
                              isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="hover:text-green-600 transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer hover:text-green-600" />

            {isLoggedIn ? (
              <Link
                href="/profile"
                className="px-4 py-1 border rounded-md hover:bg-gray-100"
              >
                Profile
              </Link>
            ) : (
              <>
                <Link href="/login" className="hover:text-green-600 transition">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Tablet Menu - visible from md to lg */}
        <div className="hidden md:flex lg:hidden items-center gap-4 ml-auto">
          <Bell className="cursor-pointer hover:text-green-600" />
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="px-4 py-1 border rounded-md hover:bg-gray-100"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link href="/login" className="hover:text-green-600 transition">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Search Input - Below Logo and Menu Button (Mobile & Tablet) */}
      <div className="lg:hidden px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for brand, color, etc."
            className="w-full border pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
      </div>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div
            className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-md ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
              <X />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {/* Menu Items */}
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <div className="font-medium text-lg">{item.name}</div>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block text-sm hover:text-green-600 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block hover:text-green-600 text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* User Actions */}
            <div className="pt-4 border-t">
              {isLoggedIn ? (
                <Link
                  href="/profile"
                  className="block px-4 py-2 border rounded-md hover:bg-gray-100 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="text-center px-4 py-2 border rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <MegaMenu />
    </header>
  );
}
