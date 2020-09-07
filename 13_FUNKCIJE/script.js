console.log("Funkcije!");

// Prazna funkcija - Ne prosleđujemo joj ništa kao vrednost
function mojaFunkcija(){
    console.log("Moja funkcija");
}

mojaFunkcija();
for(let i=1; i<5; i++){
    console.log(i);
}
mojaFunkcija();
console.log("Hello world!");
mojaFunkcija();


// Funkcija kojoj se prosleđuje jedna vrednost
let mojaPromenljiva = "Moja promenljivaaaaa";

function ispisiTekst(tekst){
    console.log(tekst);
}

ispisiTekst("Blabla");
ispisiTekst("Pravim web sajt");
ispisiTekst("Neki tekstttttt");
ispisiTekst(mojaPromenljiva);


// Funkcija kojoj se takođe prosleđuje jedna vrednost
function ispisiKorisnika(ime){
    console.log(`Ulogovani korisnik je ${ime}`);
    console.log(`Dobro došli!!!`);
}
ispisiKorisnika("Stefan");
ispisiKorisnika("Jelena");
ispisiKorisnika("Milena");

// Funkcija sa tri prosleđena parametra
function korisnik(ime, prezime, god){
    console.log(`Korisnik je: ${ime} ${prezime} ima ${god} godina`);
}
korisnik("Jelena", "Matejić", 25);
korisnik("Stefan", "Stanimirović", 30);
let a = "Milena";
let b = "Đorđević";
korisnik(a, b); //Vrednost koju ne prosledite je undefined

// Funkcija koja određuje zbir dva broja
function zbir(br1, br2){
    let rez = br1 + br2;
    console.log(rez);
}
zbir(2, 3);
zbir(-21, -5);
let x = 5;
let y = 7;
zbir(x, y);

// Funkcija koja VRAĆA rezultat
function zbirTri(br1, br2, br3){
    let rez = br1 + br2 + br3;
    return rez;
}

let z = zbirTri(1, 2, 5);
console.log("Rezultat je: " + z);
console.log("Rezultat je: " + zbirTri(4, 1, 7));

let i = zbirTri(1, 1, 1); //3
let j = zbirTri(2, 2, 2); //6
let k = zbirTri(3, 3, 3); //9
console.log(i, j, k);
let t = zbirTri(i, j, k);
console.log(t);

console.log(zbirTri( zbirTri(1,1,1) , zbirTri(2,2,2) , zbirTri(3,3,3)));
// zbirTri(3 , 6 , 9) = 18
zbir(i, j);

//Kada fukcija ISPISUJE, samo je pozovemo
//Kada funkcija VRAĆA (return), onda sačuvamo njenu vrednost negde, pa tek onda ispišemo

// 3. Vraća tačno ukoliko je broj neparan, u suprotnom vraća netačno
function neparanBroj(broj){
    if(broj%2 != 0){
        //neparan broj
        return true;
    } else {
        //paran broj
        return false;
    }
}

let nb = neparanBroj(5);
console.log(nb);

nb = neparanBroj(10);
console.log(nb);

if(nb == true){
    console.log(`Prosleđeni broj je neparan`);
} else {
    console.log(`Prosleđeni broj je paran`);
}

for(let i=0; i<10; i++){
    let pom = neparanBroj(i);
    if(pom == true){
        console.log(`Broj ${i} je neparan`);
    } else {
        console.log(`Broj ${i} je paran`);
    }
}

//4. Zadatak 
// Maks2 i Maks4 broja
function maks2(br1, br2){
    if(br1 > br2){
        return br1;
    } else {
        return br2;
    }
}

function maks4(br1, br2, br3, br4){
    let m1 = maks2(br1, br2);
    let m2 = maks2(br3, br4);
    let m3 = maks(m1, m2);
    return m3;
}

