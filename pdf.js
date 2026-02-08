async function salvaPdfBravo({ campi, checkedIds }) {
const { PDFDocument, rgb, StandardFonts } = window.PDFLib;

const tplBytes = await fetch("Modello_Checklist.pdf").then(r => r.arrayBuffer());
const pdfDoc = await PDFDocument.load(tplBytes);

const pages = pdfDoc.getPages();
const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

function drawText(p, text, x, y, size = 11) {
pages[p].drawText(String(text || ""), {
    x, y, size, font: fontBold, color: rgb(0,0,0)
});
}

function drawCheck(p, x, y) {
pages[p].drawText("✓", {
    x, y, size: 11, font: fontBold, color: rgb(0,0.5,0)
});
}

const CHECK_POS = {
c1: { p:0, x:70, y:640 },
c2: { p:0, x:70, y:620 }
// ecc…
};

checkedIds.forEach(id => {
const pos = CHECK_POS[id];
if (pos) drawCheck(pos.p, pos.x, pos.y);
});

const P = 2;
const font_size = 16;

// Y alzate
const Y_TOP = 118;   // DATA / TURNO / MEZZO
const Y_MID = 86;    // AUTISTA / CAPOSQUADRA
const Y_LOW = 54;    // 2° / 3° SOCCORRITORE

// Prima riga
drawText(P, campi.data,  100, Y_TOP, font_size);
drawText(P, campi.turno, 305, Y_TOP, font_size);
drawText(P, campi.mezzo, 500, Y_TOP, font_size);

// Seconda riga
drawText(P, campi.autista, 175, Y_MID, font_size);
drawText(P, campi.caposquadra, 505, Y_MID, font_size);

// Terza riga
drawText(P, campi.soc2,  175, Y_LOW, font_size);
drawText(P, campi.soc3,  505, Y_LOW, font_size);


const bytes = await pdfDoc.save();
const blob = new Blob([bytes], { type: "application/pdf" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "Checklist_BRAVO.pdf";
a.click();

URL.revokeObjectURL(url);
}