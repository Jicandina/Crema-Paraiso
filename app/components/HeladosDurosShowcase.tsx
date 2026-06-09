"use client";
import { useState } from "react";
import Image from "next/image";

type FlavorKey = "chocolate" | "mantecado" | "fresa" | "coco";

const FLAVORS: { key: FlavorKey; label: string; swatch: string }[] = [
  { key: "chocolate", label: "Chocolate", swatch: "#3D1A00" },
  { key: "mantecado", label: "Mantecado", swatch: "#F5D78E" },
  { key: "fresa",     label: "Fresa",     swatch: "#FF6B8A" },
  { key: "coco",      label: "Coco",      swatch: "#F0EDE0" },
];

const SIZES = [
  { label: "480 ml", sub: "Individual"  },
  { label: "2 L",    sub: "Familiar"    },
  { label: "4 L",    sub: "Profesional" },
];

const IMG: Record<FlavorKey, [string, string, string]> = {
  chocolate: ["/images/helados-duros/chocolate_480ml.png", "/images/helados-duros/chocolate_2l.png", "/images/helados-duros/chocolate_4l.png"],
  mantecado: ["/images/helados-duros/mantecado_480ml.png", "/images/helados-duros/mantecado_2l.png", "/images/helados-duros/mantecado_4l.png"],
  fresa:     ["/images/helados-duros/fresa_480ml.png",     "/images/helados-duros/fresa_2l.png",     "/images/helados-duros/fresa_4l.png"],
  coco:      ["/images/helados-duros/coco_480ml.jpg",       "/images/helados-duros/coco_2l.jpg",        "/images/helados-duros/coco_4l.jpg"],
};

export default function HeladosDurosShowcase({ onFlavorChange }: { onFlavorChange?: (f: FlavorKey) => void }) {
  const [flavor, setFlavor] = useState<FlavorKey>("chocolate");
  const [active, setActive] = useState(0);

  const switchFlavor = (key: FlavorKey) => {
    if (key === flavor) return;
    setFlavor(key);
    setActive(0);
    onFlavorChange?.(key);
  };

  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#3D0000",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",
      gap: "1.5rem",
    }}>

      {/* ── Filmstrip: 3 presentaciones en 1 línea ── */}
      <div style={{
        display: "flex",
        gap: "clamp(0.5rem, 1.5vw, 1rem)",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
      }}>
        {SIZES.map((size, i) => {
          const isActive = i === active;
          return (
            <button
              key={size.label}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`Ver ${flavor} ${size.label}`}
              style={{
                position: "relative",
                flex: "0 0 30%",
                aspectRatio: "2/3",
                backgroundColor: "#250000",
                borderRadius: "10px",
                overflow: "hidden",
                border: `2px solid ${isActive ? "#FFD100" : "rgba(255,255,255,0.06)"}`,
                transform: isActive ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s ease-out, opacity 0.2s ease-out, border-color 0.2s ease-out",
                opacity: isActive ? 1 : 0.38,
                zIndex: isActive ? 1 : 0,
                cursor: "pointer",
                padding: 0,
                outline: "none",
              }}
            >
              <Image
                src={IMG[flavor][i]}
                alt={`Helado ${flavor} ${size.label}`}
                fill
                sizes="(max-width: 768px) 40vw, 20vw"
                style={{
                  objectFit: "contain",
                  padding: "clamp(0.5rem, 1.5vw, 1rem)",
                  filter: isActive
                    ? "drop-shadow(0 12px 32px rgba(0,0,0,0.75)) drop-shadow(0 4px 10px rgba(0,0,0,0.5))"
                    : "drop-shadow(0 4px 10px rgba(0,0,0,0.4))",
                  transition: "filter 0.2s ease",
                }}
              />
              {/* Size label */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "0.5rem 0.4rem 0.4rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                textAlign: "center",
                pointerEvents: "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)",
                  fontWeight: 800,
                  color: isActive ? "#FFD100" : "rgba(255,255,255,0.45)",
                  lineHeight: 1,
                  transition: "color 0.2s ease",
                }}>
                  {size.label}
                </div>
                {isActive && (
                  <div style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "0.2rem",
                  }}>
                    {size.sub}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Flavor selector: 1 línea de chips ── */}
      <div style={{
        display: "flex",
        gap: "0.4rem",
        justifyContent: "center",
        flexWrap: "nowrap",
        width: "100%",
      }}>
        {FLAVORS.map(f => {
          const isActiveFlavor = f.key === flavor;
          return (
            <button
              key={f.key}
              onClick={() => switchFlavor(f.key)}
              aria-label={`Ver sabor ${f.label}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(0.6rem, 0.9vw, 0.72rem)",
                fontWeight: isActiveFlavor ? 600 : 400,
                color: isActiveFlavor ? "#FFD100" : "rgba(255,255,255,0.48)",
                backgroundColor: isActiveFlavor ? "rgba(255,209,0,0.1)" : "transparent",
                border: `1px solid ${isActiveFlavor ? "rgba(255,209,0,0.35)" : "rgba(255,255,255,0.1)"}`,
                padding: "0.28rem 0.65rem",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                outline: "none",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: f.swatch,
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: isActiveFlavor ? "0 0 0 2px rgba(255,209,0,0.28)" : "none",
                transition: "box-shadow 0.2s ease",
              }} />
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
