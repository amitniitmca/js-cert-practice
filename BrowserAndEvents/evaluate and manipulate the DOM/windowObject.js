const forwardButton = document.getElementById("forwardButton");
const backwardButton = document.getElementById("backwardButton");
const scrollButton = document.getElementById("scrollButton");
const scrollInput = document.getElementById("scrollInput");
const linkedInButton = document.getElementById("linkedInButton");
window.minScroll = 100;
forwardButton.onclick = () => window.history.forward();
backwardButton.onclick = () => window.history.back();
linkedInButton.onclick = () => window.location.href = "https://www.linkedin.com";

scrollButton.onclick = () => {
    let val = scrollInput.value;
    if(val === ""){
        val = this.minScroll;
    }
    else if(Number.isInteger(Number(val))){
        val = Number(val);
    }
    else{
        val = this.minScroll;
    }
    console.log(0, val);
    window.scrollTo(0, val);
};