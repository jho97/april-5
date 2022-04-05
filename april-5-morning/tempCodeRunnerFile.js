let arr = [1, 2, 3, 4, 5]
let maxProfit = 0;
let i = 0
const best = (arr) => {
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] - arr[i] > maxProfit) {
        maxProfit = (arr[j] - arr[i]);
         console.log(`${arr[j]} - ${arr[i]}` )
      } 
    }
  return `This is max profit ${maxProfit}`
}
console.log(best(arr))
