import { Navbar } from "@/componenets/layout/Navbar";
import { HeroSection } from "@/componenets/sections/HeroSection";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-atelier-surface flex flex-col">
      <Navbar queueOpen={true} slotsRemaining={3} totalSlots={5} />

      <main className="grow">
        <HeroSection />
      </main>

      <footer className="border-t border-atelier-border py-8 text-center text-xs font-mono text-atelier-textMuted">
        <p className="tracking-wider">§ SANCTUM OF WIDOWROSE ATELIER §</p>
        <p className="text-[10px] mt-1 text-slate-500">
          © {new Date().getFullYear()} WidowRose Atelier. All occult artifacts
          and digital spellcraft reserved.
        </p>
      </footer>
    </div>
  );
}
