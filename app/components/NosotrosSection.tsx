"use client";

import Image from "next/image";
import { useRevealSection } from "./useReveal";

const hitos = [
  { year: "1951", title: "El fundador llega a Venezuela", desc: "Adalberto Katz, inmigrante checoslovaco formado en pastelería en París, trae el conocimiento que cambiaría el sabor del país." },
  { year: "1953", title: "Nace Crema Paraíso", desc: "Primera heladería en El Paraíso, Caracas. Nace la marca que definiría la cultura del helado venezolano." },
  { year: "1974", title: "Expansión nacional", desc: "26 nuevas tiendas en Caracas, Los Teques, Guarenas, Maracay y Valencia. La cadena de fuentes de soda más famosa del país." },
  { year: "1984", title: "Fábrica propia en Guarenas", desc: "Instalaciones propias en la Zona Industrial del Este, Guarenas. La misma fábrica que opera hasta hoy con tecnología nacional." },
  { year: "1990", title: "Nace Kindy", desc: "Lanzamos Kindy, nuestra base cítrica natural para limonada. La opción para preparar limonada impecable a gran escala." },
  { year: "Hoy", title: "74 años, la misma calidad", desc: "Nueva generación, misma tradición. Desde Guarenas para toda Venezuela, con los mismos valores desde el primer día." },
];

export default function NosotrosSection() {
  const ref = useRevealSection();

  return (
    <section
      id="nosotros"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#FDF3E3", padding: "clamp(60px, 10vh, 100px) 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>

        {/* Split layout: left = texto + timeline, right = foto */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }} className="nosotros-grid">

          {/* Left: heading + timeline */}
          <div>
            <div className="reveal" style={{ marginBottom: "3rem" }}>
              <span style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8732A",
                display: "block",
                marginBottom: "0.75rem",
              }}>
                Nuestra historia
              </span>
              <h2 style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                color: "#3D1505",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>
                Más de 74 años endulzando a Venezuela.
              </h2>
            </div>

            {/* Timeline */}
            <div>
          {hitos.map((h, i) => (
            <div
              key={h.year}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                gap: "2rem",
                padding: "1.75rem 0",
                borderBottom: i < hitos.length - 1 ? "1px solid rgba(61, 21, 5, 0.1)" : "none",
                transitionDelay: `${i * 60}ms`,
                alignItems: "start",
              }}
            >
              <div style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#E8732A",
                paddingTop: "2px",
              }}>
                {h.year}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#3D1505",
                  marginBottom: "0.35rem",
                }}>
                  {h.title}
                </div>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "#6B2E12",
                  maxWidth: "60ch",
                }}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>

          {/* Right: photo sticky */}
          <div className="reveal-right" style={{ position: "sticky", top: "100px" }}>
            <div style={{
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid rgba(232, 115, 42, 0.2)",
              aspectRatio: "4/5",
              position: "relative",
              boxShadow: "0 8px 40px rgba(61, 21, 5, 0.12)",
            }}>
              <Image
                src="/images/sundae.png"
                alt="Sundae de helado Crema Paraíso con topping de chantilly"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(61,21,5,0.75) 0%, transparent 50%)",
              }} />
              <div style={{ position: "absolute", bottom: "1.75rem", left: "1.75rem", right: "1.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E8732A",
                  display: "block",
                  marginBottom: "0.35rem",
                }}>
                  Desde 1984
                </span>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#FDF3E3",
                  display: "block",
                  marginBottom: "0.5rem",
                }}>
                  Fábrica en Guarenas, Miranda
                </span>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: "rgba(253, 243, 227, 0.7)",
                }}>
                  Instalaciones propias con tecnología de producción a gran escala y distribución nacional. Permisos sanitarios SENCAMER vigentes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nosotros-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
