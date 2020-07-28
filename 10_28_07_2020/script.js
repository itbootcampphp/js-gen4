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