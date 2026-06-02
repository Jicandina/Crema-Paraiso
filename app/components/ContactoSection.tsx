"use client";

import { useState } from "react";
import { useRevealSection } from "./useReveal";
import { MapPin, At, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";

const infoItems = [
  { Icon: MapPin, label: "Dirección", value: "Zona Industrial del Este, Sector Barbecho, Guarenas, Miranda", href: undefined },
  { Icon: EnvelopeSimple, label: "Correo", value: "info@cremaparaiso.com", href: "mailto:info@cremaparaiso.com" },
  { Icon: At, label: "Redes", value: "@cremaparaiso", href: "https://instagram.com/cremaparaiso" },
];

const fields = [
  { id: "nombre", label: "Nombre", type: "text", required: true, placeholder: "Tu nombre completo", maxLength: 100 },
  { id: "correo", label: "Correo electrónico", type: "email", required: true, placeholder: "tu@empresa.com", maxLength: 200 },
  { id: "empresa", label: "Empresa (opcional)", type: "text", required: false, placeholder: "Nombre de tu empresa", maxLength: 100 },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactoSection() {
  const ref = useRevealSection();
  const [form, setForm] = useState({ nombre: "", correo: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.nombre.trim()) errs.nombre = "Ingresa tu nombre.";
    if (!form.correo.trim()) errs.correo = "Ingresa tu correo.";
    else if (!emailRe.test(form.correo)) errs.correo = "Correo no válido.";
    if (!form.mensaje.trim()) errs.mensaje = "Escribe tu mensaje.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setEnviado(true); }, 1200);
  };

  const inputBase: React.CSSProperties = {
    fontFamily: "var(--font-jakarta)",
    fontSize: "0.9rem",
    fontWeight: 400,
    color: "var(--color-brown)",
    backgroundColor: "var(--color-cream)",
    borderRadius: "8px",
    padding: "13px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <section
      id="contacto"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "var(--color-brown)", padding: "clamp(80px, 12vh, 120px) 0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)" }}>

        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <span style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-orange)",
            display: "block",
            marginBottom: "1rem",
          }}>
            Contacto
          </span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            fontWeight: 800,
            color: "var(--color-cream)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}>
            Hablemos de negocios.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <div className="reveal-left">
            <p style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "0.9rem",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(253, 243, 227, 0.6)",
              marginBottom: "2.5rem",
              maxWidth: "38ch",
            }}>
              Distribuye nuestros productos o resuelve cualquier consulta. Te respondemos en menos de 24 horas.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
              {infoItems.map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(232, 115, 42, 0.12)",
                    border: "1px solid rgba(232, 115, 42, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-orange)",
                    flexShrink: 0,
                  }}>
                    <Icon size={16} weight="light" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(253, 243, 227, 0.3)",
                      marginBottom: "0.2rem",
                    }}>{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.875rem", color: "rgba(253, 243, 227, 0.75)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253, 243, 227, 0.75)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.875rem", color: "rgba(253, 243, 227, 0.75)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(253, 243, 227, 0.08)", marginBottom: "1.75rem" }} />
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(253, 243, 227, 0.3)", marginBottom: "0.75rem" }}>
              Redes sociales
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["Instagram", "TikTok", "Facebook"].map((red) => (
                <a key={red} href={`https://${red.toLowerCase()}.com/cremaparaiso`} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 500, color: "rgba(253, 243, 227, 0.4)", border: "1px solid rgba(253, 243, 227, 0.1)", padding: "7px 14px", borderRadius: "6px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-orange)"; e.currentTarget.style.borderColor = "rgba(232, 115, 42, 0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(253, 243, 227, 0.4)"; e.currentTarget.style.borderColor = "rgba(253, 243, 227, 0.1)"; }}
                >
                  {red}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div style={{
              backgroundColor: "var(--color-cream-mid)",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              border: "1px solid rgba(232, 115, 42, 0.15)",
            }}>
              <div aria-live="polite" aria-atomic="true">
                {enviado ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "50%",
                      backgroundColor: "rgba(232, 115, 42, 0.12)", border: "1px solid rgba(232, 115, 42, 0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 1.25rem", color: "var(--color-orange)",
                    }}>
                      <ArrowUpRight size={20} weight="light" />
                    </div>
                    <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-brown)", marginBottom: "0.5rem" }}>
                      Mensaje enviado
                    </div>
                    <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.875rem", color: "var(--color-brown-mid)", fontWeight: 300 }}>
                      Te respondemos en menos de 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {fields.map((field) => (
                      <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        <label
                          htmlFor={field.id}
                          style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brown-light)" }}
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          maxLength={field.maxLength}
                          value={(form as Record<string, string>)[field.id]}
                          onChange={(e) => { setForm({ ...form, [field.id]: e.target.value }); if (errors[field.id]) setErrors({ ...errors, [field.id]: "" }); }}
                          onFocus={() => setFocused(field.id)}
                          onBlur={() => setFocused(null)}
                          aria-invalid={!!errors[field.id]}
                          aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                          style={{
                            ...inputBase,
                            border: `1px solid ${errors[field.id] ? "#C0392B" : focused === field.id ? "var(--color-orange)" : "rgba(61, 21, 5, 0.2)"}`,
                          }}
                        />
                        {errors[field.id] && (
                          <span id={`${field.id}-error`} role="alert" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.72rem", fontWeight: 500, color: "#C0392B" }}>
                            {errors[field.id]}
                          </span>
                        )}
                      </div>
                    ))}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label
                        htmlFor="mensaje"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brown-light)" }}
                      >
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        required
                        rows={4}
                        placeholder="Cuéntanos en qué podemos ayudarte"
                        maxLength={2000}
                        value={form.mensaje}
                        onChange={(e) => { setForm({ ...form, mensaje: e.target.value }); if (errors.mensaje) setErrors({ ...errors, mensaje: "" }); }}
                        onFocus={() => setFocused("mensaje")}
                        onBlur={() => setFocused(null)}
                        aria-invalid={!!errors.mensaje}
                        aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                        style={{
                          ...inputBase,
                          border: `1px solid ${errors.mensaje ? "#C0392B" : focused === "mensaje" ? "var(--color-orange)" : "rgba(61, 21, 5, 0.2)"}`,
                          resize: "vertical",
                          minHeight: "110px",
                        }}
                      />
                      {errors.mensaje && (
                        <span id="mensaje-error" role="alert" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.72rem", fontWeight: 500, color: "#C0392B" }}>
                          {errors.mensaje}
                        </span>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-cream)",
                        backgroundColor: loading ? "var(--color-brown-light)" : "var(--color-brown)",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        padding: "14px",
                        borderRadius: "8px",
                        width: "100%",
                        marginTop: "0.25rem",
                        transition: "background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.backgroundColor = "var(--color-orange)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                      onMouseLeave={(e) => { if (!loading) { e.currentTarget.style.backgroundColor = "var(--color-brown)"; e.currentTarget.style.transform = "translateY(0)"; } }}
                    >
                      {loading ? "Enviando..." : "Enviar mensaje"}
                      {!loading && <ArrowUpRight size={16} weight="bold" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
