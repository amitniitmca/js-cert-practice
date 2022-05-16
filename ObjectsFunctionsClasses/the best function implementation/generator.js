function* getNumbers(){
    let num=1, sq, cube;
    let numberList = [];
    while(num <= 10){
        sq = num*num;
        cube = sq*num;
        numberList.push({number:num, square:sq, cube:cube});
        num++;
        yield numberList;
    }
}

let mynumber = getNumbers();

// let complete;
// do{
//     const obj = mynumber.next();
//     console.log(obj);
//     complete = obj.done;
// }while(complete === false);