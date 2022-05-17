function listFetcher(event){
    const tar = event.target;
    const ctar = event.currentTarget;
    console.log(`${tar.textContent} clicked of ${ctar.id} at (${event.clientX},${event.clientY})`);
}

const olComp1 = document.getElementById("Cities");
const olComp2 = document.getElementById("Languages");
olComp1.addEventListener("click", listFetcher);
olComp2.addEventListener("click", listFetcher);
