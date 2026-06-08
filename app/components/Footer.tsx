"use client";

const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  const bg = "#1A3A5C";
  const accent = "#FCEF91";
  const textMuted = "rgba(185,216,235,0.65)";
  const textLink = "rgba(185,216,235,0.75)";
  const textHover = "#B9D8EB";
  const divider = "rgba(185,216,235,0.12)";

  return (
    <footer style={{ backgroundColor: bg, borderTop: `4px solid ${accent}` }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3.5rem clamp(24px, 5vw, 48px) 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">

          <div>
            <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#B9D8EB", marginBottom: "0.75rem" }}>
              Crema<span style={{ color: accent }}>Paraíso</span>
            </div>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.8, color: textMuted, maxWidth: "30ch" }}>
              Fábrica venezolana de helados, siropes, cremas y bases para limonada. Desde Guarenas para toda Venezuela.
            </p>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(185,216,235,0.35)", marginTop: "1rem" }}>
              R.I.F.: J-00009194-3
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: "1.25rem" }}>
              Navegación
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Productos", href: "#productos" },
                { label: "Contacto", href: "#contacto" },
                { label: "Redes", href: "#redes" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleLink}
                    style={{
                      fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 400,
                      color: textLink, textDecoration: "none",
                      display: "block", transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = textHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textLink)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: "1.25rem" }}>
              Redes
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/cremaparaiso" },
                { label: "TikTok", href: "https://tiktok.com/@cremaparaisove" },
                { label: "Facebook", href: "https://facebook.com/cremaparaiso" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.85rem", fontWeight: 400, color: textLink, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = textHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = textLink)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${divider}`, paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(185,216,235,0.35)" }}>
            © {year} Crema Paraíso S.A. Fundada en 1951. Guarenas, Venezuela.
          </p>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 300, color: "rgba(185,216,235,0.25)" }}>
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
