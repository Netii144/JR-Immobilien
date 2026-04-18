import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const scrollToContact = () => {
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document
      .querySelector("#dienstleistungen")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "var(--color-anthracite)" }}>
      {/* CTA Banner above footer */}
      <div
        style={{
          backgroundColor: "var(--color-navy)",
          borderTop: "3px solid var(--color-gold)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.25rem",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "1.75rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Bereit, Ihr Projekt zu starten?
          </h3>
          <p
            style={{
              color: "var(--color-slate)",
              fontSize: "1.0625rem",
              maxWidth: "42ch",
            }}
          >
            Kontaktieren Sie uns für ein unverbindliches Erstgespräch — wir
            zeigen Ihnen den schnellsten Weg zur Baubewilligung.
          </p>
          <button
            type="button"
            data-ocid="footer.cta_button"
            onClick={scrollToContact}
            className="btn-gold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            Kostenlos anfragen
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
          >
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                backgroundColor: "var(--color-gold)",
                borderRadius: "0.375rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Building2
                size={18}
                color="var(--color-navy)"
                strokeWidth={2.5}
              />
            </div>
            <div>
              <div
                style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem" }}
              >
                J+R Immobilien
              </div>
              <div
                style={{
                  color: "var(--color-gold)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Baugesuch & Immobilien
              </div>
            </div>
          </div>
          <p
            style={{
              color: "var(--color-slate)",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
            }}
          >
            Ihr verlässlicher Partner für Baugesuche und Immobilienprojekte in
            der Schweiz.
          </p>
          <div
            style={{
              width: "2.5rem",
              height: "2px",
              backgroundColor: "var(--color-gold)",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Dienstleistungen */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          <h4
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Dienstleistungen
          </h4>
          {[
            "Baugesuch Komplettservice",
            "Wärmepumpengesuch",
            "Baugesuch-Check",
            "Baukoordination",
            "Kostenplanung",
            "Komplettpaket",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={scrollToServices}
              style={{
                color: "var(--color-slate)",
                fontSize: "0.9375rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-slate)";
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Kontakt */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          <h4
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Kontakt
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.625rem",
              }}
            >
              <MapPin
                size={15}
                color="var(--color-gold)"
                style={{ marginTop: "2px", flexShrink: 0 }}
              />
              <span
                style={{ color: "var(--color-slate)", fontSize: "0.9375rem" }}
              >
                Schweiz
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
            >
              <Phone size={15} color="var(--color-gold)" />
              <a
                href="tel:+41000000000"
                style={{
                  color: "var(--color-slate)",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                +41 (0) 00 000 00 00
              </a>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
            >
              <Mail size={15} color="var(--color-gold)" />
              <a
                href="mailto:info@jr-immobilien.ch"
                style={{
                  color: "var(--color-slate)",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                info@jr-immobilien.ch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{ color: "rgba(107, 122, 153, 0.7)", fontSize: "0.875rem" }}
        >
          © {year} J+R Immobilien. Alle Rechte vorbehalten.
        </span>
        <span
          style={{ color: "rgba(107, 122, 153, 0.5)", fontSize: "0.8125rem" }}
        >
          Built with love using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-gold)", textDecoration: "none" }}
          >
            caffeine.ai
          </a>
        </span>
      </div>
    </footer>
  );
}
