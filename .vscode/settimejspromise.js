// https://www.youtube.com/watch?v=7s6aMzXyt3g
// this file in github-->repository prototypejs-->.vscode

//new method using promise javascript
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     document.getElementById("title1").style.visibility = "visible";
//     resolve();
//   }, 1000);
// })
//   // });
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.getElementById("title2").style.visibility = "visible";
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.getElementById("title3").style.visibility = "visible";
//         resolve();
//       }, 1000);
//     });
//   })

//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.getElementById("title4").style.visibility = "visible";
//         resolve();
//       }, 1000);
//     });
//   })
//   .catch((error) => {
//     console.log("this is an error" + error);
//   });

//old method using promise javascript
setTimeout(function () {
  document.getElementById("title1").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("title2").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("title3").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("title4").style.visibility = "visible";
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
