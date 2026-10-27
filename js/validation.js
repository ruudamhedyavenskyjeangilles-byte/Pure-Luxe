// Validation des formulaires avec Bootstrap (script de la leçon 6 du cours)
(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      // Si un champ est invalide, on bloque l'envoi
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      // Bootstrap affiche alors les messages d'erreur ou de réussite
      form.classList.add('was-validated');
    });
  });
})();