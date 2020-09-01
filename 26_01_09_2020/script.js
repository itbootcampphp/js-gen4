/*
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('pozvali smo callback funkciju');
}, 1000);

console.log(3);
console.log(4);
*/

let request = new XMLHttpRequest();

console.log(request.readyState);
/*
request.addEventListener('readystatechange', () => {
    if(request.readyState === 1) {
        console.log('Uspostavljena konekcija!');
    }
    else if(request.readyState === 2) {
        console.log('Pozvan je send - poslat je zahtev serveru');
    }
    else if(request.readyState === 3) {
        console.log('Prihvata se odgovor - u statusu preuzimanja');
    }
    else if(request.readyState === 4) {
        console.log('Odgovor sa servera je preuzet!');
        // request.responseText - string koji server vraca kao odgovor
        let data = JSON.parse(request.responseText);
        console.log(data);
    }
});
*/

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        console.log('Odgovor sa servera je preuzet i server je potvrdio validnost');
        let data = JSON.parse(request.responseText);
        console.log(data);
    }
    else if(request.readyState === 4) {
        console.log('Server nije mogao da obradi zahtev');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
console.log(request.readyState);

request.send();
console.log('Test poruka 1');
console.log('Test poruka 2');
setTimeout( () =>  {
    console.log('Test poruka 3');
}, 100);



//////////////////////// Slajd 16
//////////////////////// Zadaci 1 i 2

let req = new XMLHttpRequest();
req.addEventListener('readystatechange', () => {
    if(req.readyState === 4 && req.status === 200) { // ako je sve u redu
        let data = JSON.parse(req.responseText); // data - niz objekata
        data.forEach(user => { // prolazak kroz sve objekte (korisnik)
            //console.log(user.website);
            if(user.website.includes('.com')) { // da li string sadrzi rec '.com'
                console.log(user.name);
            }
        });
    }
    else if(req.readyState === 4) {
        console.log('Server nije u stanju da obradi zahtev');
    }
});
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.send();


/// Zadatak 2 preko callback funckije

let getKorisnici = callback => {
    let req = new XMLHttpRequest();
    req.addEventListener('readystatechange', () => {
        if(req.readyState === 4 && req.status === 200) { // ako je sve u redu
            let data = JSON.parse(req.responseText); // data - niz objekata
            callback(data);
        }
        else if(req.readyState === 4) {
            console.log('Server nije u stanju da obradi zahtev');
        }
    });
    req.open('GET', 'https://jsonplaceholder.typicode.com/users');
    req.send();
};

// Poziv f-je:

getKorisnici(data => {
    data.forEach(user => {
        if(user.website.includes('.com')) {
            console.log(user.name);
        }
    });
});