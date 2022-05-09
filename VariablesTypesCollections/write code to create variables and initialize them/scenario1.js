/*
1.Declare a variable named ‘numEmployees’ to store the number of employees on the page. Its initial value should be 0.
2.Declare a constant named ‘maxEmployees’ to store the number 50 for the maximum employees that should be retrieved in eachrequest.
3.Declare a variable named ‘name’ to store the name of the employee. Its initial value should be an empty string.
4.Declare a variable named ‘salary’ to store the salary of the employee. Its initial value should be null.
5.Declare an object named ‘address’ to store ‘number’, ‘street’, ‘city’, ‘state’, ‘zip’, and ‘country’. 
The ‘country’property should have an initial value of ‘United States’. All other values should be null.
6.Declare a variable named ‘active’ to store whether the employee is active. Its initial value should be undefined.
7.Declare a variable named ‘retrieved’ to store whether the employee information has been received. Its initial value shouldbe false.
*/

let numEmployees = 0;
const maxEmployees = 50;
let name = '';
let salary = null;
function address() {
    this.number = null;
    this.street = null;
    this.city = null;
    this.state = null;
    this.country = "United States";
}
let active;
let retrieved = false;