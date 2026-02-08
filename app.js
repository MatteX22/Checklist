const ANIM_MS = 260;
const DONE_PAGE = "salvataggio.html";   // cambia qui la pagina finale
const DONE_DELAY_MS = 900;

let doneFired = false;

function allDone() {
  return document.querySelectorAll('[data-section]:not(.is-hidden)').length === 0;
}

function showDoneAndGo() {
  if (doneFired) return;
  doneFired = true;

  const overlay = document.getElementById("doneOverlay");
  if (overlay) overlay.classList.remove("is-hidden");

  setTimeout(() => {
    window.location.href = DONE_PAGE;
  }, DONE_DELAY_MS);
}

function hideBlock(el) {
  if (el.classList.contains("is-hidden")) return;

  const h = el.scrollHeight;
  el.style.maxHeight = h + "px";
  el.offsetHeight; // reflow

  el.classList.add("is-hiding");
  el.style.maxHeight = "0px";

  setTimeout(() => {
    el.classList.remove("is-hiding");
    el.classList.add("is-hidden");
    el.style.maxHeight = "";
  }, 260);
}

function allCheckboxChecked(container) {
  const boxes = Array.from(container.querySelectorAll(':scope input[type="checkbox"]'));
  if (boxes.length === 0) return false;
  return boxes.every(cb => cb.checked);
}

function checkAndHideSubsection(sub) {
  if (!sub) return false;
  if (!allCheckboxChecked(sub)) return false;
  hideBlock(sub);
  return true;
}

function checkAndHideSection(section) {
  const isParent = section.hasAttribute("data-parent");

  // caso A: sezione "padre" (tipo Zaino) -> chiudi quando non restano sottosezioni visibili
  if (isParent) {
    const visibleSubs = section.querySelectorAll("[data-subsection]:not(.is-hidden)");
    if (visibleSubs.length === 0) {
      hideBlock(section);
      return true;
    }
    return false;
  }

  // caso B: sezione normale -> chiudi solo quando tutti i checkbox della sezione sono checked
  if (allCheckboxChecked(section)) {
    hideBlock(section);
    return true;
  }
  return false;
}

function init() {
  // controllo iniziale sottosezioni
  document.querySelectorAll("[data-subsection]").forEach(sub => {
    if (allCheckboxChecked(sub)) hideBlock(sub);
  });

  // controllo iniziale sezioni
  document.querySelectorAll("[data-section]").forEach(sec => {
    checkAndHideSection(sec);
  });

  document.addEventListener("change", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement)) return;
    if (t.type !== "checkbox") return;

    // se checkbox è in una sottosezione
    const sub = t.closest("[data-subsection]");
    if (sub) {
    const hidden = checkAndHideSubsection(sub);
    if (hidden) {
      const parent = sub.closest("[data-parent]");
      if (parent) {
        // aspetta che la sottosezione diventi davvero .is-hidden
        setTimeout(() => {
          checkAndHideSection(parent);
          if (allDone()) showDoneAndGo();
        }, ANIM_MS + 20);
      }
    }
    return;
  }

    // checkbox in sezione normale
    const sec = t.closest("[data-section]");
    if (sec) {
      const hidden = checkAndHideSection(sec);
      if (hidden) {
        setTimeout(() => {
          if (allDone()) showDoneAndGo();
        }, ANIM_MS + 20);
      }
    }

  });
}

init();

document.addEventListener("change", (e) => {
  const t = e.target;

  // se è il checkbox dell'header
  if (!t.classList.contains("cball")) return;

  const section = t.closest(".section");
  if (!section) return;

  const ok = confirm("Vuoi segnare tutta la sezione come completata?");
  if (!ok) {
    t.checked = false;
    return;
  }

  const boxes = section.querySelectorAll(
    'input[type="checkbox"]:not(.cball)'
  );

  boxes.forEach(cb => {
    cb.checked = t.checked;
    cb.dispatchEvent(new Event("change", { bubbles: true }));
  });
});


btnHome.addEventListener("click", () => {
  const sure = confirm("Sei sicuro di uscire?");
  if (!sure) return;

  console.log("home");

  // Se vuoi davvero andare alla home:
  window.location.href = "index.html";
});