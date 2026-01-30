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

function stampaChecklist(lista, livello = 0) {
  for (const item of lista) {
    if(item.tipo == "Oggetto") console.log("  ".repeat(livello) + "- " + item.nome);
    else console.log("  ".repeat(livello) + "* " + item.nome);

    if (item.contenuto) {
      stampaChecklist(item.contenuto, livello + 1);
    }
  }
}
stampaChecklist(checklist);

console.log("------------------------------------------------------------");

function* scorriOggetti(lista, contenitori = []) {
  for (const item of lista) {
    if (item.tipo === "Contenitore") {
      yield* scorriOggetti(item.contenuto || [], [...contenitori, item.nome]);
    } else {
      yield contenitori.join("\n") + "\n" + item.nome;
    }
  }
}

function stampaNext(it) {
  const res = it.next();

  if (res.done) {
    console.log("fine");
    return;
  }

  console.log(res.value + "\n");
}

const it = scorriOggetti(checklist);

for (let i = 0; i < 10; i++) {
  stampaNext(it);
}

document.getElementById("bravo").onclick = () => {
  console.log("BRAVO");
};

document.getElementById("ordinaria").onclick = () => {
  console.log("ORDINARIA");
};