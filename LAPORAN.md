# Laporan Pisah CSS RanzAI

## File asal
`global (8).css`

## Keputusan
File asal terlalu gemuk untuk disebut global karena memuat navbar, footer, modal, toast, lang toggle, dan reveal animation. Bagian-bagian itu sudah dipisah ke `css/components/`.

## Load utama
Gunakan:

```html
<link rel="stylesheet" href="/css/main.css">
```

## Global sekarang hanya berisi
- fonts
- tokens
- reset
- base
- layout utilities
- language helper
- section header
- divider
- spinner/loading
- scrollbar
- responsive global

## Bagian yang dipindah
- buttons → `components/buttons.css`
- cards/tool-card → `components/cards.css`
- badges → `components/badges.css`
- forms → `components/forms.css`
- nav/navbar/drawer/nav user/coins → `components/navbar.css`
- footer/footer-new → `components/footer.css`
- modal → `components/modal.css`
- toast → `components/toast.css`
- lang toggle → `components/lang-toggle.css`
- reveal animation → `components/reveal.css`

## Catatan grid
Di file global ini tidak ada pola grid yang jelas. Kalau background grid masih muncul, sumber paling mungkin ada di file halaman seperti `dashboard.css`, `landing.css`, `home.css`, `shared.css`, `App.css`, atau `index.css`.
