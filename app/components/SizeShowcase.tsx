"use client";
import { useState } from "react";
import Image from "next/image";

export type SizeEntry = { key: string; label: string; sub: string; img: string };

export default function SizeShowcase({ sizes, note }: { sizes: SizeEntry[]; note?: string }) {
  const [active, setActive] = useState(0);

  return (
    <div style={{
      width: "100%", height: "100%",
      backgroundColor: "#3D0000",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",
      gap: "1.5rem",
    }}>
      {/* Size filmstrip */}
      <div style={{ display: "flex", gap: "clamp(0.5rem, 1.5vw, 1rem)", alignItems: "flex-end", justifyContent: "center", width: "100%" }}>
        {sizes.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.key}
              onClick={() => setActive(i)}
              aria-label={`Ver ${s.label}`}
              style={{
                position: "relative", flex: "0 0 30%", aspectRatio: "2/3",
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
                src={s.img}
                alt={s.label}
                fill
                sizes="(max-width: 768px) 40vw, 18vw"
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
                padding: "0.5rem 0.4rem 0.4rem",
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                textAlign: "center", pointerEvents: "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(0.65rem, 1vw, 0.85rem)",
                  fontWeight: 800,
                  color: isActive ? "#FFD100" : "rgba(255,255,255,0.45)",
                  lineHeight: 1,
                  transition: "color 0.2s ease",
                }}>
                  {s.label}
                </div>
                {isActive && (
                  <div style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.55rem", fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)", marginTop: "0.2rem",
                  }}>
                    {s.sub}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {note && (
        <div style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "0.65rem", fontWeight: 500,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)", textAlign: "center",
        }}>
          {note}
        </div>
      )}
    </div>
  );
}
