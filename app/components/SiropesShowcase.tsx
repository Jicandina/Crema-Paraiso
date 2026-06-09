"use client";
import { useState } from "react";
import Image from "next/image";

type FlavorKey = "caramelo" | "chocolate" | "fresa";

const FLAVORS: { key: FlavorKey; label: string; swatch: string }[] = [
  { key: "caramelo",  label: "Caramelo",        swatch: "#E8920A" },
  { key: "chocolate", label: "Chocolate Savoy",  swatch: "#3D1A00" },
  { key: "fresa",     label: "Fresa",            swatch: "#FF6B8A" },
];

const IMG: Record<FlavorKey, string> = {
  caramelo:  "/images/sirope-caramelo-galon.png",
  chocolate: "/images/sirope-chocolate.png",
  fresa:     "/images/sirope-fresa.png",
};

export default function SiropesShowcase({ onFlavorChange }: { onFlavorChange?: (f: FlavorKey) => void }) {
  const [flavor, setFlavor] = useState<FlavorKey>("caramelo");

  const switchFlavor = (key: FlavorKey) => {
    if (key === flavor) return;
    setFlavor(key);
    onFlavorChange?.(key);
  };

  return (
    <div style={{
      width: "100%", height: "100%",
      backgroundColor: "#3D0000",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",
      gap: "1.5rem",
    }}>
      {/* Galones */}
      <div style={{ display: "flex", gap: "clamp(0.5rem, 1.8vw, 1.2rem)", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
        {FLAVORS.map((f) => {
          const isActive = f.key === flavor;
          return (
            <button
              key={f.key}
              onClick={() => switchFlavor(f.key)}
              onMouseEnter={() => switchFlavor(f.key)}
              aria-label={`Ver Sirope ${f.label}`}
              style={{
                position: "relative", flex: "0 0 28%", aspectRatio: "2/3",
                backgroundColor: "#250000", borderRadius: "10px", overflow: "hidden",
                border: `2px solid ${isActive ? "#FFD100" : "rgba(255,255,255,0.06)"}`,
                transform: isActive ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s ease-out, opacity 0.2s ease-out, border-color 0.2s ease-out",
                opacity: isActive ? 1 : 0.38,
                zIndex: isActive ? 1 : 0,
                cursor: "pointer", padding: 0, outline: "none",
              }}
            >
              <Image
                src={IMG[f.key]}
                alt={`Sirope ${f.label}`}
                fill
                sizes="(max-width: 768px) 34vw, 16vw"
                style={{
                  objectFit: "contain",
                  padding: "clamp(0.5rem, 1.5vw, 1rem)",
                  filter: isActive
                    ? "drop-shadow(0 12px 32px rgba(0,0,0,0.75)) drop-shadow(0 4px 10px rgba(0,0,0,0.5))"
                    : "drop-shadow(0 4px 10px rgba(0,0,0,0.4))",
                  transition: "filter 0.2s ease",
                }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "0.5rem 0.3rem 0.4rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                textAlign: "center", pointerEvents: "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(0.55rem, 0.85vw, 0.75rem)",
                  fontWeight: 800,
                  color: isActive ? "#FFD100" : "rgba(255,255,255,0.45)",
                  lineHeight: 1.2,
                  transition: "color 0.2s ease",
                }}>
                  {f.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Flavor chips */}
      <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", flexWrap: "nowrap", width: "100%" }}>
        {FLAVORS.map(f => {
          const isActiveFlavor = f.key === flavor;
          return (
            <button
              key={f.key}
              onMouseEnter={() => switchFlavor(f.key)}
              onClick={() => switchFlavor(f.key)}
              aria-label={`Sabor ${f.label}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(0.55rem, 0.85vw, 0.68rem)",
                fontWeight: isActiveFlavor ? 600 : 400,
                color: isActiveFlavor ? "#FFD100" : "rgba(255,255,255,0.48)",
                backgroundColor: isActiveFlavor ? "rgba(255,209,0,0.1)" : "transparent",
                border: `1px solid ${isActiveFlavor ? "rgba(255,209,0,0.35)" : "rgba(255,255,255,0.1)"}`,
                padding: "0.28rem 0.6rem",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                outline: "none", whiteSpace: "nowrap",
              }}
            >
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: f.swatch, flexShrink: 0,
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
