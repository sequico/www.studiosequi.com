/* ==========================================================================
   Studio Emanuela Sequi — one page
   Interazioni minime: protezione antispam dell'email, menu mobile,
   scrollspy, animazioni reveal e modulo di contatto via mailto.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Protezione antispam dell'email ---------- */
  var emailEls = document.querySelectorAll('.email[data-user][data-domain]');
  emailEls.forEach(function (el) {
    var user = el.getAttribute('data-user');
    var domain = el.getAttribute('data-domain');
    var address = user + '@' + domain;
    var link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.className = 'email-link';
    link.textContent = address;
    el.replaceWith(link);
  });

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Apri il menu di navigazione');
    }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Chiudi il menu di navigazione' : 'Apri il menu di navigazione');
    });
    // Chiude il menu alla selezione di una voce
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    // Chiude il menu con Esc
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Scrollspy: evidenzia la voce attiva ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Animazioni reveal ---------- */
  var revealTargets = document.querySelectorAll('.section-head, .card, .step, .stat, .faq-item, .about-grid > div, .contact-grid > div, .why-inner > *');

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Modulo di contatto: apre l'email ---------- */
  var form = document.getElementById('contact-form');
  var statusEl = document.querySelector('.form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.querySelector('#cf-nome');
      var recapito = form.querySelector('#cf-recapito');
      var tipo = form.querySelector('#cf-tipo');
      var messaggio = form.querySelector('#cf-messaggio');

      var valid = true;
      [nome, recapito, messaggio].forEach(function (field) {
        var bad = !field.value.trim();
        field.setAttribute('aria-invalid', String(bad));
        if (bad) valid = false;
      });

      if (!valid) {
        if (statusEl) {
          statusEl.textContent = 'Compila i campi obbligatori (*) prima di inviare.';
          statusEl.classList.add('error');
        }
        return;
      }

      var lines = [
        'Nome e cognome: ' + nome.value.trim(),
        'Recapito: ' + recapito.value.trim(),
        'Sono: ' + tipo.value,
        '',
        messaggio.value.trim()
      ];

      var subject = 'Richiesta di appuntamento – Studio Emanuela Sequi';
      var body = lines.join('\n');
      var mailto = 'mailto:emanuela@studiosequi.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;

      if (statusEl) {
        statusEl.classList.remove('error');
        statusEl.textContent = 'Si apre il tuo programma di posta: controlla che il messaggio sia stato compilato correttamente.';
      }
    });

    // Azzera lo stato di errore digitando
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true' && field.value.trim()) {
          field.setAttribute('aria-invalid', 'false');
          if (statusEl) { statusEl.textContent = ''; }
        }
      });
    });
  }
})();
