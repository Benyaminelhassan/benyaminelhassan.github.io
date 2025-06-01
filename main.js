 form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const pseudo = document.getElementById('pseudo');
  const email = document.getElementById('email');

  if (pseudo.value === '' || email.value === '') {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    alert('Adresse e-mail invalide');
    return;
  }