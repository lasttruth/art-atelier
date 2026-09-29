"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  queueOpen?: boolean;
  slotsRemaining?: number;
  totalSlots?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  queueOpen = true,
  slotsRemaining = 3,
  totalSlots = 5,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services & Prices", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "SnackAttacks", href: "#membership" },
    { label: "Tipping / Support", href: "#tips" },
    { label: "Pact Codex", href: "#terms" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-atelier-surface/90 border-b border-atelier-border transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-atelier-purple/30 border border-atelier-purple/60 flex items-center justify-center text-atelier-neonGreen font-bold transition-transform group-hover:scale-105">
            ✦
          </div>
          <div>
            <span className="font-space font-bold tracking-wider text-sm uppercase text-white block group-hover:text-atelier-neonGreen transition-colors">
              WidowRose Atelier
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-atelier-neonGreen">
              Gothic Occult Hub
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider text-atelier-textMuted font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-atelier-neonGreen transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Live Queue Status Pill */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-atelier-surfaceContainer border border-atelier-border text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-atelier-neonGreen opacity-75"></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${queueOpen ? "bg-atelier-neonGreen" : "bg-atelier-red"}`}
              ></span>
            </span>
            <span className="text-white text-[11px]">
              {queueOpen
                ? `QUEUE: ${slotsRemaining}/${totalSlots} SLOTS`
                : "QUEUE: CLOSED"}
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-atelier-surfaceContainer border border-atelier-border text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-atelier-border bg-atelier-surfaceContainer/95 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-wider text-slate-200 hover:text-atelier-neonGreen"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
