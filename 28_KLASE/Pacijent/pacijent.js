export class Pacijent {
    constructor(ime, visina, tezina) {
      this.ime = ime;
      this.visina = visina;
      this.tezina = tezina;
    }
    // seteri
    set ime(str) {
      this._ime = str;
    }
    set visina(num) {
      if (num > 0 && num < 250) {
        this._visina = num;
      } else {
        alert("Visina mora biti između 0 i 250cm");
      }
    }
    set tezina(num) {
      if (num > 0 && num < 550) {
        this._tezina = num;
      } else {
        alert("Težina mora biti između 0kg i 550kg");
      }
    }
    // geteri
    get ime() {
      return this._ime;
    }
    get visina() {
      return this._visina;
    }
    get tezina() {
      return this._tezina;
    }
    stampaj() {
      console.log(this.ime, this.visina, this.tezina);
    }
    // BMI = kg/m2
    bmi() {
      return this.tezina / (this.visina ** 2);
    }
    kritican() {
      let bmi = this.bmi();
      if (bmi < 15 || bmi > 40) {
        return true;
      } else {
        return false;
      }
    }
  }