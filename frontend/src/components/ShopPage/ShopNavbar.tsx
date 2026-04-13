'use client';

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Shop", "Products", "Pages"];

export default function ShopNavbar() {
  const [active, setActive] = useState("Shop");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-semibold text-[#484848] tracking-wider"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          FASCO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 relative">
          {navLinks.map((link) => (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => link === "Pages" && setIsDropdownOpen(true)}
              onMouseLeave={() => link === "Pages" && setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setActive(link)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  active === link
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link}
                {link === "Pages" && <ChevronDown size={14} />}
              </button>

              {/* Animated underline */}
              {active === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-black"
                />
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {link === "Pages" && isDropdownOpen && (
                  <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 w-44 bg-white shadow-xl rounded-lg py-2 z-50"
                  >
                    {["Deals", "New Arrivals", "Packages"].map((item) => (
                      <button
                        key={item}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-black"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-600">
          <Search size={18} className="cursor-pointer hover:text-black" />
          <User size={18} className="cursor-pointer hover:text-black" />
          <Heart size={18} className="cursor-pointer hover:text-black" />
          <ShoppingBag size={18} className="cursor-pointer hover:text-black" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-4"
          >
            {navLinks.map((link) => (
              <div key={link} className="py-2 border-b">
                <button
                  onClick={() => setActive(link)}
                  className="w-full text-left text-gray-700"
                >
                  {link}
                </button>

                {/* Mobile dropdown */}
                {link === "Pages" && active === "Pages" && (
                  <div className="pl-4 mt-2 space-y-2">
                    {["Deals", "New Arrivals", "Packages"].map((item) => (
                      <div key={item} className="text-sm text-gray-500">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}