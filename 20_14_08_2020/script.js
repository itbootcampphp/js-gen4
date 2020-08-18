console.log("Events - Događaji");

// 1. Dohvati element iz DOM stabla
// 2. Dodaj elementu event listener
// 3. Dodaj funkcionalnost

//1.
let buttonClickMe = document.getElementById('clickMe');

//2.
buttonClickMe.addEventListener('click', () => {
    //3.
    console.log("Clicked!");
});

/////////////////

let buttonDoubleClickMe = document.getElementById('doubleClickMe');
buttonDoubleClickMe.addEventListener('dblclick' , () => {
    console.log("Double clicked!");
});

buttonDoubleClickMe.addEventListener('mouseover', () => {
    console.log("Mouse over");
});

/////////////////

/*
Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
*/

/*
Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
*/

//DOM elementi
let buttonCounter = document.querySelector("#counter");
let pPrintCounter = document.querySelector("#printCounter");

let counter = 1;
buttonCounter.addEventListener('click', () => {
    console.log(counter);
    pPrintCounter.innerHTML = counter;
    counter++;
});

/*
Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1
*/
//DOM elementi
let buttonMinus = document.getElementById("minus");
let buttonPlus = document.getElementById("plus");
let spanResult = document.getElementById("result");

let res = 0;
spanResult.innerHTML = res;

buttonMinus.addEventListener("click", () => {
    // 1. način
    // res--;
    // if(res <= 0){
    //     res = 0;
    // } 

    // 2. način
    if(res > 0){
        res--;
    }
    spanResult.innerHTML = res;
});

buttonPlus.addEventListener("click", () => {
    res++;
    spanResult.innerHTML = res;
});

/////////////////////

/*
5. 
Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
*/

// DOM
let inputName = document.getElementById("name");
let buttonSubmitName = document.getElementById("submitName");
let pPrintName = document.getElementById("printName");

buttonSubmitName.addEventListener("click", () => {
    let name = inputName.value;
    pPrintName.innerHTML = "Hello " + name + " !";
    inputName.value = ""; //Isprazni input polje
});

/*
7. 
Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje
*/

//DOM
let inputNum1 = document.getElementById('num1');
let buttonKvadriraj = document.getElementById('kvadriraj');
let pRes = document.getElementById('res');

//1. Način
// buttonKvadriraj.addEventListener('click', event => {
//     event.preventDefault();
//     let num1 = inputNum1.value;
//     let res = num1**2;
//     //console.log(res);
//     pRes.innerHTML = res;
// });

//2. Način
let form = document.querySelector("form");
form.addEventListener('submit', event => {
    event.preventDefault();
    let res = inputNum1.value ** 2;
    pRes.innerHTML = res;
});



