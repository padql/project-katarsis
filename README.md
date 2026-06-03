# PROJECT KATARSIS

> Portfolio Programmer / Creative Coder — Software Artisan · Full-Stack Developer

Portofolio neobrutalism untuk Project Katarsis. Dibangun dengan React + Vite + Tailwind CSS.

---

## Stack

| Layer      | Tech                              |
|------------|-----------------------------------|
| Language   | JavaScript (ES2024)               |
| Frontend   | React 18, Vite 5, Tailwind CSS 3  |
| Backend    | Supabase, PostgreSQL              |
| Fonts      | Bebas Neue, Space Mono (Google)   |
| Deploy     | Vercel / Netlify (static)         |

---

## Quick Start

```bash
# 1. Masuk ke folder
cd project-katarsis

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev

# 4. Build produksi
npm run build

# 5. Preview build
npm run preview
```

Dev server berjalan di `http://localhost:5173`

---

## Struktur Folder

```
project-katarsis/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx          # Navigasi sticky + mobile hamburger
│   │   ├── Marquee.jsx      # Teks berjalan otomatis
│   │   ├── Hero.jsx         # Section hero dengan typing effect
│   │   ├── Projects.jsx     # Grid 3 proyek utama
│   │   ├── About.jsx        # Manifesto + stack log
│   │   ├── Process.jsx      # 5 tahap debugging mental
│   │   └── Contact.jsx      # Form kontak + footer
│   ├── data/
│   │   └── index.js         # Semua data konten (projects, steps, dll)
│   ├── hooks/
│   │   └── useActiveSection.js  # Hook IntersectionObserver
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind directives + custom animations
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Kustomisasi Konten

Semua teks, proyek, dan data ada di **`src/data/index.js`**. Edit file itu untuk mengganti:
- `PROJECTS` — daftar proyek
- `PROCESS_STEPS` — tahapan metode kerja
- `STACK_LOG` — daftar teknologi
- `HERO_STATS` — angka statistik di hero
- `TEAM` — anggota kolektif

---

## Navigasi

| Menu        | Section ID   |
|-------------|--------------|
| KODE        | `#kode`      |
| MANIFESTO   | `#manifesto` |
| KOMPILASI   | `#kompilasi` |
| LOG         | `#log`       |

---

*"Koding yang tidak menangkap kecemasan adalah program pasaran — kode kami adalah terapi."*
