import { useState, useEffect } from "react";
import Marquee from "./Marquee";
import { HERO_STATS } from "../data";

const TYPING_TEXT = "LOGIKA YANG MENGEKANG";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(TYPING_TEXT.slice(0, i + 1));
      i++;
      if (i >= TYPING_TEXT.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col" style={{ background: "#F0F7FF" }}>
      <Marquee bg="#3B82F6" />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-b-4 border-t-4 border-black">

        {/* Left — main copy */}
        <div
          className="flex flex-col justify-center relative p-6 md:p-10 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black"
          style={{ background: "#F0F7FF" }}
        >
          <div className="mb-4 mt-4 lg:mt-2">
            <span
              className="inline-block border-4 border-black px-3 py-1 font-display text-xs tracking-widest"
              style={{ background: "#FF5733", color: "#fff" }}
            >
              SOFTWARE ARTISAN / FULL-STACK DEVELOPER
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-none tracking-tighter mb-2 uppercase text-black">
            {displayed}
            <span className="cursor-blink" style={{ color: "#FF5733" }}>_</span>
          </h1>

          <p className="font-mono text-sm md:text-base leading-relaxed border-l-4 border-black pl-4 max-w-md mt-4 mb-8 text-gray-600">
            Rekayasa perangkat lunak yang mengeksplorasi pembatasan emosi, konversi kecemasan,
            dan pencarian ketenangan absolut melalui penulisan kode fungsional.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("kode")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neo px-6 py-3 font-display"
              style={{ background: "#3B82F6", color: "#fff" }}
            >
              LIHAT KODE →
            </button>
            <button
              onClick={() => document.getElementById("log")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neo px-6 py-3 font-display"
              style={{ background: "#FFE135", color: "#000" }}
            >
              BUKA LOG
            </button>
          </div>

        </div>

        {/* Right — floating cards */}
        <div
          className="flex flex-col relative overflow-hidden min-h-64 lg:min-h-0 scanlines"
          style={{ background: "#FFE135" }}
        >
          <div
            className="absolute inset-0 opacity-10 grid-walk"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 40px,black 40px,black 44px)," +
                "repeating-linear-gradient(90deg,transparent,transparent 40px,black 40px,black 44px)",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
            <div className="flex justify-between">
              <span className="font-mono text-xs tracking-widest opacity-60">BRAIN OUTPUT</span>
              <span className="font-mono text-xs tracking-widest opacity-60">JS · REACT · VITE</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="border-4 border-black p-3 shadow-neo flex-1" style={{ background: stat.bg }}>
                    <div className="font-display text-3xl leading-none" style={{ color: stat.tc }}>{stat.num}</div>
                    <div className="font-display text-xs tracking-widest mt-1" style={{ color: stat.tc, opacity: 0.85 }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-4 border-black p-4 shadow-neo" style={{ background: "#000", color: "#FFE135" }}>
                <p className="font-display text-xs tracking-widest opacity-60 mb-1">TECH STACK</p>
                <p className="font-display text-sm">JAVASCRIPT · REACT · VITE · TAILWIND · SUPABASE · POSTGRESQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee bg="#FF5733" />
    </section>
  );
}
