import Image from "next/image";

interface EmblemShowcaseProps {
  className?: string;
}

export function EmblemShowcase({ className = "" }: EmblemShowcaseProps) {
  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* 1. Main Layered Card Container */}
      <div className="relative w-full max-w-110">
        {/* Layer 1: Outer Background Card */}
        <div className="rounded-3xl border border-[#262035] bg-[#151121] p-5 shadow-2xl">
          {/* Layer 2: Main Inner Artwork (Cat Spirit & Skeleton) */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#2b223f] bg-[#0d0915]">
            <Image
              src="/Spider-rose.png"
              alt="Cat Spirit and Skull Familiar"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover"
            />
          </div>

          {/* Familiar Pill Badge */}
          <div className="mt-3.5 inline-flex items-center rounded-md border border-[#a3e635]/40 bg-black/70 px-2.5 py-1 backdrop-blur-sm shadow-[0_0_10px_rgba(163,230,53,0.2)]">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#bef264] uppercase">
              Familiar // Pywacket
            </span>
          </div>
        </div>

        {/* Layer 3: Floating Spider-Rose Badge (Overlapping Bottom-Right) */}
        <div className="absolute -bottom-6 -right-3 h-36 w-36 sm:h-44 sm:w-44 rounded-3xl border border-[#3b1d3f] bg-[#1a1426]/95 p-2.5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105">
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0e0a17]/80 p-2">
            <Image
              src="/spider-rose.png"
              alt="Rose Spider Seal"
              fill
              sizes="176px"
              className="object-contain p-2"
            />
          </div>
        </div>
      </div>

      {/* 2. Text Section Below Card */}
      <div className="mt-4 flex flex-col items-center text-center max-w-sm px-4">
        <h2 className="font-serif text-lg font-bold tracking-[0.2em] text-[#d6b4e8] sm:text-xl">
          DOUBLE-SIGIL OF PROTECTION
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-[#8c7b9e]">
          Spun from midnight roses, obsidian spider silk, and neon spirit-flame.
        </p>
      </div>

      {/* 3. Atelier Emblem Pill Button */}
      <button
        type="button"
        className="rounded-full border border-[#9d174d]/50 bg-[#831843]/60 px-5 py-1.5 shadow-[0_0_15px_rgba(157,23,77,0.3)] transition-all hover:bg-[#9d174d]/80 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] active:scale-95"
      >
        <span className="font-mono text-[11px] font-bold tracking-widest text-[#fbcfe8] uppercase">
          Atelier Emblem
        </span>
      </button>
    </div>
  );
}
