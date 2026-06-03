import { useState } from "react";
import { NAV_LINKS } from "../data";

const NAV_COLORS = ["#FFE135", "#FF5733", "#3B82F6", "#22C55E"];
const NAV_TEXT   = ["#000",    "#fff",    "#fff",    "#000"];
const NAV_IDS    = ["kode", "manifesto", "kompilasi", "log"];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      {/* Desktop row */}
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg md:text-xl tracking-tight"
        >
          PROJECT{" "}
          <span className="px-1" style={{ background: "#FF5733", color: "#fff" }}>
            KATARSIS
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === NAV_IDS[i];
            return (
              <button
                key={link}
                onClick={() => scrollTo(NAV_IDS[i])}
                className="px-4 py-2 font-display text-xs tracking-widest border-l-4 border-black transition-colors"
                style={{
                  background: isActive ? NAV_COLORS[i] : "transparent",
                  color:      isActive ? NAV_TEXT[i]   : "#000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = NAV_COLORS[i];
                  e.currentTarget.style.color      = NAV_TEXT[i];
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color      = "#000";
                  }
                }}
              >
                {link}
              </button>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden border-4 border-black px-2 py-1 font-display text-sm"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              onClick={() => { scrollTo(NAV_IDS[i]); setMenuOpen(false); }}
              className="block w-full text-left px-6 py-4 font-display text-sm tracking-widest border-b-4 border-black transition-colors"
              style={{ background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = NAV_COLORS[i]; e.currentTarget.style.color = NAV_TEXT[i]; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#000"; }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
