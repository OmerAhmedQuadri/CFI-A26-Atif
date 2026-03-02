//25
// Use .reduce() to find the sum of all elements in [2,4,6,8]. 
//Expected output: 20

let arr=[2,4,6,8]

let newArr=arr.reduce((acc,curr)=>{
   return acc+curr
})
console.log(newArr);
