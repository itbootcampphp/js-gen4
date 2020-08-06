let cars = ["Toyota", "Peugeout", "BMW"]; // niz od 3 elementa

console.log(cars);
console.log(cars[0]); // pristupanje prvom elementu niza (elementu sa indeksom 0)
console.log(cars[1]); // pristupanje drugom elementu niza (elementu sa indeksom 1)
console.log(cars[2]); // pristupanje trecem elementu niza (elementu sa indeksom 2)

console.log(cars[3]); // ne postoji ovakav element

// Ako niz a ima n elemenata, to su elementi: a[0], a[1], a[2], ...., a[n - 1]

// cars[2] = "Opel";
cars[2] = true;
cars[1] = -78.994;
cars[3] = "Citroen";
console.log(cars);


cars = ["Opel", "Peugeot", "Audi", "Citroen"];
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Drugacije zapisano:
for(let i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i]);
}

// Odrediti zbir elemenata celobrojnog niza.
let niz = [9, 15, 3, -4, -10, 20, 1];
/*let sum = 0;
for(let i = 0; i < niz.length; i++) {
    sum += niz[i];
}
console.log(sum);*/

let suma = myarray => {
    let sum = 0;
    for(let i = 0; i < myarray.length; i++) {
        sum += myarray[i];
    }
    return sum;
}

console.log(suma(niz));

//4. Srednja vrednost (aritmetička sredina) elemenata niza
let avg = myarr => {
    let s = suma(myarr);
    let arsr = s / myarr.length;
    return arsr;
}
console.log("Aritmetička sredina je: " + avg(niz));

//5. Maksimalni element u nizu
let max = myarr => {
    let maks = myarr[0];
    for(let i=0; i<myarr.length; i++){
        if(maks < myarr[i]){
            maks = myarr[i];
        }
    }
    return maks;
}
console.log("Najveći element niza je: " + max(niz));

//6. Minimalni element u nizu
let min = myarr => {
    let mini = myarr[0];
    for(let i=0; i<myarr.length; i++){
        if(mini > myarr[i]){
            mini = myarr[i];
        }
    }
    return mini;
}
console.log("Najmanji element niza je: " + min(niz));

//7. Odrediti indeks maksimalnog elementa celobrojnog niza.
//1. način
let maxInd = myarr => {
    let maks = myarr[0];
    let maksInd = 0;

    for(let i=0; i<myarr.length; i++){
        if(myarr[i] > maks){
            maks = myarr[i];
            maksInd = i;
        }
    }

    return maksInd;
}
console.log("Indeks najvećeg elementa je " + maxInd(niz));

//2. način
let maxInd2 = myarr => {
    let maks = max(myarr);
    for(let i=0; i<myarr.length; i++){
        if(myarr[i] == maks){
            return i;
        }
    }
}
console.log("Indeks najvećeg elementa je " + maxInd2(niz));

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
//1. način - "pešaka"
let br = 0;
let sumaNiza = 0;
for(let i=0; i<niz.length; i++){
    sumaNiza += niz[i];
}
let avgNiza = sumaNiza/niz.length; 

/*
5 4 3 4 5
srednja = 4
br = 2
*/
for(let i=0; i<niz.length; i++){
    if(niz[i] > avgNiza){
        br++;
    }
}
console.log("9. zadatak " + br);

//2. način
let brElemVecihOdArSr = arr => {
    let arsr = avg(arr);
    let br = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arsr){
            br++;
        }
    }
    return br;
};
console.log("Broj elemenata većih od aritmetičke sredine: " + brElemVecihOdArSr(niz));

// Suma elemenata većih od aritmetičke
let sumaElemVecihOdArSr = arr => {
    let arsr = avg(arr);
    let s = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arsr){
            s += arr[i];
        }
    }
    return s;
};
console.log("Suma elemenata većih od aritmetičke sredine: " + sumaElemVecihOdArSr(niz));

// 12. zadatak - Elment paran ali indeks neparan
/*
if(arr[i]%2==0 && i%2!=0)
*/

// 14. zadatak - Promeniti znak svakom elementu celobrojnog niza.
let a = 5;
a = a * (-1); //a *= -1; //a = -a;

let promeniZnak = myarr => {
    for(let i=0; i<myarr.length; i++){
        myarr[i] = myarr[i] * (-1);
    }
    console.log(myarr);
};
promeniZnak(niz);
console.log(niz);

/*
15. zadatak
if(myarr[i]%2 != 0 && i%2==0 )
*/

/*
16. zadatak
Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
*/
let nizStr = ["Breskve", "Šljive", "Kajsije", "Jagode", "Maline"];
let myList = document.getElementById('lista');
for(let i=0; i<nizStr.length; i++){
    myList.innerHTML += `<li> ${nizStr[i]} </li>`;
}

for(let i=nizStr.length-1; i>=0; i--){
    myList.innerHTML += `<li> ${nizStr[i]} </li>`;
}