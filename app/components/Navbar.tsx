"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Bebidas", href: "#bebidas" },
  { label: "Cremas", href: "#cremas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      setOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(61, 21, 5, 0.97)" : "var(--color-brown)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232, 115, 42, 0.15)" : "none",
        transition: "background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Orange top bar */}
      <div style={{ height: "4px", backgroundColor: "var(--color-orange)" }} />

      <nav
        aria-label="Navegación principal"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <button
          onClick={(e) => { e.preventDefault(); document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" }); }}
          aria-label="Crema Paraíso — ir al inicio"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-cream)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.01em",
          }}
        >
          Crema<span style={{ color: "var(--color-orange)" }}>Paraíso</span>
        </button>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none" }} className="hidden md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLink}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase" as const,
                  color: "rgba(253, 243, 227, 0.7)",
                  textDecoration: "none",
                  display: "block",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  transition: "color 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-cream)";
                  e.currentTarget.style.backgroundColor = "rgba(232, 115, 42, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(253, 243, 227, 0.7)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          onClick={handleLink}
          className="hidden md:block"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase" as const,
            color: "var(--color-brown)",
            backgroundColor: "var(--color-orange)",
            textDecoration: "none",
            display: "block",
            padding: "10px 22px",
            borderRadius: "6px",
            transition: "background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F5993D";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-orange)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Contáctanos
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden"
          style={{ color: "var(--color-cream)", background: "none", border: "none", cursor: "pointer", padding: "10px", minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          style={{
            backgroundColor: "var(--color-brown)",
            padding: "1rem 1.5rem 1.5rem",
            borderTop: "1px solid rgba(232, 115, 42, 0.15)",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLink}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "rgba(253, 243, 227, 0.8)",
                    textDecoration: "none",
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    minHeight: "44px",
                    transition: "color 0.2s, background-color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-cream)"; e.currentTarget.style.backgroundColor = "rgba(232, 115, 42, 0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(253, 243, 227, 0.8)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
