"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { useRevealSection } from "./useReveal";

const hitos: { year: string; title: string; desc: string; today?: boolean }[] = [
  { year: "1951", title: "El fundador llega a Venezuela", desc: "Adalberto Katz, inmigrante checoslovaco formado en pastelería en París, trae el conocimiento que cambiaría el sabor del país." },
  { year: "1953", title: "Nace Crema Paraíso", desc: "Primera heladería en El Paraíso, Caracas. Nace la marca que definiría la cultura del helado venezolano." },
  { year: "1960", title: "Primera expansión", desc: "Expansión a Santa Mónica, Bello Monte y San Bernardino. Primera fábrica en San Martín." },
  { year: "1974", title: "Expansión nacional", desc: "26 nuevas tiendas en Caracas, Los Teques, Guarenas, Maracay y Valencia. La cadena de fuentes de soda más famosa del país." },
  { year: "1984", title: "Fábrica propia en Guarenas", desc: "Instalaciones propias en la Zona Industrial del Este. La misma fábrica que opera hasta hoy con tecnología nacional." },
  { year: "1990", title: "Nace Kindy y CociCreme", desc: "Lanzamos Kindy, base de limón para limonada. Nace Topping y CociCreme." },
  { year: "2008", title: "Nueva generación", desc: "Reingeniería total de marcas y productos para el siglo XXI." },
  { year: "2024", title: "Nueva junta directiva", desc: "Nueva generación al frente de la empresa. Se retoman las riendas con visión de crecimiento, modernización y expansión del portafolio a nivel nacional." },
  { year: "Hoy", title: "75 años de historia", desc: "Desde que Adalberto Katz llegó a Venezuela en 1951 y abrió la primera heladería en 1953, la misma calidad. Nueva generación, mismo sabor.", today: true },
];

const stats = [
  { value: "75", label: "años de historia" },
  { value: "26", label: "tiendas en expansión" },
  { value: "1984", label: "fábrica propia" },
];

