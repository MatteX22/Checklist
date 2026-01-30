// =======================
// 1) DATI CHECKLIST
// =======================
const checklist = [
  {
    nome: "OSSIGENO",
    tipo: "Contenitore",
    contenuto: [
      { nome: "2 Bombole portatili da 2 litri (1 nuova)", tipo: "Oggetto" },
      { nome: "Ossigeno fisso almeno 2000 litri", tipo: "Oggetto" }
    ]
  },
  {
    nome: "MONITOR",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Batterie", tipo: "Oggetto" },
      { nome: "Stampa prova", tipo: "Oggetto" },
        { 
          nome: "TASCA LATERALE A DESTRA",
          tipo: "Contenitore",
          contenuto: [
            { nome: "Fruste", tipo: "Oggetto" },
            { nome: "Redot", tipo: "Oggetto" },
            { nome: "Piastre", tipo: "Oggetto" },
            { nome: "2 rasoi", tipo: "Oggetto" },
            { nome: "Rotolo carta", tipo: "Oggetto" }
          ]
        },
        { 
          nome: "TASCA LATERALE A SINISTRA",
          tipo: "Contenitore",
          contenuto: [
            { nome: "Pressione", tipo: "Oggetto" },
            { nome: "Saturimetro", tipo: "Oggetto" }
          ]
        }
    ]
  },
  {
    nome: "SACCA TRAUMA",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Collare", tipo: "Oggetto" },
      { nome: "Metallina", tipo: "Oggetto" },
      { nome: "Cunei", tipo: "Oggetto" },
      { nome: "Ragno", tipo: "Oggetto" },
      { nome: "2 stecco bende rigide", tipo: "Oggetto" },
      { nome: "2 stecco bende modellabili", tipo: "Oggetto" }
    ]
  },
  {
    nome: "ZAINO",
    tipo: "Contenitore",
    contenuto: [
      {
        nome: "ESTERNO",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Rilevatore CO2", tipo: "Oggetto" },
          { nome: "Metallina", tipo: "Oggetto" },
          { nome: "Sacchetti panico", tipo: "Oggetto" },
          { nome: "Sacchetti della spazzatura", tipo: "Oggetto" },
        ]
      },
      {
        nome: "TASCA A RETE",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Urm", tipo: "Oggetto" },
          { nome: "Occhialini", tipo: "Oggetto" },
          { nome: "Reservoir", tipo: "Oggetto" }
        ]
      },
      {
        nome: "INTERNO",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Telo sterile", tipo: "Oggetto" },
          { nome: "Vomitino", tipo: "Oggetto" },
          {
            nome: "MEDICAZIONE",
            tipo: "Contenitore",
            contenuto: [
              { nome: "2 ghiacci", tipo: "Oggetto" },
              { nome: "2 fisiologiche da 100", tipo: "Oggetto" },
              { nome: "Coban", tipo: "Oggetto" },
              { nome: "Cerotto", tipo: "Oggetto" },
              { nome: "6 Pacchetti di garze sterili", tipo: "Oggetto" },
              { nome: "Garze non sterili", tipo: "Oggetto" },
              { nome: "2 Difinfettanti", tipo: "Oggetto" }
              //{ nome: "2 Acqua ossigenata", tipo: "Oggetto" },
              //{ nome: "2 Betadine", tipo: "Oggetto" }
            ]
          },
          {
            nome: "VENTILAZIONE",
            tipo: "Contenitore",
            contenuto: [
              { nome: "Ambu", tipo: "Oggetto" },
              { nome: "Maschere facciali 3/4/5", tipo: "Oggetto" },
              { nome: "Guedel 3/4/5", tipo: "Oggetto" },
              { nome: "Siringa per cuffiare", tipo: "Oggetto" },
              { nome: "Pinza di Magill", tipo: "Oggetto" }
            ]
          },
          {
            nome: "PARAMETRI",
            tipo: "Contenitore",
            contenuto: [
              { nome: "Termometro", tipo: "Oggetto" },
              { nome: "Fonendoscopio", tipo: "Oggetto" },
              { nome: "Sfigmomanometro", tipo: "Oggetto" },
              { nome: "Saturimetro", tipo: "Oggetto" }
            ]
          },
          {
            nome: "SCORTA",
            tipo: "Contenitore",
            contenuto: [
              { nome: "Ghiaccio", tipo: "Oggetto" },
              { nome: "Fisiologica da 100", tipo: "Oggetto" },
              { nome: "Coban", tipo: "Oggetto" },
              { nome: "Cerotto", tipo: "Oggetto" },
              { nome: "Garze sterili", tipo: "Oggetto" },
              { nome: "Garze non sterili", tipo: "Oggetto" },
              { nome: "2 Difinfettanti", tipo: "Oggetto" }
              //{ nome: "2 Acqua ossigenata", tipo: "Oggetto" },
              //{ nome: "2 Betadine", tipo: "Oggetto" }
            ]
          },
          {
            nome: "POCHETTE",
            tipo: "Contenitore",
            contenuto: [
              { nome: "Tourniquet", tipo: "Oggetto" },
              { nome: "Garze grandi", tipo: "Oggetto" },
              { nome: "Coban grandi", tipo: "Oggetto" }
            ]
          }
        ]
      }
    ]
  },
  {
    nome: "LUCAS",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Batteria", tipo: "Oggetto" },
      { nome: "Tavoletta", tipo: "Oggetto" }
    ]
  },
  {
    nome: "CASSETTI",
    tipo: "Contenitore",
    contenuto: [
      {
        nome: "MEDICAZIONE",
        tipo: "Contenitore",
        contenuto: [
          { nome: "5 ghiacci", tipo: "Oggetto" },
          { nome: "Coban", tipo: "Oggetto" },
          { nome: "2 Cerotti", tipo: "Oggetto" },
          { nome: "6 Pacchetti di garze sterili", tipo: "Oggetto" },
          { nome: "Garze non sterili", tipo: "Oggetto" },
          { nome: "2 Difinfettanti", tipo: "Oggetto" }
          //{ nome: "2 Acqua ossigenata", tipo: "Oggetto" },
          //{ nome: "2 Betadine", tipo: "Oggetto" }
        ]
      },
      {
        nome: "VENTILAZIONE",
        tipo: "Contenitore",
        contenuto: [
          { nome: "5 Reservoir", tipo: "Oggetto" },
          { nome: "4 Deflussori", tipo: "Oggetto" },
          { nome: "2 Occhialini", tipo: "Oggetto" },
          { nome: "2 Siringhe con ago", tipo: "Oggetto" },
          { nome: "Robin", tipo: "Oggetto" }
        ]
      },
      {
        nome: "SCORTA",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Redot", tipo: "Oggetto" },
          { nome: "Piastre", tipo: "Oggetto" },
          { nome: "Tubo per aspiratore", tipo: "Oggetto" },
          { nome: "Tappo per aspiratore", tipo: "Oggetto" },
          { nome: "2 Rasoi", tipo: "Oggetto" },
          { nome: "Carta per monitor", tipo: "Oggetto" }
        ]
      },
    ]
  },
  {
    nome: "LIQUIDI",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Fisiologica da 1000", tipo: "Oggetto" },
      { nome: "5 fisiologiche da 100", tipo: "Oggetto" },
      { nome: "4 Ringer acetati da 500", tipo: "Oggetto" }
    ]
  },
  {
    nome: "SCALDA LIQUIDI",
    tipo: "Contenitore",
    contenuto: [
      { nome: "2 Fisiologiche da 1000", tipo: "Oggetto" }
    ]
  },
  {
    nome: "GUANTI",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Pacchi XL, L, M, S", tipo: "Oggetto" }
    ]
  },
  {
    nome: "DAE",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Luce verde", tipo: "Oggetto" },
      { nome: "Piastre scadenza", tipo: "Oggetto" }
    ]
  },
  {
    nome: "ASPIRATORE",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Aspiratore prova accensione", tipo: "Oggetto" },
      { nome: "2 cannule aspiratore 18CH rosse", tipo: "Oggetto" }
    ]
  },
  {
    nome: "KIT SCOOP",
    tipo: "Contenitore",
    contenuto: [
      { nome: "4 Cinghie", tipo: "Oggetto" },
      { nome: "2 Cunei", tipo: "Oggetto" },
      { nome: "Cuscino", tipo: "Oggetto" },
      { nome: "2 Fasce in velcro", tipo: "Oggetto" },
      { nome: "Fascia ad H", tipo: "Oggetto" }
    ]
  },
  {
    nome: "RIPIANI ALTI A SINISTRA",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Urm", tipo: "Oggetto" },
      { 
        nome: "Borsa DPI", 
        tipo: "Oggetto",
        contenuto: [
          { nome: "Mascherine chirurgiche", tipo: "Oggetto" },
          { nome: "Mascherine FFP2", tipo: "Oggetto" },
          { nome: "Visiere", tipo: "Oggetto" },
          { nome: "Soprascarpe", tipo: "Oggetto" },
        ]
      },
      { nome: "Tute e camici", tipo: "Oggetto" },
      { nome: "Porta aghi", tipo: "Oggetto" },
      {
        nome: "SCORTA VENTILAZIONE",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Ambu", tipo: "Oggetto" },
          { nome: "Maschere facciali 3/4/5", tipo: "Oggetto" },
          { nome: "Guedel 3/4/5", tipo: "Oggetto" },
          { nome: "Siringa per cuffiare", tipo: "Oggetto" },
        ]
      }
    ]
  },
  {
    nome: "RIPIANI ALTI A DESTRA",
    tipo: "Contenitore",
    contenuto: [
      { nome: "2 teli sterili", tipo: "Oggetto" },
      { nome: "Vomitini", tipo: "Oggetto" },
      { nome: "Sacchetti panico", tipo: "Oggetto" },
      { nome: "Sacchetti della spazzatura", tipo: "Oggetto" },
      { nome: "5 Metalline", tipo: "Oggetto" },
      { nome: "Telini in tnt", tipo: "Oggetto" }
    ]
  },
  {
    nome: "PANCA",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Telo obesi", tipo: "Oggetto" },
      { nome: "Ked/xt", tipo: "Oggetto" },
      { nome: "Telo ricambio", tipo: "Oggetto" },
    ]
  },
  {
    nome: "PEDIATRICO",
    tipo: "Contenitore",
    contenuto: [
      {
        nome: "ZAINO",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Ambu per bambino", tipo: "Oggetto" },
          { nome: "Bracciale pediatrico", tipo: "Oggetto" },
          { nome: "Bracciale neonatale", tipo: "Oggetto" },
          { nome: "Sensore pediatrico", tipo: "Oggetto" },
          { nome: "Saturimetro", tipo: "Oggetto" },
          { nome: "Maschere facciali 0/1/2", tipo: "Oggetto" },
          { nome: "2 Reservoir pediatriche", tipo: "Oggetto" },
          { nome: "Pompetta aspiratore", tipo: "Oggetto" },
          { nome: "2 Telini sterili", tipo: "Oggetto" },
          { nome: "2 cannule aspiratore 10CH nere", tipo: "Oggetto" },
          { nome: "Metallina", tipo: "Oggetto" },
          { nome: "2 Vomitini", tipo: "Oggetto" },
          { nome: "Garze sterili", tipo: "Oggetto" },
          { nome: "Garze non sterili", tipo: "Oggetto" }
        ]
      },
      { nome: "Farfallina", tipo: "Oggetto" },
      { nome: "Ked padiatrico", tipo: "Oggetto" },
      { nome: "Spinale neonatale", tipo: "Oggetto" }
    ]
  },
  {
    nome: "ALTRE DOTAZIONI",
    tipo: "Contenitore",
    contenuto: [
      { nome: "Spinale", tipo: "Oggetto" },
      { nome: "Scoop", tipo: "Oggetto" },
      { nome: "Spinale pediatrica", tipo: "Oggetto" },
      { nome: "Estintore", tipo: "Oggetto" },
      { nome: "4 caschi", tipo: "Oggetto" },
      { nome: "Alcol per disinfettare", tipo: "Oggetto" },
      { nome: "Attrezzi", tipo: "Oggetto" },
      {
        nome: "KIT SCASSO",
        tipo: "Contenitore",
        contenuto: [
          { nome: "Torcia antivento", tipo: "Oggetto" },
          { nome: "Piede di porco", tipo: "Oggetto" },
          { nome: "Cesoia", tipo: "Oggetto" },
          { nome: "Guanti da lavoro", tipo: "Oggetto" }
        ]
      }
    ]
  }
];


