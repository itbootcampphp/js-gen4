console.log("Klase - Automobil");

class Automobil {
    
    constructor(mar, mod, b, ik){
        this._marka = mar;
        this._model = mod;
        this._boja = b;
        this._imaKrov = ik;
    }

    // U klasama NEMA arrow f-ja
    sviraj(){
        console.log("Beep!");
    }
}

let auto1 = new Automobil("Peugeot", "208", "bela", true);
auto1.sviraj();
console.log(auto1._marka, auto1._model);

let auto2 = new Automobil("Suzuki", "Ignis", "plava", true);
auto2.sviraj();
console.log(auto2._boja);