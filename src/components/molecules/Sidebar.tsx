"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  href: string;
  label: string;
  icon: string;
  separator: string;
  subItems?: SubNavItem[];
}

interface SubNavItem {
  href: string;
  label: string;
  icon: string;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  {
    href: "/workspace/dashboard",
    label: "Dashboard",
    icon: "ki-element-11",
    separator: "",
  },
  {
    href: "",
    label: "Teams",
    icon: "ki-users",
    separator: "management",
    subItems: [
      { href: "/workspace/teams", label: "Overview", icon: "ki-element-11" },
      { href: "/workspace/teams/members", label: "Members", icon: "ki-users" },
    ],
  },
  {
    href: "/workspace/roles",
    label: "Roles",
    icon: "ki-security-user",
    separator: "setting",
  },
  {
    href: "/workspace/packages",
    label: "Packages",
    icon: "ki-package",
    separator: "setting",
  },
  {
    href: "/workspace/menu",
    label: "Menu",
    icon: "ki-menu",
    separator: "setting",
  },
];

export default function Sidebar() {
  // A map to track which menu is open using the index
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleToggleMenu = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null); // Close the menu if it's already open
    } else {
      setOpenMenuIndex(index); // Open the menu if it's closed
    }
  };

  const groupedNavItems = navItems.reduce<Record<string, NavItem[]>>(
    (groups, item) => {
      if (!groups[item.separator]) {
        groups[item.separator] = [];
      }
      groups[item.separator].push(item);
      return groups;
    },
    {}
  );

  return (
    <div className="absolute">
      <div
        className={`lg:w-64 w-full h-screen bg-white text-black fixed top-0 left-0 z-40 shadow-lg transform -translate-x-full lg:translate-x-0`}
      >
        <div className="p-6 px-2">
          <div className="w-full scale-125 mb-10">
            <Image
              src="/siap-backoffice-logo.png"
              alt="SIAP Logo"
              width={1000}
              height={1000}
            />
          </div>
          <div>
            {Object.entries(groupedNavItems).map(
              ([group, items], groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  {/* Group Title */}
                  <h3 className="text-gray-600 uppercase text-sm font-bold mb-3">
                    {group}
                  </h3>

                  {/* Group Items */}
                  <ul className="space-y-6">
                    {items.map((item, index) => (
                      <li key={index}>
                        <div>
                          <div
                            onClick={() =>
                              item.subItems && handleToggleMenu(index)
                            }
                            className={`flex items-center justify-between hover:text-slate-900 transition-colors cursor-pointer`}
                          >
                            <Link
                              href={item.href}
                              className="flex items-center space-x-3 hover:scale-110 transition ease-in-out delay-75"
                            >
                              <i
                                className={`text-2xl ki-outline ${item.icon}`}
                              ></i>
                              <span className="font-semibold">
                                {item.label}
                              </span>
                            </Link>
                            {item.subItems && (
                              <i
                                className={`text-sm font-bold ki-outline ${
                                  openMenuIndex === index
                                    ? "ki-minus"
                                    : "ki-plus"
                                } text-gray-600 ml-auto hover:scale-110 transition ease-in-out delay-75`}
                              ></i>
                            )}
                          </div>

                          {/* Render SubItems */}
                          {item.subItems && openMenuIndex === index && (
                            <ul className="pl-6 mt-4 space-y-4 transition-all duration-300 ease-in-out">
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center space-x-3 hover:text-blue-400 transition-colors"
                                  >
                                    <i
                                      className={`text-2xl ki-outline ${subItem.icon}`}
                                    ></i>
                                    <span className="font-semibold">
                                      {subItem.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
