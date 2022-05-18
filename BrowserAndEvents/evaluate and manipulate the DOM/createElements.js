const paraContentComp = document.getElementById("paraContent");

const p1 = document.createElement("p");
p1.innerHTML = "This is paragraph 1";
const p2 = document.createElement("p");
p2.innerText = "This is paragraph 2";

paraContentComp.appendChild(p1);
paraContentComp.appendChild(p2);