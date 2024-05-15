const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

renderLastRegistered();
console.log();

function displayMessage(type,message) {
    msgDiv.textContent = message;
}