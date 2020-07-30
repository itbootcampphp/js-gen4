let i;
for(i = 0; i <= 10; i++) {
    console.log(i);
}
/*
Inicijalizacija (i = 0)
Ponovi:
  - Da li vazi uslov?
  - Izvrsi blok naredbi
  - Inkrementacija
*/

for(i = 0; i <= 10; i = i + 1) {
    console.log(i);
}
console.log(i);

i = 0;
while(i <= 10) {
    console.log(i);
    i++;
}

for(let j = 5; j<= 15; j++) {
    console.log(j);
}
//console.log(j); - Ne moze!


/* Ispisati dvostruku vrednost brojeva od 5 do 15 */
for(i = 5; i <= 15; i++) {
    console.log(2 * i);
}

/* Suma brojeva od 1 do 20 */
let suma = 0;
for(i = 1; i <= 20; i++) {
    suma += i;
}
console.log(suma);

/* Suma parnih brojeva od 1 do 20 */
suma = 0;
for(i = 2; i <= 20; i += 2) {
    suma += i;
}
console.log(suma);

/* Suma parnih brojeva od n do m */
let n = 5;
let m = 25;
suma = 0;
for(i = n; i <= m; i++) {
    if(i % 2 == 0) {
        suma += i;
    }
}
console.log(suma);