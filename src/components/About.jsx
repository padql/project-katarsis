import { STACK_LOG, SOLO_DEV } from "../data";

export default function About() {
  return (
    <section id="manifesto" className="border-b-4 border-black">

      {/* Section header */}
      <div
        className="border-b-4 border-black px-6 md:px-10 py-6"
        style={{ background: "#22C55E" }}
      >
        <span className="font-mono text-xs tracking-widest text-black opacity-60">
          002 / MANIFESTO
        </span>
        <h2 className="font-display text-4xl md:text-6xl uppercase mt-1 text-black">
          SIAPA SAYA?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Manifesto text */}
        <div
          className="lg:col-span-7 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 md:p-10 lg:p-14"
          style={{ background: "#FFF9E6" }}
        >
          <p className="font-display text-xl md:text-6xl leading-relaxed mb-5 text-black">
            Project Katarsis bukan studio. Ini adalah
            <span className="px-1" style={{ marginLeft: "0.3rem", background: "#FF2E9A", color: "#fff" }}>
              mekanisme koping.
            </span>
          </p>

          <p className="font-mono text-sm leading-relaxed mb-4 text-gray-600">
            Ketika emosi manusia terlalu membingungkan dan tidak bisa diprediksi, pikiran ini lari ke
            sistem biner yang jujur — di mana input yang benar akan selalu menghasilkan output
            yang benar.
          </p>

          <p className="font-mono text-sm leading-relaxed mb-4 text-gray-600">
            Mengubah baris kode pemrograman menjadi media katarsis emosional. Koding bukan
            sekadar industri, tapi cara penjinakan bising di kepala: kontrol logika, dan peredam
            kecemasan melalui sistem biner yang jujur.
          </p>

          <p className="font-mono text-sm leading-relaxed mb-8 text-gray-600">
            Setiap deploy adalah momen pelepasan. Setiap bug yang diperbaiki adalah konflik
            internal yang diselesaikan. Tidak apa-apa untuk sedang tidak baik-baik saja.
          </p>

          {/* Quote box */}
          <div
            className="border-4 border-black p-5 shadow-neo-lg"
            style={{ background: "#FF5733" }}
          >
            <p className="font-display text-white text-md tracking-wide leading-relaxed">
              "MEMBANGUN DUNIA SENDIRI DI ANTARA BARIS KODE ADALAH CARA TERBAIK UNTUK MENDAPATKAN KETENANGAN."
            </p>
            <p className="font-mono text-xs mt-2 text-white opacity-70">
              — MANIFESTO KATARSIS, 2026
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 flex flex-col">

          {/* Solo dev card */}
          <div
            className="border-b-4 border-black p-6 md:p-8"
            style={{ background: "#3B82F6" }}
          >
            <p className="font-display text-xs tracking-widest mb-5 text-white opacity-70">
              DEVELOPER
            </p>
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 border-4 border-black flex items-center justify-center font-display text-xl flex-shrink-0 shadow-neo"
                style={{ background: SOLO_DEV.bg, color: SOLO_DEV.tc }}
              >
                {SOLO_DEV.initials}
              </div>
              <div>
                <p className="font-display text-2xl text-white leading-tight">{SOLO_DEV.name}</p>
                <p className="font-mono text-xs text-white opacity-60 tracking-widest mb-3">
                  {SOLO_DEV.role}
                </p>
                <p className="font-mono text-xs text-white opacity-80 leading-relaxed">
                  {SOLO_DEV.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Stack log */}
          <div className="flex-1 p-6 md:p-8" style={{ background: "#F0F7FF" }}>
            <p className="font-display text-xs tracking-widest mb-4 text-black opacity-50">
              STACK LOG
            </p>
            <div className="space-y-3">
              {STACK_LOG.map((item) => (
                <div
                  key={item.name}
                  className="border-b-2 border-black border-opacity-10 pb-3 last:border-0"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <span
                        className="w-2 h-2 mt-1.5 flex-shrink-0 border-2 border-black"
                        style={{ background: item.color }}
                      />
                      <div>
                        <p className="font-display text-xs text-black">{item.name}</p>
                        <p className="font-mono text-xs text-gray-500">
                          {item.role} · {item.city}
                        </p>
                      </div>
                    </div>
                    <span className="font-display text-xs text-gray-400 flex-shrink-0">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
