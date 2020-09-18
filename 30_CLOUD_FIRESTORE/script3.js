// Procitati sve klijente koji imaju konkretnu adresu (na primer, "Ulica1")
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Ulica 1')
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve klijente koji imaju platu >= 500
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve klijente koji imaju platu izmedju 300 i 800
/*
db.collection('customers')
.where('salary', '<=', 800)
.where('salary', '>=', 300)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve klijente koji imaju platu manju od 900, i imaju 30 godina
/*
db.collection('customers')
.where('salary', '<=', 900)
.where('age', '==', 35)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve klijente koji zive na barem jednoj od zadate dve adrese
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ["Ulica 2", "Ulica 3"])
//.orderBy('name')
//.limit(1)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve klijente koji imaju 22, 25 ili 28 godina
/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/




// Procitati sve zadatke koji su prioritetni
/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve zadatke koji treba da se izvrse u tekucoj godini
/*
let now = new Date();
let tekucaGodina = now.getFullYear();
let datum1 = new Date(tekucaGodina, 0, 1); // 1. januar 2020.
let datum2 = new Date(tekucaGodina + 1, 0, 1); // 1. januar 2021.
let datum1Timestamp = firebase.firestore.Timestamp.fromDate(datum1);
let datum2Timestamp = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', datum1Timestamp)
.where('due_date', '<', datum2Timestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve zadatke koji su zavrseni
/*
let now = new Date();
let datumTimestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection('tasks')
.where('due_date', '<=', datumTimestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/

// Procitati sve zadatke koji tek treba da pocnu
let now = new Date();
let datumTimestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection('tasks')
.where('start_date', '>', datumTimestamp)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log('No documents to retrieve');
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});