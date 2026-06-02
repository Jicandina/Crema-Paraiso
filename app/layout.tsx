import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crema Paraíso — Desde 1951",
  description: "Más de 74 años fabricando los mejores helados, siropes, crema de leche y chantilly de Venezuela. Fábrica en Guarenas.",
  keywords: ["helados", "crema paraíso", "venezuela", "siropes", "chantilly", "soft serve"],
  openGraph: {
    title: "Crema Paraíso — Desde 1951",
    description: "Fábrica venezolana de helados artesanales, siropes, Kindy y cremas. Distribución nacional a restaurantes, hoteles y cadenas.",
    type: "website",
    locale: "es_VE",
    siteName: "Crema Paraíso",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
