"use client";

const ITEMS = Array(10).fill(null);

export default function MarqueeSection() {
  return (
    <div style={{
      backgroundColor: "var(--color-brown)",
      overflow: "hidden",
      padding: "14px 0",
      position: "relative",
      borderTop: "5px solid var(--color-orange)",
      borderBottom: "5px solid var(--color-orange)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "2.5rem",
        width: "max-content",
        animation: "mq-scroll 20s linear infinite",
      }}>
        {[...ITEMS, ...ITEMS].map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <img
              src="/images/logo-navbar.png"
              alt=""
              aria-hidden="true"
              style={{ height: "60px", width: "60px", objectFit: "contain", mixBlendMode: "screen", borderRadius: "50%", flexShrink: 0 }}
            />
            <span style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-orange)",
              whiteSpace: "nowrap",
            }}>
              Crema Paraíso
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
