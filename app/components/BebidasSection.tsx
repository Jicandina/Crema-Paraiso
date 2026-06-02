"use client";

import Image from "next/image";
import { useRevealSection } from "./useReveal";

const kindys = [
  {
    nombre: "Kindy Tradicional",
    tag: "Con azúcar · Rango Brix 55-60",
    desc: "Base cítrica natural elaborada con 100% jugo de limón y azúcar, preservando aceites esenciales, vitamina C y ácidos orgánicos. Ideal para Limonada Frappé.",
    datos: [
      { label: "Calorías", val: "245 Cal / 100g" },
      { label: "Carbohidratos", val: "61.0 g / 100g" },
      { label: "Brix", val: "55° – 60°" },
      { label: "Rendimiento (galón)", val: "~25 – 35 L de limonada" },
      { label: "Vida útil", val: "120 días desde fabricación" },
      { label: "Permiso sanitario", val: "A-39.140" },
    ],
    presentaciones: [
      { formato: "Botella 350 ml", rinde: "~2.5 – 3.5 L" },
      { formato: "Botella 800 ml", rinde: "~5 – 8 L" },
      { formato: "Galón 3.78 L", rinde: "~25 – 35 L" },
    ],
    conservacion: "Congelado <-15°C o refrigerado <4°C",
    bg: "var(--color-orange)",
    textClr: "var(--color-cream)",
    foto: "/images/kindy-vaso.png",
    fotoProducto: "/images/kindy-galon.png",
  },
  {
    nombre: "Kindy Light",
    tag: "Con Sucralosa · Solo 16 Cal/vaso",
    desc: "Base cítrica natural con 100% jugo de limón, endulzada con Sucralosa. Solo 16 calorías por vaso. Sin azúcar añadida.",
    datos: [
      { label: "Calorías", val: "16 Cal / 100g" },
      { label: "Carbohidratos", val: "3.2 g / 100g" },
      { label: "Endulzante", val: "Sucralosa (sin azúcar)" },
      { label: "Rendimiento (galón)", val: "~25 – 35 L de limonada" },
      { label: "Vida útil", val: "120 días desde fabricación" },
      { label: "Permiso sanitario", val: "A-106.604" },
    ],
    presentaciones: [
      { formato: "Botella 350 ml", rinde: "~2.5 – 3.5 L" },
      { formato: "Botella 800 ml", rinde: "~5 – 8 L" },
      { formato: "Galón 3.78 L", rinde: "~25 – 35 L" },
    ],
    conservacion: "Congelado <-15°C o refrigerado <4°C",
    bg: "#2A5C10",
    textClr: "var(--color-cream)",
    foto: "/images/kindy-light-350.png",
    fotoProducto: "/images/kindy-light-galon.png",
  },
];

export default function BebidasSection() {
  const ref = useRevealSection();

  return (
    <section id="bebidas" ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Section header */}
      <div style={{ backgroundColor: "var(--color-brown)", padding: "clamp(60px, 8vh, 80px) clamp(24px, 5vw, 60px) clamp(40px, 5vh, 60px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal">
            <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-orange)", display: "block", marginBottom: "0.75rem" }}>
              Bebidas
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end" }} className="bebidas-header">
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "var(--color-cream)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Kindy.
              </h2>
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(253,243,227,0.55)" }}>
                La única base para preparar limonada impecable para 1.000 personas en minutos. Dos versiones: Tradicional y Light.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kindy comparison grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className="kindy-compare">
        {kindys.map((k, i) => (
          <div
            key={k.nombre}
            className="reveal"
            style={{
              backgroundColor: k.bg,
              padding: "2.5rem clamp(1.5rem, 3vw, 2.5rem)",
              transitionDelay: `${i * 80}ms`,
              borderRight: i < kindys.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header with product photo */}
            <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(253,243,227,0.65)", marginBottom: "0.5rem" }}>
                  {k.tag}
                </div>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.75rem", fontWeight: 800, color: k.textClr, lineHeight: 1.1 }}>
                  {k.nombre}
                </div>
              </div>
              {k.fotoProducto && (
                <div style={{ width: "70px", height: "90px", flexShrink: 0, position: "relative" }}>
                  <Image
                    src={k.fotoProducto}
                    alt={k.nombre}
                    fill
                    sizes="70px"
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.825rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(253,243,227,0.65)", marginBottom: "1.75rem" }}>
              {k.desc}
            </p>

            {/* Data table */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(253,243,227,0.6)", marginBottom: "0.75rem" }}>
                Datos técnicos
              </div>
              {k.datos.map((d) => (
                <div key={d.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "0.45rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  gap: "1rem",
                }}>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 400, color: "rgba(253,243,227,0.65)", flexShrink: 0 }}>
                    {d.label}
                  </span>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 600, color: k.textClr, textAlign: "right" }}>
                    {d.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Presentations */}
            <div style={{ marginTop: "auto" }}>
              <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(253,243,227,0.6)", marginBottom: "0.75rem" }}>
                Presentaciones
              </div>
              {k.presentaciones.map((pr) => (
                <div key={pr.formato} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.775rem", fontWeight: 500, color: k.textClr }}>
                    {pr.formato}
                  </span>
                  {pr.rinde && (
                    <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 300, color: "rgba(253,243,227,0.6)" }}>
                      {pr.rinde}
                    </span>
                  )}
                </div>
              ))}
              <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 300, color: "rgba(253,243,227,0.55)", marginTop: "0.75rem", fontStyle: "italic" }}>
                {k.conservacion}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="reveal" style={{
        backgroundColor: "var(--color-cream-mid)",
        padding: "2rem clamp(24px, 5vw, 60px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 400, color: "var(--color-brown)" }}>
            Disponible en presentaciones Food Service y Retail. Distribución nacional.
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
            Solicitar distribución
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .kindy-compare { grid-template-columns: 1fr !important; }
          .kindy-compare > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
          .bebidas-header { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
