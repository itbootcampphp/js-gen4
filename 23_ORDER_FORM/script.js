//let checkboxHardcover = document.querySelector("#hardcover");
//let checkboxWpaper = document.querySelector("#wpaper");
let spanPrice = document.querySelector("#price");
let checkboxesAdditional = document.querySelectorAll('input[name="additional"]');

// 1) Funkcije
//   - Imaju ime, i pozivaju se tako sto se navede ime, a u zagradi parametri 
//   - this (objekat koji je pozvao funkciju)
// 2) Arrow funkcije
//   - Anonimne funkcije (nemaju ime), 'smeste se' u promenljivu, i pozive tako sto se navede ime promenljive, a u zagradi parametri 
//   - this (window objekat)

/*let sportista = {
    ime: "Pera Peric",
    visina: 194,
    ispis: function() {
        console.log(this);
        console.log(this.ime, this.visina);
    }
};
sportista.ispis();*/

function checkboxClicked(checkbox) {
    let priceString = spanPrice.innerHTML;
    //let price1 = Number(priceString); => NaN
    let price = parseInt(priceString); // => broj
    let newPrice = 0;
    let change = parseInt(checkbox.value);
    if(checkbox.checked) {
        newPrice = price + change;
    }
    else {
        newPrice = price - change;
    }
    spanPrice.innerHTML = `${newPrice}$`;
}

checkboxesAdditional.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        checkboxClicked(this);
    });
});