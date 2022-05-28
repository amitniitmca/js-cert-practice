function buttonClickHandler(){
    console.log("Button is clicked");
}

const buttonComp = document.getElementById("buttonComp");
buttonComp.addEventListener('click', buttonClickHandler);

console.log("Normal Message Printed");