RANZAI CSS SPLIT

File asal:
- global (8).css

Tujuan:
- global.css tidak lagi jadi tempat semua kode.
- Komponen besar dipisah supaya gampang dicari saat ada bug.
- Untuk tetap gampang dipakai, load cukup /css/main.css.

Struktur baru:
css/
├── main.css
├── global.css
└── components/
    ├── buttons.css
    ├── cards.css
    ├── badges.css
    ├── forms.css
    ├── navbar.css
    ├── footer.css
    ├── modal.css
    ├── toast.css
    ├── lang-toggle.css
    └── reveal.css

Yang tetap di global.css:
- font
- token warna / radius / shadow
- reset
- base body/html
- layout utility
- language helper .lang-id / .lang-en
- section header umum
- divider
- loading/spinner
- scrollbar
- responsive global

Yang dipisah dari global.css:
- navbar
- footer
- button
- card
- form
- badge
- modal
- toast
- lang toggle
- reveal animation

Cara pakai HTML:
<link rel="stylesheet" href="/css/main.css">

Kalau pakai Vite/React:
import "./styles/main.css";

Catatan penting:
- File ini tidak menemukan kode background grid di global (8).css.
- Kalau grid masih muncul, cari di dashboard.css, landing.css, home.css, shared.css, App.css, atau index.css.
- Cari keyword:
  background-image
  linear-gradient
  radial-gradient
  repeating-linear-gradient
  ::before
  ::after
  position: fixed
  inset: 0
