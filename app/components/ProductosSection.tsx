"use client";

import { useState } from "react";
import Image from "next/image";
import { useRevealSection } from "./useReveal";
import HeladosDurosShowcase from "./HeladosDurosShowcase";
import MezclasSuaveShowcase from "./MezclasSuaveShowcase";
import SiropesShowcase from "./SiropesShowcase";
import SizeShowcase from "./SizeShowcase";
import SingleShowcase from "./SingleShowcase";
import { FLAVOR_SWATCHES, productos } from "./productosData";

const KINDY_SIZES = [
  { key: "350ml", label: "350 ml",      sub: "Retail",       img: "/images/09_kindy_350ml_azucar_HD.png" },
  { key: "800ml", label: "800 ml",      sub: "Familiar",     img: "/images/16_kindy_800ml_azucar_HD.png" },
  { key: "galon", label: "Galón 3.78 L", sub: "Food Service", img: "/images/kindy-galon-original.png" },
];
const KINDY_LIGHT_SIZES = [
  { key: "350ml", label: "350 ml",      sub: "Retail",       img: "/images/kindy-350.png" },
  { key: "800ml", label: "800 ml",      sub: "Familiar",     img: "/images/kindy-light-350.png" },
  { key: "galon", label: "Galón 3.78 L", sub: "Food Service", img: "/images/kindy-galon-light.png" },
];

const FLAVOR_LABEL: Record<string, string> = {
  chocolate: "Chocolate", mantecado: "Mantecado", fresa: "Fresa", coco: "Coco",
  vainilla: "Vainilla", yogurt: "Yogurt Griego", caramelo: "Caramelo",
};

