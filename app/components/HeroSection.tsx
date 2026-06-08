"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const categorias = ["Helados Duros", "Mezcla Suave", "Siropes", "Kindy", "Crema Topping", "CociCreme"];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal, .reveal-left");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="inicio" ref={ref} style={{
      backgroundColor: "#D01020",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Product photo — right side background */}
      <div className="hero-bg-image" style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "58%",
        height: "100%",
        zIndex: 0,
      }}>
        <Image
          src="/images/hero-grupo.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.15) 100%)",
        }} />
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        width: "100%",
        padding: "clamp(48px, 8vh, 80px) 0 clamp(40px, 6vh, 64px) clamp(16px, 3vw, 48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "1.5rem",
        position: "relative",
        zIndex: 2,
      }}>

        {/* Upper: headline block */}
        <div style={{ maxWidth: "clamp(280px, 42vw, 620px)" }} className="hero-top">

          <div className="reveal-left" style={{
            display: "inline-block",
            padding: "5px 14px",
            borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.25)",
            marginBottom: "1.25rem",
          }}>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}>
              Fábrica Venezolana · Guarenas · Desde 1951
            </span>
          </div>

          {/* H1 — tipografía expresiva con EB Garamond */}
          <h1 className="reveal-left" style={{
            fontFamily: "var(--font-playfair)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            marginBottom: "1.75rem",
            transitionDelay: "60ms",
          }}>
            <span style={{
              display: "block",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              fontStyle: "normal",
            }}>
              El divino
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              fontStyle: "normal",
            }}>
              sabor de
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
              fontWeight: 800,
              color: "#FFD100",
              fontStyle: "italic",
              lineHeight: 1,
              marginTop: "0.1em",
            }}>
              la tradición.
            </span>
          </h1>

          {/* Stats — más grandes y respiro */}
          <div className="reveal-left hero-stats" style={{
            display: "flex",
            gap: "0",
            transitionDelay: "120ms",
            marginBottom: "0.5rem",
          }}>
            {[
              { num: "74", label: "años\nde historia" },
              { num: "6", label: "líneas\nde producto" },
              { num: "1951", label: "año de\nfundación" },
            ].map((f, i) => (
              <div key={f.num} style={{
                padding: "0.75rem 2rem 0.75rem 0",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.25)",
                paddingLeft: i === 0 ? "0" : "2rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#FFD100",
                  lineHeight: 1,
                  marginBottom: "0.3rem",
                  letterSpacing: "-0.03em",
                }}>
                  {f.num}
                </div>
                <div style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.75)",
                  whiteSpace: "pre-line",
                }}>
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower: description + CTAs + categories */}
        <div style={{ maxWidth: "clamp(280px, 38vw, 520px)" }} className="hero-lower">
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            marginBottom: "1rem",
          }}>
            <p className="reveal-left" style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.8)",
              transitionDelay: "180ms",
            }}>
              Más de siete décadas fabricando helados artesanales, siropes, cremas y bases para limonada. Distribuimos a restaurantes, hoteles, heladerías y cadenas en toda Venezuela.
            </p>

            <div className="reveal-left hero-ctas" style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              transitionDelay: "240ms",
            }}>
              <a
                href="#nosotros"
                onClick={(e) => { e.preventDefault(); document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#8A0C14",
                  backgroundColor: "#FFD100",
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFBF00"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFD100"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Conocer más
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.35)",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  transition: "color 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#FFFFFF"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
              >
                Contacto
              </a>
            </div>

            {/* Social links */}
            <div className="reveal-left" style={{ display: "flex", gap: "0.75rem", alignItems: "center", transitionDelay: "300ms" }}>
              <a href="https://instagram.com/cremaparaiso" target="_blank" rel="noopener noreferrer" aria-label="Instagram @cremaparaiso"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.78rem", fontFamily: "var(--font-jakarta)", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD100")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @cremaparaiso
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem" }}>·</span>
              <a href="https://tiktok.com/@cremaparaisove" target="_blank" rel="noopener noreferrer" aria-label="TikTok @cremaparaisove"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.78rem", fontFamily: "var(--font-jakarta)", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD100")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.64a8.23 8.23 0 004.83 1.55V6.74a4.85 4.85 0 01-1.06-.05z"/></svg>
                @cremaparaisove
              </a>
            </div>
          </div>
        </div>

        {/* Category strip — fuera de hero-lower, ancho propio */}
        <div className="hero-categories" style={{
          maxWidth: "clamp(280px, 52vw, 760px)",
          display: "flex",
          gap: "0",
          flexWrap: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "none",
          borderTop: "1px solid rgba(255,255,255,0.25)",
          paddingTop: "1rem",
        }}>
          {categorias.map((cat, i) => (
            <div key={cat} style={{ display: "flex", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.65)",
                whiteSpace: "nowrap",
                padding: "0 1.25rem 0 0",
              }}>
                {cat}
              </span>
              {i < categorias.length - 1 && (
                <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.25)", flexShrink: 0, marginRight: "1.25rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-top { max-width: 100% !important; width: 100% !important; }
          .hero-lower { max-width: 100% !important; width: 100% !important; }
          .hero-bg-image { width: 100% !important; opacity: 0.18 !important; }
          .hero-stats { flex-wrap: wrap; gap: 0.5rem 0; }
          .hero-ctas a { flex: 1 1 calc(50% - 0.5rem); text-align: center; }
          .hero-categories {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 0.5rem;
            margin-bottom: -0.5rem;
          }
          .hero-categories::-webkit-scrollbar { display: none; }
        }
        @media (max-width: 400px) {
          .hero-ctas a { flex: 1 1 100%; }
        }
      `}</style>
    </section>
  );
}
