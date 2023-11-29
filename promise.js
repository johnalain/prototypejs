// prototypejs  folder in github contain Promise.js
//https://www.youtube.com/watch?v=DHvZLI7Db8E
let p = new Promise((resolve, reject) => {
  let a = 12 + 2;
  if (a == 17) {
    resolve("success");
  } else {
    reject("failed");
  }
});
console.log(p);

p.then((message) => {
  console.log("this is " + message);
}).catch((message) => {
  console.log("this is error" + message);
});
