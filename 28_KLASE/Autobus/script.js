console.log("Klase - Autobus");

import {Autobus} from "./autobus.js";

let autobus1 = new Autobus('123-43-FS', 72);
let autobus2 = new Autobus('653-37-CH', 40);
let autobus3 = new Autobus('143-62-HT', 54);

let autobusi = [autobus1, autobus2, autobus3];

let ukupnoSedista = niz => {
    let ukupno = 0;
    niz.forEach(element => {
        ukupno += element.brSedista;
    });
    return ukupno;
}

/* Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
 */
let ljudi = (brLjudi, autobusi) => {

    let brSedista = ukupnoSedista(autobusi);

    if(brSedista >= brLjudi){
        return true;
    } else {
        return false;
    }
}

console.log(ljudi(100, autobusi));
console.log(ljudi(200, autobusi));