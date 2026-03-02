//14
// Write a function using reduce() to find the sum of all numbers in an array.
//Expected output: 150

let arr=[10,20,30,40,50]
function sumElements(arr){
    let newArr=arr.reduce((acc,curr)=>{
        return acc+curr
    })
    return newArr
}
console.log(sumElements(arr));
