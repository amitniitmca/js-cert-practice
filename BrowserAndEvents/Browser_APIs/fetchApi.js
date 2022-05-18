const divComp = document.getElementById("dataDiv");

document.getElementById("getButton").onclick = async () =>{
    try {
        let string = "";
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2", {method: "GET"});
        const data = await response.json();
        for(const key in data){
            string += `${key} ==> ${JSON.stringify(data[key])} <br />`;
        }
        divComp.innerHTML = string;
        divComp.style.color = "blue";
    } catch (error) {
        divComp.innerHTML = error;
        divComp.style.color = "red";
    }
}