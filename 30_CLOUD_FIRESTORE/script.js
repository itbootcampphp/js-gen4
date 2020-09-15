//console.log(db);

// Pristup kolekciji:
let kolekcija1 = db.collection('users');
console.log(kolekcija1);

// Pristup dokumentu:
let dokument1 = kolekcija1.doc('sstanimirovic');
console.log(dokument1);

// Pristup dokumentu (bez medjupromenljive):
let dokument2 = db.collection('users').doc('jmatejic');
console.log(dokument2);

// Pristup dokumentu (direktno):
let d2 = db.doc('users/jmatejic');
console.log(d2);

/*
Za pristup dokumentu:
let document = db.collection('...').doc('...');
Kod dokumenata imamo sledece metode:
    CRUD (Create, Read, Update, Delete)
    document.set(...) => Postavlja polja (Create)
    document.get(...) => Dohvata vrednosti polja (Read)
    document.update(...) => Menja postojeca polja (Update)
    document.delete(...) => Brise postojeci dokument (Delete)
    Sve 4 metode kao rezultat vracaju PROMISE
    Nakon poziva ovih metoda, mogu da se lancaju
    then() i 
    catch()
*/

// Dodavanje novog dokumenta
let c2 = {
    name: "Lazar Lazarevic",
    age: 35,
    addresses: ["Ulica 1", "Ulica 2", "Ulica 3"],
    salary: 500.50
};

db.collection('customers').doc('customer-02').set(c2)
.then(() => {
    console.log('Customer sucessfully added!');
})
.catch(error => {
    console.log(`Cannot add document: ${error}`);
});

// Dodavanje novog dokumenta bez zadavanja id dokumenta
let c3 = {
    name: "Mika",
    age: 27,
    adrresses: ["Ulica2", "Ulica4"],
    salary: 490.45
};

/*
db.collection('customers').doc().set(c3)
.then(() => {
    console.log('Customer sucessfully added!');
})
.catch(error => {
    console.log(`Cannot add document: ${error}`);
});
*/

let dodatno = {
    grad: "Niš",
    opstina: "Palilula"
};
let opcija = {
    merge: true
};

db.collection('customers').doc('customer-02').set(dodatno, opcija)
.then(() => {
    console.log('Customer sucessfully added!');
})
.catch(error => {
    console.log(`Cannot add document: ${error}`);
});

console.log("Zdravo!!!");


// Dodavanje dokumenta sa timestamp poljima

let datum1 = new Date("2020-09-15 10:00:00");
let datum2 = new Date("2020-09-15 12:00:00");

let task = {
    name: "Fudbal",
    priority: false,
    description: "Fudbal sa Perom, Mikom, Zikom",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2)
};

db.collection('tasks').doc('task-02').set(task)
.then(() => {
    console.log('Task sucessfully added!');
})
.catch(error => {
    console.log(`Cannot add task: ${error}`);
});


// Menjanje postojeceg dokumenta
let taskUpdated = {
    description: "Fudbal sa drustvom ako stignem domaci da uradim"
};

db.collection('tasks').doc('task-03').update(taskUpdated)
.then(() => {
    console.log('Task sucessfully updated!');
})
.catch(error => {
    console.log(`Cannot update task: ${error}`);
});


// Brisanje dokumenta
db.collection('tasks').doc('task-03').delete()
.then(() => {
    console.log('Task sucessfully deleted!');
})
.catch(error => {
    console.log(`Cannot delete task: ${error}`);
});

// Brisanje polja u dokumentu
db.collection('tasks').doc('task-02').update({
    priority: firebase.firestore.FieldValue.delete()
})
.then(() => {
    console.log('Task field sucessfully deleted!');
})
.catch(error => {
    console.log(`Cannot delete task field: ${error}`);
});