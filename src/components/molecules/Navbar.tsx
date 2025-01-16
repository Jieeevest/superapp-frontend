"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Avatar } from "../atoms";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pt-4">
          {/* Left Section: Breadcrumbs */}
          <div className="flex items-center space-x-2 font-normal">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <span className="">{">"}</span>
            <Link href="/current-page" className="hover:text-gray-200">
              Current Page
            </Link>
          </div>

          {/* Right Section: Avatar */}
          <div className="hidden md:flex items-center space-x-6">
            <Avatar src="/media/avatars/300-4.png" size={12} status="success" />
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="ki-outline ki-close text-2xl"></i>
              ) : (
                <i className="ki-outline ki-menu text-2xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown - Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-blue-700">
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-blue-700"
            >
              Services
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-blue-700">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
