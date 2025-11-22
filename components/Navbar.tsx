"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { href: "/categories/streetwear", label: "Streetwear" },
    { href: "/categories/shoes", label: "Kicks" },
    { href: "/categories/accessories", label: "Accessories" }
  ];

  return (
    <header className="border-b border-zinc-800 bg-baseBlack/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">

        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 bg-baseRed rounded-full flex items-center justify-center text-xs font-bold">DBA</div>
          <span className="font-bold text-sm uppercase tracking-wide">
            DaBasement<span className="text-baseRed">Apparel</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="text-gray-300 hover:text-white">Men ▾</button>

            {open && (
              <div className="absolute bg-zinc-950 border border-zinc-800 mt-2 rounded-xl w-44 shadow-lg py-2">
                <Link href="/categories/mens" className="block px-3 py-1.5 text-xs hover:bg-zinc-900 text-gray-300 hover:text-white">All Men's</Link>
                <Link href="/categories/shoes" className="block px-3 py-1.5 text-xs hover:bg-zinc-900 text-gray-300 hover:text-white">Shoes</Link>
              </div>
            )}
          </div>

          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="text-gray-300 hover:text-white">
              {m.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
