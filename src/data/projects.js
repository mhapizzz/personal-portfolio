export const WHATSAPP_URL = 'https://wa.me/6281253580289'
export const EMAIL = 'mhapiz10@gmail.com'
export const PHONE_DISPLAY = '(+62) 812-5358-0289'
export const LOCATION = 'Lanjas, Muara Teweh, Kalimantan Tengah'
export const CV_URL = `${import.meta.env.BASE_URL}cv/Muhammad-Hapiz-CV.pdf`
export const CV_FILENAME = 'Muhammad-Hapiz-CV.pdf'

export const skills = [
  'Vue.js',
  'React.js',
  'JavaScript',
  'Laravel',
  'Node.js',
  'MySQL',
  'MongoDB',
  'REST API',
  'VPS/Nginx',
]

export const about = {
  name: 'Muhammad Hapiz',
  roles: ['Frontend Developer', 'Full-Stack Developer', 'Backend Developer'],
  profile: [
    'Informatics Engineering graduate with professional experience as a Frontend, Full-Stack, and Backend Developer in industry and freelance settings. Focused on building web apps from the frontend side: responsive interfaces, REST API integration, and a smooth user experience.',
    'Hands-on with JavaScript, Vue.js, and Nuxt.js for web apps, and comfortable across the full stack. Backend experience with PHP/Laravel and Node.js covers API needs, data structure, authentication, and frontend-backend integration.',
    'Used to turning business requirements into structured technical solutions, and collaborating with teams to ship maintainable, scalable web applications.',
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['JavaScript', 'Vue.js', 'React.js', 'REST API Integration'],
    },
    {
      title: 'Backend',
      items: ['PHP / Laravel', 'Node.js', 'REST API Development', 'Service & Repository Architecture'],
    },
    {
      title: 'Database & Infrastructure',
      items: ['MySQL', 'MongoDB', 'Linux VPS', 'Nginx'],
    },
  ],
  education: {
    degree: 'S1 Teknik Informatika',
    school: 'Universitas Islam Kalimantan MAB',
    period: '2018 - 2022',
  },
  stack: {
    Frontend: 'JavaScript · Vue.js · React.js',
    Backend: 'PHP · Laravel · Node.js · REST API',
    Database: 'MySQL · MongoDB',
    DevOps: 'Linux · Ubuntu · Nginx · PHP-FPM · VPS · Deployment',
  },
}

