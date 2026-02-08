const form = document.getElementById("shiftForm");
const statusEl = document.getElementById("status");
const btnHome = document.getElementById("btnHome");
const btnSave = document.getElementById("btnSave");

const fields = [
  { id: "data", label: "Data" },
  { id: "turno", label: "Turno" },
  { id: "mezzo", label: "Mezzo" },
  { id: "autista", label: "Autista" },
  { id: "caposquadra", label: "Caposquadra" },
  { id: "soc2", label: "2° Soccorritore" },
  { id: "soc3", label: "3° Soccorritore" },
];

function setStatus(msg) {
  statusEl.textContent = msg || "";
}

function setError(id, msg) {
  const input = document.getElementById(id);
  const field = input.closest(".field");
  const err = document.querySelector(`[data-err-for="${id}"]`);

  if (msg) {
    field.classList.add("invalid");
    if (err) err.textContent = msg;
  } else {
    field.classList.remove("invalid");
    if (err) err.textContent = "";
  }
}

function clearErrors() {
  fields.forEach(f => setError(f.id, ""));
}

function validate() {
  clearErrors();
  setStatus("");

  let ok = true;

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    const value = (el.value || "").trim();

    if (!value) {
      setError(f.id, `${f.label}: campo obbligatorio`);
      ok = false;
    }
  });

  if (!ok) setStatus("Compila i campi evidenziati.");
  return ok;
}

btnSave.addEventListener("click", () => {
  const ok = validate();
  if (!ok) return;

  setStatus("Salvato.");
  createPDF();
  window.location.href = "index.html";
});

btnHome.addEventListener("click", () => {
  const sure = confirm("Sei sicuro di uscire?");
  if (!sure) return;

  // Se vuoi davvero andare alla home:
  window.location.href = "index.html";
});

// opzionale: rimuove errore mentre scrivi
fields.forEach(f => {
  const el = document.getElementById(f.id);
  el.addEventListener("input", () => setError(f.id, ""));
  el.addEventListener("change", () => setError(f.id, ""));
});

function createPDF() {
  const checkedIds = JSON.parse(localStorage.getItem("checkedBravo") || "[]");

  const campi = {
    data: document.getElementById("data").value,
    turno: document.getElementById("turno").value,
    mezzo: document.getElementById("mezzo").value,
    autista: document.getElementById("autista").value,
    soc2: document.getElementById("soc2").value,
    soc3: document.getElementById("soc3").value,
    caposquadra: document.getElementById("caposquadra").value
  };

  salvaPdfBravo({ campi, checkedIds });
}