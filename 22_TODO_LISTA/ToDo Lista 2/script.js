console.log("To Do List");

// DOM
let ulListTasks = document.querySelector("ul");
let liAllTasks = document.querySelectorAll("li");
let inputTask = document.getElementById("unesi");
let addTaskBeggin = document.getElementById("dodajNaPocetak");
let addTaskEnd = document.getElementById("dodajNaKraj");
let arrTasks = [];

if(JSON.parse(localStorage.getItem("arrTasksStorage")) == null){
    localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
} else {
    arrTasks = JSON.parse(localStorage.getItem("arrTasksStorage"));
    for(let i = 0; i < arrTasks.length; i++){
        let liOldTask = document.createElement("li");
        liOldTask.textContent = arrTasks[i];
        ulListTasks.appendChild(liOldTask);
    }
}


inputTask.addEventListener( "keyup", event => {
    console.log(event.keyCode);
    if(event.keyCode == 13){ //Ako je kliknut taster enter
        let inputTaskText = inputTask.value;
        if(inputTaskText == "" || inputTaskText == null){
            alert("Morate uneti tekst zadatka");
        } else {
            let liNewTask = document.createElement("li");
            liNewTask.textContent += inputTaskText;
            let radioAdd = document.querySelector("input[name=dodaj]:checked");
            if(radioAdd.id == "dodajNaPocetak"){
                ulListTasks.prepend(liNewTask);
                arrTasks.unshift(inputTaskText);
            } else {
                ulListTasks.appendChild(liNewTask);
                arrTasks.push(inputTaskText);
            }
            localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
        }
        inputTask.value = "";
    }
});

ulListTasks.addEventListener("click", event => {
    console.log("kliknuto na UL");
    if(event.target.tagName == "LI"){
        console.log("kliknuto na LI");
        event.target.remove();
        console.log(event.target.textContent);
        let index = arrTasks.indexOf(event.target.textContent);
        arrTasks.splice(index, 1);
        localStorage.setItem("arrTasksStorage", JSON.stringify(arrTasks));
    }
});

document.querySelector("div").addEventListener("click", event => {
    console.log("kliknuto na DIV");
});

document.querySelector("body").addEventListener("click", event => {
    console.log("kliknuto na BODY");
});


// liAllTasks.forEach( li => {
//     li.addEventListener("click", event => {
//         console.log(event);
//          console.log(event.target);
//         console.log(event.target.textContent);
//         console.log(event.target.tagName)
//         event.target.remove();
//     });
// });

////////////////////////////////////////////////////
// LOCAL STORAGE
////////////////////////////////////////////////////

// let h = document.querySelector("h1");

// Smeštanje elementa u local storage
// localStorage.setItem( key , value );
localStorage.setItem("username", "Jelena");
localStorage.setItem("grad", "Niš");
// Ukoliko ključ već postoji u local storage onda radi update njegove vrednosti
localStorage.setItem("username", "Stefan");
localStorage.setItem("godine", 25);

// Vraćanje elementa iz local storage prema ključu
let getUsername = localStorage.getItem("username");
console.log(getUsername);
let getGodine = localStorage.getItem("godine");
getGodine++;
localStorage.setItem("godine", getGodine);
console.log(getGodine);


