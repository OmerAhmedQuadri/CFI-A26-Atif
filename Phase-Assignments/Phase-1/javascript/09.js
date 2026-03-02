//9
//Write a function minOf(arr) that takes an array of numbers and returns 
//the smallest number in the array. 
//Expected ouput: 2

let arr = [5, 10, 8, 2, 6]
function smallElement(arr) {
    let j = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < j) {
            j = arr[i]
        }
    }
    return j
}
console.log(smallElement(arr));
