"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Bio Hub", href: "/bio" },
  { label: "About", href: "/about" },
  { label: "Services & Prices", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "SnackAttacks", href: "/snackattacks" },
  { label: "Tipping / Support", href: "/support" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#231a38] bg-[#0c0814]/95 backdrop-blur-md">
      {/* Right: Queue Status Badge & Spider Avatar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 rounded-full border border-lime-500/40 bg-black/60 px-4 py-1.5 shadow-[0_0_10px_rgba(132,204,22,0.15)]">
            <span className="text-xs font-bold tracking-wider text-lime-400 uppercase font-sans">
              Queue: Open
            </span>

            {/* Inline SVG Target / Status Icon */}
            <svg
              className="h-4 w-4 text-lime-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Spider Avatar Graphic */}
          <div className="relative h-10 w-10 shrink-0 cursor-pointer transition-transform hover:scale-110">
            <Image
              src="/spider-rose.png"
              alt="Widowrose Avatar"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 text-base font-serif tracking-wide transition-all rounded-md ${
                  isActive
                    ? "bg-[#35184f] text-[#c084fc] font-medium shadow-[0_0_12px_rgba(147,51,234,0.25)]"
                    : "text-[#cbb8dc] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Queue Status Badge & Spider Avatar */}
        {/* Right: Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Pure SVG Tech Hexagon Logo */}
          <div className="text-lime-400 transition-transform group-hover:scale-105">
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer Hexagon */}
              <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" />
              {/* Inner Cube / Node */}
              <circle cx="12" cy="12" r="2.5" />
              <line x1="12" y1="2" x2="12" y2="9.5" />
              <line x1="3" y1="16.8" x2="9.8" y2="13.2" />
              <line x1="21" y1="16.8" x2="14.2" y2="13.2" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-widest text-[#d6b4e8] transition-colors group-hover:text-purple-200">
              WIDOWROSE ATELIER
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#9b8eb2] uppercase font-sans">
              Gothic Occult Hub
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
