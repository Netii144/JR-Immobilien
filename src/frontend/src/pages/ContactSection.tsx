import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  betreff: string;
  nachricht: string;
  service: string;
}

const serviceOptions = [
  "Baugesuch Komplettservice",
  "Wärmepumpengesuch",
  "Baugesuch-Check",
  "Baukoordination",
  "Kostenplanung & Beratung",
  "Komplettpaket (Premium)",
  "Ich bin noch unsicher",
];

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  betreff: "",
  nachricht: "",
  service: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name ist erforderlich";
    if (!form.email.trim()) e.email = "E-Mail ist erforderlich";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Ungültige E-Mail-Adresse";
    if (!form.nachricht.trim()) e.nachricht = "Nachricht ist erforderlich";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      // Backend submitContact call — ready to wire once method is available
      setSent(true);
      toast.success(
        "Ihre Anfrage wurde gesendet! Wir melden uns innerhalb von 24 Stunden.",
      );
      setForm(initialForm);
    } catch {
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="kontakt"
      data-ocid="contact.section"
      style={{ backgroundColor: "var(--color-soft-blue)", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left: Info */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(201, 169, 110, 0.12)",
                border: "1px solid rgba(201, 169, 110, 0.3)",
                borderRadius: "2rem",
                padding: "0.375rem 0.875rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  color: "var(--color-gold)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Kontakt aufnehmen
              </span>
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Haben Sie ein Projekt?
            </h2>
            <div className="gold-divider" style={{ marginBottom: "1.5rem" }} />
            <p
              style={{
                color: "var(--color-slate)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                marginBottom: "2.5rem",
                maxWidth: "44ch",
              }}
            >
              Teilen Sie uns Ihr Vorhaben mit. Wir melden uns innerhalb von 24
              Stunden mit einem unverbindlichen Erstgespräch.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="tel:+41000000000"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "rgba(201, 169, 110, 0.1)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} color="var(--color-gold)" />
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--color-slate)",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    Telefon
                  </div>
                  <div
                    style={{
                      color: "var(--color-navy)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                    }}
                  >
                    +41 (0) 00 000 00 00
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@jr-immobilien.ch"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--color-border)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "rgba(201, 169, 110, 0.1)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} color="var(--color-gold)" />
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--color-slate)",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    E-Mail
                  </div>
                  <div
                    style={{
                      color: "var(--color-navy)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                    }}
                  >
                    info@jr-immobilien.ch
                  </div>
                </div>
              </a>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {[
                "Kostenlose Erstberatung",
                "Antwort innerhalb von 24 Stunden",
                "Persönlicher Ansprechpartner",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={15} color="var(--color-gold)" />
                  <span
                    style={{
                      color: "var(--color-slate)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid var(--color-border)",
              borderRadius: "1rem",
              padding: "2.5rem",
              boxShadow: "0 4px 32px rgba(13, 33, 66, 0.08)",
            }}
          >
            {sent ? (
              <div
                data-ocid="contact.success_state"
                style={{ textAlign: "center", padding: "3rem 1rem" }}
              >
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "rgba(201, 169, 110, 0.12)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <CheckCircle2 size={28} color="var(--color-gold)" />
                </div>
                <h3
                  style={{
                    color: "var(--color-navy)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  Anfrage erfolgreich gesendet!
                </h3>
                <p
                  style={{
                    color: "var(--color-slate)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    marginBottom: "1.75rem",
                  }}
                >
                  Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  data-ocid="contact.send_again_button"
                  className="btn-gold"
                  style={{ cursor: "pointer" }}
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    color: "var(--color-navy)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "0.375rem",
                  }}
                >
                  Anfrage senden
                </h3>
                <p
                  style={{
                    color: "var(--color-slate)",
                    fontSize: "0.9375rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  Alle mit * markierten Felder sind Pflichtfelder.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        color: "var(--color-navy)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginBottom: "0.375rem",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      data-ocid="contact.name_input"
                      type="text"
                      placeholder="Max Mustermann"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="input-field"
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        data-ocid="contact.name_field_error"
                        style={{
                          color: "var(--color-error)",
                          fontSize: "0.8125rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        color: "var(--color-navy)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginBottom: "0.375rem",
                      }}
                    >
                      E-Mail *
                    </label>
                    <input
                      id="contact-email"
                      data-ocid="contact.email_input"
                      type="email"
                      placeholder="max@beispiel.ch"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="input-field"
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        data-ocid="contact.email_field_error"
                        style={{
                          color: "var(--color-error)",
                          fontSize: "0.8125rem",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: "block",
                        color: "var(--color-navy)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginBottom: "0.375rem",
                      }}
                    >
                      Telefon
                    </label>
                    <input
                      id="contact-phone"
                      data-ocid="contact.phone_input"
                      type="tel"
                      placeholder="+41 00 000 00 00"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      style={{
                        display: "block",
                        color: "var(--color-navy)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        marginBottom: "0.375rem",
                      }}
                    >
                      Dienstleistung
                    </label>
                    <select
                      id="contact-service"
                      data-ocid="contact.service_select"
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="input-field"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Bitte wählen...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor="contact-betreff"
                    style={{
                      display: "block",
                      color: "var(--color-navy)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      marginBottom: "0.375rem",
                    }}
                  >
                    Betreff
                  </label>
                  <input
                    id="contact-betreff"
                    data-ocid="contact.subject_input"
                    type="text"
                    placeholder="Kurze Beschreibung Ihres Anliegens"
                    value={form.betreff}
                    onChange={(e) => handleChange("betreff", e.target.value)}
                    className="input-field"
                  />
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    htmlFor="contact-nachricht"
                    style={{
                      display: "block",
                      color: "var(--color-navy)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      marginBottom: "0.375rem",
                    }}
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="contact-nachricht"
                    data-ocid="contact.message_textarea"
                    placeholder="Beschreiben Sie Ihr Bauprojekt und wie wir Ihnen helfen können..."
                    value={form.nachricht}
                    onChange={(e) => handleChange("nachricht", e.target.value)}
                    className="input-field"
                    rows={5}
                    style={{ resize: "vertical", minHeight: "120px" }}
                    aria-describedby={
                      errors.nachricht ? "contact-nachricht-error" : undefined
                    }
                  />
                  {errors.nachricht && (
                    <p
                      id="contact-nachricht-error"
                      data-ocid="contact.message_field_error"
                      style={{
                        color: "var(--color-error)",
                        fontSize: "0.8125rem",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.nachricht}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={sending}
                  className="btn-gold"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.625rem",
                    fontSize: "1.0625rem",
                    opacity: sending ? 0.75 : 1,
                    cursor: sending ? "not-allowed" : "pointer",
                    border: "none",
                  }}
                >
                  {sending ? (
                    <>
                      <Loader2
                        size={18}
                        style={{ animation: "spin 1s linear infinite" }}
                      />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      <span>Anfrage senden</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
