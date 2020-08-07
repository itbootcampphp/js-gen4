function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById('container');
    div.innerHTML += poruka;
}

/*
function ispisNiza(niz, cb) {
    let p = "";
    for(let i = 0; i < niz.length; i++) {
        p += niz[i] + " ";
    }
    cb(p); // poziv callback funkcije
}*/

let ispisNiza = (niz, cb) => {
    let p = "";
    for(let i = 0; i < niz.length; i++) {
        p += niz[i] + " ";
    }
    cb(p); // poziv callback funkcije
}

let a = [9, -7, 3, 4, 5];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);


// Poziv funkcije ispisNiza preko anonimnih funkcija

ispisNiza(a, poruka => {
    console.log(poruka);
});

/*
ispisNiza(a, function(poruka) {
    console.log(poruka);
});
*/

ispisNiza(a, poruka => {
    let div = document.getElementById('container');
    div.innerHTML += poruka;
});

ispisNiza(a, poruka => {
    let div = document.getElementById('container');
    div.innerHTML += poruka;
});


// Ispis niza a preko forEach petlje
// 1) forEach je metoda niza
// 2) forEach prihvata callback funkciju kao argument

// Prva varijanta - prosledimo obicnu funkciju forEach-u

function ispisElementaNiza(elem) {
    console.log(`Element niza je: ${elem}`);
}

a.forEach(ispisElementaNiza);

// Druga varijanta - prosledjujemo anonimnu funkciju
a.forEach(elem => {
    console.log(`Element niza je: ${elem}`);
});


// Ispis niza preko forEach petlje - pristup indeksu i elementu niza
a.forEach((elem, i) => {
    console.log(`Element niza sa indeksom ${i} je: ${elem}`);
});


// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let ispisLista = niz => {
    let result = "<ul>";
    niz.forEach(elem => {
        result += `<li>${elem}</li>`;
    });
    result += "</ul>";
    let div = document.getElementById('container');
    div.innerHTML += result;
}

let lista1 = ['Jabuka', 'Kruska', 'Sljiva', 'Kajsija'];
let lista2 = ['Jaja', 'Mleko', 'Hleb'];

ispisLista(lista1);
ispisLista(lista2);


//  19. Ispisati dužinu svakog elementa u nizu stringova. 
let stringovi = ["Jelena", "Vlada", "Uros", "Nadica", "Nebojsa", "Nikola"];

let ispisiDuzinu = niz => {
    niz.forEach(elem => {
        console.log(elem.length);
    });
};

ispisiDuzinu(stringovi);


// 20. Odrediti element u nizu stringova sa maksimalnom dužinom.

let stringNajvecaDuzina = niz => {
    let najvecaDuzina = niz[0].length;
    let najduziString = niz[0];
    niz.forEach(elem => {
        if(elem.length > najvecaDuzina) {
            najvecaDuzina = elem.length;
            najduziString = elem;
        }
    });
    return najduziString;
};

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od 
// prosečne dužine svih stringova u nizu.
let prosecnaDuzinaStringova = niz => {
    let prosek = 0;
    niz.forEach(elem => {
        prosek += elem.length;
    });
    prosek = prosek / niz.length;
    return prosek;
};

let brojNatprosecnoDugackih = niz => {
    let prosek = prosecnaDuzinaStringova(niz);
    console.log(prosek);
    let broj = 0;
    niz.forEach(elem => {
        if(elem.length > prosek) {
            broj++;
        }
    });
    return broj;
};

console.log(brojNatprosecnoDugackih(stringovi));


// Ispisati sve elemente u nizu stringova sa maksimalnom duzinom

let strings = ["Pera", "Laza", "Ana", "Jelena", "Stefan", "Aca", "Milena"];

let maxDuzina = niz => {
    let m = niz[0].length;
    niz.forEach(elem => {
        if(elem.length > m) {
            m = elem.length;
        }
    });
    return m;
};

let stringoviSaSvojstvom = (niz, svojstvo) => {
    let s = svojstvo(niz);
    niz.forEach(elem => {
        if(elem.length == s) {
            console.log(elem);
        }
    });
};

stringoviSaSvojstvom(strings, maxDuzina);


// Ispisati sve elemente koji imaju minimalnu duzinu
let minDuzina = niz => {
    let m = niz[0].length;
    niz.forEach(elem => {
        if(elem.length < m) {
            m = elem.length;
        } 
    });
    return m;
};

stringoviSaSvojstvom(strings, minDuzina);



// 24.
let a1 = [5, -8, 8, 14];
let b1 = [9, 5, -5, 8];

// Prvi nacin
let c = [];
for(let i = 0; i < a1.length; i++) {
    c.push(a1[i]);
    c.push(b1[i]);
}
console.log(c);

// Drugi nacin
c = [];
for(let i = 0; i < a1.length; i++) {
    c[2 * i] = a1[i];
    c[2 * i + 1] = b1[i];
}
console.log(c);

// Treci nacin
c = [];
let j = 0;
for(let i = 0; i < a1.length; i++) {
    c[j++] = a1[i];
    c[j++] = b1[i];
}
console.log(c);
