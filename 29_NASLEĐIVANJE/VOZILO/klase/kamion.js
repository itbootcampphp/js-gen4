import {Vozilo} from "./vozilo.js";

export class Kamion extends Vozilo{

    constructor(ti, bo, no){
        super(ti, bo);
        this.nosivost = no;
    }

    set nosivost(no){
        this._nosivost = no;
    }

    get nosivost(){
        return this._nosivost;
    }

    ispisiKamion(){
        console.log("Kamion tipa " + this.tip + " boja: " + this.boja + " nosivost: " + this.nosivost);
    }
}