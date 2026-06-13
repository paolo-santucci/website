// Toggle tema (chiaro/scuro) e lingua (IT/EN), con persistenza in localStorage.
(function () {
  var root = document.documentElement;

  function syncLang(l) {
    var btns = document.querySelectorAll('#langToggle button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === l);
    }
  }
  function setLang(l) {
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    try { localStorage.setItem('ps-lang', l); } catch (e) {}
    syncLang(l);
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('ps-theme', t); } catch (e) {}
  }

  // Allinea lo stato dei pulsanti con quanto già impostato in <head>
  syncLang(root.getAttribute('data-lang') || 'it');

  var langBtns = document.querySelectorAll('#langToggle button');
  for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function () {
      setLang(this.getAttribute('data-lang'));
    });
  }

  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
})();
