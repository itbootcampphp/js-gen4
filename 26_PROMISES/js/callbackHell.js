console.log("Callback Hell");

let getTodos = (resource , callback) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        } else if(request.readyState === 4){
            callback("Greška", undefined);
        }
    });
    request.open('GET', resource);
    request.send();
}

getTodos('./json/fruits.json', (err, data) => {
    console.log("Callback 1");
    console.log(data);
    getTodos('./json/vegetables.json' , (err, data) => {
        console.log("Callback 2");
        console.log(data);
        getTodos('./json/cereals.json', (err, data) => {
            console.log("Callback 3");
            console.log(data);
        });
    });
});