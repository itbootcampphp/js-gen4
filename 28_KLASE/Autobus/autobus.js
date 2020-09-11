export class Autobus {
    constructor(a, b) {
        this.regBr = a;
        this.brSedista = b;
    }
    set regBr(br) {
        this._regBr = br;
    }
    set brSedista(br) {
        this._brSedista = br;
    }
    get regBr() {
        return this._regBr;
    }
    get brSedista() {
        return this._brSedista;
    }
    info() {
        console.log(this.regBr, this.brSedista);
    }
}