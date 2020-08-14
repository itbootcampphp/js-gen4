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
