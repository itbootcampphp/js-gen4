console.log("Test");

if(3 < 5){
    console.log("Tri je manje od pet");
}

if(3 < -5){
    console.log("Tri je manje od pet");
}

let a = 50;
let b = 50;
if(a < b){
    console.log(`${a} je manje od ${b}`);
}
console.log("Proba");

let x = 5;
let y = "5";
if(x == y){
    console.log(`${x} i ${y} su jednake vrednosti`);
}

if(x === y){
    console.log(`${x} i ${y} su jednaki po tipu i po vrednosti`);
}

// IF - ELSE
if(a <= b){
    console.log(`${a} je manje ili jednako ${b}`);
} else {
    console.log(`${a} nije manje od ${b}`);
}

// Zad: Da li su dve vrednosti jednake?
let v1 = 5;
let v2 = 6;

// 1. način
if(v1 == v2){
    console.log("Jednake su");
} else {
    console.log("Nisu jednake");
}

// 2. način
if(v1 != v2){
    console.log("Nisu jednake");
} else {
    console.log("Jednake su");
}

//2. Zadatak
let temp = -3;
if(temp >= 0){
    console.log("Pozitivna temperatura");
} else {
    console.log("Negativna temperatura");
}

//3. Zadatak (15. slajd)
let divPol = document.getElementById('pol');
let pol = "z";
if(pol == "m"){
    //Muški pol
    divPol.innerHTML = `<img src="slike/man.png">`;
} else {
    //Ženski pol
    divPol.innerHTML = `<img src="slike/woman.png">`;
}

//4. Zadatak
let datum = new Date();
let sati = datum.getHours();
if(sati >= 12){
    console.log("Popodne");
} else {
    console.log("Jutro");
}

//5. Zadatak
let godRodj = 1994;
let godTren = datum.getFullYear();
let godOsobe = godTren - godRodj;
if(godOsobe >= 18){
    console.log("Osoba je punoletna");
} else {
    console.log("Osoba je maloletna");
}

//Primer: Višestruko grananje (IF - ELSE IF - ELSE)
let br = 35;
if(br <= 10){
    console.log("Broj je u prvoj desetici");
} else if(br <= 20){
    console.log("Broj je u drugoj desetici");
} else if(br <= 30){
    console.log("Broj je u trećoj desetici");
} else {
    console.log("Broj je veći od 30");
}

console.log("IF - ELSE IF - ELSE je završen");

// 6. Zadatak
let b1 = 5;
let b2 = 6;
let b3 = 7;

//pretpostavka
let najveci = b1;
if(b2 > najveci){
    najveci = b2;
}
if(b3 > najveci){
    najveci = b3;
}

console.log(`Najveći je: ${najveci}`);

// 7. Zadatak
poeni = 87;
if(poeni <= 50){
    console.log("Pao ispit");
} else if(poeni <= 60){
    console.log("Ocena 6");
} else if(poeni <= 70){
    console.log("Ocena 7");
} else if(poeni <= 80){
    console.log("Ocena 8");
} else if(poeni <= 90){
    console.log("Ocena 9");
} else if(poeni <= 100){
    console.log("Ocena 10");
} else {
    console.log("Prekoračen broj poena");
}

//8. Zadatak
let danNedelje = datum.getDay();
if(danNedelje == 0){
    console.log("Vikend");
} else if(danNedelje == 6){
    console.log("Vikend");
} else {
    console.log("Radni dan");
}

//9. Zadatak
if(sati < 12){
    console.log("Dobro jutro");
} else if(sati < 18){
    console.log("Dobar dan");
} else {
    console.log("Dobro veče");
}

// 10. Zadatak
let dd1 = 25;
let m1 = 7;
let g1 = 2020;

let dd2 = 25;
let m2 = 6;
let g2 = 2020;


if(g1 < g2){
    console.log(`${dd1}.${m1}.${g1}`);
} else if(g2 < g1){
    console.log(`${dd2}.${m2}.${g2}`);
} else {
    if(m1 < m2){
        console.log(`${dd1}.${m1}.${g1}`);
    } else if(m2 < m1){
        console.log(`${dd2}.${m2}.${g2}`);
    } else {
        if(dd1 < dd2){
            console.log(`${dd1}.${m1}.${g1}`);
        } else if(dd2 < dd1){
            console.log(`${dd2}.${m2}.${g2}`);
        } else {
            console.log("Datumi su isti");
        }
    }
}

// 11. Zadatak
if(sati >= 9){
    if(sati<17){
        console.log("Radno vreme");
    } else {
        console.log("Van radnog vremena");
    }
} else {
    console.log("Van radnog vremena");
}