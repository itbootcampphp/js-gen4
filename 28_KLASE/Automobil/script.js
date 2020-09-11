import {Automobil} from "./automobil.js";

console.log("Klase - Automobil");

let auto1 = new Automobil("Peugeot", "208", "bela", true);
auto1.sviraj();
console.log(auto1.marka);
auto1.model = "207";
console.log(auto1.model);

let auto2 = new Automobil("Suzuki", "Ignis", "plava", true);
auto2.sviraj();
