let student = {
    fullname : "Sparsh Singh",
    standard : "VI",
    scores : [],
    set score(value){
        this.scores.push(value);
    },
    get allScores(){
        return this.scores;
    },
    get sumOfScores(){
        return this.scores.reduce((acc, value) => acc+value, 0);
    },
    get avgScore(){
        return ((this.scores.reduce((acc, value) => acc+value, 0))/this.scores.length).toFixed(2);
    }
}


