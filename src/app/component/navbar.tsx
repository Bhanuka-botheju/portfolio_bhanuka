"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary">Bhanuka Botheju</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {menuList.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-blue-600 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
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
