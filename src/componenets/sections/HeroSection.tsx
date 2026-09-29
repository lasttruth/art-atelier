import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { SocialChannel } from "@/types/atelier";

const SOCIAL_CHANNELS: SocialChannel[] = [
  { name: "Twitch", stat: "Live Art • 8.2k", href: "https://twitch.tv" },
  { name: "Twitter / X", stat: "Daily WIPs • 14k", href: "https://x.com" },
  { name: "VGen Hub", stat: "Verified ★ 5.0", href: "https://vgen.co" },
  { name: "Discord", stat: "Coven of 2.1k", href: "https://discord.gg" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Top Banner Chip */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-atelier-border/60 text-xs font-mono">
        <div className="flex items-center gap-2 text-atelier-neonGreen">
          <span className="w-2 h-2 rounded-full bg-atelier-neonGreen animate-pulse" />
          <span>COMMISSIONS: OPEN • 3/5 SLOTS AVAILABLE</span>
        </div>
        <div className="text-atelier-textMuted tracking-wider">
          ✦ WITCHCRAFT • STREAMING RELICS • CYBER-OCCULT
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
        {/* Left Column: Heading & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-atelier-purple/60 bg-atelier-purple/10 text-xs font-mono text-atelier-neonGreen">
            <span>§ 01 // SANCTUM DOMAIN</span>
            <span>—</span>
            <span className="text-atelier-cyan">CYBER-GOTHIC ATELIER</span>
          </div>

          <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Weaving{" "}
            <span className="italic text-purple-300 font-serif">
              dark romance
            </span>{" "}
            &{" "}
            <span className="text-atelier-neonGreen drop-shadow-[0_0_12px_rgba(183,247,91,0.5)]">
              neon sorcery
            </span>
          </h1>

          <p className="text-atelier-500 text-base sm:text-lg max-w-xl leading-relaxed">
            Welcome to my gothic web! Illustrator, VTuber asset crafter, and
            potion-brewer. Weaving dark romance, occult vibes, and vibrant neon
            dreams into custom digital artwork, Twitch stream overlays, reactive
            PNG models, and enchanted emotes.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#services"
              className="px-5 py-2.5 rounded-lg bg-atelier-neonGreen text-black font-semibold text-sm hover:brightness-110 shadow-glow-green transition-all"
            >
              ✦ Services & Pricing
            </Link>
            <Link
              href="#membership"
              className="px-5 py-2.5 rounded-lg bg-atelier-red text-white font-semibold text-sm hover:bg-opacity-90 shadow-glow-red transition-all"
            >
              SnackAttacks Club
            </Link>
            <Link
              href="#tips"
              className="px-4 py-2.5 rounded-lg border border-atelier-border hover:border-atelier-cyan text-sm text-atelier-cyan hover:bg-atelier-cyan/10 transition-colors"
            >
              Looking to Tip?
            </Link>
          </div>

          {/* Secondary jump links */}
          <div className="flex items-center gap-4 text-md font-mono text-atelier-textMuted pt-1">
            <Link
              href="#about"
              className="hover:text-white transition-colors p-3 rounded-lg bg-atelier-surfaceContainer/70 border border-atelier-border hover:border-atelier-purple"
            >
              ABOUT ME
            </Link>
            <span>•</span>
            <Link
              href="#terms"
              className="hover:text-white transition-colors px-4 py-2.5 rounded-lg bg-atelier-surfaceContainer/70 border border-atelier-border hover:border-atelier-purple"
            >
              TOS BASELINE
            </Link>
          </div>

          {/* Socials Row */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SOCIAL_CHANNELS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-atelier-surfaceContainer/70 border border-atelier-border hover:border-atelier-purple transition-all group"
              >
                <div className="text-xs text-white font-medium group-hover:text-atelier-neonGreen">
                  {social.name}
                </div>
                <div className="text-[11px] font-mono text-atelier-textMuted mt-0.5">
                  {social.stat}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Mascots & Sigil Display */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-atelier-purple/30 via-transparent to-atelier-cyan/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative p-5 rounded-2xl bg-atelier-surfaceContainer/60 border border-atelier-border backdrop-blur-md shadow-glow-purple max-w-sm sm:max-w-md w-full">
            {/* Ghost Cat Mascot with next/image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/40 border border-atelier-border/60">
              <Image
                src="/spider-rose.png"
                alt="Pywacket the Ghost Cat & Witchy Cat Skull Familiar"
                fill
                priority
                className="object-contain hover:scale-105 transition-transform duration-300 p-2"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-atelier-border text-[10px] font-mono text-atelier-neonGreen">
                FAMILIAR // PYWACKET
              </div>
            </div>

            {/* Inset Spider Rose Sigil */}
            <div className="absolute -bottom-6 -right-6 p-2 rounded-xl bg-atelier-surfaceContainer border border-atelier-red shadow-xl">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <Image
                  src="/spider-rose.png"
                  alt="Black Widow Spider Rose Atelier Sigil"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-atelier-neonGreen block">
                Double-Sigil of Protection
              </span>
              <span className="text-[10px] font-mono text-atelier-textMuted">
                Spun from midnight roses, obsidian spider silk, and neon
                spirit-flame.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
