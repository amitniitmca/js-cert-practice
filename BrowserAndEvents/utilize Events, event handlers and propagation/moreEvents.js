const buttonComp = document.getElementById("clickButton");

buttonComp.addEventListener("click", () => console.log("Button Clicked"));

buttonComp.addEventListener("mouseover", (event) => {
    event.target.style.color = "white";
    event.target.style.background = "black";
});

buttonComp.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
    event.target.style.background = "white";
});