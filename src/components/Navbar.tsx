"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav className="flex items-center justify-between max-w-275 m-auto p-2 relative z-40">
        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/drinks-logo.png"
            alt="logo"
            className="w-15 h-15"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-lg uppercase">
          <li className="hover:text-gray-400">
            <Link href="/randomshots">random shots</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/randomdrinks">random drinks</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/makeshots">make a shots</Link>
          </li>
          <li className="hover:text-gray-400">
            <Link href="/makedrink">make a drink</Link>
          </li>
        </ul>

        {/* Burger Icon */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden z-50"
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-gray-900/60 z-40 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Slide-in Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gray-200 z-50 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 px-6 text-lg uppercase">
          <li onClick={() => setOpen(false)}>
            <Link href="/randomshots">random shots</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/randomdrinks">random drinks</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/makeshots">make a shots</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/makedrink">make a drink</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
