/*
    1. Definišete klasu
    2. Napravite konstruktor
    3. Napravite setere za sva polja
    4. Napravite getere za sva polja
*/

export class Automobil {
    
    constructor(mar, mod, b, ik){
        this.marka = mar; //Pozivam seter za marku
        this.model = mod;
        this.boja = b;
        this.imaKrov = ik;
    }

    /*
        BITNO!!!
        Metodima koji us GETERI i SETERI pristupamo kao poljima!!!
        (ne kao funkcijama!!)
    */

    //Seter postavlja vrednost (setuje)
    set marka(m){
        if(m == ""){
            alert("Loš unos");
        } else {
            this._marka = m;
        }
    }
    //Geter vraća vrednost (return)
    get marka(){
        return this._marka;
    }

    //model
    set model(m){
        this._model = m;
    }
    get model(){
        return this._model;
    }

    //boja
    set boja(b){
        this._boja = b;
    }
    get boja(){
        return this._boja;
    }

    //imaKrov
    set imaKrov(i){
        this._imaKrov = i;
    }
    get imaKrov(){
        return this._imaKrov;
    }

    // U klasama NEMA arrow f-ja
    sviraj(){
        console.log("Beep! Beep!");
    }
}