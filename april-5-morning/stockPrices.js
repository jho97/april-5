//classmates code
let arr = [10, 2, 20, 4, 30]
let maxProfit = 0;
const best = (arr) => {
  for (let i = 0; i < arr.length; i++){
      for (let j = i + 1; j < arr.length; j++){
          if (arr[j] - arr[i] > maxProfit) {
          console.log(`${arr[j]} - ${arr[i]}` )
          maxProfit = (arr[j] - arr[i]);
      } 
    }
  } 
  return `This is max profit ${maxProfit}`
}
console.log(best(arr))



// const best = (stocks) => {
//     let lowest;
//     let high = 0;
    
//     for (let i = 0; i < stocks.length; i++) {
//         if (lowest === undefined || stocks[i] < lowest) {
//             lowest = stocks[i]
//         }
//         let diff = stocks[i] - lowest;
//         if (diff > high) {
//             high = diff
//         }
//     }
//     return `I am buying at ${lowest} and making ${high} in profit`
// }



// const best = (arr) =>{
    //     let index = 0; 
    //     let value = arr[0] ;
    //     let value2 = arr[0]
    //      for (let i = 0; i < arr.length -1; i++)
    //      { if (arr [i] < value) 
    //         { value = arr [i]; index = i; } 
//     }
//     for (let j = 0; j < arr.length ; j++){
//             if(arr[j] > value2){
//                 value2 = arr[j]; index = j;
//             } return `the answer is buy ${value} and sell at ${value2}`

//         }}




//Tried to do it without the second for loop
// let arr = [5, 1, 3, 10, 2]
// let maxProfit = 0;
// let i = 0
// const best = (arr) => {
//     for (let j = i + 1; j < arr.length; j++){
//       if (arr[j] - arr[i] > maxProfit) {
//         maxProfit = (arr[j] - arr[i]);
//          console.log(`${arr[j]} - ${arr[i]}` )
//       } 
//     }
//   return `This is max profit ${maxProfit}`
// }
// console.log(best(arr))

