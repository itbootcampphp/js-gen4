export class Vozilo{

    constructor(t, b){
        this.tip = t;
        this.boja = b;
    }

    //seteri
    set tip(t){
        this._tip = t;
    }
    set boja(b){
        this._boja = b;
    }

    //geteri
    get tip(){
        return this._tip;
    }
    get boja(){
        return this._boja;
    }

    //metodi
    ispisiVozilo(){
        console.log(`Tip vozila: ${this.tip} , boja vozila: ${this.boja}`);
    }
    vozi(){
        console.log("Vozilo u pokretu");
    }
}