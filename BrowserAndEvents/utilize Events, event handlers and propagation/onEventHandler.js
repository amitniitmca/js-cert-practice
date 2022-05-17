const button = document.getElementById("click-button");

button.onclick = () => console.log("Button Clicked");

document.onclick = (event) => {
    console.log(`Click at (${event.clientX}, ${event.clientY})`);    
};

