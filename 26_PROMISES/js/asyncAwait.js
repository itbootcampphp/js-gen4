console.log("Async and Await");

let testAsync = async () => {

}

// Asinhrona funkcija UVEK kao rezultat vraća Promis
let test = testAsync();
console.log(test); 

let getTodos = async () => {
    //await možemo koristiti SAMO u async f-ji
    //await "zaustavlja" js kod sve dok od promisa ne dobije resolved i tek onda tak resolved upisuje u response promenljivu

    let response = await fetch('./json/fruits.json');
    console.log(response); // ispisao se Response, što znači da je resolved
    
    let data = await response.json(); //response.json() vraća Promis a i asinhronoj funkciji možemo koristiti await umesto .then()
    console.log(data);
    return data;
}

console.log(1);
console.log(2);
getTodos().then(data => console.log("Resolved :) ", data))
          .catch(err => console.log("REjected :( ", err));
console.log(3);
console.log(4);

// getTodos()
// .then( data => {
//     console.log("Resolved :) ", data);
//     data.forEach(element => {
//         console.log(element.name);
//     });
// })
// .catch( err => {
//     console.log("Rejected :( ", err);
// })