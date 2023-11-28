// explanation on agenda 8/aug/2015
// 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
// const person = {
//   name: "michel",
// };

function Person(fName, lName) {
  //create constructor u can not add new property or new method to constructor to add use prototype
  (this.firstName = fName), (this.lastName = lName);
}
// console.log(person);

// Person.prototype.gender = "Male";
// Person.prototype.age = 30;
// Person.prototype.age = 30;
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
// what will happen if i change the prototype value
function Person() {
  this.name = "amal";
}
Person.prototype.age = 60;
//now create a new object:
const person3 = new Person();
Person.prototype = { age: 65 };
const person4 = new Person();
console.log(person3);
console.log(person4);

console.log(person3.age);
console.log(person4.age);
//create two objects person1 and person2
// const person1 = new Person("michel", "kadi");

// const person2 = new Person("rita", "josephine");
// console.log(person1);

// Person {firstName: 'michel', lastName: 'kadi'}
// firstName: "michel"
// lastName: "kadi"
// [[Prototype]]: Object
// getFullName: ƒ ()
// constructor: ƒ Person(fName, lName)[[Prototype]]: Object

// Person {firstName: 'michel', lastName: 'kadi'}
//we can access getFullName for the 2 object by:
// console.log(person1.getFullName()); //output michel kadi
// console.log(person2.getFullName());
// Person {firstName: 'michel', lastName: 'kadi'}
// firstName: "michel"
// lastName: "kadi"
// [[Prototype]]: Object
// age: 30
// gender: "Male"
// constructor: ƒ Person(fName, lName)
// [[Prototype]]: Object
// console.log(person2);
//Person {firstName: 'rita', lastName: 'josephine'}
// firstName: "rita"
// lastName:"josephine"
// [[Prototype]]:Object
// age:30
// gender:"Male"
// constructor: ƒ Person(fName, lName)
// [[Prototype]]:Object
// console.log(person1.gender); //inherit the propertyof prototype
// console.log(person1.age);
//add a method to constructor
