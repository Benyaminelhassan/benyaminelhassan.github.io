document.addEventListener("DOMContentLoaded", function () {
  const btnAccueil = document.getElementById("btn-accueil");
  const btnProduits = document.getElementById("btn-produits");
  const btnContact = document.getElementById("btn-contact");

  if (btnAccueil) btnAccueil.addEventListener("click", () => goToPage("index.html"));
  if (btnProduits) btnProduits.addEventListener("click", () => goToPage("produits.html"));
  if (btnContact) btnContact.addEventListener("click", () => goToPage("contact.html"));
});