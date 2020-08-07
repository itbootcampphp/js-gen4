function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById('container');
    div.innerHTML += poruka;
}

let ispisNiza = (niz, cb) => {
    let p = "";
    for(let i = 0; i < niz.length; i++) {
        p += niz[i] + " ";
    }
    cb(p); // poziv callback funkcije
}

let a = [9, -7, 3, 4, 5];
let b = [1, 1, 1, 1];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisKonzola);
ispisNiza(b, ispisStranica);