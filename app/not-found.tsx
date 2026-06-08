import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--color-cream)",
      padding: "2rem",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "clamp(5rem, 15vw, 10rem)",
        fontWeight: 900,
        color: "var(--color-brown)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
        marginBottom: "1rem",
      }}>
        404
      </p>
      <h1 style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
        fontWeight: 700,
        color: "#FFFFFF",
        marginBottom: "1rem",
        fontStyle: "italic",
      }}>
        Esta página no existe.
      </h1>
      <p style={{
        fontFamily: "var(--font-jakarta)",
        fontSize: "1rem",
        fontWeight: 300,
        color: "rgba(255,255,255,0.7)",
        marginBottom: "2.5rem",
        maxWidth: "36ch",
        lineHeight: 1.7,
      }}>
        Pero nuestros helados sí. Vuelve al inicio y encuentra lo que buscas.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "var(--color-cream)",
          backgroundColor: "var(--color-brown)",
          textDecoration: "none",
          padding: "14px 32px",
          borderRadius: "6px",
          transition: "opacity 0.2s",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
