let var1;

if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}

var1 = false;
if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}

var1 = '';
if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}

var1 = null;
if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}

var1 = -0;
if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}

var1 = Number("text");
if (var1) {
    console.log(var1 + " is true");
}
else {
    console.log(var1 + " is false");
}