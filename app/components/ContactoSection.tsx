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
  { id: "telefono", label: "Teléfono (opcional)", type: "tel", required: false, placeholder: "Ej: 0414-1234567", maxLength: 30 },
  { id: "empresa", label: "Empresa (opcional)", type: "text", required: false, placeholder: "Nombre de tu empresa", maxLength: 100 },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdavgwyg";

export default function ContactoSection() {
  const ref = useRevealSection();
  const [form, setForm] = useState({ nombre: "", correo: "", telefono: "", empresa: "", mensaje: "" });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.correo,
          telefono: form.telefono || "(no especificado)",
          empresa: form.empresa || "(no especificada)",
          mensaje: form.mensaje,
        }),
      });
      if (res.ok) {
        setEnviado(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = (data as { errors?: { message: string }[] }).errors?.[0]?.message ?? "Error al enviar. Intenta de nuevo.";
        setErrors({ _server: msg });
      }
    } catch {
      setErrors({ _server: "Sin conexión. Revisa tu internet e intenta de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-jakarta)",
    fontSize: "1rem",
    fontWeight: 400,
    color: "#1a0000",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    padding: "13px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contacto"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ backgroundColor: "#D01020", padding: "clamp(80px, 12vh, 120px) 0", position: "relative", overflow: "hidden" }}
    >
      {/* Noise texture */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 48px)", position: "relative" }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: "clamp(2.5rem, 5vh, 4rem)" }}>
          <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFD100", display: "block", marginBottom: "1rem" }}>
            Contacto
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
            Hablemos de negocios.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "start" }} className="contact-grid">

          {/* Info */}
          <div className="reveal-left">
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", maxWidth: "36ch" }}>
              Distribuye nuestros productos o resuelve cualquier consulta. Te respondemos en menos de 24 horas.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
              {infoItems.map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFD100", flexShrink: 0 }}>
                    <Icon size={17} weight="light" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.25rem" }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD100")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", color: "rgba(255,255,255,0.9)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.12)", marginBottom: "1.75rem" }} />
            <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem" }}>
              Redes sociales
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/cremaparaiso" },
                { label: "TikTok", href: "https://tiktok.com/@cremaparaisove" },
                { label: "Facebook", href: "https://facebook.com/cremaparaiso" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.75rem", fontWeight: 500, color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 16px", borderRadius: "6px", textDecoration: "none", transition: "color 0.2s, border-color 0.2s, background-color 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD100"; e.currentTarget.style.borderColor = "rgba(255,209,0,0.5)"; e.currentTarget.style.backgroundColor = "rgba(255,209,0,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1.25rem", padding: "clamp(1.5rem, 3vw, 2.5rem)", boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
              <div aria-live="polite" aria-atomic="true">
                {enviado ? (
                  <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "rgba(208,16,32,0.08)", border: "1px solid rgba(208,16,32,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", color: "#D01020" }}>
                      <ArrowUpRight size={22} weight="light" />
                    </div>
                    <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 700, color: "#D01020", marginBottom: "0.5rem" }}>
                      Mensaje enviado
                    </div>
                    <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", color: "rgba(0,0,0,0.5)", fontWeight: 300 }}>
                      Te respondemos en menos de 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-cols">
                      {fields.slice(0, 2).map((field) => (
                        <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <label htmlFor={field.id} style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A0C14" }}>
                            {field.label}
                          </label>
                          <input
                            id={field.id} type={field.type} required={field.required}
                            placeholder={field.placeholder} maxLength={field.maxLength}
                            value={(form as Record<string, string>)[field.id]}
                            onChange={(e) => { setForm({ ...form, [field.id]: e.target.value }); if (errors[field.id]) setErrors({ ...errors, [field.id]: "" }); }}
                            onFocus={() => setFocused(field.id)} onBlur={() => setFocused(null)}
                            aria-invalid={!!errors[field.id]}
                            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                            style={{ ...inputStyle, border: `1.5px solid ${errors[field.id] ? "#D01020" : focused === field.id ? "#D01020" : "rgba(0,0,0,0.12)"}`, boxShadow: focused === field.id ? "0 0 0 3px rgba(208,16,32,0.1)" : "none" }}
                          />
                          {errors[field.id] && <span id={`${field.id}-error`} role="alert" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 500, color: "#D01020" }}>{errors[field.id]}</span>}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-cols">
                      {fields.slice(2).map((field) => (
                        <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <label htmlFor={field.id} style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A0C14" }}>
                            {field.label}
                          </label>
                          <input
                            id={field.id} type={field.type} required={field.required}
                            placeholder={field.placeholder} maxLength={field.maxLength}
                            value={(form as Record<string, string>)[field.id]}
                            onChange={(e) => { setForm({ ...form, [field.id]: e.target.value }); if (errors[field.id]) setErrors({ ...errors, [field.id]: "" }); }}
                            onFocus={() => setFocused(field.id)} onBlur={() => setFocused(null)}
                            aria-invalid={!!errors[field.id]}
                            style={{ ...inputStyle, border: `1.5px solid ${errors[field.id] ? "#D01020" : focused === field.id ? "#D01020" : "rgba(0,0,0,0.12)"}`, boxShadow: focused === field.id ? "0 0 0 3px rgba(208,16,32,0.1)" : "none" }}
                          />
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <label htmlFor="mensaje" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A0C14" }}>
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje" required rows={4}
                        placeholder="Cuéntanos en qué podemos ayudarte"
                        maxLength={2000} value={form.mensaje}
                        onChange={(e) => { setForm({ ...form, mensaje: e.target.value }); if (errors.mensaje) setErrors({ ...errors, mensaje: "" }); }}
                        onFocus={() => setFocused("mensaje")} onBlur={() => setFocused(null)}
                        aria-invalid={!!errors.mensaje}
                        aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                        style={{ ...inputStyle, border: `1.5px solid ${errors.mensaje ? "#D01020" : focused === "mensaje" ? "#D01020" : "rgba(0,0,0,0.12)"}`, boxShadow: focused === "mensaje" ? "0 0 0 3px rgba(208,16,32,0.1)" : "none", resize: "vertical", minHeight: "110px" }}
                      />
                      {errors.mensaje && <span id="mensaje-error" role="alert" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.7rem", fontWeight: 500, color: "#D01020" }}>{errors.mensaje}</span>}
                    </div>
                    {errors._server && <p role="alert" style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8rem", fontWeight: 500, color: "#D01020", textAlign: "center" }}>{errors._server}</p>}
                    <button
                      type="submit" disabled={loading}
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "var(--font-jakarta)", fontSize: "0.9rem", fontWeight: 700, color: "#8A0C14", backgroundColor: loading ? "rgba(255,209,0,0.6)" : "#FFD100", border: "none", cursor: loading ? "not-allowed" : "pointer", padding: "15px", borderRadius: "8px", width: "100%", marginTop: "0.25rem", transition: "background-color 0.25s, transform 0.25s", letterSpacing: "0.02em" }}
                      onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.backgroundColor = "#FFE033"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                      onMouseLeave={(e) => { if (!loading) { e.currentTarget.style.backgroundColor = "#FFD100"; e.currentTarget.style.transform = "translateY(0)"; } }}
                    >
                      {loading ? "Enviando..." : "Enviar mensaje"}
                      {!loading && <ArrowUpRight size={17} weight="bold" />}
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
          .form-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
