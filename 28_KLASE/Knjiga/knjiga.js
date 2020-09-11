export class Knjiga {
    constructor(naslov, autor, godina, strane, cena) {
        this.naslov = naslov;
        this.autor = autor;
        this.godina = godina;
        this.strane = strane;
        this.cena = cena;
    }

    set naslov(value) {
        this._naslov = value;
    }
    set autor(value) {
        this._autor = value;
    }
    set godina(value) {
        this._godina = value;
    }
    set strane(value) {
        this._strane = value;
    }
    set cena(value) {
        this._cena = value;
    }

    get naslov() {
        return this._naslov;
    }
    get autor() {
        return this._autor;
    }
    get godina() {
        return this._godina;
    }
    get strane() {
        return this._strane;
    }
    get cena() {
        return this._cena;
    }

    stampaj() {
        console.log(this.naslov, this.autor, this.godina, this.strane, this.cena);
    }

    obimna() {
        if(this.strane > 600){
            return true;
        } else {
            return false;
        }
    }
    skupa() {
        if(this.cena > 8000){
            return true;
         } else {
             return false;
         }
    }
    dugackoIme() {
        if(this.autor.length > 18){
            return true;
        } else {
            return false;
        }
    }
}