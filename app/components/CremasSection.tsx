"use client";

import { useRevealSection } from "./useReveal";

export default function CremasSection() {
  const ref = useRevealSection();

  return (
    <section id="cremas" ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Header */}
      <div style={{ backgroundColor: "var(--color-orange)", padding: "clamp(60px, 8vh, 80px) clamp(24px, 5vw, 60px) clamp(40px, 5vh, 60px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal">
            <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(253,243,227,0.7)", display: "block", marginBottom: "0.75rem" }}>
              Cremas
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end" }} className="cremas-header">
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "var(--color-cream)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Para decorar<br />y cocinar.
              </h2>
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(253,243,227,0.75)" }}>
                Dos líneas para la cocina profesional venezolana. Distribuidas en hoteles, cadenas de restaurantes, pastelerías y cocinas profesionales en toda Venezuela.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Two product rows */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="cremas-grid">

        {/* Topping */}
        <div className="reveal" style={{
          backgroundColor: "var(--color-brown)",
          padding: "clamp(2.5rem, 5vw, 4rem)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-orange)", marginBottom: "1rem" }}>
            Crema Chantilly para Batir
          </div>
          <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "var(--color-cream)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Crema<br />Topping
          </h3>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.85, color: "rgba(253,243,227,0.6)", marginBottom: "2rem" }}>
            Crema chantilly lista para usar, ideal para decorar postres, helados, bebidas calientes y frías, waffles, pancakes y todo tipo de creaciones dulces. Distribuida para hoteles, cadenas de restaurantes y pastelerías profesionales.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}>
            {["Postres y helados", "Bebidas calientes", "Bebidas frías", "Waffles y pancakes", "Pastelerías", "Hoteles y restaurantes"].map((uso) => (
              <div key={uso} style={{ backgroundColor: "var(--color-brown)", padding: "0.75rem 1rem" }}>
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.775rem", fontWeight: 400, color: "rgba(253,243,227,0.55)" }}>
                  {uso}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CociCreme */}
        <div className="reveal" style={{
          backgroundColor: "var(--color-cream)",
          padding: "clamp(2.5rem, 5vw, 4rem)",
          transitionDelay: "100ms",
        }}>
          <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-orange)", marginBottom: "1rem" }}>
            Crema para Cocinar
          </div>
          <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, color: "var(--color-brown)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
            Coci<br />Creme
          </h3>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.85, color: "var(--color-brown-mid)", marginBottom: "2rem" }}>
            La crema para cocinar versátil que realza tus platos. Ideal para salsas, sopas, cremas, gratinados y recetas saladas. Distribuida para restaurantes, hoteles y cocinas profesionales en toda Venezuela.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "rgba(61,21,5,0.1)" }}>
            {["Salsas y sopas", "Cremas y vinagretas", "Gratinados", "Recetas saladas", "Restaurantes", "Hoteles y cocinas"].map((uso) => (
              <div key={uso} style={{ backgroundColor: "var(--color-cream)", padding: "0.75rem 1rem" }}>
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.775rem", fontWeight: 400, color: "#9B4A22" }}>
                  {uso}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="reveal" style={{
        backgroundColor: "var(--color-cream-mid)",
        padding: "2rem clamp(24px, 5vw, 60px)",
        borderTop: "1px solid rgba(61,21,5,0.1)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 400, color: "var(--color-brown)" }}>
            Distribuimos a hoteles, cadenas de restaurantes y cocinas profesionales en toda Venezuela.
          </p>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 600,
              color: "var(--color-cream)", backgroundColor: "var(--color-brown)", border: "none", cursor: "pointer",
              padding: "12px 28px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0,
              transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-orange)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-brown)"; }}
          >
            Solicitar información
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cremas-grid { grid-template-columns: 1fr !important; }
          .cremas-grid > div { border-right: none !important; border-bottom: 1px solid rgba(61,21,5,0.08) !important; }
          .cremas-header { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
