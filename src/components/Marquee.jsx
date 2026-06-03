export default function Marquee({ bg = "#FFE135" }) {
  const items = [
    "PROJECT KATARSIS",
    "✦",
    "SOFTWARE ARTISAN",
    "✦",
    "FULL-STACK DEVELOPER",
    "✦",
    "JAKARTA — JAVASCRIPT — REACT",
    "✦",
    "EST. 2026",
    "✦",
  ];

  return (
    <div
      className="overflow-hidden border-y-4 border-black py-3"
      style={{ background: bg }}
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-sm tracking-widest text-black uppercase"
          >
            {items.map((item, j) => (
              <span key={j}>{item}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
