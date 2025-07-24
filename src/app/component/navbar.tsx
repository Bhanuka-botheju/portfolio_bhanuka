"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const {theme,toggletheme} = useTheme();
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const menuList = [
    { href: "/", label: "Home" },
    { href: "/project", label: "Project" },
    { href: "/classes", label: "Classes" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary whitespace-nowrap">
            Bhanuka Botheju&trade;
          </span>
        </Link>

        {/* Right Side - Menu + Theme Button + Mobile Toggle */}
        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {menuList.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className="hover:text-primary transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggletheme}
            className="p-2 rounded-full bg-white/80 dark:bg-zinc-900/80 shadow-md hover:shadow-lg backdrop-blur-md transition-all duration-300 text-yellow-500 dark:text-blue-400 hover:scale-105"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-blue-600"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
            {menuList.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
