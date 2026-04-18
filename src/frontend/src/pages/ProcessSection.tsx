import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Erstkontakt & Prüfung",
    description:
      "Sie schildern uns Ihr Bauprojekt. Wir prüfen die Bewilligungspflicht und klären offene Fragen — kostenlos und unverbindlich.",
  },
  {
    num: "02",
    title: "Unterlagen zusammenstellen",
    description:
      "Wir erstellen eine vollständige Checkliste, koordinieren mit Planern und sammeln alle erforderlichen Dokumente.",
  },
  {
    num: "03",
    title: "Koordination & Abstimmung",
    description:
      "Wir stimmen uns mit der zuständigen Behörde ab und beantworten alle Rückfragen — Sie müssen nichts tun.",
  },
  {
    num: "04",
    title: "Einreichung & Begleitung",
    description:
      "Wir reichen das vollständige Baugesuch ein und begleiten Sie bis zur Bewilligungserteilung.",
  },
];

export default function ProcessSection() {
  const scrollToContact = () =>
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="ablauf"
      data-ocid="process.section"
      style={{ backgroundColor: "var(--color-white)", padding: "6rem 0" }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(13, 33, 66, 0.06)",
              border: "1px solid rgba(13, 33, 66, 0.12)",
              borderRadius: "2rem",
              padding: "0.375rem 0.875rem",
              marginBottom: "1.25rem",
            }}
          >
            <span
              style={{
                color: "var(--color-navy)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              So einfach geht's
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Unser Ablauf
          </h2>
          <div className="gold-divider" style={{ margin: "0 auto 1.25rem" }} />
          <p
            style={{
              color: "var(--color-slate)",
              fontSize: "1.0625rem",
              maxWidth: "50ch",
              margin: "0 auto",
            }}
          >
            In vier klaren Schritten von der Anfrage zur erteilten
            Baubewilligung — ohne bürokratischen Aufwand.
          </p>
        </div>

        {/* Steps */}
        <div
          data-ocid="process.list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            backgroundColor: "var(--color-border)",
            border: "1px solid var(--color-border)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-ocid={`process.item.${i + 1}`}
              style={{
                backgroundColor: "var(--color-white)",
                padding: "2.5rem 2rem",
                position: "relative",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--color-soft-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-white)";
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "rgba(201, 169, 110, 0.25)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  letterSpacing: "-0.03em",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  color: "var(--color-navy)",
                  fontWeight: 700,
                  fontSize: "1.0625rem",
                  marginBottom: "0.625rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "var(--color-slate)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                }}
              >
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-14px",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="hidden lg:flex"
                  aria-hidden="true"
                >
                  <ArrowRight
                    size={14}
                    color="var(--color-navy)"
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div
          style={{
            marginTop: "3rem",
            backgroundColor: "var(--color-soft-blue)",
            border: "1px solid var(--color-border)",
            borderLeft: "4px solid var(--color-gold)",
            borderRadius: "0.75rem",
            padding: "1.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--color-navy)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                marginBottom: "0.25rem",
              }}
            >
              Ihr Vorteil: Korrekte Einreichung beim ersten Versuch
            </p>
            <p style={{ color: "var(--color-slate)", fontSize: "0.9375rem" }}>
              Wir vermeiden Fehler und sparen Ihnen Zeit, Geld und unnötigen
              Aufwand.
            </p>
          </div>
          <button
            type="button"
            data-ocid="process.cta_button"
            onClick={scrollToContact}
            className="btn-navy"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            Jetzt starten
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
