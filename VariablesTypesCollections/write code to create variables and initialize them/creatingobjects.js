//  Student(){
//     this.name = "Sparsh Singh";
//     this.std = "VI";
//     this.show = function() {
//         console.log(this.name+" is studying in "+this.std+" standard");
//     }
// }
// var student1 = new Student();

let prop1 = "name";
let prop2 = 25;

var student = {
    prop1 : "Sparsh Singh",
    std : "VI",
    prop2 : "age",
    show : function(){
        console.log(this.prop1+" is studying in "+this.std+" standard");
        console.log(this.prop2);
    }
}


student.show();

