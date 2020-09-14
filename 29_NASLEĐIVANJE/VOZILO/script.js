console.log("Nasleđivanje vozilo");

import {Vozilo} from "./klase/vozilo.js";
import {Automobil} from "./klase/automobil.js";
import {Kamion} from "./klase/kamion.js";

let v1 = new Vozilo("Drumsko", "bela");
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil("Drumsko", "crvena", "NI-123");
console.log(a1.boja);
a1.ispisiVozilo();
a1.vozi();
a1.ispisiAuto();
// v1.ispisiAuto(); //Javlja grešku
console.log("Registarski broj je: " + a1.registarskiBroj);

let a2 = new Automobil(v1.tip, v1.boja, "BG-456");
a2.ispisiAuto();

let k1 = new Kamion("Drumsko", "plava", 5.7);
k1.ispisiKamion();
k1.vozi();