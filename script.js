// complete this js code
function Person(name, age,greet) {
  
}
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
    
}
Employee.prototype = Object.create(Person.prototype);

// Fixing the constructor property of the Employee prototype
Employee.prototype.constructor = Employee;

// Adding jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
