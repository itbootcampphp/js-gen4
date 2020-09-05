console.log("Promise Todos");

let getTodos = resource => {
    let request = new XMLHttpRequest();

    return new Promise( (resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('Došlo je do greške');
            }
        });
        request.open('GET', resource);
        request.send();
    });   
}

getTodos('./json/fruits.json')
.then(data => {
    console.log('Resolved!', data);
})
.catch(err => {
    console.log('Rejected :(', err);
});

// Chaining Promises - Ulančavanje/Nizanje Promisa
// Način kako izbeći Callback Hell
getTodos('./json/fruits.json')
.then(data => {
    console.log('Resolved 1!', data);
    return getTodos('./json/vegetables.json');
})
.then(data => {
    console.log('Resolved 2!', data);
    return getTodos('./json/cereals.json');
})
.then(data => {
    console.log('Resolved 3!', data);
})
.catch(err => {
    console.log('Rejected :(', err);
});

