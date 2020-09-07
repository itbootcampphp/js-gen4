let suma = function(a, b) {
    return a + b;
}

let suma2 = (a, b) => {
    return a + b;
}

let hello = () => {
    console.log('Hello world!');
}

// Obicna funkcija
function neparan(n) {
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

// Arrow funkcija
let neparan2 = (n) => {
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}


console.log(suma(5, 6));
console.log(suma2(5, 6));
hello();
let n = 5;
if(neparan(n)) { // Skracen zapis za if(neparan(n) == true)
    console.log(`Broj ${n} je neparan!`);
}
else {
    console.log(`Broj ${n} je paran!`);
}
n = 8;
if(neparan2(n)) { // Skracen zapis za if(neparan2(n) == true)
    console.log(`Broj ${n} je neparan!`);
}
else {
    console.log(`Broj ${n} je paran!`);
}

/* Zadatak 18 */
let vreme = (t, p, n) => {
    if(p > t) {
        return 0;
    }
    else {
        return Math.abs(p + n - t);
    }
}

console.log(vreme(15, 20, 25));
console.log(vreme(15, 10, 12));




/* Napisati arrow funkciju koja za prosledjenu putanju do slike prikazuje tu sliku */
let slika = (putanja) => {
    return `<img src='images/${putanja}' style='width: 150px;'>`;
}

// Skracena verzija
let slika2 = (putanja) => `<img src='images/${putanja}' style='width: 150px;'>`;

// Jos skracenija verzija
let slika3 = putanja => `<img src='images/${putanja}' style='width: 150px;'>`;


let div = document.getElementById('container');
div.innerHTML += slika('random-dice.jpg');
div.innerHTML += slika2('random-dice.jpg');
div.innerHTML += slika3('random-dice.jpg');

/* Napisati funkciju koja vraca veci od dva prosledjena broja. */
// Parametri funkcije: dva broja, a i b
// Rezultat: broj
// max2(3, 5) => 5
// max2(5, 3) => 5
// max2(5, 5) => 5

let max2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(max2(3, 5)); // 5 (drugi parametar f-je)
console.log(max2(5, 3)); // 5 (prvi parametar f-je)
console.log(max2(5, 5)); // 5 (drugi parametar f-je)


/* Napisati funkciju koja vraca najveci od 4 zadata broja */
/*let max4 = (a, b, c, d) => {
    let m1 = max2(a, b);
    let m2 = max2(c, d);
    let m3 = max2(m1, m2);
    return m3;
}*/
let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));

/*
let max4d = (a, b, c, d) => {
    let m1 = max2(a, b);
    let m2 = max2(m1, c);
    let m3 = max2(m2, d);
    return m3;
}*/
let max4d = (a, b, c, d) => max2(max2(max2(a, b), c), d);