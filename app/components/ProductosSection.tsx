"use client";

import { useState } from "react";
import Image from "next/image";
import { useRevealSection } from "./useReveal";

type Spec = { label: string; val: string };
type Producto = {
  num: string;
  nombre: string;
  categoria: string;
  desc: string;
  chips: string[];
  presentaciones: string;
  foto: string | null;
  photoContain?: boolean;
  photoBg?: string;
  photoScale?: number;
  contentBg: string;
  textColor: string;
  accent: string;
  specs: Spec[];
};

const productos: Producto[] = [
  {
    num: "01", nombre: "Helados Duros", categoria: "Cremas heladas artesanales",
    desc: "Sólidos lácteos, sabores naturales y recetas propias desde 1951. Cuatro variedades. Línea Chocolate certificada Hecho con Savoy de Nestlé.",
    chips: ["Mantecado", "Chocolate", "Fresa", "Coco"],
    presentaciones: "480 ml · 2 L · 4 L",
    foto: "/images/02_2l_chocolate_arriba_HD.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Tipo", val: "Crema helada artesanal" },
      { label: "Almacenamiento", val: "−18°C o menor" },
      { label: "Presentaciones", val: "480 ml / 2 L / 4 L" },
      { label: "Permisos", val: "SENCAMER vigentes" },
      { label: "Certificación", val: "Hecho con Savoy de Nestlé (Chocolate)" },
      { label: "Distribución", val: "Nacional — Retail y Food Service" },
    ],
  },
  {
    num: "02", nombre: "Mezcla Suave", categoria: "Base para máquinas Soft Serve",
    desc: "Base artesanal lista para usar en máquinas Soft Serve. Almacenamiento dual: congelado o refrigerado. Galón de 3.78 litros.",
    chips: ["Vainilla", "Chocolate", "Fresa", "Yogurt Griego"],
    presentaciones: "Galón 3.78 L",
    foto: "/images/soft-galon.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Tipo", val: "Base para Soft Serve" },
      { label: "Almacenamiento (congelado)", val: "−15°C o menor" },
      { label: "Almacenamiento (refrigerado)", val: "Menor a 4°C" },
      { label: "Contenido", val: "Galón 3.78 L" },
      { label: "Sabores", val: "Vainilla · Chocolate · Fresa · Yogurt Griego" },
      { label: "Uso", val: "Máquinas Soft Serve" },
    ],
  },
  {
    num: "03", nombre: "Siropes", categoria: "Para helados, café y postres",
    desc: "Alta concentración, consistencia suave. Certificación Hecho con Savoy de Nestlé en la variedad Chocolate. Para heladerías, cafeterías y repostería.",
    chips: ["Fresa", "Chocolate Savoy", "Caramelo"],
    presentaciones: "Galón 4.84 kg",
    foto: "/images/sirope-caramelo-galon.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Tipo", val: "Sirope de alta concentración" },
      { label: "Presentación", val: "Galón 4.84 kg" },
      { label: "Variedades", val: "Fresa · Chocolate Savoy · Caramelo" },
      { label: "Certificación", val: "Hecho con Savoy de Nestlé (Chocolate)" },
      { label: "Indicaciones", val: "Agitar bien antes de usar" },
      { label: "Uso", val: "Heladerías · Cafeterías · Repostería" },
    ],
  },
  {
    num: "04", nombre: "Kindy Tradicional", categoria: "Base cítrica para limonada",
    desc: "100% jugo de limón. Preserva aceites esenciales, vitamina C y ácidos orgánicos. Un galón rinde entre 25 y 35 litros de limonada.",
    chips: ["245 Cal/100g", "Brix 55–60°", "120 días vida útil"],
    presentaciones: "350 ml · 800 ml · Galón 3.78 L",
    foto: "/images/kindy-galon-original.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Calorías", val: "245 Cal / 100g" },
      { label: "Carbohidratos", val: "61.0 g / 100g" },
      { label: "Brix", val: "55° – 60°" },
      { label: "Rendimiento (galón)", val: "25 – 35 L de limonada" },
      { label: "Vida útil", val: "120 días desde fabricación" },
      { label: "Almacenamiento", val: "Congelado −15°C · Refrigerado <4°C" },
      { label: "Permiso sanitario", val: "A-39.140" },
      { label: "Presentaciones", val: "350 ml · 800 ml · Galón 3.78 L" },
    ],
  },
  {
    num: "05", nombre: "Kindy Light", categoria: "Base cítrica con Sucralosa",
    desc: "El mismo 100% de jugo de limón, endulzado con Sucralosa. Solo 16 calorías por vaso. Sin azúcar añadida.",
    chips: ["16 Cal/100g", "Sin azúcar", "Sucralosa"],
    presentaciones: "350 ml · 800 ml · Galón 3.78 L",
    foto: "/images/kindy-galon-light.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Calorías", val: "16 Cal / 100g" },
      { label: "Carbohidratos", val: "3.2 g / 100g" },
      { label: "Endulzante", val: "Sucralosa (sin azúcar añadida)" },
      { label: "Rendimiento (galón)", val: "25 – 35 L de limonada" },
      { label: "Vida útil", val: "120 días desde fabricación" },
      { label: "Almacenamiento", val: "Congelado −15°C · Refrigerado <4°C" },
      { label: "Permiso sanitario", val: "A-106.604" },
      { label: "Presentaciones", val: "350 ml · 800 ml · Galón 3.78 L" },
    ],
  },
  {
    num: "06", nombre: "Crema Topping", categoria: "Crema chantilly para batir",
    desc: "Lista para usar. Para postres, helados, bebidas, waffles y pancakes. Distribuida en hoteles, cadenas de restaurantes y pastelerías de todo el país.",
    chips: ["Postres", "Helados", "Bebidas calientes", "Waffles"],
    presentaciones: "900 cc (cartón)",
    foto: "/images/topping-crema.png",
    photoContain: true,
    photoBg: "#3D0000",
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Tipo", val: "Crema chantilly lista para usar" },
      { label: "Usos principales", val: "Postres · Helados · Bebidas · Waffles · Pancakes" },
      { label: "Canal", val: "Hoteles · Restaurantes · Pastelerías" },
      { label: "Presentación", val: "900 cc (cartón)" },
      { label: "Vida útil", val: "30 días" },
      { label: "Distribución", val: "Nacional" },
    ],
  },
  {
    num: "07", nombre: "CociCreme", categoria: "Crema para cocinar",
    desc: "Versátil, estable al calor. Para salsas, sopas, cremas, gratinados y todo tipo de recetas saladas. La preferida de las cocinas profesionales venezolanas.",
    chips: ["Salsas", "Sopas", "Gratinados", "Recetas saladas"],
    presentaciones: "Food Service",
    foto: null,
    contentBg: "#D01020", textColor: "#FFFFFF", accent: "#FFD100",
    specs: [
      { label: "Tipo", val: "Crema para cocinar" },
      { label: "Propiedad clave", val: "Estable al calor" },
      { label: "Usos principales", val: "Salsas · Sopas · Cremas · Gratinados" },
      { label: "Canal", val: "Restaurantes · Hoteles · Cocinas profesionales" },
      { label: "Presentación", val: "Food Service" },
      { label: "Distribución", val: "Nacional" },
    ],
  },
];

