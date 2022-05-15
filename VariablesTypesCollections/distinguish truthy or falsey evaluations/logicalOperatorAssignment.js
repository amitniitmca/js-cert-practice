let int1 = 25;
let int2 = 30;
let int3 = int1 && int2;
let int4 = int1 || int2;
console.log(int1+", "+int2+", "+int3+", "+int4);

let string1 = "text";
let string2 = "longtext";
let float1 = 30.6;
let big1 = 30n;

let var1 = int1 && string1;
let var2 = int1 || string1;
let var3 = int1 || float1;
let var4 = int1 || big1;
console.log(var1+", "+var2+", "+var3+", "+var4);

let var5 = float1 && string1;
let var6 = float1 || string1;
let var7 = big1 && string1;
let var8 = big1 || string1;
console.log(var5+", "+var6+", "+var7+", "+var8);

let var9 = float1 && big1;
let var10 = float1 || big1;
let var11 = string1 && string2;
let var12 = string1 || string2;
console.log(var9+", "+var10+", "+var11+", "+var12);

let boolean1 = true;
let boolean2 = false;

let var13 = int1 && boolean2;
let var14 = float1 && boolean2;
let var15 = big1 && boolean2;
let var16 = string1 && boolean2;

console.log(var13+", "+var14+", "+var15+", "+var16);

let var17 = int1 || boolean2;
let var18 = float1 || boolean2;
let var19 = big1 || boolean2;
let var20 = string1 || boolean2;

console.log(var17+", "+var18+", "+var19+", "+var20);