const btnBravo = document.getElementById("btnBravo");
const btnOrdinaria = document.getElementById("btnOrdinaria");

// CAMBIA QUI il nome del file della tua checklist Bravo
const BRAVO_PAGE = "utils/bravo/bravo.html";

btnBravo.addEventListener("click", () => {
  window.location.href = BRAVO_PAGE;
});

btnOrdinaria.addEventListener("click", () => {
  // per ora placeholder
  alert("Schermata Oscar non ancora collegata");
});

