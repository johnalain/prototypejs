var num = [1, 2, 3, 4, 5];
console.log(num);
console.log(typeof console.log);
// [ 1, 2, 3, 4, 5 ]
// function
function sayHello() {
  console.log("hello michel");
}
sayHello();
// [ 1, 2, 3, 4, 5 ]
// function
// hello michel
function sayHelloo(userName) {
  console.log(`hello ${userName}`);
}
sayHelloo("michel");
sayHelloo("rita");
sayHelloo("josephine");

function sayHellooo(userName, age) {
  console.log(`hello ${userName} your age is ${age}`);
}

sayHellooo("michel", 65);
sayHellooo("rita", 27);
sayHellooo("josephine", 25);

function sayHelloooo(userName, age) {
  if (age < 20) {
    console.log("not suitable for you");
  } else {
    console.log(`hello ${userName} your age is ${age}`);
  }
}

sayHelloooo("michel", 65);
sayHelloooo("rita", 27);
sayHelloooo("josephine", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1982, 2023, 2010);
