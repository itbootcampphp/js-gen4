console.log("Switch");

// 1.
let dan = 1
switch(dan){
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Četvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;
    default:
        console.log("Greška");
}


// 2.

let ocena = 1;
switch(ocena){
    case 1:
        console.log("Nedovoljan");
        if(ocena > 0){
            console.log("Veca od 0");
        }
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4: case 5:
        console.log("Vrlo dobar ili odličan!");
        break;
    default:
        console.log("Ne znam za tu ocenu :( ");
}

// 3.
let b = 1
switch(b){
    case 0:
        console.log("Nula");
        break;
    case 2:
        console.log("Dvojka");
        break;
    case 4:
        console.log("Četvorka");
        break;
    case 6:
        console.log("Šestica");
        break;
    case 8:
        console.log("Osmica");
        break;
    default:
        console.log("Loš unos");
}


// 4. 
let br1 = 5;
let br2 = 2;
let op = "d";
let rez;

switch(op){
    case "s":
        rez = br1 + br2;
        console.log(`${br1} + ${br2} = ${rez}`);
        break;
    case "o":
        rez = br1 - br2;
        console.log(`${br1} - ${br2} = ${rez}`);
        break;
    case "m":
        rez = br1 * br2;
        console.log(`${br1} * ${br2} = ${rez}`);
        break;
    case "d":
        if(br2 == 0){
            console.log("Nije dozvoljeno deliti nulom");
        } else {
            rez = br1 / br2;
            console.log(`${br1} / ${br2} = ${rez}`);
        }
        break;
    default:
        console.log("Došlo je do greške");
}

//5.
let datum = new Date();
let danNed = datum.getDay();
switch(danNed){
    case 1:
        console.log("Do vikenda preostalo 5" );
        break;
    case 2:
        console.log("Do vikenda preostalo 4" );
        break;
    case 3:
        console.log("Do vikenda preostalo 3" );
        break;
    case 4:
        console.log("Do vikenda preostalo 2" );
        break;
    case 5:
        console.log("Do vikenda preostalo 1" );
        break;
    default:
        console.log("Vikend :))) !!!");
}

//6.
let mesec = datum.getMonth();
mesec += 1;
switch(mesec){
    case 1:
        console.log("Januar" );
        break;
    case 2:
        console.log("Februar" );
        break;
    case 3:
        console.log("Mart" );
        break;
    case 4:
        console.log("April" );
        break;
    case 5:
        console.log("Maj" );
        break;
    case 6:
        console.log("Jun" );
        break;
    case 7:
        console.log("Jul" );
        break;
    case 8:
        console.log("Avgust" );
        break;
    case 9:
        console.log("Septembar" );
        break;
    case 10:
        console.log("Oktobar" );
        break;
    case 11:
        console.log("Novembar" );
        break;
    case 12:
        console.log("Decembar" );
        break;
    default:
        console.log("Greška");
}

//7.
switch(mesec){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("31 dan");
        break;
    case 4: case 6: case 9: case 11:
        console.log("30 dan");
        break;
    case 2:
        if((mesec%4==0 && mesec%100!=0) || mesec%400==0){
            console.log("29 dana");
        } else {
            console.log("28 dana");
        }
}

//8.
let paragraf = document.getElementById("mojParagraf");
let boja = "red";
switch(boja){
    case "red": case "green": case "blue":
        paragraf.style.color = boja;
        break;
    default:
        paragraf.style.color = "yellow";
}