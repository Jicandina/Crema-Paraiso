"use client";

import Image from "next/image";
import { useRevealSection } from "./useReveal";

const hitos: { year: string; title: string; desc: string; key: boolean; badge: string | null; today?: boolean }[] = [
  { year: "1951", title: "El fundador llega a Venezuela", desc: "Adalberto Katz, inmigrante checoslovaco formado en pastelería en París, trae el conocimiento que cambiaría el sabor del país.", key: true, badge: "El origen" },
  { year: "1953", title: "Nace Crema Paraíso", desc: "Primera heladería en El Paraíso, Caracas. Nace la marca que definiría la cultura del helado venezolano.", key: true, badge: "Fundación" },
  { year: "1974", title: "Expansión nacional", desc: "26 nuevas tiendas en Caracas, Los Teques, Guarenas, Maracay y Valencia. La cadena de fuentes de soda más famosa del país.", key: true, badge: "Crecimiento" },
  { year: "1984", title: "Fábrica propia en Guarenas", desc: "Instalaciones propias en la Zona Industrial del Este. La misma fábrica que opera hasta hoy con tecnología nacional.", key: true, badge: "Hito mayor" },
  { year: "1990", title: "Nace Kindy", desc: "Lanzamos Kindy, nuestra base cítrica natural para limonada. La opción para preparar limonada impecable a gran escala.", key: true, badge: "Expansión" },
  { year: "2024", title: "Nueva junta directiva", desc: "Nueva generación al frente de la empresa. Se retoman las riendas con visión de crecimiento, modernización y expansión del portafolio a nivel nacional.", key: true, badge: "Renovación" },
  { year: "Hoy", title: "74 años, la misma calidad", desc: "Nueva generación, misma tradición. Desde Guarenas para toda Venezuela, con los mismos valores desde el primer día.", key: true, badge: "Presente", today: true },
];

const stats = [
  { value: "74", label: "años de historia" },
  { value: "26", label: "tiendas en expansión" },
  { value: "1984", label: "fábrica propia" },
];

