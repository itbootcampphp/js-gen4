console.log("Klase - Pacijent");

import {Pacijent} from "./pacijent.js";

//Najveći bmi
let p1 = new Pacijent("John Johnson", 186, 78);
let p2 = new Pacijent("David Davidson", 178, 135);
let p3 = new Pacijent("Steven Stevenson", 183, 50);

let pacijenti = [p1, p2, p3];

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let maxBmi = pacijenti[0].bmi(); //Čuvam max bni
let maxBmiPacijent = pacijenti[0]; //Čuvam ceo objekat/pacijenta sa tim najvećim bmi

pacijenti.forEach( p => {
    if(p.bmi() > maxBmi){
        maxBmi = p.bmi();
        maxBmiPacijent = p;
    }
});
maxBmiPacijent.stampaj();