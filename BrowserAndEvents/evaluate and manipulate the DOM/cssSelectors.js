console.log("div's : "+document.getElementsByTagName("div").length);
console.log("p's : "+document.getElementsByTagName("p").length);
console.log("parent's tag : "+document.getElementById("parent").tagName);
console.log("child 1 tag : "+document.getElementById("child1").tagName);
console.log("child 2 tag : "+document.getElementById("child2").tagName);
console.log("child 3 tag : "+document.getElementById("child3").tagName);
console.log("child 4 tag : "+document.getElementById("child4").tagName);
console.log("child 5 tag : "+document.getElementById("child5").tagName);
console.log("child 6 tag : "+document.getElementById("child6").tagName);
console.log("child 7 tag : "+document.getElementById("child7").tagName);
console.log("child 8 tag : "+document.getElementById("child8").tagName);
console.log("child 9 tag : "+document.getElementById("child9").tagName);
console.log("child 10 tag : "+document.getElementById("child10").tagName);
console.log("divClass's : "+document.getElementsByClassName("divClass").length);
console.log("heading's : "+document.getElementsByClassName("heading").length);
console.log("para's : "+document.getElementsByClassName("para").length);
console.log("inputText's : "+document.getElementsByClassName("inputText").length);
console.log("inputText's : "+document.querySelectorAll("inputText").length);
console.log("4th Child :"+document.getElementsByTagName("input:nth-child(4)"));

const paras = document.querySelectorAll(".para");
for(let para of paras){
    para.style.color = "blue";
    para.style.background = "yellow";
}

const headings = document.querySelectorAll(".heading");
for(let heading of headings){
    heading.style.color = "red";
    heading.style.background = "cyan";
}

const inputTexts = document.querySelectorAll("input[type=text]");
for(let inputText of inputTexts){
    inputText.style.color = "cyan";
    inputText.style.background = "black";
}