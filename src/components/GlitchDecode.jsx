    // GlitchDecode.jsx
    import { useEffect, useRef, useState } from "react";

    const GLYPHS = "+*#!$'?_";
    const LATIN  = "ABCDEFGHI_JK14LMNOPQRS53TUVWX375YZ";
    const WORDS  = [
    "EMOSI","KODE","ERROR","VOID","PANIK","LOGIKA","RESET","NULL",
    "KATARSIS","BATAS","GELAP","STASIS","INPUT","BREAK","LUPA",
    "DIAM","KRISIS","RUANG","SINYAL","HILANG","LOOP","TAKUT","DATA","KOSONG",
    ];
    const LENS = [32, 28, 36, 24, 30];

    function rand(s) { return s[Math.floor(Math.random() * s.length)]; }

    function buildRow(len) {
    const out = [];
    let i = 0;
    while (i < len) {
        const r = Math.random();
        if (r < 0.18 && i + 3 < len) {
        const w    = rand(LATIN);
        const frag = w.slice(0, Math.min(w.length, Math.floor(Math.random() * 3) + 2));
        const op   = (Math.random() * 0.45 + 0.35).toFixed(2);
        const col  = Math.random() < 0.4 ? "#FF5733" : "#000";
        out.push(`<span style="color:${col};opacity:${op}">${frag}</span>`);
        i += frag.length;
        } else if (r < 0.38) {
        const op = (Math.random() * 0.4 + 0.2).toFixed(2);
        out.push(`<span style="color:#000;opacity:${op}">${rand(LATIN)}${rand(GLYPHS)}</span>`);
        i++;
        } else if (r < 0.44) {
        out.push(`<span style="opacity:0.1"> </span>`);
        i++;
        } else {
        const op  = (Math.random() * 0.5 + 0.3).toFixed(2);
        const col = Math.random() < 0.35 ? "#FF5733" : "#000";
        out.push(`<span style="color:${col};opacity:${op}">${rand(LATIN)}${rand(WORDS)}</span>`);
        i++;
        }
    }
    return out.join("");
    }

    function GlitchLine({ length, stagger }) {
    const [html, setHtml]       = useState("");
    const [opacity, setOpacity] = useState(1);
    const timerRef              = useRef(null);

    useEffect(() => {
        let started = false;
        const initT = setTimeout(() => {
        started = true;
        function frame() {
            setHtml(buildRow(length));
            setOpacity(Math.random() < 0.03 ? 0 : 1);
            const delay = Math.random() < 0.15 ? 220 : 60 + Math.random() * 50;
            timerRef.current = setTimeout(frame, delay);
        }
        frame();
        }, stagger);

        return () => {
        clearTimeout(initT);
        clearTimeout(timerRef.current);
        };
    }, [length, stagger]);

    return (
        <div
        className="font-display text-sm tracking-wider uppercase min-h-[1.4em] my-1 word-break-all"
        style={{ opacity, wordBreak: "break-all" }}
        dangerouslySetInnerHTML={{ __html: html }}
        />
    );
    }

    export default function GlitchDecode() {
    const containerRef        = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
        ref={containerRef}
        className="hidden lg:block absolute inset-x-8 top-20 bottom-32 p-6 overflow-hidden"
        >
        <div
            className="absolute left-0 top-0 w-full h-0.5 pointer-events-none"
            style={{ background: "rgba(255,87,51,0.5)", animation: "scanAnim 2.8s linear infinite" }}
        />
        <p className="font-mono text-[10px] tracking-[0.22em] opacity-35 mb-4">
            // LOG
        </p>

        {visible && LENS.map((len, i) => (
            <GlitchLine key={i} length={len} stagger={i * 80} />
        ))}

        <style>{`
            @keyframes scanAnim {
            0%   { top: 0;    opacity: 1;   }
            85%  { opacity: 0.3; }
            100% { top: 100%; opacity: 0;   }
            }
        `}</style>
        </div>
    );
    }