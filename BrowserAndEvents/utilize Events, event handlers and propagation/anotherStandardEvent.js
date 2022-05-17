function buttonClickHandler(){
    console.log('Button Clicked');
}

const buttonComp = document.getElementById("clickButton");
buttonComp.addEventListener("click", function(event){
    buttonClickHandler(event);
});