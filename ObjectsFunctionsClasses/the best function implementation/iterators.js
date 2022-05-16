function progressiveNumbers(){
    let num=1, sq, cube;
    let numberList = [];
    const numberIterator = {
        next(){
            if(num > 10){
                return numberList;
            }
            sq = num*num;
            cube = sq*num;
            numberList.push({number:num, square:sq, cube:cube});
            num++;
            return numberList;
        }
    }
    return numberIterator;
}

let myNumber = progressiveNumbers();