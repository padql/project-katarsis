// ─── Navigation ────────────────────────────────────────────────────────────
export const NAV_LINKS = ["KODE", "MANIFESTO", "KOMPILASI", "LOG"];

// ─── Projects ──────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "01",
    title: "KEEPLY: STRUKTUR PENGHEMATAN",
    category: "PROGRESSIVE WEB APP",
    year: "2026",
    location: "JAKARTA TIMUR",
    desc: "Anatomi pencatatan keuangan mahasiswa. Eksplorasi bagaimana arsitektur digital digunakan untuk mendisiplinkan hasrat konsumtif, sekaligus merakit ulang kecemasan menjadi angka-angka yang bisa dikendalikan ketika dunia luar terasa kacau.",
    tags: ["REACT", "VITE", "PWA"],
    bg: "#FFE135",
    text: "#000",
    screenshot: "keeply",
  },
  {
    id: "02",
    title: "TOKOQUDA: DISTRIBUSI INSTAN",
    category: "DIGITAL E-COMMERCE",
    year: "2025/2026",
    location: "INDRAMAYU - JAKTIM",
    desc: "Platform transaksi semi-otomatis untuk langganan premium (Netflix/Canva). Integrasi formulir dinamis dan automasi database untuk memutus interaksi antar-manusia yang melelahkan — sistem pertukaran yang dingin dan presisi.",
    tags: ["SUPABASE", "DATABASE", "JSONB"],
    bg: "#FF5733",
    text: "#fff",
    screenshot: "tokoquda-distribusi",
  },
  {
    id: "03",
    title: "TOKOQUDA: CONTROL PANEL",
    category: "ADMIN DASHBOARD",
    year: "2025",
    location: "INDRAMAYU",
    desc: "Antarmuka manajemen internal untuk memantau arus masuk data transaksi. Dibangun jauh dari kebisingan kota — di mana kesunyian memaksa fokus absolut. Visualisasi metrik realtime sebagai ruang kendali ketika semua variabel harus bisa diprediksi.",
    tags: ["REACT", "DASHBOARD", "ANALYTICS"],
    bg: "#3B82F6",
    text: "#fff",
    screenshot: "tokoquda-cpanel",
  },
  {
    id: "04",
    title: "CAUSEFAST: MANAGEMENT SYSTEM",
    category: "MOBILE APP (EXPO)",
    year: "2026",
    location: "JAKARTA TIMUR",
    desc: "Sistem pencatatan data acara dan manajemen HTM berbasis mobile. Eksplorasi tentang bagaimana sebuah aplikasi digunakan untuk menyusun kepastian jadwal dan mengukur variabel luar ruangan secara presisi, mengubah kekacauan koordinasi menjadi baris data yang patuh.",
    tags: ["EXPO", "REACT NATIVE", "MOBILE"],
    bg: "#3B82F6",
    text: "#000",
    screenshot: "causefast",
  },
];

// ─── Process / Method ───────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    num: "01",
    title: "OVERHEATING",
    desc: "Akumulasi instruksi, logika matkul yang padat, dan kecemasan masa depan yang menumpuk di memori. Sistem masuk ke fase redline.",
    bg: "#FFE135",
    text: "#000",
  },
  {
    num: "02",
    title: "SHUTDOWN",
    desc: "Mati rasa emosional secara otomatis. Sistem sengaja memutuskan sakelar perasaan — marah, senang, sedih — agar logika internal bisa bertahan hidup tanpa interupsi.",
    bg: "#FF5733",
    text: "#fff",
  },
  {
    num: "03",
    title: "PARSING",
    desc: "Duduk berjam-jam di depan terminal. Membedah pecahan emosi dan mengubahnya menjadi variabel kode, fungsi kondisional, atau arsitektur database.",
    bg: "#3B82F6",
    text: "#fff",
  },
  {
    num: "04",
    title: "COMPILING",
    desc: "Menulis baris skrip secara beralasan. Membangun benteng pertahanan baru berupa aplikasi web nyata yang berfungsi secara independen.",
    bg: "#22C55E",
    text: "#000",
  },
  {
    num: "05",
    title: "KATARSIS",
    desc: "Momen pelepasan. Ketika kode berhasil di-deploy ke produksi, berjalan sendiri di server, dan rilis dari beban pikiran penciptanya. Log selesai.",
    bg: "#FF2E9A",
    text: "#fff",
  },
];

// ─── Stack / "Exhibitions" equivalent ───────────────────────────────────────
export const STACK_LOG = [
  { year: "2024", name: "JAVASCRIPT",          role: "Bahasa Utama",          city: "Production",   color: "#22C55E" },
  { year: "2024", name: "TAILWIND CSS",        role: "Styling System",        city: "Aktif",        color: "#3B82F6" },
  { year: "2024", name: "REACT + VITE",        role: "Frontend Utama",        city: "Aktif",        color: "#FFE135" },
  { year: "2024", name: "POSTGRESQL",          role: "Relational Database",   city: "Production",   color: "#FF2E9A" },
  { year: "2025", name: "SUPABASE",            role: "Backend & Database",    city: "Aktif",        color: "#FF5733" },
  { year: "2025", name: "VERCEL",              role: "Deployment Platform",   city: "Deploy",       color: "#F97316" },
  { year: "2026", name: "EXPO + REACT NATIVE", role: "Mobile Development",    city: "Aktif",        color: "#3B82F6" },
];

// ─── Solo developer ──────────────────────────────────────────────────────────
export const SOLO_DEV = {
  name:     "D'NAKA",
  role:     "FULL-STACK DEVELOPER",
  initials: "DN",
  bg:       "#FFE135",
  tc:       "#000",
  bio:      "Satu orang gila. Satu mesin tangguh. Semua proyek dikerjakan — dari konsep sampai piksel terakhir di layar.",
};

// ─── Hero stats ──────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { num: "4",    label: "PROYEK AKTIF", bg: "#FF5733", tc: "#fff" },
  { num: "95%",  label: "INDEX LOGIKA", bg: "#3B82F6", tc: "#fff" },
  { num: "0",    label: "EMOSI LOG",    bg: "#FF2E9A", tc: "#fff" },
];
