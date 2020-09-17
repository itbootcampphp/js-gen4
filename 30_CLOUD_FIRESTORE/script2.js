// Dohvatanje dokumenata (get)
/*
let doc1 = db.collection('customers').doc('customer-01');

doc1.get()
.then(doc => {
    console.log(doc.id, doc.exists);
    if(doc.exists) {
        let data = doc.data();
        console.log(data);
    }
    else {
        console.log(`No document with id ${doc.id}`);
    }
})
.catch(err => {
    console.log(`Error getting document: ${err}`);
});
*/


// Dohvatanje svih dokumenata iz odredjene kolekcije
/*
db.collection('customers').get()
.then(snapshot => {
    if(!snapshot.empty) {
        // console.log(snapshot);
        console.log(`Getting documents from collection, total ${snapshot.size} documents`);
        let allDocuments = snapshot.docs; // niz dokumenata
        allDocuments.forEach(doc => {
            console.log(doc.id, doc.data());
        });
        //console.log(allDocuments[2].data());
    }
    else {
        console.log(`No documents to retrive from collection`);
    }
})
.catch(err => {
    console.log(`Cannot get documents: ${err}`);
});
*/


// Prikaz dokumenata u odredjenom redosledu
/*
db.collection('customers')
.orderBy("name")
.orderBy("salary", "desc")
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`No documents to retrieve from collection`);
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/


// Prikaz ogranicenog broja dokumenata
/*
db.collection('customers')
//.orderBy("name")
.orderBy("salary", "desc")
.limit(3)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`No documents to retrieve from collection`);
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});
*/


// Filtriranje dokumenata

// Prikaz svih korisnika cija je plata veca od 500
db.collection('customers')
.where('salary', '<=', 500)
.where('age', '==', 35)
.get()
.then(snapshot => {
    if(!snapshot.empty) {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    }
    else {
        console.log(`No documents to retrieve from collection`);
    }
})
.catch(err => {
    console.log(`Error getting documents: ${err}`);
});