// https://www.youtube.com/watch?v=zdp0zrpKzIE&t=1206s
const arr = [8, 5, 9, 11, 12, 15];


// const output = arr.filter((x) => x >10
   
// );
// console.log(output);
// function isOdd(x){
//     return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log((output));

// function greaterThan4(x){
//     return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log((output));

//function greaterThan49(x) => x>4{
    //     return x > 4;
     //}
    //  const output = arr.filter((x) => x > 10);
    //  console.log((output));

// function isEven(x){
//          return x % 2 === 0;
//      }
//      const output = arr.filter(isEven);
//      console.log((output));

//function function greaterThan4(x){
//     return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log((output));{
//     function findSum(arr){
//     let sum = 0;
//     for (let i =0; i <arr.length ; i++)
// {
//     sum = sum + arr[i];
// }
// return sum;
// }
// console.log(findSum(arr));
// const output =arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;

// },0);
// console.log(output);

// function findMax(arr){
//         let max = 0;
//         for (let i =0; i <arr.length ; i++){
//         if(arr[i]> max){
//             max = arr[i]
//         }
//     }
//         //sum = sum + arr[i];
//         return max;
//     }
    
    
    // console.log(findMax(arr));

    function findMax(arr){

    }
    console.log(findMax(arr));
    const output = arr.reduce(function(max, curr){
        if (curr>max){
            max = curr;
        }
        return max;
    });
    console.log(output);

