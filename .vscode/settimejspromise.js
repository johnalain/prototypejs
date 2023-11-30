// https://www.youtube.com/watch?v=7s6aMzXyt3g
// new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// then(() => {
new Promise((resolve, reject) => {
  setTimeout(() => {
    document.getElementById("title1").style.visibility = "visible";
    resolve();
  }, 1000);
})
  // });
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title2").style.visibility = "visible";
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title3").style.visibility = "visible";
        resolve();
      }, 1000);
    });
  })

  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("title4").style.visibility = "visible";
        resolve();
      }, 1000);
    });
  })
  .catch((error) => {
    console.log("this is an error" + error);
  });
