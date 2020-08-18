console.log("Prijava");

// DOM
let form = document.querySelector('form');
let inputName = document.getElementById('name');
let btnSubmit = document.querySelector('#submit');
let pResult = document.getElementById('result');

form.addEventListener("submit", event => {
    event.preventDefault();

    // Ispis imena i prezimena
    pResult.innerHTML = inputName.value + "<br>";

    // Ispis pola korisnika
    let radioButtonGender = document.querySelector("input[name='gender']:checked");
    switch(radioButtonGender.value){
        case "m":
            pResult.innerHTML += `<span style="color: blue">Pol: muški</span>`;
            break;
        case "f":
            pResult.innerHTML += `<span style="color: red">Pol: ženski</span>`;
            break;
        case "o":
            pResult.innerHTML += `<span style="color: green">Pol: neopredeljen</span>`;
            break;
        default:
            pResult.innerHTML += "Došlo je do greške";
    }

    // Ispis odabranih tehnologija
    let checkBoxTehChecked = document.querySelectorAll('input[name="tech"]:checked');
    pResult.innerHTML += `<br><ul>`;
    checkBoxTehChecked.forEach( elem => {
        pResult.innerHTML += `<li>${elem.value}</li>`;
    });
    pResult.innerHTML += `</ul>`;

    form.reset();
});