export default function ProductosSection() {
  const ref = useRevealSection();
  const [expandedNum, setExpandedNum] = useState<string | null>(null);
  const [activeFlavorMap, setActiveFlavorMap] = useState<Record<string, string>>({
    "01": "chocolate",
    "02": "vainilla",
    "03": "caramelo",
  });
  const setFlavor = (num: string, f: string) =>
    setActiveFlavorMap(prev => ({ ...prev, [num]: f }));

  return (
    <section id="productos" ref={ref as React.RefObject<HTMLElement>}>

      {/* ── HEADER ── */}
      <div style={{ background: "#e61f3e", padding: "clamp(48px, 7vh, 80px) clamp(24px, 6vw, 72px)", position: "relative", overflow: "hidden", borderTop: "4px solid #FFFFFF", borderBottom: "4px solid #FFFFFF" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div className="reveal">
            <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFFFFF", display: "block", marginBottom: "1.25rem" }}>
              Productos
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: "3rem" }} className="productos-header-grid">
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0 }}>
                Siete líneas.<br />
                <em style={{ fontStyle: "italic", color: "#FFFFFF" }}>Una sola fábrica.</em>
              </h2>
              <div style={{ textAlign: "right", paddingBottom: "0.5rem" }}>
                <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 4vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1, letterSpacing: "-0.04em" }}>1951</div>
                <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 500, color: "#FFFFFF", marginTop: "0.25rem", letterSpacing: "0.06em" }}>Guarenas, Venezuela</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUCT ROWS ── */}
      {productos.map((p, idx) => {
        const photoRight = idx % 2 === 0;
        const isOpen = expandedNum === p.num;

        return (
          <div key={p.num} style={{ borderBottom: "3px solid #2A0000" }}>
            {/* Editorial row */}
            <div
              className="reveal producto-row"
              style={{ display: "grid", gridTemplateColumns: p.photoContain ? (photoRight ? "55% 45%" : "45% 55%") : (photoRight ? "45% 55%" : "55% 45%"), minHeight: "clamp(420px, 55vh, 600px)", transitionDelay: `${Math.min(idx * 80, 200)}ms` }}
            >
              {/* Content */}
              <div style={{ backgroundColor: p.contentBg, padding: "clamp(2.5rem, 5vw, 4.5rem)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", position: "relative", overflow: "hidden", order: photoRight ? 1 : 2 }}>
                <div style={{ maxWidth: "520px", width: "100%", marginLeft: photoRight ? "clamp(1.5rem, 4vw, 5rem)" : undefined }}>
                <div aria-hidden style={{ position: "absolute", bottom: "-1.5rem", right: "-0.75rem", fontFamily: "var(--font-playfair)", fontSize: "clamp(7rem, 14vw, 12rem)", fontWeight: 900, color: "#FFFFFF", opacity: 0.13, lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.06em" }}>
                  {p.num}
                </div>
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFFFFF", display: "block", marginBottom: "0.75rem", opacity: 0.85 }}>
                  {p.num} · {p.categoria}
                </span>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 3.5vw, 3.25rem)", fontWeight: 800, color: p.textColor, lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: "1.25rem" }}>
                  {p.nombre}
                </h3>
                <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: `${p.textColor}90`, marginBottom: "1.75rem", maxWidth: "38ch" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {p.chips.map((chip) => {
                    const swatch = FLAVOR_SWATCHES[chip];
                    return (
                      <span key={chip} style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.72rem", fontWeight: 500, color: p.textColor, border: `1px solid ${p.textColor}30`, padding: "0.3rem 0.75rem", borderRadius: "100px", backgroundColor: `${p.textColor}08`, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                        {swatch && (
                          <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: swatch, flexShrink: 0, border: `1px solid ${p.textColor}20`, display: "inline-block" }} />
                        )}
                        {chip}
                      </span>
                    );
                  })}
                </div>
                <div style={{ borderTop: `1px solid ${p.textColor}15`, paddingTop: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", marginRight: "0.75rem", opacity: 0.7 }}>Presentaciones</span>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 300, color: "#FFFFFF" }}>{p.presentaciones}</span>
                </div>
                <a
                  href={`https://wa.me/584242519258?text=${encodeURIComponent(`Hola, me interesa el producto: ${p.nombre}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-jakarta)", fontSize: "0.82rem", fontWeight: 600, color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)", padding: "12px 20px", borderRadius: "6px", textDecoration: "none", cursor: "pointer", transition: "background-color 0.25s, border-color 0.25s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Solicitar cotización
                </a>

                {p.num === "04" && (
                  <div style={{
                    marginTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.18)",
                    paddingTop: "1.25rem",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.6,
                      marginBottom: "0.85rem",
                    }}>
                      ¿Cómo usarlo? Recetas, tragos refrescantes y nuevas ideas cada semana.
                    </p>
                    <a
                      href="https://instagram.com/cremaparaiso"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.55rem",
                        fontFamily: "var(--font-jakarta)", fontSize: "0.82rem", fontWeight: 600,
                        color: "#e61f3e",
                        backgroundColor: "#FFD100",
                        padding: "12px 22px", borderRadius: "6px",
                        textDecoration: "none",
                        transition: "background-color 0.25s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ffe033"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#FFD100"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Síguenos en Instagram
                    </a>
                  </div>
                )}
                </div>
              </div>

              {/* Photo */}
              <div className={`producto-photo no-zoom`} style={{ position: "relative", overflow: "hidden", backgroundColor: p.photoBg ?? p.contentBg, order: photoRight ? 2 : 1 }}>
                {p.num === "01" ? (
                  <HeladosDurosShowcase onFlavorChange={(f) => setFlavor("01", f)} />
                ) : p.num === "02" ? (
                  <MezclasSuaveShowcase onFlavorChange={(f) => setFlavor("02", f)} />
                ) : p.num === "03" ? (
                  <SiropesShowcase onFlavorChange={(f) => setFlavor("03", f)} />
                ) : p.num === "04" ? (
                  <SizeShowcase sizes={KINDY_SIZES} note="100% jugo de limón · Base para limonada" />
                ) : p.num === "05" ? (
                  <SizeShowcase sizes={KINDY_LIGHT_SIZES} note="Sucralosa · Solo 16 Cal por vaso" />
                ) : p.num === "06" ? (
                  <SingleShowcase src="/images/topping-crema.png" alt="Crema Topping" note="Chantilly lista para usar · 900 cc" />
                ) : p.num === "07" ? (
                  <SingleShowcase src="/images/cocicreme.png" alt="CociCreme" note="Crema para cocinar · Food Service" />
                ) : p.foto ? (
                  <>
                    <Image
                      src={p.foto}
                      alt={p.nombre}
                      fill
                      sizes="55vw"
                      style={{
                        objectFit: p.photoContain ? "contain" : "cover",
                        objectPosition: "center",
                        padding: p.photoContain ? "clamp(2rem, 5vw, 4rem)" : undefined,
                        filter: p.photoContain ? "drop-shadow(0 16px 48px rgba(0,0,0,0.65)) drop-shadow(0 4px 16px rgba(0,0,0,0.45))" : undefined,
                        transform: p.photoScale ? `scale(${p.photoScale})` : undefined,
                        transformOrigin: "center",
                      }}
                    />
                    {!p.photoContain && (
                      <div style={{ position: "absolute", inset: 0, background: photoRight ? `linear-gradient(to right, ${p.contentBg}55, transparent 40%)` : `linear-gradient(to left, ${p.contentBg}55, transparent 40%)`, pointerEvents: "none" }} />
                    )}
                  </>
                ) : (
                  <div style={{ width: "100%", height: "100%", minHeight: "inherit", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: p.photoBg ?? p.contentBg, gap: "1rem", padding: "3rem 2rem" }}>
                    <div aria-hidden style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.04em", color: `${p.accent}35`, textAlign: "center", userSelect: "none" }}>
                      {p.nombre}
                    </div>
                    <div aria-hidden style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: `${p.accent}50`, textAlign: "center", userSelect: "none" }}>
                      {p.categoria}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trigger bar */}
            <button
              onClick={() => setExpandedNum(isOpen ? null : p.num)}
              aria-expanded={isOpen}
              aria-controls={`spec-${p.num}`}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "1.25rem clamp(24px, 6vw, 72px)",
                backgroundColor: isOpen ? "#2A0000" : "#3D0000",
                border: "none",
                cursor: "pointer",
                outline: "none",
                transition: "background-color 0.25s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#4D0000"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isOpen ? "#2A0000" : "#3D0000"; }}
              onFocus={(e) => { e.currentTarget.style.outline = "2px solid rgba(255,255,255,0.5)"; e.currentTarget.style.outlineOffset = "−2px"; }}
              onBlur={(e) => { e.currentTarget.style.outline = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
                  Ficha técnica
                </span>
                {p.flavorSections && (
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.68rem", fontWeight: 600, color: "#FFD100", letterSpacing: "0.06em" }}>
                    · {FLAVOR_LABEL[activeFlavorMap[p.num]] ?? activeFlavorMap[p.num]}
                  </span>
                )}
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 300, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                  — Ver especificaciones completas
                </span>
              </div>
              <svg
                width="18" height="18" viewBox="0 0 18 18" fill="none"
                style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)", color: "#FFD100" }}
              >
                <path d="M3 6l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Expandable spec panel */}
            <div id={`spec-${p.num}`} style={{
              display: "grid",
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              opacity: isOpen ? 1 : 0,
              transition: "grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
              backgroundColor: "#2A0000",
            }}>
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <div style={{ padding: "2rem clamp(24px, 6vw, 72px) 2.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {(p.flavorSections?.[activeFlavorMap[p.num]] ?? p.sections ?? []).map(sec => (
                    <div key={sec.title}>
                      <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FFD100", marginBottom: "0.6rem", opacity: 0.9 }}>
                        {sec.title}
                      </div>
                      <div>
                        {sec.items.map((s, si) => (
                          <div key={s.label} className="ficha-row" style={{ display: "grid", gridTemplateColumns: "minmax(140px, 220px) 1fr", borderBottom: si < sec.items.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", padding: "0.55rem 0" }}>
                            <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.63rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em", paddingRight: "1rem", alignSelf: "flex-start", paddingTop: "0.1rem" }}>
                              {s.label}
                            </div>
                            <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.55 }}>
                              {s.val}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── CTA ── */}
      <div className="reveal" style={{ backgroundColor: "#e61f3e", padding: "clamp(2.5rem, 4vh, 3.5rem) clamp(24px, 6vw, 72px)", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}>Distribución nacional.</div>
            <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em" }}>Retail · Food Service · Hoteles · Restaurantes · Pastelerías</div>
          </div>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", color: "#FFFFFF", backgroundColor: "#e61f3e", border: "none", cursor: "pointer", padding: "14px 32px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5B8BE"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#e61f3e"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Solicitar distribución
          </button>
        </div>
      </div>

      <style>{`
        .producto-photo { transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .producto-photo:not(.no-zoom):hover { filter: brightness(1.06); }
        .producto-photo img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important; }
        .producto-photo:not(.no-zoom):hover img { transform: scale(1.03) !important; }

        @media (max-width: 768px) {
          .producto-row { grid-template-columns: 1fr !important; min-height: unset !important; }
          .producto-row > div { order: unset !important; }
          .producto-row > div:last-child { min-height: 280px; }
          .productos-header-grid { grid-template-columns: 1fr !important; }
          .ficha-row { grid-template-columns: 1fr !important; gap: 0.2rem; }
          .ficha-row > div:first-child { padding-top: 0.5rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none !important; animation: none !important; }
          .producto-photo { transition: none !important; }
          .producto-photo img { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
