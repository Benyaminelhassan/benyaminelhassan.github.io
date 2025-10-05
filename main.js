const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark'? 'light': 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark'? '☀️ Mode clair': '🌙 Mode sombre';
});

// Appliquer le thème sauvegardé au chargement
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggleBtn.textContent = savedTheme === 'dark'? '☀️ Mode clair': '🌙 Mode sombre';
});