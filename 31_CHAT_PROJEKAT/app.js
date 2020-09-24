import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

// DOM
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

let rooms = document.querySelector('nav');
let ulChatList = document.querySelector('ul');

//Provera u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    } else {
        return "anonymous";
    }
}
let checkRoom = () => {
    if(localStorage.roomLS){
        return localStorage.roomLS;
    } else {
        return "general";
    }
}

//Kreiranje instaci klasa
let chatroom1 = new Chatroom(checkRoom(), checkUsername());
let chatUI1 = new ChatUI(ulChatList);

//Ispis poruka na stranici
chatroom1.getChats( data => {chatUI1.templateLI(data)} );

// Event Listenes

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom1.addChat(message)
        .then( () => formMessage.reset())
        .catch( error => console.log(error));
});

//Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit' , e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom1.updateUsername(newUsername);
    formUsername.reset();
});

//Promena soba
rooms.addEventListener('click' , e => {
    if(e.target.tagName == "BUTTON"){
        let newRoom = e.target.getAttribute('id');
        chatroom1.updateRoom(newRoom);

        chatUI1.clear();
        chatroom1.getChats( data => {
            chatUI1.templateLI(data);
        });
    }
});

//chatroom1.addChat('Zravo svima! Kako ste?');

// chatroom1.addChat('HR trening počinje!')
//     .then( () => {console.log('Uspešno dodat čet!');})
//     .catch( err => {console.log(err);});

// Ispis četova u konzoli
//chatroom1.getChats(data => {console.log(data);});
//chatroom1.updateRoom('general');