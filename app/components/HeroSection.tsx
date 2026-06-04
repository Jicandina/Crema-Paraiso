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
      backgroundColor: "var(--color-brown)",
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
          background: "linear-gradient(to right, #3D1505 0%, rgba(61,21,5,0.85) 30%, rgba(61,21,5,0.3) 60%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #3D1505 0%, transparent 12%, transparent 88%, #3D1505 100%)",
        }} />
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        width: "100%",
        padding: "clamp(40px, 6vh, 64px) 0 clamp(40px, 6vh, 64px) clamp(16px, 3vw, 48px)",
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
            backgroundColor: "rgba(232, 115, 42, 0.15)",
            border: "1px solid rgba(232, 115, 42, 0.3)",
            marginBottom: "1.25rem",
          }}>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
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
            transitionDelay: "40ms",
          }}>
            <span style={{
              display: "block",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontStyle: "normal",
            }}>
              El divino
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              fontWeight: 700,
              color: "var(--color-cream)",
              fontStyle: "normal",
            }}>
              sabor de
            </span>
            <span style={{
              display: "block",
              fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
              fontWeight: 800,
              color: "var(--color-orange)",
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
            transitionDelay: "80ms",
            marginBottom: "0.5rem",
          }}>
            {[
              { num: "74", label: "años\nde historia" },
              { num: "6", label: "líneas\nde producto" },
              { num: "1951", label: "año de\nfundación" },
            ].map((f, i) => (
              <div key={f.num} style={{
                padding: "0.75rem 2rem 0.75rem 0",
                borderLeft: i === 0 ? "none" : "1px solid rgba(253,243,227,0.1)",
                paddingLeft: i === 0 ? "0" : "2rem",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--color-orange)",
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
                  color: "rgba(253,243,227,0.5)",
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
              color: "rgba(253,243,227,0.55)",
              transitionDelay: "120ms",
            }}>
              Más de siete décadas fabricando helados artesanales, siropes, cremas y bases para limonada. Distribuimos a restaurantes, hoteles, heladerías y cadenas en toda Venezuela.
            </p>

            <div className="reveal-left hero-ctas" style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              transitionDelay: "160ms",
            }}>
              <a
                href="#nosotros"
                onClick={(e) => { e.preventDefault(); document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "var(--color-brown)",
                  backgroundColor: "var(--color-orange)",
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  transition: "background-color 200ms cubic-bezier(0.16, 1, 0.3, 1), transform 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-orange-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-orange)"; e.currentTarget.style.transform = "translateY(0)"; }}
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
                  color: "rgba(253,243,227,0.7)",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1px solid rgba(253,243,227,0.18)",
                  padding: "14px 32px",
                  borderRadius: "6px",
                  transition: "color 200ms cubic-bezier(0.16, 1, 0.3, 1), border-color 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.borderColor = "rgba(253,243,227,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(253,243,227,0.7)"; e.currentTarget.style.borderColor = "rgba(253,243,227,0.18)"; }}
              >
                Contacto
              </a>
            </div>
          </div>

        {/* Category strip — ancho completo, fuera del maxWidth */}
        <div className="hero-categories" style={{
          display: "flex",
          gap: "0",
          flexWrap: "nowrap",
          overflowX: "auto",
          scrollbarWidth: "none",
          borderTop: "1px solid rgba(253,243,227,0.1)",
          paddingTop: "1rem",
        }}>
          {categorias.map((cat, i) => (
            <div key={cat} style={{ display: "flex", alignItems: "center" }}>
              <span style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "rgba(253,243,227,0.45)",
                whiteSpace: "nowrap",
                padding: "0 1.25rem 0 0",
              }}>
                {cat}
              </span>
              {i < categorias.length - 1 && (
                <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(253,243,227,0.12)", flexShrink: 0, marginRight: "1.25rem" }} />
              )}
            </div>
          ))}
        </div>

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
