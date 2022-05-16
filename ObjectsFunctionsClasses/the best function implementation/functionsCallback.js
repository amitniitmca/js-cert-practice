let username = "User";

function greet(event){
    event.preventDefault();
    let message = `Hello ${username}, How are you?`;
    const divComp = document.getElementById("messageDiv");
    divComp.innerHTML = message;
}

const textComp = document.getElementById("inputText");
textComp.addEventListener("change", (event)=> username = event.target.value);

const buttonComp = document.getElementById("submitButton");
buttonComp.addEventListener("click", greet);