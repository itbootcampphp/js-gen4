import {Vozilo} from "./vozilo.js";

export class Automobil extends Vozilo{

    constructor(ti, bo, rb){
        super(ti, bo);
        this.registarskiBroj = rb;
    }

    set registarskiBroj(rb){
        this._registarskiBroj = rb;
    }

    get registarskiBroj(){
        return this._registarskiBroj;
    }

    ispisiAuto(){
        //I roditeljskim parametrima pristupamo preko this
        console.log(`Automobil ${this.tip}`);
    }

}