export default function ProductosSection() {
  const ref = useRevealSection();
  const [expandedNum, setExpandedNum] = useState<string | null>(null);

  return (
    <section id="productos" ref={ref as React.RefObject<HTMLElement>}>

      {/* ── HEADER ── */}
      <div style={{ background: "#D01020", padding: "clamp(48px, 7vh, 80px) clamp(24px, 6vw, 72px)", position: "relative", overflow: "hidden", borderTop: "4px solid #FFFFFF", borderBottom: "4px solid #FFFFFF" }}>
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
                  {p.chips.map((chip) => (
                    <span key={chip} style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.72rem", fontWeight: 500, color: p.textColor, border: `1px solid ${p.textColor}30`, padding: "0.3rem 0.75rem", borderRadius: "100px", backgroundColor: `${p.textColor}08` }}>
                      {chip}
                    </span>
                  ))}
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
                </div>
              </div>

              {/* Photo */}
              <div className="producto-photo" style={{ position: "relative", overflow: "hidden", backgroundColor: p.photoBg ?? p.contentBg, order: photoRight ? 2 : 1 }}>
                {p.foto ? (
                  <>
                    <Image
                      src={p.foto}
                      alt={p.nombre}
                      fill
                      sizes="55vw"
                      style={{
                        objectFit: p.photoContain ? "contain" : "cover",
                        objectPosition: p.photoContain ? (photoRight ? "left center" : "right center") : "center",
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}>
                  Ficha técnica
                </span>
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
              backgroundColor: "#3D0000",
            }}>
              <div style={{ overflow: "hidden", minHeight: 0 }}>
                <div style={{ padding: "2rem clamp(24px, 6vw, 72px) 2.5rem" }}>
                  {(() => {
                    const cols = 4;
                    const rows = Math.ceil(p.specs.length / cols);
                    return (
                      <div className="specs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
                        {p.specs.map((s, si) => {
                          const col = si % cols;
                          const row = Math.floor(si / cols);
                          return (
                            <div key={s.label} style={{ padding: "1rem 1.25rem", borderRight: col < cols - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", borderBottom: row < rows - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                              <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "0.4rem" }}>
                                {s.label}
                              </div>
                              <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.82rem", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}>
                                {s.val}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ── CTA ── */}
      <div className="reveal" style={{ backgroundColor: "#D01020", padding: "clamp(2.5rem, 4vh, 3.5rem) clamp(24px, 6vw, 72px)", borderTop: "1px solid rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.25rem" }}>Distribución nacional.</div>
            <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", letterSpacing: "0.04em" }}>Retail · Food Service · Hoteles · Restaurantes · Pastelerías</div>
          </div>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.06em", color: "#FFFFFF", backgroundColor: "var(--color-orange)", border: "none", cursor: "pointer", padding: "14px 32px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-orange-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-orange)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Solicitar distribución
          </button>
        </div>
      </div>

      <style>{`
        .producto-photo { transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .producto-photo:hover { filter: brightness(1.06); }
        .producto-photo img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important; }
        .producto-photo:hover img { transform: scale(1.03) !important; }

        @media (max-width: 1024px) {
          .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .producto-row { grid-template-columns: 1fr !important; min-height: unset !important; }
          .producto-row > div { order: unset !important; }
          .producto-row > div:last-child { min-height: 280px; }
          .productos-header-grid { grid-template-columns: 1fr !important; }
          .specs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .specs-grid { grid-template-columns: 1fr !important; }
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
