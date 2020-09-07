/*

if(uslov) {
    // Komande
}

*/

let datum = new Date();
let mesec = datum.getMonth() + 1;

while(mesec == 7) {
    console.log("Mesec jul");
    mesec++;
}

console.log("Nastavak koda");



/* Ispis brojeva od 1 do 10 */
let i = 1;
while(i <= 10) {
    console.log(i);
    i++; // i = i + 1;
}
console.log("Zavrsen ispis brojeva.");
console.log(i); // i = 11


/* Ispis brojeva od 20 do 1 */
// i-- => Prvo se iskoristi vrednost i, pa se smanji
// --i => Prvo se smanji i, pa se iskoristi vrednost
i = 20;
while(i > 0) {
    // Komanda console.log(i--); je zamena za sledece dve:
    console.log(i);
    i--;

    // Komanda console.log(--i); je zamena za sledece dve:
    // i--;
    // console.log(i);
}