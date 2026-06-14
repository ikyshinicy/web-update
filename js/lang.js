/* ============================================================
   RANZAI — SHARED LANGUAGE TOGGLE
   Pairs with global.css (.lang-id .en / .lang-en .id rules)
   and markup like:
     <span class="id">Teks Indonesia</span>
     <span class="en">English text</span>

   Usage on any page:
   1. Include this file: <script src="/js/lang.js"></script>
   2. Add a toggle:
        <div class="lang-toggle">
          <button onclick="setLang('id')">ID</button>
          <button onclick="setLang('en')">EN</button>
        </div>
   Language preference is shared across all pages via localStorage.
   ============================================================ */

(function () {
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.body.classList.remove('lang-id', 'lang-en');
    document.body.classList.add('lang-' + lang);

    document.querySelectorAll('.lang-toggle button').forEach(function (btn, i) {
      var isActive = (i === 0 && lang === 'id') || (i === 1 && lang === 'en');
      btn.classList.toggle('active', isActive);
    });

    try { localStorage.setItem('ranzai_lang', lang); } catch (e) {}
  }

  window.setLang = applyLang;

  document.addEventListener('DOMContentLoaded', function () {
    var saved = 'id';
    try { saved = localStorage.getItem('ranzai_lang') || 'id'; } catch (e) {}
    applyLang(saved);
  });
})();
