export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub; //undefined na početku tj. kada se kreira objekat
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
        localStorage.setItem('usernameLS', uu);
    }

    updateRoom(ur){
        this.room = ur;
        localStorage.setItem('roomLS', ur);
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
