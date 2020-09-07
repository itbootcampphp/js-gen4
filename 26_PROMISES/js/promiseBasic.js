console.log("Promise Basic");

// Promise je alternativa za Callback Hell

/*
Promise čeka odgovor.
Svaki odgovor ima jednu od ove dve vrednosti:
1. RESOLVED - ukoliko je sve "dobro prošlo"
2. REJECTED - ukoliko je došlo do neke greške
*/

let getSomething = () => {
    return new Promise( (resolve, reject) => {
        //resolve('Resolve...');
        reject('Reject...');
    });
}

/*
let test = getSomething();
console.log(test); //ispisalo da je to Promise
*/

// Rukovanje promisom - 1. način
/*
.then hvata kada je resolved
.catch hvata kada je rejected 
*/
getSomething().then( data => {
                console.log(data);
            }).catch( err => {
                console.log(err);
            });

// Rukovanje promisom - 2. način
/*
Prva fukcija u .then hvata kada je resolved
Druga funkcija u .then hvata kada je rejected
*/
getSomething().then( data => {
                console.log(data);
            }, err => {
                console.log(err);
            });