//5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.
function prikaziSliku(url){
    let divSlika = document.getElementById('slika');
    divSlika.innerHTML = `<img src="${url}">`;
}
prikaziSliku("slika1.jfif");

//8. Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenicetreba da bude jednaka vrednosti iteratora.

function ispisiRecenicu(recenica){
    let divRecenica = document.getElementById('recenica');
    for(let i=10; i<=30; i+=5){
        divRecenica.innerHTML += `<p style="font-size:${i}px"> ${recenica} </p>`;
    }
}
ispisiRecenicu("Festina lente");


/*
10. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.
*/

function deljiviSaTri(n, m){
    let br = 0;
    for(let i=n; i<=m; i++){
        if(i%3 == 0){
            console.log(i);
            br++;
        }
    }
    return br;
}

let dt = deljiviSaTri(11, 17);
console.log(`Broj brojeva deljivih sa tri je ${dt}`);

/*
11. Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
function sumiraj(n, m){
    let suma = 0;
    for(let i=n; i<=m; i++){
        suma += i; 
    }
    return suma;
}
let sm = sumiraj(3, 5);
console.log("Suma je: " + sm);

/*
12. Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
function mnozi(n, m){
    let proizvod = 1;
    for(let i=n; i<=m; i++){
        proizvod *= i; 
    }
    return proizvod;
}
let pr = mnozi(1, 6);
console.log("Proizvod je: " + pr);

/*
13. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
function aritmetickaSredina(n, m){
    let s = sumiraj(n, m);

    let br = 0;
    for(let i=n; i<=m; i++){
        br++;
    }

    let arsr = s/br;
    return arsr; //return s/br;
}
console.log("Aritmeticka sredina je: " + aritmetickaSredina(1, 6));

//2. način
function aritmetickaSredina1(n, m){
    let s = 0;
    let br = 0;
    for(let i=n; i<=m; i++){
        s += i;
        br++;
    }

    let arsr = s/br;
    return arsr; //return s/br;
}
console.log("Aritmeticka sredina je: " + aritmetickaSredina1(1, 6));


/*
14. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja
cifra 3 u intervalu od n do m.
Brojeve n i m proslediti kao parametre funkciji.
*/
function aritmetickaTri(n, m){
    let s3 = 0;
    let br3 = 0;
    for(let i = n; i <= m; i++){
        if(i%10 == 3){
            s3 += i;
            br3++;
        }
    }

    let arsr3 = s3/br3;
    return arsr3;
}

console.log("Aritmetička sredina kojima je poslednja cifra 3: " + aritmetickaTri(30, 50));

/*
17. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
*/
// n meseci traje
// a dinara osnovica
// d dinara povišica svakog meseca

/*
Primer:
n = 4
a = 1000
d = 300

i = 1: plata1 = 1000 = 1000 + 300*0
i = 2: plata2 = 1000 + 300 = 1000 + 300*1
i = 3: plata3 = 1000 + 300 + 300 = 1000 + 300*2
i = 4: plata4 = 1000 + 300 + 300 + 300 = 1000 + 300*3

ukupna plata = plata1 + plata2 + plata3 + plata4 = 1000 + 1300 + 1600 + 1900 = 5800
*/ 

function placenaPraksa(n, a, d){
    ukupnaPlata = 0;
    for(let i=1; i<=n; i++){
        let tekuciMesecPlata = a + (i-1)*d;
        ukupnaPlata += tekuciMesecPlata;
    }
    return ukupnaPlata;
}

n = 10;
a = 1000;
d = 300;
console.log(`Ukupna plata nakon ${n} meseci, sa osnovicom ${a} i povišicom ${d} iznosi ${placenaPraksa(n, a, d)}`);

//Nebojšin način
function ukupnaPlata (n, a, d){
    let ukupnaPlataZaSveMesece = a;
    for (let i = 2; i <= n; i++){
        a += d;
        ukupnaPlataZaSveMesece += a;
    }
    return ukupnaPlataZaSveMesece;
}

