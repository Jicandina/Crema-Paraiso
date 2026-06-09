import Image from "next/image";

export default function SingleShowcase({ src, alt, note }: { src: string; alt: string; note?: string }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      backgroundColor: "#3D0000",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 2.5vw, 2rem)",
      gap: "1.25rem",
    }}>
      <div style={{ position: "relative", width: "60%", maxWidth: "260px", aspectRatio: "2/3" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 22vw"
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.75)) drop-shadow(0 6px 18px rgba(0,0,0,0.55))",
          }}
        />
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
