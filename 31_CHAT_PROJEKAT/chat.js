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
}
//Nova instanca klase (Novi objekat)
let chatroom1 = new Chatroom('js', 'SS');
console.log(chatroom1.username, chatroom1.room);

let chatroom2 = new Chatroom('general', 'MĐ');
console.log(chatroom2.username, chatroom2.room);

let chatroom3 = new Chatroom('tests', 'JM');
console.log(chatroom3.username, chatroom3.room);
