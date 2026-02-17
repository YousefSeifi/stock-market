"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isDark ? "#ffffff" : "#000000",
      }}
    >
      {isDark ? (
        <svg
          focusable="false"
          viewBox="0 0 35 35"
          style={{ width: "35px", height: "35px" }}
        >
          <path
            d="M17.5 24.0102C21.0954 24.0102 24.01 21.0956 24.01 17.5002C24.01 13.9049 21.0954 10.9902 17.5 10.9902C13.9046 10.9902 10.99 13.9049 10.99 17.5002C10.99 21.0956 13.9046 24.0102 17.5 24.0102Z"
            fill="white"
          />
          <path d="M18.27 4.90039H16.73V8.54039H18.27V4.90039Z" fill="white" />
          <path d="M18.27 26.5293H16.73V30.1693H18.27V26.5293Z" fill="white" />
          <path
            d="M11.8554 6.15383L10.5218 6.92383L12.3418 10.0761L13.6754 9.30607L11.8554 6.15383Z"
            fill="white"
          />
          <path
            d="M22.6573 24.9234L21.3237 25.6934L23.1437 28.8456L24.4773 28.0756L22.6573 24.9234Z"
            fill="white"
          />
          <path
            d="M6.95072 10.5414L6.18072 11.875L9.33296 13.695L10.103 12.3614L6.95072 10.5414Z"
            fill="white"
          />
          <path
            d="M25.6312 21.3656L24.8612 22.6992L28.0134 24.5192L28.7834 23.1856L25.6312 21.3656Z"
            fill="white"
          />
          <path d="M8.54 16.7305H4.9V18.2705H8.54V16.7305Z" fill="white" />
          <path d="M30.17 16.7305H26.53V18.2705H30.17V16.7305Z" fill="white" />
          <path
            d="M9.3058 21.3245L6.15356 23.1445L6.92356 24.4782L10.0758 22.6582L9.3058 21.3245Z"
            fill="white"
          />
          <path
            d="M28.0755 10.5218L24.9233 12.3418L25.6933 13.6754L28.8455 11.8554L28.0755 10.5218Z"
            fill="white"
          />
          <path
            d="M12.3 24.8614L10.48 28.0137L11.8137 28.7837L13.6337 25.6314L12.3 24.8614Z"
            fill="white"
          />
          <path
            d="M23.1248 6.18175L21.3048 9.33398L22.6384 10.104L24.4584 6.95174L23.1248 6.18175Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          focusable="false"
          viewBox="0 0 21 23"
          style={{ width: "21px", height: "23px" }}
        >
          <path
            d="M13.72 1.07032C11.13 0.090321 8.33002 0.160321 5.95002 1.07032C6.30001 1.14032 6.58002 1.21032 6.93002 1.35032C11.27 2.96032 13.51 7.86032 11.9 12.2003C10.29 16.5403 5.39002 18.7803 1.05001 17.1703C0.700015 17.0303 0.420015 16.8903 0.140015 16.7503C1.40001 19.0603 3.43002 20.8803 6.02002 21.8603C11.76 24.0303 18.2 21.0903 20.3 15.3503C22.4 9.61032 19.46 3.24032 13.72 1.07032Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
};


