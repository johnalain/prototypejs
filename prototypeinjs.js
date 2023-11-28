// explanation on agenda 8/aug/2015
// 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
const person = {
  name: "michel",
};
console.log(person);

function Person(fName, lName) {
  (this.firstName = fName), (this.lastName = lName);
}
// console.log(person);

Person.prototype.gender = "Male";
Person.prototype.age = 30;

const person1 = new Person("michel", "kadi");

const person2 = new Person("rita", "josephine");
console.log(person1);
// Person {firstName: 'michel', lastName: 'kadi'}
// firstName: "michel"
// lastName: "kadi"
// [[Prototype]]: Object
// age: 30
// gender: "Male"
// constructor: ƒ Person(fName, lName)
// [[Prototype]]: Object
console.log(person2);
//Person {firstName: 'rita', lastName: 'josephine'}
// firstName: "rita"
// lastName:"josephine"
// [[Prototype]]:Object
// age:30
// gender:"Male"
// constructor: ƒ Person(fName, lName)
// [[Prototype]]:Object
