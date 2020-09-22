import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

//Provera username u lokalnoj memoriji
let checkUsername = () => {
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    } else {
        return "anonymous";
    }
}

let chatroom1 = new Chatroom('js', checkUsername());
//chatroom1.addChat('Zravo svima! Kako ste?');

// chatroom1.addChat('HR trening počinje!')
//     .then( () => {console.log('Uspešno dodat čet!');})
//     .catch( err => {console.log(err);});

// Ispis četova u konzoli
//chatroom1.getChats(data => {console.log(data);});
//chatroom1.updateRoom('general');

let ulChatList = document.querySelector('ul');
let chatUI1 = new ChatUI(ulChatList);
chatroom1.getChats( data => {chatUI1.templateLI(data)} );

// DOM
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

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