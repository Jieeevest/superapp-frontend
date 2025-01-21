"use client";
import React from "react";
import Link from "next/link";
import { Avatar } from "../atoms";

const Navbar: React.FC = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
