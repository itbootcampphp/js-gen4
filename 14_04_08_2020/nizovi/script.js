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
let niz = [9, 15, 3, -4, -10, 2, 1];
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