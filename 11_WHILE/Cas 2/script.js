/* Ispisati parne brojeve od 20 do 1. */

let i = 20;
while(i >= 1) {
    console.log(i);
    i -= 2;
}

/* Ispisati parne brojeve od n do m (n < m) */
let n = 34;
let m = 55;
i = n;
while(i <= m) {
    if(i % 2 == 0) {
        console.log(i);
    }
    i++;
}

/* Ispisati brojeve od 1 do 20, sve u istom redu. */
n = 1;
m = 20;
i = n;
let rez = "";
while(i <= m) {
    rez = rez + i + " ";
    i++;
}
console.log(rez);


/* Zbir brojeva od n do m */
n = 3;
m = 10;
i = n;
let suma = 0;
while(i <= m) {
    suma += i;
    i++;
}
console.log(suma);

/* Odrediti sumu kvadrata parnih i kubova neparnih prirodnih brojeva od n do m. */
n = 1;
m = 5;
i = n;
suma = 0;
let clan;
while(i <= m) {
    if(i % 2 != 0) {
        clan = i ** 3;
    }
    else {
        clan = i ** 2;
    }
    suma += clan;
    i++;
}
console.log(suma);


/* Odrediti sa koliko brojeva je deljiv uneti broj k. */
let k = 12;
i = 1;
let broj = 0;
while(i <= k) {
    if(k % i == 0) {
        broj++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} je: ${broj}`);


/* Odrediti da li je broj n prost ili slozen. */
n = 13;
i = 2;
broj = 0;
let prost = true;
while(i <= Math.floor(Math.sqrt(n))) {
    if(n % i == 0) {
        prost = false;
    }
    i++;
}
if(prost == true) {
    console.log(`Broj ${n} je prost.`);
}
else {
    console.log(`Broj ${n} je slozen.`);
}

// let - oblast vazenja je unutar bloka
// var - oblast vazenja je unutar funkcije
let x = 5;
if(x < 10) {
    var y = 4;
    y = y + 1;
    console.log(y);
}
console.log(x, y); // 5, 5


// n-ti clan Fibonacijevog niza
n = 6;
let fi1 = 1;
let fi2 = 1;
let fi = 1;
i = 3;
while(i <= n) {
    fi = fi1 + fi2;
    fi1 = fi2;
    fi2 = fi;
    i++;
    console.log(fi);
}
console.log(`${n}-ti clan Fibonacijevog niza = ${fi}`);
/*
n = 6

              i    fi1    fi2    fi
------------------------------------
Pre ulaska:   3     1      1     1
Prvi put  :   4     1      2     2
Drugi put :   5     2      3     3
Treci put :   6     3      5     5
Cetvrti put:  7     5      8     8 
*/

/* Kreirati n paragrafa sa proizvoljnim tekstom, i naizmenično ih obojiti sa tri različite boje.*/
n = 16;
let div = document.getElementById('parent');
let tekst = "Bla bla bla bla";
i = 1;
while(i <= n) {
    if(i % 3 == 1) { // Paragrafi: 1, 4, 7, 10, ....
        div.innerHTML += `<p style='color: blue'>${tekst}</p>`;
    }
    else if(i % 3 == 2) { // Paragrafi: 2, 5, 8, 11, ...
        div.innerHTML += `<p style='color: red'>${tekst}</p>`;
    }
    else { // Paragrafi: 3, 6, 9, 12, ...
        div.innerHTML += `<p style='color: yellow'>${tekst}</p>`;
    }
    i++;
}