export const projects = [
  {
    slug: 'warung-pay',
    title: 'WarungPay',
    category: 'POS & Shop Ops',
    year: 2025,
    role: 'Full-Stack Developer',
    blurb: 'POS, stock, and back-office for small shops — QRIS cashier, product sales, and an in-store display screen.',
    description:
      'WarungPay is a Laravel 11 + Vue 3 system for running a small shop: point of sale, inventory, purchases, expenses, payroll, and dashboards. Staff use Kasir QRIS and POS Produk; a Display role drives the in-store menu + live QRIS screen. Built for owners and cashiers who need one app instead of scattered spreadsheets and separate tools.',
    cover: '/images/projects/warung-pay/thumb.jpg',
    stills: [
      '/images/projects/warung-pay/1.png',
      '/images/projects/warung-pay/2.png',
      '/images/projects/warung-pay/3.png',
      '/images/projects/warung-pay/4.png',
      '/images/projects/warung-pay/5.png',
      '/images/projects/warung-pay/6.png',
      '/images/projects/warung-pay/7.png',
    ],
    demoUrl: 'https://statera.peacelabs.my.id',
  },
  {
    slug: 'sakubooth',
    title: 'SakuBooth',
    category: 'Event Photobooth PWA',
    year: 2025,
    role: 'Full-Stack Developer',
    blurb: 'Event guest photobooth — guests shoot on their phone, optional frames, shared gallery for the event.',
    description:
      'SakuBooth (EventMoment) is a guest photobooth PWA for events. Guests scan a QR, capture photos on their phone (including a disposable-camera mode), apply optional frames, and submit to a shared event gallery. Organizers manage events, frames, and photos from an admin dashboard. Built for client demos and live event use.',
    cover: '/images/projects/sakubooth/thumb.jpg',
    stills: [
      '/images/projects/sakubooth/1.png',
      '/images/projects/sakubooth/2.png',
      '/images/projects/sakubooth/3.png',
      '/images/projects/sakubooth/4.png',
      '/images/projects/sakubooth/5.png',
      '/images/projects/sakubooth/6.png',
      '/images/projects/sakubooth/7.png',
      '/images/projects/sakubooth/8.png',
    ],
    demoUrl: null,
  },
  {
    slug: 'edu-web',
    title: 'Sistem Informasi Edukasi',
    category: 'Education Website',
    year: 2022,
    role: 'Web Developer',
    blurb: 'School information site for parents — announcements, yearly agenda, and school updates in one place.',
    description:
      'Built in 2022 as a web developer for a school information system. The site helps the school share announcements and the annual agenda with parents, so families get updates without relying only on offline notices. Public pages cover welcome messages, activities, agenda listings, and contact — with a simple staff login for managing content.',
    cover: '/images/projects/edu-web/thumb.jpg',
    stills: [
      '/images/projects/edu-web/1.jpg',
      '/images/projects/edu-web/2.png',
      '/images/projects/edu-web/3.png',
    ],
    demoUrl: null,
  },
  {
    slug: 'inven',
    title: 'Inventaris Barang & Aset',
    category: 'Inventory Web App',
    year: 2021,
    role: 'Web Developer',
    blurb: 'Asset & inventory system for school staff — less lost data, clearer monthly reports.',
    description:
      'Built in 2021 as Inventaris SMEKMA: a web app so staff can record inventory items and assets without fragile spreadsheets. It reduces the risk of lost or damaged records and makes monthly reporting easier — rooms, borrowers, and KIB item data in one admin dashboard with login for staff.',
    cover: '/images/projects/inven/thumb.jpg',
    stills: [
      '/images/projects/inven/1.png',
      '/images/projects/inven/2.png',
      '/images/projects/inven/3.png',
    ],
    demoUrl: null,
  },
  {
    slug: 'lsp',
    title: 'Pendaftaran Peserta LSP',
    category: 'Certification Platform',
    year: 2021,
    role: 'Web Developer',
    blurb: 'Online LSP registration — students enroll remotely; staff manage participant data without paper queues.',
    description:
      'Built in 2021 to replace manual LSP (Lembaga Sertifikasi Profesi) registration. Students who cannot visit the registration desk can enroll online, pick a competency major, and submit certification forms. Staff get a cleaner participant database and admin views instead of collecting paper forms by hand.',
    cover: '/images/projects/lsp/thumb.jpg',
    stills: [
      '/images/projects/lsp/1.png',
      '/images/projects/lsp/2.png',
      '/images/projects/lsp/3.png',
      '/images/projects/lsp/4.png',
      '/images/projects/lsp/5.png',
    ],
    demoUrl: null,
  },
  {
    slug: 'simpur',
    title: 'Simpur — Penilaian Skripsi',
    category: 'Academic Grading System',
    year: 2021,
    role: 'Web Developer',
    blurb: 'Thesis grading for Forestry (ULM) — replace paper scores with weighted forms on laptop or phone.',
    description:
      'Simpur (Sistem Informasi Penilaian Skripsi) was built in 2021 for the Forestry study program at Universitas Lambung Mangkurat. It replaces manual paper-based thesis evaluation: lecturers grade proposal seminars and thesis exams on laptop or phone, and the system calculates weighted totals and averages automatically.',
    cover: '/images/projects/simpur/thumb.jpg',
    stills: [
      '/images/projects/simpur/1.jpg',
      '/images/projects/simpur/2.jpg',
      '/images/projects/simpur/3.png',
    ],
    demoUrl: null,
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}
