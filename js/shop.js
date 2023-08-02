document.addEventListener('DOMContentLoaded', function() {
    // Задержка перед отображением содержимого страницы
    setTimeout(function() {
      document.querySelector('#page-content').classList.add('fade-in');
    }, 500);
  });