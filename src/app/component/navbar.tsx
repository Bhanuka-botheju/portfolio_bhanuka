"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (anchor: string) => {
    if (pathname === "/") {
      document?.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${anchor}`);
    }
    setIsMobileOpen(false);
  };

  const menuList = [
    { label: "Home", id: "personbio" },
    { label: "Project", id: "featureproject" },
    { label: "Classes", id: "physicsclass" },
  ];

  // Dynamic styling based on scroll
  const navbarClasses = `
  sticky top-0 w-full z-50
  ${scrolled ? "mt-4 rounded-2xl shadow-xl bg-slate-800/70 backdrop-blur-sm" : "bg-slate-800"}
  border-b border-slate-600
  transition-all duration-300 ease-in-out
`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition duration-200">
            Bhanuka Botheju&trade;
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-200">
          {menuList.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-cyan-400 transition"
              onClick={() => handleAnchorClick(item.id)}
            >
              {item.label}
            </li>
          ))}
          <li>
            <Link
              href="/about"
              className="hover:text-violet-400 transition"
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <span className="text-cyan-400">
            <MoonIcon className="w-5 h-5" />
          </span>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400"
            aria-label="Toggle Mobile Menu"
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
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-700 px-4 pb-4 rounded-b-2xl">
          <ul className="flex flex-col space-y-2 text-sm font-medium text-gray-200">
            {menuList.map((item) => (
              <li
                key={item.id}
                className="py-1 cursor-pointer hover:text-cyan-400 transition"
                onClick={() => handleAnchorClick(item.id)}
              >
                {item.label}
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="block py-1 hover:text-violet-400 transition"
                onClick={() => setIsMobileOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
