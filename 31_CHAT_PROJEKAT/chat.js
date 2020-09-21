class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
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
        return response;
    }
}
//Nova instanca klase (Novi objekat)
let chatroom1 = new Chatroom('js', 'SS');
console.log(chatroom1.username, chatroom1.room);
//chatroom1.addChat('Zravo svima!')

let chatroom2 = new Chatroom('general', 'MĐ');
console.log(chatroom2.username, chatroom2.room);
// chatroom2.addChat('HR trening!')
//     .then( () => {console.log('Uspešno dodat čet!');})
//     .catch( err => {console.log(err);});

let chatroom3 = new Chatroom('tests', 'JM');
console.log(chatroom3.username, chatroom3.room);

let chatroom4 = new Chatroom('tests', 'SS');
console.log(chatroom4.username, chatroom4.room);