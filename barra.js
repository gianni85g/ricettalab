// Unico script del sito: il filetto sotto la barra appare quando la pagina scorre.
(function () {
  var barra = document.getElementById('barra');
  if (!barra) return;
  var aggiorna = function () { barra.classList.toggle('staccata', window.scrollY > 8); };
  window.addEventListener('scroll', aggiorna, { passive: true });
  aggiorna();
})();
