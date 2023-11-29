// https://www.youtube.com/watch?v=spvYqO_Kp9Q
//in  prototypejs folder in github
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(46);
    }, 1);
  });
}
async function start() {
  const result = await getData();
  console.log(result);
}
start();

// async function start() {
//   const data = await fetch("https://openweathermap.org/api");
// //   invalid url for get data

//   const result = await Data.json();
//   console.log(result);
// }
// start();

async function start2() {
  getData().then((result) => {
    console.log(result);
  });
}
start2();
