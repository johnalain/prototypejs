//https://www.youtube.com/watch?v=PI2zuNkELTs&list=PLlvFEn0NKwXIM-qCvnM6vjYAjerQTE2SC&index=1&t=56s
//this file in prototype repository folder .xcode
// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.len > 0) {
//       res("users found");
//     } else {
//       rej("users not found");
//     }
//   });
// }
// getData().then(
//   (resolvevalue) => console.log(resolvevalue),
//   (rejectvalue) => console.log("rejected" + rejectvalue)
// );

// function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return Promise.resolve("users found");
//   } else {
//     return Promise.reject("no users found");
//   }
// }
//another method---->
// function getData() {
//   return new Promise((res, rej) => {
//     let users = ["michel"];
//     if (users.length > 0) {
//       res("users found");
//     } else {
//       rej("users not found");
//     }
//   });
// }
//async transform function to promise
async function getData() {
  let users = ["k"];
  if (users.length > 0) {
    return "users found";
  } else {
    throw new error("no users found");
  }
}
console.log(getData());
getData().then(
  (resolvevalue) => console.log(resolvevalue),
  (rejectvalue) => console.log("rejected" + rejectvalue)
);
