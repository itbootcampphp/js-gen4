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

/* 9. Suma kvadrata od n do m */
n = 2;
m = 5;
suma = 0;
/*
2 -> 2*2
3 -> 3*3
4 -> 4*4
5 -> 5*5
*/
for(i=n; i<=m; i++){
    suma += i**2;
}
console.log(suma);

/* 10. 
Preuzeti sa interneta tri slike i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
*/
let divSlike = document.getElementById("slike");

for(i=1; i<=3; i++){
    divSlike.innerHTML += `<img src="slike/${i}.png">`;
}

//Bonus
for(i=1; i<=15; i++){
    divSlike.innerHTML += `<br>`;
    if(i%3 == 1){
        divSlike.innerHTML += `<img src="slike/1.png">`;
    } else if(i%3 ==2){
        divSlike.innerHTML += `<img src="slike/2.png">`;
    } else {
        divSlike.innerHTML += `<img src="slike/3.png">`;
    }
}

/* 14. 
Ispisati aritmetičku sredinu brojeva od n do m.
arsr = suma / broj
*/
n = 10;
m = 20;
suma = 0;
broj = 0;
for(i=n; i<=m; i++){
    suma += i; // suma = suma + i; //suma = 10, 21, 33, 46, 60, ...
    broj += 1; //broj++; //broj = broj + 1; //broj = 1, 2, 3, 4, 5, ...
}
let arsr = suma/broj;
console.log(arsr);

/* 17. 
Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su
*/
suma = 0;
broj = 0;
n = 100;
m = 150;
// 104, 114, 124, 134, 144
console.log(78924%10);
for(i=n; i<=m; i++){
    if(i%10 == 4){
        suma += i;
        broj++;
    }
}
console.log(suma, broj);

//Sve cifre nekog broja
broj = 1041256;
let originalniBroj = broj;
suma = 0;
while(Math.floor(broj/10) > 0){
    console.log(broj%10);
    suma += broj%10; 
    broj = Math.floor(broj/10);
    console.log(broj);
}
