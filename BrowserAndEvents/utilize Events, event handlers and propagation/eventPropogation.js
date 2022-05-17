const outerMost = document.getElementById("outermost");
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerMost = document.getElementById("innermost");

outerMost.addEventListener("click", (event) => console.log(`${event.currentTarget.id} clicked`), true);
outer.addEventListener("click", (event) => console.log(`${event.currentTarget.id} clicked`), true);
inner.addEventListener("click", (event) => console.log(`${event.currentTarget.id} clicked`), true);
innerMost.addEventListener("click", (event) => console.log(`${event.currentTarget.id} clicked`), true);