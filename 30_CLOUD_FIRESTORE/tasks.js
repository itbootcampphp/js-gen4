let ul = document.querySelector("ul");
let form = document.querySelector("form");
/*
db.collection('tasks')
.orderBy('start_date', 'desc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let obj = doc.data();
        let li = document.createElement('li');
        li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`;
        if(obj.priority) {
            li.style.color = "red";
        }
        ul.appendChild(li);
    });
})
.catch();
*/

db.collection('tasks')
.onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        // console.log(change);
        // change.type - tip promene dokumenta ("added", "removed")
        // change.doc - dokument na koji se odnosi promena
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;
        if(type == "added") {
            let obj = doc.data();
            let li = document.createElement('li');
            li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`;
            if(obj.priority) {
                li.style.color = "red";
            }
            li.setAttribute('data-id', id);
            ul.appendChild(li);
            let button = document.createElement('button');
            button.innerHTML = 'delete task';
            li.appendChild(button);
        }
        else if(type == "removed") {
            /*
            let lis = document.querySelectorAll('li');
            lis.forEach(li => {
                if(li.getAttribute('data-id') == id) {
                    li.remove();
                }
            });
            */
           let li = document.querySelector(`li[data-id=${id}]`);
           li.remove();
        }
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(this.title, this.start_date, this.due_date, this.priority, this.description);
    let title = this.title.value;
    let startDate = new Date(this.start_date.value);
    let dueDate = new Date(this.due_date.value);
    let priority = false;
    if(this.priority.checked) {
        priority = true;
    }
    let description = this.description.value;
    // console.log(title, startDate, dueDate, priority, description);
    let task = {
        title: title,
        start_date: firebase.firestore.Timestamp.fromDate(startDate),
        due_date: firebase.firestore.Timestamp.fromDate(dueDate),
        priority: priority,
        description: description
    };
    db.collection('tasks').doc()
    .set(task)
    .then(() => {
        alert('Uspesno kreiran task!');
    })
    .catch(err => {
        alert(`Greska pri kreiranju taska: ${err}`);
    });
});

ul.addEventListener('click', event => {
    if(event.target.tagName === "BUTTON") {
        let id = event.target.parentElement.getAttribute('data-id');
        // console.log(id);
        db.collection('tasks').doc(id)
        .delete()
        .then(() => {
            alert('Task uspesno obrisan!');
        })
        .catch(err => {
            alert(`Greska pri brisanju taska: ${err}`);
        });
    }
});