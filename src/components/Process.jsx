import { PROCESS_STEPS } from "../data";

export default function Process() {
  return (
    <section id="kompilasi" className="border-b-4 border-black">

      {/* Section header */}
      <div
        className="border-b-4 border-black px-6 md:px-10 py-6"
        style={{ background: "#FF2E9A" }}
      >
        <span className="font-mono text-xs tracking-widest text-white opacity-70">
          003 / KOMPILASI
        </span>
        <h2 className="font-display text-4xl md:text-6xl uppercase mt-1 text-white">
          METODE KERJA
        </h2>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.num}
            className="p-6 md:p-8 border-b-4 md:border-b-0 md:border-r-4 border-black last:border-0"
            style={{ background: step.bg }}
          >
            <div className="mb-4">
              <span
                className="inline-block border-4 border-black px-2 py-1 font-display text-xs shadow-neo-sm"
                style={{ background: "#000", color: step.bg }}
              >
                {step.num}
              </span>
            </div>
            <h3
              className="font-display text-xl md:text-2xl mb-3 uppercase"
              style={{ color: step.text }}
            >
              {step.title}
            </h3>
            <p
              className="font-mono text-xs leading-relaxed"
              style={{ color: step.text, opacity: 0.85 }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-black">
        <div
          className="border-b-4 md:border-b-0 md:border-r-4 border-black p-6 md:p-10"
          style={{ background: "#F97316" }}
        >
          <p className="font-display text-xs tracking-widest mb-2 text-white opacity-70">
            RATA-RATA WAKTU BUILD
          </p>
          <p className="font-display text-5xl text-white">2–8 MINGGU</p>
          <p className="font-mono text-xs mt-2 text-white opacity-60">
            per proyek, tergantung kompleksitas database
          </p>
        </div>

        <div className="p-6 md:p-10" style={{ background: "#000" }}>
          <p
            className="font-display text-xs tracking-widest mb-3"
            style={{ color: "#FFE135" }}
          >
            PRINSIP UTAMA
          </p>
          <p className="font-display text-xl leading-snug text-white">
            Setiap baris kode adalah bentuk kendali atas hidup yang berantakan, 
            meretas emosi dan merakit ulang menjadi baris kode yang dingin.
          </p>
        </div>
      </div>
    </section>
  );
}
