//8
// Create a function sumOfArray(arr) that takes an array of numbers and 
// returns the sum of the elements of the array.
//Expected output: 150

let arr = [10, 20, 30, 40, 50]
function sumElements(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumElements(arr));
