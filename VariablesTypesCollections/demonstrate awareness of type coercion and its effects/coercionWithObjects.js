const Student = {
    name: "Amit Kumar",
    age: 34,
    valueOf: function () {
        return this.age;
    },
    toString: function () {
        return this.name + " is " + this.age + " years old";
    }
}

if (Student) {
    console.log(Student + ' as true');
}
else {
    console.log(Student + ' as false');
}

console.log(Student + 1);
console.log("Student : " + Student);