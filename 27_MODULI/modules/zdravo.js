// Sadrzaj modula zdravo.js

function zdravo(i) {
    console.log(`Zdravo, ${i}!`);
}

let ime; // deklaracija promenljive (uvodjenje promenljive u program)
// deklaracija promenljivih je OBAVEZNA u modulima

ime = "Pera"; // dodela vrednosti promenljive

export {zdravo, ime};