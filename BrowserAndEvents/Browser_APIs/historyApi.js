document.getElementById("page1Button").onclick = () => {
    push({page:1}, "Page 1", "?page=1");
}

document.getElementById("page2Button").onclick = () => {
    push({page:2}, "Page 2", "?page=2"); 
}

document.getElementById("page3Button").onclick = () => {
    history.replaceState({page:3}, "Page 3", "?page=3")
}

document.getElementById("backButton").onclick = () => {
    history.back();
}

document.getElementById("forwardButton").onclick = () => {
    history.forward();
}

function push(state, title, url){
    history.pushState(state, title, url);
}

window.onpopstate = (event) => {
    document.getElementById("message").innerHTML = `Location : ${document.location} <br /> ${JSON.stringify(event.state)}`
}