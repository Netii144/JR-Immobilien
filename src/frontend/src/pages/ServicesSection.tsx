import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  icon: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  highlight?: boolean;
}

const services: Service[] = [
  {
    id: "baugesuch",
    icon: "🏗️",
    badge: "Kernangebot",
    title: "Baugesuch Komplettservice",
    subtitle: "Vollständige Abwicklung Ihres Baugesuchs",
    description:
      "Wir kümmern uns um die vollständige Abwicklung Ihres Baugesuchs — von der ersten Prüfung bis zur Einreichung bei der Gemeinde.",
    benefits: [
      "Prüfung der Bewilligungspflicht",
      "Zusammenstellung aller Unterlagen",
      "Koordination mit Planern & Fachstellen",
      "Einreichung bei der Behörde",
      "Kommunikation bei Rückfragen",
    ],
    highlight: true,
  },
  {
    id: "waermepumpe",
    icon: "🟢",
    badge: "Sehr gefragt",
    title: "Wärmepumpengesuch",
    subtitle: "Schnelle, unkomplizierte Umsetzung",
    description:
      "Prüfung der Bewilligungspflicht, Erstellung und Einreichung des Gesuchs sowie Abstimmung mit Installateur und Gemeinde.",
    benefits: [
      "Prüfung der Bewilligungspflicht",
      "Erstellung & Einreichung des Gesuchs",
      "Abstimmung mit Installateur",
      "Direkte Kommunikation mit der Gemeinde",
    ],
  },
  {
    id: "check",
    icon: "🟡",
    badge: "Einstiegsangebot",
    title: "Baugesuch-Check",
    subtitle: "Wissen, wo Sie stehen",
    description:
      "Prüfung Ihrer bestehenden Unterlagen, Analyse von Risiken und fehlenden Dokumenten — mit klarer Empfehlung für das weitere Vorgehen.",
    benefits: [
      "Prüfung bestehender Unterlagen",
      "Risikoanalyse & Lückencheck",
      "Klare Handlungsempfehlung",
      "Schnelles Erstfeedback",
    ],
  },
  {
    id: "koordination",
    icon: "🟠",
    title: "Baukoordination",
    subtitle: "Ein Ansprechpartner für alles",
    description:
      "Koordination zwischen allen Beteiligten — Unterstützung bei Terminplanung, Abstimmung mit Behörden und Begleitung während der Bewilligungsphase.",
    benefits: [
      "Koordination aller Beteiligten",
      "Terminplanung & Unterstützung",
      "Abstimmung mit Fachstellen",
      "Begleitung Bewilligungsphase",
    ],
  },
  {
    id: "kosten",
    icon: "🔴",
    title: "Kostenplanung & Beratung",
    subtitle: "Transparenz von Anfang an",
    description:
      "Erste Kosteneinschätzung für Ihr Bauprojekt anhand realer Baukosten (BKP) — damit Sie frühzeitig wissen, mit welchen Kosten Sie rechnen müssen.",
    benefits: [
      "Erste Kosteneinschätzung",
      "Reale Baukosten (BKP)",
      "Unterstützung bei Budgetplanung",
      "Frühe Kostentransparenz",
    ],
  },
  {
    id: "komplett",
    icon: "⚫",
    badge: "Premium",
    title: "Komplettpaket",
    subtitle: "Rundum-Service für Ihr Bauprojekt",
    description:
      "Baugesuch komplett, Koordination aller Beteiligten, Projektbegleitung bis zur Bewilligung und Unterstützung bei Planung und Kosten.",
    benefits: [
      "Baugesuch vollständig erledigt",
      "Koordination aller Beteiligten",
      "Projektbegleitung bis Bewilligung",
      "Kosten- & Planungsunterstützung",
    ],
    highlight: true,
  },
];

export default function ServicesSection() {
  const scrollToContact = () =>
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="dienstleistungen"
      data-ocid="services.section"
      style={{ backgroundColor: "var(--color-soft-blue)", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              Unsere Leistungen
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Dienstleistungen
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.25rem" }} />
          <p
            style={{
              color: "var(--color-slate)",
              fontSize: "1.0625rem",
              maxWidth: "52ch",
              margin: "0 auto",
            }}
          >
            Von der Einzelprüfung bis zum Rundum-Service — wir begleiten Sie auf
            dem gesamten Weg zur Baubewilligung.
          </p>
        </div>

        {/* Grid */}
        <div
          data-ocid="services.list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <article
              key={service.id}
              data-ocid={`services.item.${i + 1}`}
              className="section-card"
              style={{
                position: "relative",
                overflow: "hidden",
                ...(service.highlight
                  ? {
                      borderColor: "var(--color-gold)",
                      boxShadow: "0 4px 24px rgba(201, 169, 110, 0.15)",
                    }
                  : {}),
              }}
            >
              {service.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    backgroundColor: "var(--color-gold)",
                  }}
                  aria-hidden="true"
                />
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.125rem",
                }}
              >
                <div
                  style={{
                    width: "3.25rem",
                    height: "3.25rem",
                    borderRadius: "0.625rem",
                    backgroundColor: service.highlight
                      ? "var(--color-gold)"
                      : "rgba(13, 33, 66, 0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-navy)",
                    fontSize: "1.625rem",
                    lineHeight: 1,
                  }}
                >
                  {service.icon}
                </div>
                {service.badge && (
                  <span
                    style={{
                      backgroundColor:
                        service.badge === "Premium"
                          ? "var(--color-navy)"
                          : "rgba(201, 169, 110, 0.15)",
                      color:
                        service.badge === "Premium"
                          ? "#ffffff"
                          : "var(--color-navy)",
                      border:
                        service.badge === "Premium"
                          ? "none"
                          : "1px solid rgba(201, 169, 110, 0.4)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.625rem",
                      borderRadius: "2rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <h3
                style={{
                  color: "var(--color-navy)",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  marginBottom: "0.25rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "var(--color-gold)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                }}
              >
                {service.subtitle}
              </p>
              <p
                style={{
                  color: "var(--color-slate)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                }}
              >
                {service.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                  marginBottom: "1.5rem",
                }}
              >
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "var(--color-slate)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                data-ocid={`services.cta_button.${i + 1}`}
                onClick={scrollToContact}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  color: service.highlight
                    ? "var(--color-gold)"
                    : "var(--color-navy)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "gap 0.2s ease",
                }}
              >
                Anfragen
                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>

        {/* CTA banner */}
        <div
          style={{
            marginTop: "3.5rem",
            backgroundColor: "var(--color-navy)",
            borderRadius: "1rem",
            padding: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1.375rem",
                marginBottom: "0.375rem",
              }}
            >
              Nicht sicher, welches Paket passt?
            </h3>
            <p style={{ color: "var(--color-slate)", fontSize: "1rem" }}>
              Wir beraten Sie kostenlos und unverbindlich — rund um Ihr
              Bauprojekt.
            </p>
          </div>
          <button
            type="button"
            data-ocid="services.bottom_cta_button"
            onClick={scrollToContact}
            className="btn-gold"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            Kostenlos beraten lassen
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
