var counter = 0;
const val = document.getElementById("value");

document.getElementById("addButton").onclick = () => {
    counter++;
    val.innerHTML = counter;
};