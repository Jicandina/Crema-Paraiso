"use client";

import Image from "next/image";
import Script from "next/script";
import { useRevealSection } from "./useReveal";

const IG_URL = "https://instagram.com/cremaparaiso";
const TT_URL = "https://tiktok.com/@cremaparaisove";

// Pega aquí el ID del widget de Behold.so cuando el cliente lo cree en behold.so
// Ej: "FdCCqfHpNGXSPGMEhbZ7"
const BEHOLD_WIDGET_ID = "";

const posts = [
  { src: "/images/18_banana_split_HD.jpg", alt: "Banana split Crema Paraíso" },
  { src: "/images/01_copa_chocolate_HD.jpg", alt: "Copa de chocolate Crema Paraíso" },
  { src: "/images/frappe-kindy.jpg", alt: "Frappe Kindy Crema Paraíso" },
  { src: "/images/05_san_bernardino_HD.jpg", alt: "San Bernardino Crema Paraíso" },
  { src: "/images/merengada.jpg", alt: "Merengada Crema Paraíso" },
  { src: "/images/sundae.png", alt: "Sundae Crema Paraíso" },
];

function IgIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.64a8.23 8.23 0 004.83 1.55V6.74a4.85 4.85 0 01-1.06-.05z" />
    </svg>
  );
}

export default function SocialSection() {
  const ref = useRevealSection();

  return (
    <section
      id="redes"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#FFD100", padding: "clamp(72px, 10vh, 100px) 0", borderTop: "4px solid #D01020" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
          <span style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D01020",
            display: "block",
            marginBottom: "0.75rem",
          }}>
            Redes sociales
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#D01020",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
            fontStyle: "italic",
          }}>
            Síguenos en Instagram.
          </h2>
          <p style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "0.88rem",
            fontWeight: 300,
            color: "rgba(160,14,22,0.85)",
          }}>
            Recetas, lanzamientos y el día a día de la fábrica.
          </p>
        </div>

        {/* Feed — Behold.so en vivo o grid estático como fallback */}
        <div className="reveal" style={{ marginBottom: "2.25rem" }}>
          {BEHOLD_WIDGET_ID ? (
            <>
              <div id={BEHOLD_WIDGET_ID} />
              <Script src="https://w.behold.so/widget.js" strategy="lazyOnload" />
            </>
          ) : (
            <div className="social-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.625rem",
            }}>
              {posts.map((post, i) => (
                <a
                  key={i}
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  aria-label={`Ver en Instagram: ${post.alt}`}
                  style={{
                    aspectRatio: "1",
                    display: "block",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    position: "relative",
                    backgroundColor: "rgba(208,16,32,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="social-overlay" style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(208,16,32,0.88)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    opacity: 0,
                    transition: "opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}>
                    <span style={{ color: "#FFD100" }}><IgIcon /></span>
                    <span style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      color: "#FFD100",
                      textTransform: "uppercase",
                    }}>
                      Ver en Instagram
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* CTA row */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "0.875rem", flexWrap: "wrap" }}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#FFD100",
              backgroundColor: "#D01020",
              textDecoration: "none",
              padding: "12px 26px",
              borderRadius: "6px",
              transition: "background-color 0.22s, transform 0.22s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B00E1A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#D01020"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <IgIcon />
            @cremaparaiso
          </a>
          <a
            href={TT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "rgba(160,14,22,0.9)",
              backgroundColor: "transparent",
              border: "1px solid rgba(208,16,32,0.3)",
              textDecoration: "none",
              padding: "12px 26px",
              borderRadius: "6px",
              transition: "color 0.22s, border-color 0.22s, transform 0.22s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#D01020"; e.currentTarget.style.borderColor = "rgba(208,16,32,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(160,14,22,0.9)"; e.currentTarget.style.borderColor = "rgba(208,16,32,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <TkIcon />
            @cremaparaiso
          </a>
        </div>
      </div>

      <style>{`
        .social-card:hover .social-overlay { opacity: 1 !important; }
        @media (max-width: 640px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          .social-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.375rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .social-overlay { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
