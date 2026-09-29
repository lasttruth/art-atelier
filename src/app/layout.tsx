import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WidowRose Atelier — Witchy Artist & Commission Sanctum",
  description:
    "Digital art portfolio, VTuber stream assets, reactive PNG models, and commission grimoire of WidowRose Atelier.",
  keywords: [
    "WidowRose",
    "VTuber Assets",
    "Twitch Emotes",
    "PNGTuber",
    "Gothic Art",
    "Commissions",
  ],
  openGraph: {
    title: "WidowRose Atelier — Gothic Cyber-Atelier",
    description:
      "Weaving dark romance and neon sorcery into digital artifacts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${spaceMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-atelier-surface text-slate-100 selection:bg-atelier-neonGreen selection:text-black">
        {children}
      </body>
    </html>
  );
}
