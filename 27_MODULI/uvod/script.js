// Glavi JS fajl aplikacije

import {zdravo, ime} from "./modules/zdravo.js";
// import {pera} from "./modules/modul2.js"; - Moguce je koristiti vise stvari iz vise modula

zdravo("Zika");
zdravo("Mika");
// ime = "Laza"; - ne moze menjanje entiteta iz modula
console.log(ime);
zdravo(ime);