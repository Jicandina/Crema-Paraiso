"use client";

import Image from "next/image";
import { useRevealSection } from "./useReveal";

type Producto = {
  num: string;
  nombre: string;
  categoria: string;
  desc: string;
  sabores: { nombre: string; detalle: string }[];
  presentaciones: string[];
  cert: string;
  bg: string;
  text: string;
  accent: string;
  fotos?: string[];
};

const productos: Producto[] = [
  {
    num: "01",
    nombre: "Helados Duros",
    categoria: "Cremas heladas artesanales",
    desc: "Cremas heladas enriquecidas con sólidos lácteos, sabores y aromas naturales. Certificación oficial Hecho con Savoy de Nestlé en la línea Chocolate.",
    sabores: [
      { nombre: "Mantecado", detalle: "Vainilla premium, receta artesanal" },
      { nombre: "Chocolate", detalle: "Hecho con Cacao Savoy Nestlé · Certificado" },
      { nombre: "Fresa", detalle: "Con fresas naturales de la Colonia Tovar" },
      { nombre: "Coco", detalle: "Leche de coco y coco rayado natural" },
    ],
    presentaciones: ["480 ml — Individual", "2 Litros — Familiar (12 uds/cesta)", "4 Litros — Profesional (8 uds/cesta)"],
    cert: "Permisos sanitarios SENCAMER vigentes",
    bg: "#3D1505",
    text: "#FDF3E3",
    accent: "#E8732A",
    fotos: ["/images/helado-chocolate-4l.png", "/images/helado-mantecado-2l.png", "/images/helado-fresa-2l.png"],
  },
  {
    num: "02",
    nombre: "Mezcla Suave",
    categoria: "Base para máquinas Soft Serve",
    desc: "Base artesanal premium lista para usar en máquinas Soft Serve. Fórmula de almacenamiento dual: congelado o refrigerado. Galón de 3.78 litros.",
    sabores: [
      { nombre: "Vainilla", detalle: "Esencia natural, receta artesanal" },
      { nombre: "Chocolate", detalle: "Hecho con Cacao Savoy Nestlé · Certificado" },
      { nombre: "Fresa", detalle: "Ácido cítrico, esencia natural de fresa" },
      { nombre: "Yogurt Griego", detalle: "Yogurt griego real, fórmula exclusiva" },
    ],
    presentaciones: ["Galón 3.78 L (Food Service)"],
    cert: "Almacenamiento dual: congelado <-15°C o refrigerado <4°C",
    bg: "#FDF3E3",
    text: "#3D1505",
    accent: "#E8732A",
    fotos: ["/images/soft-serve.png", "/images/soft-galon.png"],
  },
  {
    num: "03",
    nombre: "Siropes",
    categoria: "Para helados, café, postres y bebidas",
    desc: "Siropes premium de alta concentración para heladerías, cafeterías y repostería profesional. Consistencia suave e intensidad de sabor garantizada.",
    sabores: [
      { nombre: "Fresa", detalle: "Sabor natural para helados y postres" },
      { nombre: "Chocolate", detalle: "Certificado Hecho con Savoy de Nestlé" },
      { nombre: "Caramelo", detalle: "Elaborado con crema de leche y azúcar" },
    ],
    presentaciones: ["Galón 4.84 kg (Food Service)"],
    cert: "Agítese bien antes de usar",
    bg: "#E8732A",
    text: "#FDF3E3",
    accent: "#3D1505",
    fotos: ["/images/sirope-fresa.png", "/images/sirope-chocolate.png", "/images/sirope-caramelo.png"],
  },
];

export default function ProductosSection() {
  const ref = useRevealSection();

  return (
    <section id="productos" ref={ref as React.RefObject<HTMLElement>}>

      {/* Section header */}
      <div style={{ backgroundColor: "var(--color-cream-mid)", padding: "clamp(60px, 8vh, 80px) clamp(24px, 5vw, 60px) clamp(40px, 5vh, 60px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-orange)", display: "block", marginBottom: "0.75rem" }}>
                Productos
              </span>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "var(--color-brown)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Helados & Siropes.
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.8, color: "var(--color-brown-mid)", maxWidth: "44ch" }}>
              Producción artesanal con ingredientes seleccionados. Permisos sanitarios SENCAMER vigentes en todas las líneas.
            </p>
          </div>
        </div>
      </div>

      {/* Product bands */}
      {productos.map((p, idx) => (
        <div
          key={p.num}
          className="reveal"
          style={{
            backgroundColor: p.bg,
            padding: "clamp(50px, 8vh, 80px) clamp(24px, 5vw, 60px)",
            transitionDelay: `${idx * 60}ms`,
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "5rem",
              alignItems: "start",
            }} className="product-band">

              {/* Left: number + name */}
              <div>
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: p.accent,
                  opacity: 0.25,
                  marginBottom: "-1rem",
                  letterSpacing: "-0.04em",
                }}>
                  {p.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 800,
                  color: p.text,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}>
                  {p.nombre}
                </h3>
                <div style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: p.accent,
                  marginBottom: "1.25rem",
                }}>
                  {p.categoria}
                </div>
                <p style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: `${p.text}99`,
                  marginBottom: "1.5rem",
                }}>
                  {p.desc}
                </p>

                {/* Presentaciones */}
                <div style={{
                  borderTop: `1px solid ${p.text}20`,
                  paddingTop: "1.25rem",
                }}>
                  <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: p.accent, marginBottom: "0.6rem" }}>
                    Presentaciones
                  </div>
                  {p.presentaciones.map((pr) => (
                    <div key={pr} style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 400, color: `${p.text}80`, marginBottom: "0.25rem" }}>
                      — {pr}
                    </div>
                  ))}
                  <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.72rem", fontWeight: 300, color: `${p.text}50`, marginTop: "0.75rem", fontStyle: "italic" }}>
                    {p.cert}
                  </div>
                </div>
              </div>

              {/* Right: product photos + flavor grid */}
              <div>
                {/* Product photos strip */}
                {p.fotos && (
                  <div style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                  }}>
                    {p.fotos.map((foto, fi) => (
                      <div key={fi} style={{
                        flex: "1 1 120px",
                        minWidth: "100px",
                        maxWidth: "180px",
                        aspectRatio: "3/4",
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: `1px solid ${p.text}15`,
                        backgroundColor: `${p.text}08`,
                        position: "relative",
                      }}>
                        <Image
                          src={foto}
                          alt={p.nombre}
                          fill
                          sizes="180px"
                          style={{ objectFit: "contain", objectPosition: "center", padding: "8px" }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: p.accent, marginBottom: "1rem" }}>
                  Sabores disponibles
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1px", backgroundColor: `${p.text}15` }}>
                  {p.sabores.map((s, i) => (
                    <div key={s.nombre} style={{
                      backgroundColor: p.bg,
                      padding: "1.5rem",
                      borderTop: i < p.sabores.length ? `1px solid ${p.text}10` : "none",
                    }}>
                      <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 700, color: p.text, marginBottom: "0.35rem" }}>
                        {s.nombre}
                      </div>
                      <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.775rem", fontWeight: 300, color: `${p.text}65`, lineHeight: 1.6 }}>
                        {s.detalle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .product-band { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
