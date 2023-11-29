// function add(a,b){
//     return a+b
// }{}
//  add(2,3);
const ad = (a, b) => a * b; //if u have one line inside curly braces u can eliminate it and eliminite return as well

console.log(ad(5, 5));
// // ad(3,4);
// document.write(ad);
function sayHello(userName, age) {
  return `hello ${userName} my age is : ${age}`;
}

console.log(sayHello("michel", 32));
console.log(sayHello("rita", 25));
const ude = (x, y) => x + y;
console.log(ude(10, 20));

function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  console.log(inner());
}
function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}
outer();
// u can't call nested function only outer function print both
