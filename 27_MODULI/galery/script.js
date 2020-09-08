/*
// Prikaz slika preko general.js modula

import {generateImage} from "./modules/general.js";

for(let i = 1; i <= 3; i++) {
    let src = `images/photo${i}.jfif`;
    let img = generateImage(src);
    document.body.appendChild(img);
}
*/

/*
import {generateList, generateItem as generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

// Prikaz slika u okviru liste preko list.js modula
let ul = generateList(document.body);
for(let i = 1; i <= 3; i++) {
    let src = `images/photo${i}.jfif`;
    generateListItem(ul, src);
}

// Prikaz slika u okviru tabele preko table.js modula
let table = generateTable(document.body);
let tr = generateTableRow(table);
for(let i = 1; i <= 3; i++) {
    let src = `images/photo${i}.jfif`;
    generateTableItem(tr, src);
}
*/


import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

// Prikaz slika u okviru liste preko list.js modula
let ul = List.generateList(document.body);
for(let i = 1; i <= 3; i++) {
    let src = `images/photo${i}.jfif`;
    List.generateItem(ul, src);
}

// Prikaz slika u okviru tabele preko table.js modula
let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
for(let i = 1; i <= 3; i++) {
    let src = `images/photo${i}.jfif`;
    Table.generateItem(tr, src);
}