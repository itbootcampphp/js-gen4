console.log("Klase - Knjiga");

import {Knjiga} from "./knjiga.js";

let k1 = new Knjiga("Braća Karamazov", "Fjodor Dostojevski", 1880, 1032, 1500);
let k2 = new Knjiga("Hari Poter", "Žoan Ketlin Rouling", 1997, 850, 1450);
let k3 = new Knjiga("Hari Poter kolekcija", "Žoan Ketlin Rouling", 2015, 5000, 10050);

console.log(k1.obimna());
console.log(k1.skupa());
console.log(k1.dugackoIme());

let knjige = [k1, k2, k3];

//Svi autori čije je ime dugačko
knjige.forEach( k => {
    if(k.dugackoIme()){
        console.log(k.autor);
    }
});

//Knjige koje su istovremenoi skupe i obimne
knjige.forEach( k => {
    if(k.skupa() && k.obimna()){
        k.stampaj();
    }
});

//Funkcija koja određuje ukupnu cenu knjige
let ukupnaCena = niz => {
    let sum = 0;
    niz.forEach( elem => {
        sum += elem.cena;
    });
    return sum;
}
console.log(ukupnaCena(knjige));

//Funkcija koja određuje prosečnu cenu knjige
let prosecnaCena = niz => {
    let arsr = ukupnaCena(niz) / niz.length;
    return arsr;
}
console.log(prosecnaCena(knjige));

//Funkcija koja određuje prosečnu cenu stranice knjige (koliko košta jedna stranica knjige globalno gledano)
let prosecnaStranica = niz => {
    let uc = ukupnaCena(niz);
    let brStr = 0;
    niz.forEach(elem => {
        brStr += elem.strane;
    });
    let arSrStr = uc / brStr;
    return arSrStr;
}
console.log(prosecnaStranica(knjige));