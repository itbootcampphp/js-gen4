console.log("Async and Await");

let getTodos = async () => {

    let response = await fetch('./json/fruits.json');
    if(response.status != 200){
        //Došlo je do greške
        throw new Error("Došlo je do greške u pozivu 1");
    }

    let data = await response.json() ;
    console.log(data);

    response = await fetch('./json/vegetables.json');
    if(response.status != 200){
        //Došlo je do greške
        throw new Error("Došlo je do greške u pozivu 2");
    }

    data = await response.json();
    console.log(data);

    return data;
}

console.log(1);
console.log(2);
getTodos().then(data => console.log(data))
        .catch(err => console.log(err));
console.log(3);
console.log(4);