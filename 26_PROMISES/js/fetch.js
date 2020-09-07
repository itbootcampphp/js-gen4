console.log("Fetch");

let test = fetch("./json/fruits.json");
console.log(test); //Vraća promis -> Asocijacija: .then i .catch

fetch("./json/fruits.json").then( response => {
                                console.log('Resolved! :) ', response);
                            })
                            .catch( err => {
                                //Rejected vraća akko je pronlem sa mrežom
                                console.log('Rejected :( ', err); 
                            });