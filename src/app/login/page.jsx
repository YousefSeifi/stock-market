"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              activeTab === "signup"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Sign Up
          </button>

          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-sm font-semibold transition ${
              activeTab === "login"
                ? "border-b-2 border-black text-black"
                : "text-gray-400"
            }`}
          >
            Log In
          </button>
        </div>

        {/* SIGN UP FORM */}
        {activeTab === "signup" && (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" type="text" />
              <Input label="Last Name" type="text" />
            </div>

            <Input label="Email Address" type="email" />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="text-xs text-gray-500">
              At least 12 characters, 1 uppercase letter, 1 number & 1 symbol
            </p>

            {/* Terms */}
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree to the
                <Link href="#" className="underline">
                  Terms
                </Link>
                and
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
              Sign Up
            </button>

            {/* Divider */}
            <Divider />

            <SocialButtons />
          </form>
        )}

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form className="space-y-4">
            <Input label="Email Address" type="email" />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right">
              <Link href="#" className="text-xs underline">
                Forgot Password?
              </Link>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition">
              Log In
            </button>

            <Divider />

            <SocialButtons />
          </form>
        )}
      </div>
    </div>
  );
}

/* ----------------- Reusable Components ---------------- */

function Input({ label, type }) {
  return (
    <div className="relative">
      <input
        type={type}
        required
        placeholder=" "
        className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-sm focus:outline-none focus:border-black"
      />
      <label
        className="absolute left-4 top-2 text-xs text-gray-500 transition-all 
        peer-placeholder-shown:top-4 
        peer-placeholder-shown:text-sm 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-2 
        peer-focus:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="text-xs text-gray-400">OR</span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
        Google
      </button>
      <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
        Apple
      </button>
      <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
        Facebook
      </button>
      <button className="border rounded-xl py-2 text-sm hover:bg-gray-50">
        Twitter
      </button>
    </div>
  );
}
