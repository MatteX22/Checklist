const ANIM_MS = 260;

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
        setTimeout(() => checkAndHideSection(parent), ANIM_MS + 20);
      }
    }
    return;
  }

    // checkbox in sezione normale
    const sec = t.closest("[data-section]");
    if (sec) checkAndHideSection(sec);
  });
}

init();
