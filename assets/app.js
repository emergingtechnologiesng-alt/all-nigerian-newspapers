// All Nigerian Newspapers website: menu, sticky header, carousel, reveal.
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');

  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  function onScroll() {
    if (!header) return;
    var past = window.scrollY > (hero ? hero.offsetHeight - 90 : 10);
    header.classList.toggle('scrolled', past);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var track = document.querySelector('.shots');
  document.querySelectorAll('[data-shots]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (!track) return;
      track.scrollBy({ left: (b.getAttribute('data-shots') === 'next' ? 1 : -1) * 280, behavior: 'smooth' });
    });
  });

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }
})();