export default function NosotrosSection() {
  const ref = useRevealSection();

  return (
    <section
      id="nosotros"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "linear-gradient(180deg, #FDF3E3 0%, #F5E4C8 60%, #EED5B0 100%)",
        padding: "clamp(64px, 10vh, 100px) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Noise texture overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: "256px 256px",
        pointerEvents: "none",
        opacity: 0.5,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)", position: "relative" }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "clamp(48px, 6vh, 72px)" }}>

          {/* Top row: label + badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
            }}>
              Nuestra historia
            </span>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-brown)",
              backgroundColor: "rgba(46,18,8,0.07)",
              border: "1px solid rgba(46,18,8,0.12)",
              borderRadius: "999px",
              padding: "0.3rem 0.85rem",
            }}>
              Est. 1951 · Caracas, Venezuela
            </span>
          </div>

          {/* H2 */}
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            color: "var(--color-brown)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "20ch",
            marginBottom: "1.25rem",
          }}>
            Más de 74 años endulzando a Venezuela.
          </h2>

          {/* Intro */}
          <p style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "var(--color-brown-mid)",
            maxWidth: "52ch",
            marginBottom: "2rem",
          }}>
            Una empresa familiar que nació de la pasión de un inmigrante y se convirtió en parte del sabor nacional. Hoy operamos desde nuestra propia fábrica en Guarenas, con distribución a todo el país.
          </p>

          {/* Stats chips */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.value} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "rgba(46,18,8,0.06)",
                border: "1px solid rgba(46,18,8,0.1)",
                borderRadius: "0.75rem",
                padding: "0.6rem 1.1rem",
                backdropFilter: "blur(4px)",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  color: "var(--color-brown)",
                  lineHeight: 1,
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "var(--color-brown-mid)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid: timeline + photo */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: "5rem",
          alignItems: "start",
        }} className="nosotros-grid">

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Background vertical track */}
            <div style={{
              position: "absolute",
              left: "calc(5.5rem + 1.5rem + 5px)",
              top: "16px",
              bottom: "16px",
              width: "2px",
              background: "linear-gradient(to bottom, rgba(46,18,8,0.2) 0%, rgba(249,168,37,0.4) 50%, rgba(46,18,8,0.1) 100%)",
              borderRadius: "2px",
            }} />

            {hitos.map((h, i) => (
              <div
                key={h.year}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5.5rem 1.5rem 1fr",
                  gap: "0 1.25rem",
                  paddingBottom: i < hitos.length - 1 ? "clamp(28px, 4.5vh, 52px)" : 0,
                  transitionDelay: `${i * 80}ms`,
                  position: "relative",
                }}
              >
                {/* Year — grande */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  paddingTop: "0px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: h.year === "Hoy" ? "2rem" : "clamp(1.6rem, 2.2vw, 2.4rem)",
                    fontWeight: 900,
                    color: h.today ? "var(--color-orange)" : h.key ? "var(--color-brown)" : "rgba(46,18,8,0.35)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    textShadow: h.today ? "0 0 24px rgba(249,168,37,0.4)" : "none",
                  }}>
                    {h.year}
                  </span>
                </div>

                {/* Dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "7px" }}>
                  <div style={{
                    width: h.today ? "16px" : h.key ? "14px" : "10px",
                    height: h.today ? "16px" : h.key ? "14px" : "10px",
                    borderRadius: "50%",
                    backgroundColor: h.today ? "var(--color-orange)" : h.key ? "var(--color-orange)" : "rgba(46,18,8,0.25)",
                    border: `2px solid rgba(253,243,227,0.8)`,
                    boxShadow: h.today
                      ? `0 0 0 3px var(--color-orange), 0 0 20px rgba(249,168,37,0.5)`
                      : h.key ? `0 0 0 2px var(--color-orange), 0 0 12px rgba(249,168,37,0.3)` : `0 0 0 1.5px rgba(46,18,8,0.2)`,
                    flexShrink: 0,
                    zIndex: 1,
                    transition: "all 0.2s ease",
                  }} />
                </div>

                {/* Content */}
                <div style={{
                  backgroundColor: h.today
                    ? "var(--color-brown)"
                    : h.key ? "rgba(46,18,8,0.04)" : "transparent",
                  border: h.today
                    ? "1px solid rgba(249,168,37,0.25)"
                    : h.key ? "1px solid rgba(46,18,8,0.08)" : "1px solid transparent",
                  borderRadius: "1rem",
                  padding: h.key ? "1rem 1.25rem" : "0 0",
                  transition: "background 0.2s ease",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.45rem", flexWrap: "wrap" }}>
                    <div style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: h.key ? "1.05rem" : "0.95rem",
                      fontWeight: h.key ? 800 : 700,
                      color: h.today ? "var(--color-cream)" : "var(--color-brown)",
                      lineHeight: 1.3,
                    }}>
                      {h.title}
                    </div>
                    {h.badge && (
                      <span style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: h.today ? "var(--color-brown)" : h.key ? "var(--color-orange)" : "rgba(46,18,8,0.5)",
                        backgroundColor: h.today ? "var(--color-orange)" : h.key ? "rgba(249,168,37,0.12)" : "rgba(46,18,8,0.06)",
                        border: `1px solid ${h.today ? "transparent" : h.key ? "rgba(249,168,37,0.3)" : "rgba(46,18,8,0.1)"}`,
                        borderRadius: "999px",
                        padding: "0.2rem 0.6rem",
                        whiteSpace: "nowrap",
                      }}>
                        {h.badge}
                      </span>
                    )}
                  </div>
                  <p style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: h.today ? "rgba(253,243,227,0.75)" : h.key ? "var(--color-brown-mid)" : "rgba(107,46,18,0.65)",
                    maxWidth: "50ch",
                    margin: 0,
                  }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo sticky */}
          <div className="reveal-right" style={{ position: "sticky", top: "168px" }}>
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "3/4",
              position: "relative",
              boxShadow: "0 40px 100px rgba(46,18,8,0.22), 0 8px 24px rgba(46,18,8,0.12)",
              border: "1px solid rgba(46,18,8,0.06)",
            }}>
              <Image
                src="/images/sundae.png"
                alt="Sundae Crema Paraíso"
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(46,18,8,0.92) 0%, rgba(46,18,8,0.2) 50%, transparent 100%)",
              }} />

              {/* Top badge */}
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                backgroundColor: "var(--color-orange)",
                borderRadius: "999px",
                padding: "0.4rem 1rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.85rem",
                  fontWeight: 900,
                  color: "var(--color-brown)",
                  letterSpacing: "-0.01em",
                }}>
                  Desde 1953
                </span>
              </div>

              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-orange)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}>
                  Guarenas, Miranda
                </span>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "var(--color-cream)",
                  display: "block",
                  lineHeight: 1.2,
                  marginBottom: "0.6rem",
                }}>
                  Fábrica propia desde 1984
                </span>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(253,243,227,0.7)",
                  margin: 0,
                }}>
                  Producción artesanal a gran escala. Distribución nacional a restaurantes, hoteles y cadenas.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal, .reveal-right { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
        @media (max-width: 900px) {
          .nosotros-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .nosotros-grid > div:last-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
