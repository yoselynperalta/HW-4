const userNameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

renderLastRegistered();

function displayMessage(type,message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class',type);
}

function renderLastRegistered(){
    const email = localStorage.getItem('#username');
    const title = localStorage.getItem('#title');
    const content = localStorage.getItem('#content');
}



