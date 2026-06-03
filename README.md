# PROJECT KATARSIS

> Portfolio Programmer / Creative Coder — Software Artisan · Full-Stack Developer

Portofolio neobrutalism untuk Project Katarsis. Dibangun dengan React + Vite + Tailwind CSS.

🌐**https://projectkatarsis.vercel.app**
---

## Stack

| Layer      | Tech                              |
|------------|-----------------------------------|
| Language   | JavaScript (ES2024)               |
| Frontend   | React 18, Vite 5, Tailwind CSS 3  |
| Hosting    | Github Pages (static)             |

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
│   │   ├── Nav.jsx          
│   │   ├── Marquee.jsx      
│   │   ├── Hero.jsx         
│   │   ├── Projects.jsx     
│   │   ├── About.jsx        
│   │   ├── Process.jsx      
│   │   └── Contact.jsx      
│   ├── data/
│   │   └── index.js         
│   ├── hooks/
│   │   └── useActiveSection.js  
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            
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

---

## Navigasi

| Menu        | Section ID   |
|-------------|--------------|
| KODE        | `#kode`      |
| MANIFESTO   | `#manifesto` |
| KOMPILASI   | `#kompilasi` |
| LOG         | `#log`       |

---

*"MEMBANGUN DUNIA SENDIRI DI ANTARA BARIS KODE ADALAH CARA TERBAIK UNTUK MENDAPATKAN KETENANGAN."*
