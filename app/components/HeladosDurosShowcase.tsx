"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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
  coco:      ["/images/helados-duros/grupo.png",           "/images/helados-duros/grupo.png",         "/images/helados-duros/grupo.png"],
};

const TICK = 2500;
const FADE = 270;

export default function HeladosDurosShowcase() {
  const [flavor, setFlavor] = useState<FlavorKey>("chocolate");
  const [sizeIdx, setSizeIdx] = useState(0);
  const [show, setShow] = useState(true);
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const switchRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextFlavor = useRef<FlavorKey>("chocolate");

  const stopLoop = () => { if (loopRef.current) clearInterval(loopRef.current); };

  const startLoop = useCallback(() => {
    stopLoop();
    loopRef.current = setInterval(() => {
      setShow(false);
      setTimeout(() => { setSizeIdx(i => (i + 1) % 3); setShow(true); }, FADE);
    }, TICK);
  }, []);

  useEffect(() => {
    startLoop();
    return stopLoop;
  }, [flavor, startLoop]);

  const switchFlavor = (key: FlavorKey) => {
    if (key === nextFlavor.current) return;
    nextFlavor.current = key;
    stopLoop();
    if (switchRef.current) clearTimeout(switchRef.current);
    setShow(false);
    switchRef.current = setTimeout(() => {
      setFlavor(nextFlavor.current);
      setSizeIdx(0);
      setShow(true);
    }, FADE);
  };

  const size = SIZES[sizeIdx];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#3D0000", display: "flex", flexDirection: "column" }}>
      {/* Image area */}
      <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
        <div style={{ position: "absolute", inset: 0, opacity: show ? 1 : 0, transition: `opacity ${FADE}ms ease` }}>
          <Image
            src={IMG[flavor][sizeIdx]}
            alt={`Helado ${flavor} ${size.label}`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{
              objectFit: "contain",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
            }}
          />
        </div>

        {/* Size label */}
        <div style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          opacity: show ? 1 : 0,
          transition: `opacity ${FADE}ms ease`,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}>
          <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem, 2vw, 2rem)", fontWeight: 800, color: "#FFD100", lineHeight: 1 }}>
            {size.label}
          </div>
          <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "0.3rem" }}>
            {size.sub}
          </div>
        </div>

        {/* Progress dots */}
        <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "flex", gap: "0.35rem", alignItems: "center" }}>
          {SIZES.map((_, i) => (
            <div key={i} style={{
              width: i === sizeIdx ? "16px" : "5px",
              height: "5px",
              borderRadius: "3px",
              backgroundColor: i === sizeIdx ? "#FFD100" : "rgba(255,255,255,0.25)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }} />
          ))}
        </div>
      </div>

      {/* Flavor selector row */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "0.875rem 1.25rem",
        display: "flex",
        gap: "0.45rem",
        flexWrap: "wrap",
        backgroundColor: "rgba(0,0,0,0.25)",
      }}>
        {FLAVORS.map(f => {
          const active = f.key === flavor;
          return (
            <button
              key={f.key}
              onMouseEnter={() => switchFlavor(f.key)}
              onClick={() => switchFlavor(f.key)}
              aria-label={`Ver sabor ${f.label}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-jakarta)",
                fontSize: "0.7rem",
                fontWeight: active ? 600 : 400,
                color: active ? "#FFD100" : "rgba(255,255,255,0.5)",
                backgroundColor: active ? "rgba(255,209,0,0.1)" : "transparent",
                border: `1px solid ${active ? "rgba(255,209,0,0.35)" : "rgba(255,255,255,0.12)"}`,
                padding: "0.3rem 0.7rem",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.25s ease",
                outline: "none",
                letterSpacing: "0.03em",
              }}
            >
              <span style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: f.swatch,
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: active ? "0 0 0 2px rgba(255,209,0,0.3)" : "none",
                transition: "box-shadow 0.25s ease",
              }} />
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
