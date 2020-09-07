console.log(document);
console.log(typeof document);
console.log(document.URL);

console.log(document.links);
console.log(document.anchors);

// Dohvatanje svih elemenata sa datom klasom
let elements = document.getElementsByClassName('links');
console.log(elements);

// Dohvatanje svih elemenata sa zadatim tagom
let links = document.getElementsByTagName('a');
console.log(links);

// Dohvatanje svih elemenata sa zadatom vrednoscu name atributa
let temp = document.getElementsByName('link');
console.log(temp);

// Prolazak kroz clanove kolekcije preko for petlje
for(let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

// Prolazak kroz clanove kolekcije preko forEach petlje
/*
HTML kolekcija ne obezbedjuje forEach petlju
elements.forEach(elem => {
    console.log(elem);
});
*/

let elementsArray = Array.from(elements);
elementsArray.forEach(elem => {
    console.log(elem);
});

// Dohvatanje PRVOG elementa koji zadovoljava validan CSS selektor
let link = document.querySelector("div a:nth-child(2)");
console.log(link);

// Dohvatanje SVIH elemenata koji zadovoljavaju validan CSS selektor
let linksDiv = document.querySelectorAll("div.links a");
console.log(linksDiv);

// Kretanje kroz NodeList je dozvoljeno i for i forEach petljom
for(let i = 0; i < linksDiv.length; i++) {
    console.log(linksDiv[i]);
}

linksDiv.forEach(link => {
    console.log(link);
});

// Menjanje sadrzaja HTML taga
link.innerHTML = "<span style = 'font-style: italic'>Novi tekst</span> linka";

// Menjanje pojedinacnog atributa
// 1. nacin: 
// link.target = "_blank";

// 2. nacin:
link.setAttribute('target', '_blank');

// slika.src = "images/slika.jpg";
// slika.alt = "Tekst koji se prikazuje kada nema slike";

// Menjanje stila elementa
// 1. nacin:
link.style.color = 'red';
link.style.backgroundColor = 'orange';
link.style.textDecoration = 'none';
//link.style.border = "1px solid black";
link.style.borderRadius = "50%";

// 2. nacin:
//link.setAttribute('style', 'color: red; background-color: orange; text-decoration: none;');


// Dodavanje vrednosti atributa
link.innerHTML += " za kliktanje";

link.style.border = "1px";
link.style.border += " solid";
link.style.border += " black";


// Svakom paragrafu dodati broj i^2, gde je i redni broj paragrafa u dokumentu
let paragrafi = document.querySelectorAll("p");
paragrafi.forEach((p, i) => {
    let kv = (i + 1) * (i + 1);
    p.innerHTML += kv;
});

// Menjanje target atributa svim linkovima
for(let i = 0; i < links.length; i++) {
    if(links[i].target != "_blank") {
        links[i].target = "_blank";
    }
    else {
        links[i].target = "_top";
    }
}

console.log(paragrafi[1].parentNode);
console.log(document.querySelector("a:nth-child(2)").parentNode.parentNode);
console.log(paragrafi[1].parentNode.childNodes[3]);
console.log(paragrafi[1].parentNode.childNodes); // NodeList

// Kreiranje novog cvora u DOM stablu
let noviParagraf = document.createElement('p');
noviParagraf.innerHTML = "Tekst novog paragrafa";
noviParagraf.style.color = "blue";

// Dodavanje novog cvora kao dete nekog postojeceg elementa
document.body.appendChild(noviParagraf);

// document.body.innerHTML += "<p style='color: blue'>Tekst novog paragrafa</p>";

// Brisanje cvora iz DOM stabla
// document.body.removeChild(noviParagraf);

// Zamena cvora u DOM stablu
let noviLink = document.createElement('a');
noviLink.innerHTML = "Klikni";
noviLink.href = "https://www.google.com";

document.body.replaceChild(noviLink, noviParagraf);

// Dodavanje klase elementu
noviLink.classList.add('link');

let div = document.getElementsByClassName('links')[0];
let noviNoviLink = document.createElement('a');
noviNoviLink.innerHTML = "Klikni i ovde";
noviNoviLink.href = "#";
div.appendChild(noviNoviLink);


let p1 = document.getElementById('p1');
console.log(p1.innerHTML);
console.log(p1.textContent);

console.log(p1.innerHTML.includes('error'));
console.log(p1.textContent.includes('error'));