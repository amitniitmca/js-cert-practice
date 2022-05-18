const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.strokeRect(10,10,200,150);

ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.strokeRect(160,180,200,150);

ctx.strokeStyle = "blue";
ctx.lineWidth = 20;
ctx.strokeRect(320,340,200,150);