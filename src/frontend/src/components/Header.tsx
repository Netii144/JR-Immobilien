import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Dienstleistungen", href: "#dienstleistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        backgroundColor: "var(--color-navy)",
        borderBottom: scrolled
          ? "1px solid rgba(201, 169, 110, 0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(13,33,66,0.4)" : "none",
        transition: "all 0.3s ease",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          {/* Logo */}
          <button
            data-ocid="header.logo"
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/images/logo.png"
                alt="J+R Immobilien"
                style={{
                  height: "2.25rem",
                  width: "auto",
                  display: "block",
                }}
              />
            </div>
          </button>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid={`header.nav_${link.label.toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u")}`}
                onClick={() => handleNavClick(link.href)}
                className="nav-link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="header.cta_button"
              onClick={() => handleNavClick("#kontakt")}
              className="btn-gold"
              style={{
                padding: "0.5625rem 1.375rem",
                fontSize: "0.9375rem",
                cursor: "pointer",
              }}
            >
              Beratung vereinbaren
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="header.mobile_menu_toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              padding: "0.375rem",
            }}
            className="flex md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            data-ocid="header.mobile_menu"
            style={{
              borderTop: "1px solid rgba(201, 169, 110, 0.2)",
              paddingBottom: "1.25rem",
              paddingTop: "0.75rem",
            }}
            className="flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                style={{
                  color: "#ffffff",
                  padding: "0.625rem 0.5rem",
                  fontWeight: 500,
                  fontSize: "1rem",
                  display: "block",
                  borderRadius: "0.375rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="header.mobile_cta_button"
              onClick={() => handleNavClick("#kontakt")}
              className="btn-gold"
              style={{
                marginTop: "0.5rem",
                textAlign: "center",
                display: "block",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Beratung vereinbaren
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
