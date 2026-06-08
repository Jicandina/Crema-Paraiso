"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["inicio", "nosotros", "productos", "contacto"];
    const onScroll = () => {
      const threshold = 64 + window.innerHeight * 0.25;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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

  const baseLinkColor = "rgba(208,16,32,0.75)";
  const activeLinkColor = "var(--color-cream)";
  const hoverLinkColor = "var(--color-cream)";
  const hoverLinkBg = "rgba(208,16,32,0.1)";
  const ctaBg = "var(--color-orange)";
  const ctaTextColor = "var(--color-brown)";
  const activeUnderlineColor = "var(--color-cream)";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#FFD100",
        backdropFilter: "none",
        borderBottom: "none",
        transition: "background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
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
        <button
          onClick={() => document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Crema Paraíso — ir al inicio"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
        >
          <Image
            src="/images/logo-negativo2.png"
            alt="Crema Paraíso"
            width={76}
            height={76}
            style={{ borderRadius: "50%", display: "block" }}
          />
        </button>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none" }} className="hidden md:flex">
          {links.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLink}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "0.8rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase" as const,
                    color: isActive ? activeLinkColor : baseLinkColor,
                    textDecoration: "none",
                    display: "block",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    borderBottom: isActive
                      ? `2px solid ${activeUnderlineColor}`
                      : "2px solid transparent",
                    transition: "color 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverLinkColor;
                    e.currentTarget.style.backgroundColor = hoverLinkBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isActive ? activeLinkColor : baseLinkColor;
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
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
            color: ctaTextColor,
            backgroundColor: ctaBg,
            textDecoration: "none",
            display: "block",
            padding: "10px 22px",
            borderRadius: "6px",
            transition: "background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-orange-light)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = ctaBg;
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
          style={{
            color: "var(--color-cream)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            minWidth: "44px",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
            borderTop: "1px solid rgba(208,16,32,0.2)",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {links.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLink}
                    aria-current={isActive ? "page" : undefined}
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--color-cream)" : "rgba(208,16,32,0.85)",
                      textDecoration: "none",
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      minHeight: "44px",
                      transition: "color 0.2s, background-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-cream)";
                      e.currentTarget.style.backgroundColor = "rgba(208,16,32,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isActive ? "var(--color-cream)" : "rgba(208,16,32,0.85)";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
