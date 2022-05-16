let employee = {
    firstName : "Amit",
    lastName : "Kumar",
    highQual : "MCA",
    designation : "Associate Salesforce Consultant",
    company : "Concretio Apps Private Limited",
    onNoticePeriod : true,
    currentCompany: true,
    dateOfBirth : new Date(1988, 1, 26),
    dateOfJoining : new Date(2020, 9, 28),
    dateOfRelease : null
};

employee.fullName = employee.firstName+" "+employee.lastName;
delete employee.firstName;
delete employee.lastName;
console.log(employee);

console.log(employee.fullName);
console.log(employee["fullName"]);

for(const prop in employee){
    console.log(prop+" :==> "+employee[prop]);
}

console.log(Object.keys(employee));
console.log(Object.getOwnPropertyNames(employee));