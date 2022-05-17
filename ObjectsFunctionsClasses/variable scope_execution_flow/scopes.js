var globalVar = 10;

function myFunction() {
    var functionVar = 20;
    let functionLet = 20;
    const functionConst = 30;
    console.log("==FUNCTION STARTS==");
    console.log(globalVar);
    console.log(functionLet);
    console.log(functionVar);
    console.log(functionConst);
    {
        var blockVar = 20;
        let blockLet = 20;
        const blockConst = 30;
        console.log("==BLOCK STARTS==");
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
        console.log("==BLOCK ENDS==");
    }
    console.log(blockVar);
    // console.log(blockLet);
    // console.log(blockConst);
    console.log("==FUNCTION ENDS==");
}

myFunction();
console.log("==OUTSIDE FUNCTION==");
console.log(globalVar);
// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);