// =======================
// 2) UTILITY: FLATTEN (oggetti uno alla volta)
// =======================
function flattenOggetti(lista, percorso = []) {
  const out = [];
  for (const item of lista) {
    if (item.tipo === "Contenitore") {
      out.push(...flattenOggetti(item.contenuto || [], [...percorso, item.nome]));
    } else {
      out.push({
        path: [...percorso], // array di contenitori
        nome: item.nome
      });
    }
  }
  return out;
}

// =======================
// 3) STATO APP
// =======================
const state = {
  screen: "home",     // home | bravo | check
  notesBravo: "",
  items: [],          // lista oggetti flatten
  index: 0,           // indice corrente
  done: new Set()     // indici fatti
};

// =======================
// 4) UI (single page)
// =======================
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = document.getElementById("app");
  if (!app) {
    console.error("Manca <div id='app'></div> in index.html");
    return;
  }

  function render() {
    if (state.screen === "home") return renderHome();
    if (state.screen === "bravo") return renderBravo();
    if (state.screen === "check") return renderCheck();
  }

  function renderHome() {
    app.innerHTML = `
      <div class="screen">
        <h1>Checklist Operativa</h1>
        <p class="small">Scegli il tipo di procedura</p>

        <div class="buttons">
          <button id="btnBravo">BRAVO</button>
          <button id="btnOrdinaria">ORDINARIA</button>
        </div>
      </div>
    `;

    document.getElementById("btnBravo").addEventListener("click", () => {
      state.screen = "bravo";
      render();
    });

    document.getElementById("btnOrdinaria").addEventListener("click", () => {
      alert("Ordinaria: da fare");
    });
  }
  
  function stampaChecklist(lista, livello = 0) {
    let testo = "";

    for (const item of lista) {
      if (item.tipo === "Oggetto") {
        testo += "  ".repeat(livello) + "- " + item.nome + "\n";
      } else {
        testo += "  ".repeat(livello) + "* " + item.nome + "\n";
      }
  
      if (item.contenuto) {
        testo += stampaChecklist(item.contenuto, livello + 1);
      }
    }
    return testo;
  }

  function renderBravo() {
    app.innerHTML = `
      <div class="screen">
        <h1>BRAVO</h1>

        <textarea id="bravoNotes" rows="30" cols="50" readonly></textarea>

        <div class="buttons">
          <button id="btnStart">INIZIA CHECK</button>
          <button id="btnBack">INDIETRO</button>
        </div>
      </div>
    `;

    // metti TUTTA la checklist
    document.getElementById("bravoNotes").value = stampaChecklist(checklist);

    document.getElementById("btnBack").addEventListener("click", () => {
      state.screen = "home";
      render();
    });

    document.getElementById("btnStart").addEventListener("click", () => {
      state.items = flattenOggetti(checklist);
      state.index = 0;
      state.done = new Set();

      state.screen = "check";
      render();
    });
  }

  function renderCheck() {
    const total = state.items.length;

    if (total === 0) {
      app.innerHTML = `
        <div class="screen">
          <h1>Check</h1>
          <p>Nessun oggetto trovato.</p>
          <div class="buttons">
            <button id="btnExit">ESCI</button>
          </div>
        </div>
      `;
      document.getElementById("btnExit").addEventListener("click", () => {
        state.screen = "home";
        render();
      });
      return;
    }

    // se fuori range, fine
    if (state.index >= total) {
      const fatti = state.done.size;
      app.innerHTML = `
        <div class="screen">
          <h1>Finito</h1>
          <p class="small">Completati: ${fatti} / ${total}</p>

          <div class="buttons">
            <button id="btnRestart">RIPARTI</button>
            <button id="btnExit">ESCI</button>
          </div>
        </div>
      `;

      document.getElementById("btnRestart").addEventListener("click", () => {
        state.index = 0;
        state.done = new Set();
        render();
      });

      document.getElementById("btnExit").addEventListener("click", () => {
        state.screen = "home";
        render();
      });

      return;
    }

    const item = state.items[state.index];
    const pathText = item.path.join(" > ");
    const isDone = state.done.has(state.index);

    app.innerHTML = `
      <div class="screen">
        <h1>Check BRAVO</h1>
        <p class="small">${state.index + 1} / ${total}</p>

        <div style="width:min(520px,100%); text-align:left;">
          <div class="small" style="white-space:pre-wrap;">${escapeHtml(pathText)}</div>
          <h2 style="margin:12px 0 8px 0;">${escapeHtml(item.nome)}</h2>

          <label style="display:flex; gap:10px; align-items:center;">
            <input id="chkDone" type="checkbox" ${isDone ? "checked" : ""}/>
            <span>Fatto</span>
          </label>
        </div>

        <div class="buttons">
          <button id="btnPrev" ${state.index === 0 ? "disabled" : ""}>INDIETRO</button>
          <button id="btnNext">AVANTI</button>
          <button id="btnExit">ESCI</button>
        </div>
      </div>
    `;

    document.getElementById("chkDone").addEventListener("change", (e) => {
      if (e.target.checked) state.done.add(state.index);
      else state.done.delete(state.index);
    });

    document.getElementById("btnPrev").addEventListener("click", () => {
      if (state.index > 0) state.index--;
      render();
    });

    document.getElementById("btnNext").addEventListener("click", () => {
      // opzionale: segna fatto automaticamente quando vai avanti
      // state.done.add(state.index);

      state.index++;
      render();
    });

    document.getElementById("btnExit").addEventListener("click", () => {
      state.screen = "home";
      render();
    });
  }

  // piccola utility per evitare problemi con i caratteri in HTML
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  render();
});
