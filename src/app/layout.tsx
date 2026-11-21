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
  metadataBase: new URL("https://encende.click"),
  title: "Encendé — Páginas que trabajan por tu negocio",
  description:
    "No solo para que te encuentren: páginas que toman turnos, cobran señas, reciben pedidos y venden mientras vos trabajás. Listas en días, sin tecnicismos.",
  openGraph: {
    title: "Encendé — Páginas que trabajan por tu negocio",
    description:
      "No solo para que te encuentren: páginas que toman turnos, cobran señas, reciben pedidos y venden mientras vos trabajás. Listas en días, sin tecnicismos.",
    type: "website",
    locale: "es_AR",
    url: "https://encende.click",
    siteName: "Encendé",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encendé — Páginas que trabajan por tu negocio",
    description:
      "No solo para que te encuentren: páginas que toman turnos, cobran señas, reciben pedidos y venden mientras vos trabajás. Listas en días, sin tecnicismos.",
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
