class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Update polja
    updateUsername(uu){
        //Suštinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
        this.username = uu;
    }

    updateRoom(ur){
        this.room = ur;
        console.log("Updated room");
        if(this.unsub){
            this.unsub();
        }
    }

    //Dodavanje nove poruke
    async addChat(mess){

        //Dohvatanje tekućeg datuma koji je potreban za timestamp
        let date = new Date();

        // Kreiranje objekta/dokumenta koji prosleđujemo bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        //Da sačuvamo dokument u bazi
        let response = await this.chats.add(docChat); 
        return response; // Vraćam Promise
    }

    // Dokumenti koji su dodati bazi
    getChats(callback){
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot( snapshot => {
            snapshot.docChanges().forEach( change => {
                if(change.type == 'added'){
                    //update četa (dodaj novu poruku na ekran) 
                    callback(change.doc.data());
                }
            });
        });
    }

}
//Nova instanca klase (Novi objekat)
let chatroom1 = new Chatroom('js', 'SS');
console.log(chatroom1.username, chatroom1.room);
//chatroom1.addChat('Zravo svima! Kako ste?');

let chatroom2 = new Chatroom('general', 'MĐ');
console.log(chatroom2.username, chatroom2.room);
// chatroom2.addChat('HR trening počinje!')
//     .then( () => {console.log('Uspešno dodat čet!');})
//     .catch( err => {console.log(err);});

let chatroom3 = new Chatroom('tests', 'JM');
console.log(chatroom3.username, chatroom3.room);
//chatroom3.addChat('Test test test');

let chatroom4 = new Chatroom('tests', 'SS');
console.log(chatroom4.username, chatroom4.room);

//chatroom4.getChats(data => {console.log(data);});
chatroom4.updateRoom('js');
console.log(chatroom4.username, chatroom4.room);
chatroom4.getChats(data => {console.log(data);});

// Ispis četova u konzoli
//chatroom1.getChats(data => {console.log(data);});
