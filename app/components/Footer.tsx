"use client";

const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2A0D02", borderTop: "4px solid #E8732A" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3.5rem clamp(24px, 5vw, 48px) 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">

          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#FDF3E3", marginBottom: "0.75rem" }}>
              Crema<span style={{ color: "#E8732A" }}>Paraíso</span>
            </div>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(253, 243, 227, 0.4)", maxWidth: "30ch" }}>
              Fábrica venezolana de helados, siropes, cremas y bases para limonada. Desde Guarenas para toda Venezuela.
            </p>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(253, 243, 227, 0.25)", marginTop: "1rem" }}>
              R.I.F.: J-00009194-3
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#E8732A", marginBottom: "1.25rem" }}>
              Navegación
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Nosotros", href: "#nosotros" },
                { label: "Productos", href: "#productos" },
                { label: "Bebidas", href: "#bebidas" },
                { label: "Cremas", href: "#cremas" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleLink}
                    style={{
                      fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 400,
                      color: "rgba(253, 243, 227, 0.4)", textDecoration: "none",
                      display: "block", transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FDF3E3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 243, 227, 0.4)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#E8732A", marginBottom: "1.25rem" }}>
              Redes
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Instagram", "TikTok", "Facebook"].map((red) => (
                <li key={red}>
                  <a href={`https://${red.toLowerCase()}.com/cremaparaiso`} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 400, color: "rgba(253, 243, 227, 0.4)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FDF3E3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 243, 227, 0.4)")}
                  >
                    {red}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(253, 243, 227, 0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(253, 243, 227, 0.2)" }}>
            © {year} Crema Paraíso S.A. Fundada en 1951. Guarenas, Venezuela.
          </p>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(253, 243, 227, 0.15)" }}>
            Nodo Studio
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-grid > div:first-child { grid-column: span 2 !important; }
        }
      `}</style>
    </footer>
  );
}
