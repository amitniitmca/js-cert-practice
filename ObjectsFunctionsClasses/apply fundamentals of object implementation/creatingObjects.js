let employee = new Object();
employee.firstName = "Amit";
employee.lastName = "Kumar";
employee.highQual = "MCA";
employee.designation = "Java Web Developer";
employee.company = "Elegance Enterprises";
employee.onNoticePeriod = false;
employee.currentCompany = false;
employee.dateOfBirth = new Date(1988, 1, 26);
employee.dateOfJoining = new Date(2017, 3, 14);
employee.dateOfRelease = new Date(2020, 7, 16);

let employee1 = {
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

let employee2 = Object.create({});
employee2.firstName = "Amit";
employee2.lastName = "Kumar";
employee2.highQual = "MCA";
employee2.designation = "Developer Support Engineer";
employee2.company = "Salesforce";
employee2.onNoticePeriod = false;
employee2.currentCompany = false;
employee2.dateOfBirth = new Date(1988, 1, 26);
employee2.dateOfJoining = null;
employee2.dateOfRelease = null;

console.log(employee);
console.log(employee1);
console.log(employee2);

