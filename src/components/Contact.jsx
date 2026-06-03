import { useState, useEffect, useRef } from "react";

const SOCIALS = [
  { label: "GITHUB", color: "#000", tc: "#fff"  , href: "https://github.com/padql" },
  { label: "LINKEDIN", color: "#3B82F6", tc: "#fff", href: "https://www.linkedin.com/in/ihfadzh-diinaka-61634b337/" },
  { label: "INSTAGRAM", color: "#FF2E9A", tc: "#fff", href: "https://instagram.com/qudalautt" },
];

const GLYPHS = "□◆※×÷#@%&*^~`";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rand(s) {
  return s[Math.floor(Math.random() * s.length)];
}

function buildGlitch(len) {
  let out = "";
  for (let i = 0; i < len; i++) {
    const r = Math.random();
    const op = (Math.random() * 0.5 + 0.5).toFixed(2);
    if (r < 0.5) out += `<span style="opacity:${op}">${rand(GLYPHS)}</span>`;
    else out += `<span style="opacity:${op}">${rand(LATIN)}</span>`;
  }
  return out;
}

function GlitchSocial({ label, color, tc, href }) {
  const [html, setHtml] = useState(label);
  const [isHovered, setHovered] = useState(false);
  const timerRef = useRef(null);
  const phaseRef = useRef("idle"); // idle → glitch-in → hold → glitch-out → idle

  function clearT() {
    clearTimeout(timerRef.current);
  }

  function runGlitchIn(onDone) {
    const total = label.length * 3;
    let frame = 0;
    function tick() {
      frame++;
      let out = "";
      for (let i = 0; i < label.length; i++) {
        const resolved = frame > i * 3 + 6;
        const mid = frame > i * 3 + 2 && !resolved;
        if (resolved) out += `<span>${label[i]}</span>`;
        else if (mid) out += `<span style="opacity:0.7">${rand(GLYPHS)}</span>`;
        else out += `<span style="opacity:0.4">${rand(LATIN)}</span>`;
      }
      setHtml(out);
      if (frame < total) {
        timerRef.current = setTimeout(tick, 30);
      } else {
        setHtml(label);
        onDone?.();
      }
    }
    tick();
  }

  function runGlitchOut(onDone) {
    const total = label.length * 3;
    let frame = 0;
    function tick() {
      frame++;
      let out = "";
      for (let i = 0; i < label.length; i++) {
        const dissolved = frame > i * 2 + 4;
        const mid = frame > i * 2 && !dissolved;
        if (dissolved)
          out += `<span style="opacity:0.3">${rand(GLYPHS)}</span>`;
        else if (mid) out += `<span style="opacity:0.6">${rand(GLYPHS)}</span>`;
        else out += `<span>${label[i]}</span>`;
      }
      setHtml(out);
      if (frame < total) {
        timerRef.current = setTimeout(tick, 28);
      } else {
        setHtml(label);
        onDone?.();
      }
    }
    tick();
  }

  function startLoop() {
    phaseRef.current = "glitch-in";
    runGlitchIn(() => {
      if (!isHovered && phaseRef.current !== "glitch-in") return;
      phaseRef.current = "hold";
      timerRef.current = setTimeout(() => {
        if (phaseRef.current !== "hold") return;
        phaseRef.current = "glitch-out";
        runGlitchOut(() => {
          if (phaseRef.current !== "glitch-out") return;
          timerRef.current = setTimeout(() => {
            if (phaseRef.current === "glitch-out") startLoop();
          }, 300);
        });
      }, 500);
    });
  }

  const handleEnter = () => {
    setHovered(true);
    clearT();
    phaseRef.current = "idle";
    startLoop();
  };

  const handleLeave = () => {
    setHovered(false);
    clearT();
    phaseRef.current = "idle";
    setHtml(label);
  };

  useEffect(() => () => clearT(), []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="border-4 border-black w-28 text-center px-4 py-2 font-display text-xs tracking-widest shadow-neo transition-all hover:shadow-none select-none"
      style={{
        background: color,
        color: tc,
        textDecoration: "none",
        display: "inline-block",
        transform: isHovered ? "translate(2px, 2px)" : "translate(0, 0)",
        boxShadow: isHovered ? "none" : undefined,
        transition: "transform 0.1s, box-shadow 0.1s",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "projectkatarsisweb@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="log">
      {/* Section header */}
      <div
        className="border-b-4 border-black px-6 md:px-10 py-6"
        style={{ background: "#FFE135" }}
      >
        <span className="font-mono text-xs tracking-widest text-black opacity-60">
          004 / LOG
        </span>
        <h2 className="font-display text-4xl md:text-6xl uppercase mt-1 text-black">
          BUKA LOG
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black">
        {/* Left — contact info */}
        <div
          className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 md:p-10 lg:p-16 flex flex-col justify-between"
          style={{ background: "#F0F7FF" }}
        >
          <div>
            <p className="font-mono text-base leading-relaxed mb-6 max-w-sm text-gray-600">
              Terbuka untuk kolaborasi web, automasi sistem, atau sekadar
              bertukar logika
            </p>

            <div className="mb-8">
              <p className="font-mono text-sm mb-2 text-gray-400">
                Tidak menerima:
              </p>
              <ul className="font-mono text-sm space-y-1 text-gray-400">
                <li>— Pengerjaan tanpa skema database yang jelas</li>
                <li>— Tenggat yang melanggar hukum ruang dan waktu.</li>
                <li>
                  — Anggaran sekadar "uang kopi" untuk ratusan baris logika.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest mb-3 text-gray-400">
              EMAIL UTAMA
            </p>
            <button
              onClick={handleCopy}
              className="btn-neo flex items-center gap-3 px-5 py-3 font-display text-sm tracking-wide w-full md:w-auto"
              style={{ background: "#3B82F6", color: "#fff" }}
            >
              <span>{email}</span>
              <span className="text-xs opacity-70">
                {copied ? "✓ TERSALIN" : "SALIN"}
              </span>
            </button>
          </div>
        </div>

        {/* Right — location + socials */}
        <div
          className="p-6 md:p-10 lg:p-16 flex flex-col justify-between"
          style={{ background: "#22C55E" }}
        >
          <div>
            <p className="font-display text-xs tracking-widest mb-3 text-black opacity-60">
              LOKASI
            </p>
            <p className="font-display text-2xl md:text-3xl mb-1 text-black">
              JAKARTA TIMUR
            </p>
            <p className="font-mono text-sm text-black opacity-60">
              Remote-first — pertemuan? Entahlah
            </p>
          </div>

          {/* Social links */}
          <div className="mt-8">
            <p className="font-display text-xs tracking-widest mb-4 text-black opacity-60">
              PLATFORM
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map(({ label, color, tc, href }) => (
                <GlitchSocial
                  key={label}
                  label={label}
                  color={color}
                  tc={tc}
                  href={href}
                />
              ))}
            </div>
          </div>

          {/* Response time */}
          <div
            className="mt-8 border-4 border-black p-5 shadow-neo-lg"
            style={{ background: "#FFE135" }}
          >
            <p className="font-display text-xs tracking-widest mb-2 text-black opacity-60">
              WAKTU RESPONS
            </p>
            <p className="font-display text-2xl text-black">1–3 HARI KERJA</p>
            <p className="font-mono text-xs mt-1 text-black opacity-60">
              kecuali sedang dalam sesi debugging brutal
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="border-t-4 border-black p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        style={{ background: "#000" }}
      >
        <span className="font-display text-sm text-white">
          © 2026 <span style={{ color: "#FFE135" }}>PROJECT KATARSIS</span>{" "}
        </span>
        <span className="font-mono text-xs tracking-widest text-white opacity-30">
          DIBANGUN DENGAN LOGIKA, KECEMASAN, DAN DEGRADASI RASA
        </span>
      </div>
    </section>
  );
}