export default function NosotrosSection() {
  const ref = useRevealSection();
  const trackRef = useRef<HTMLDivElement>(null);

  // #4 — línea del timeline se dibuja al entrar en viewport
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("track-visible"); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // #5 — hover direccional: detecta de qué lado entra/sale el mouse
  const handleHitoEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { width, height, left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    let dx = 0, dy = -1;
    if (x < width * 0.25) { dx = -1; dy = 0; }
    else if (x > width * 0.75) { dx = 1; dy = 0; }
    else if (y >= height * 0.5) { dy = 1; }
    el.style.setProperty("--fill-x", `${dx * 105}%`);
    el.style.setProperty("--fill-y", `${dy * 105}%`);
  }, []);

  const handleHitoLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { width, height, left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    let dx = 0, dy = -1;
    if (x < 0) { dx = -1; dy = 0; }
    else if (x > width) { dx = 1; dy = 0; }
    else if (y > height) { dy = 1; }
    el.style.setProperty("--fill-x", `${dx * 105}%`);
    el.style.setProperty("--fill-y", `${dy * 105}%`);
  }, []);

  return (
    <section
      id="nosotros"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "#e61f3e",
        borderTop: "4px solid #FFD100",
        padding: "clamp(64px, 10vh, 100px) 0 clamp(32px, 5vh, 52px)",
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#e61f3e",
            }}>
              Nuestra historia
            </span>
            <span style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "999px",
              padding: "0.3rem 0.85rem",
            }}>
              Est. 1951 · Caracas, Venezuela
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "20ch",
            marginBottom: "1.25rem",
          }}>
            Más de 75 años endulzando a Venezuela.
          </h2>

          <p style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.8)",
            maxWidth: "52ch",
            marginBottom: "2rem",
          }}>
            Una empresa familiar que nació de la pasión de un inmigrante y se convirtió en parte del sabor nacional. Hoy operamos desde nuestra propia fábrica en Guarenas, con distribución a todo el país.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.value} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "0.75rem",
                padding: "0.6rem 1.1rem",
                backdropFilter: "blur(4px)",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
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
          gridTemplateColumns: "1fr 500px",
          gap: "5rem",
          alignItems: "start",
        }} className="nosotros-grid">

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* #4 — Track animado */}
            <div
              ref={trackRef}
              className="timeline-track"
              style={{
                position: "absolute",
                left: "calc(5.5rem + 1.5rem + 5px)",
                top: "16px",
                bottom: "16px",
                width: "2px",
                background: "rgba(255,255,255,0.18)",
                borderRadius: "2px",
                transformOrigin: "top",
              }}
            />

            {hitos.map((h, i) => (
              <div
                key={h.year}
                className="reveal nosotros-hito-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5.5rem 1.5rem 1fr",
                  gap: "0 1.25rem",
                  paddingBottom: i < hitos.length - 1 ? "clamp(28px, 4.5vh, 52px)" : 0,
                  transitionDelay: `${i * 80}ms`,
                  position: "relative",
                }}
              >
                {/* Year */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span className="nosotros-year" style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.6rem, 2.2vw, 2.4rem)",
                    fontWeight: 800,
                    color: "#FFFFFF",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    fontStyle: "normal",
                    textShadow: "none",
                  }}>
                    {h.year}
                  </span>
                </div>

                {/* Dot */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "8px" }}>
                  <div style={{
                    width: h.today ? "16px" : "12px",
                    height: h.today ? "16px" : "12px",
                    borderRadius: "50%",
                    backgroundColor: "#e61f3e",
                    border: "2px solid rgba(255,255,255,0.85)",
                    boxShadow: h.today
                      ? "0 0 0 3px #e61f3e, 0 0 20px rgba(230,31,62,0.6)"
                      : "0 0 0 2px #e61f3e, 0 0 8px rgba(249,168,37,0.2)",
                    flexShrink: 0,
                    zIndex: 1,
                  }} />
                </div>

                {/* Content card */}
                <div
                  className={!h.today ? "nosotros-hito" : ""}
                  onMouseEnter={!h.today ? handleHitoEnter : undefined}
                  onMouseLeave={!h.today ? handleHitoLeave : undefined}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "1rem",
                    padding: "1rem 1.25rem",
                    transition: "border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ marginBottom: "0.4rem" }}>
                      <div style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1.3,
                        fontStyle: "italic",
                      }}>
                        {h.title}
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.8)",
                      maxWidth: "50ch",
                      margin: 0,
                    }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photo sticky */}
          <div className="reveal-right" style={{ position: "sticky", top: "168px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              position: "relative",
              boxShadow: "0 2px 16px rgba(255,255,255,0.12), 0 1px 4px rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <Image
                src="/images/camion.jpg"
                alt="Camión de distribución Crema Paraíso, circa 1960"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
              }} />

              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                backgroundColor: "#e61f3e",
                borderRadius: "999px",
                padding: "0.4rem 1rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.85rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                }}>
                  Archivo histórico
                </span>
              </div>

              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}>
                  Caracas, circa 1960
                </span>
                <span style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  display: "block",
                  lineHeight: 1.2,
                  marginBottom: "0.6rem",
                  fontStyle: "italic",
                }}>
                  Los primeros repartos
                </span>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.75)",
                  margin: 0,
                }}>
                  Desde los primeros camiones hasta la fábrica propia en Guarenas. Setenta años de llevar el sabor a cada rincón del país.
                </p>
              </div>
            </div>

            {/* Tarjeta de stats debajo de la foto */}
            <div style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "1.25rem",
              padding: "1.5rem 1.75rem",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <p style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1rem",
                fontWeight: 700,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1.5,
                marginBottom: "1.25rem",
              }}>
                "La misma receta, la misma calidad, desde que Adalberto Katz llegó a Venezuela con el oficio aprendido en París."
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1.25rem" }}>
                {[
                  { v: "74", l: "años" },
                  { v: "1951", l: "fundación" },
                  { v: "1984", l: "fábrica propia" },
                ].map((s) => (
                  <div key={s.v}>
                    <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 500, color: "rgba(255,255,255,0.6)", marginTop: "0.3rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta: evolución de marca */}
            <div style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: "1.25rem",
              padding: "1.5rem 1.75rem",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}>
                  Evolución de marca
                </span>
                <span style={{ height: "1px", flex: 1, backgroundColor: "rgba(255,255,255,0.15)" }} />
              </div>

              {/* Video evolución */}
              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.25)",
                  backgroundColor: "#000",
                }}>
                  <video
                    src="/videos/logo-evolution.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              {/* Caption */}
              <p style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "0.78rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                margin: 0,
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: "1rem",
              }}>
                Desde 1953 con la misma esencia. En 2024, la nueva generación renueva la imagen manteniendo el espíritu de siempre.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* #4 — track se dibuja en 1.8s al entrar en viewport */
        .timeline-track {
          transform: scaleY(0);
          transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .timeline-track.track-visible { transform: scaleY(1); }

        /* #2 — active state táctil */
        .nosotros-hito:active {
          transform: scale(0.99);
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        /* #5 — hover fill direccional via ::after */
        .nosotros-hito {
          position: relative;
          overflow: hidden;
        }
        .nosotros-hito::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          transform: translate(var(--fill-x, 0%), var(--fill-y, -105%));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          border-radius: inherit;
        }
        .nosotros-hito:hover::after { transform: translate(0%, 0%) !important; }
        .nosotros-hito:hover {
          border-color: rgba(255,255,255,0.25) !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .reveal-right { opacity: 1 !important; transform: none !important; transition: none !important; }
          .timeline-track { transform: scaleY(1) !important; transition: none !important; }
          .nosotros-hito::after { transition: none !important; }
        }
        @media (max-width: 900px) {
          .nosotros-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .nosotros-grid > div:last-child { position: static !important; }
        }
        @media (max-width: 640px) {
          .nosotros-hito-row {
            grid-template-columns: 3.8rem 1.25rem 1fr !important;
            gap: 0 0.875rem !important;
          }
          .nosotros-year {
            font-size: clamp(1.2rem, 5vw, 1.6rem) !important;
          }
          .nosotros-hito {
            padding: 0.85rem 1rem !important;
          }
          .timeline-track {
            left: calc(3.8rem + 0.875rem + 4px) !important;
          }
        }
      `}</style>
    </section>
  );
}
