import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Professionelle Einreichung beim ersten Versuch",
  "Koordination mit Planern & Behörden",
  "Persönliche Begleitung bis zur Bewilligung",
];

export default function HeroSection() {
  const scrollToContact = () =>
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    document
      .querySelector("#dienstleistungen")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 4.5rem)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "var(--color-navy)",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(/assets/generated/hero-building.dim_1600x900.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(13,33,66,0.97) 0%, rgba(13,33,66,0.85) 50%, rgba(13,33,66,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold accent line bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, var(--color-gold) 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(201, 169, 110, 0.15)",
              border: "1px solid rgba(201, 169, 110, 0.35)",
              borderRadius: "2rem",
              padding: "0.375rem 0.875rem",
              marginBottom: "1.75rem",
            }}
            className="animate-fade-in"
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--color-gold)",
              }}
            />
            <span
              style={{
                color: "var(--color-gold)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Ihr Baugesuch-Experte in der Schweiz
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-title animate-fade-in-up delay-100"
            style={{ opacity: 0, marginBottom: "1.25rem" }}
          >
            Baubewilligung —<br />
            <span style={{ color: "var(--color-gold)" }}>
              Sicher & Einfach.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up delay-200"
            style={{
              opacity: 0,
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.1875rem",
              lineHeight: 1.65,
              marginBottom: "2rem",
              maxWidth: "52ch",
            }}
          >
            Wir übernehmen Ihr Baugesuch vollständig — von der Prüfung bis zur
            Einreichung. Kein Aufwand, keine Fehler, kein Stress.
          </p>

          {/* Highlights */}
          <ul
            className="animate-fade-in-up delay-300"
            style={{
              opacity: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
              marginBottom: "2.5rem",
              listStyle: "none",
              padding: 0,
            }}
          >
            {highlights.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <CheckCircle2
                  size={16}
                  color="var(--color-gold)"
                  style={{ flexShrink: 0 }}
                />
                <span
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div
            className="animate-fade-in-up delay-400"
            style={{
              opacity: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={scrollToContact}
              className="btn-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.0625rem",
                cursor: "pointer",
              }}
            >
              Jetzt anfragen
              <ArrowRight size={17} />
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={scrollToServices}
              className="btn-outline-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1.0625rem",
                cursor: "pointer",
              }}
            >
              Dienstleistungen entdecken
            </button>
          </div>

          {/* Trust bar */}
          <div
            className="animate-fade-in delay-500"
            style={{
              opacity: 0,
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {[
              { num: "100%", label: "Korrekte Einreichung" },
              { num: "Direkter", label: "Behördenkontakt" },
              { num: "Ein", label: "Ansprechpartner" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    color: "var(--color-gold)",
                    fontWeight: 700,
                    fontSize: "1.375rem",
                  }}
                >
                  {item.num}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.875rem",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
