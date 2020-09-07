console.log("Fetch");

let test = fetch("./json/fruits.json");
console.log(test); //Vraća promis -> Asocijacija: .then i .catch

/*
    1. fetch .json fajl
    2. return response (prva .then grana)
    3. uzeti podatke iz response (druga .then grana)
    4. dohvati grešku (.catch grana)
*/ 

fetch("./json/fruits.json").then( response => {
                                console.log('Resolved! :) ', response);
                                return response.json();
                            })
                            .then( data => {
                                console.log(data);
                            })
                            .catch( err => {
                                //Rejected vraća akko je pronlem sa mrežom
                                console.log('Rejected :( ', err); 
                            });


/*
1. zadatak
Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)
*/     
/*
    1. fetch .json fajl
    2. return response (prva .then grana)
    3. uzeti podatke iz response (druga .then grana)
    4. dohvati grešku (.catch grana)
*/ 
fetch('./json/fruits.json')
.then(response => {
    //console.log(response.json());
    return response.json();
})
.then(data => {
    console.log(data);
    data.forEach(element => {
        if(element.name.includes('berries')){
            console.log(element.name);
        }
    });
})
.catch(err => {
    console.log(err);
})


/*
2. zadatak
U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)
*/
fetch('./json/fruits.json')
.then(response => {
    //console.log(response.json());
    return response.json();
})
.then(data => {
    console.log(data);
    let count = 0;
    data.forEach(element => {
        if(!element.name.includes('berries')){
            count++;
        }
    });
    console.log(count);
})
.catch(err => {
    console.log(err);
})