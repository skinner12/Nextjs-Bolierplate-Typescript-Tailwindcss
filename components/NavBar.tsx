import React, { useState } from "react";
import items from "@/assets/nav.json";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex-shrink-0 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 100 100"
                  >
                    <rect width="100" height="100" rx="20" fill="#1a202c" />
                    <circle cx="50" cy="50" r="30" fill="#e2e8f0" />
                    <circle cx="30" cy="30" r="15" fill="#4a5568" />
                    <circle cx="70" cy="30" r="15" fill="#4a5568" />
                    <circle cx="50" cy="70" r="15" fill="#4a5568" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Links Desktop */}
            <div className="hidden md:flex ml-10 space-x-4">
              {items.map((i, key) => (
                <Link key={key} href={i.href}>
                  <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {i.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Links Mobile */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Apri menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((i, key) => (
                <Link key={key} href={i.href}>
                  <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    {i.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
