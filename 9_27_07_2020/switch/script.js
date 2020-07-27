console.log("Switch");

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

