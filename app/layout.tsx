import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Baloo_2({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Poppins({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crema Paraíso — Desde 1951",
  description: "Más de 74 años fabricando los mejores helados, siropes, crema de leche y chantilly de Venezuela. Fábrica en Guarenas. Distribución nacional.",
  keywords: ["helados venezuela", "crema paraíso", "siropes", "chantilly", "soft serve", "kindy limonada", "helados guarenas", "distribuidor helados"],
  metadataBase: new URL("https://crema-paraiso1.pages.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Crema Paraíso — Desde 1951",
    description: "Fábrica venezolana de helados artesanales, siropes, Kindy y cremas. Distribución nacional a restaurantes, hoteles y cadenas.",
    type: "website",
    locale: "es_VE",
    siteName: "Crema Paraíso",
    url: "https://crema-paraiso1.pages.dev",
    images: [{ url: "/og-image.jpg", width: 840, height: 840, alt: "Crema Paraíso — Desde 1951" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crema Paraíso — Desde 1951",
    description: "Fábrica venezolana de helados artesanales. Distribución nacional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Crema Paraíso",
  description: "Fábrica venezolana de helados artesanales, siropes, crema de leche y bases para limonada desde 1951.",
  url: "https://crema-paraiso1.pages.dev",
  foundingDate: "1951",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zona Industrial del Este, Sector Barbecho",
    addressLocality: "Guarenas",
    addressRegion: "Miranda",
    addressCountry: "VE",
  },
  areaServed: "Venezuela",
  sameAs: [
    "https://instagram.com/cremaparaiso",
    "https://facebook.com/cremaparaiso",
    "https://tiktok.com/@cremaparaiso",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#FFE566" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
