import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Encendé — Tu negocio en internet. Sin vueltas.",
  description:
    "Creamos páginas web para negocios que todavía hacen todo a mano. Simple, rápido, sin tecnicismos.",
  openGraph: {
    title: "Encendé — Tu negocio en internet. Sin vueltas.",
    description:
      "Creamos páginas web para negocios que todavía hacen todo a mano. Simple, rápido, sin tecnicismos.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encendé — Tu negocio en internet. Sin vueltas.",
    description:
      "Creamos páginas web para negocios que todavía hacen todo a mano. Simple, rápido, sin tecnicismos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
