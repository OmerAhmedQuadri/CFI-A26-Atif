//21
// Write a function that finds the maximum of three numbers. 
//Expected output: a is greater than b and c

let a = 10
let b = 8
let c = 5
function maxNumbers(a, b, c) {
    if (a > b && a > c) {
        console.log('a is greater than b and c');
    } else if (b > a && b > c) {
        console.log('b is greater than a and c');
    } else if (c > a && c > b) {
        console.log('c is greater than a and b');
    } else {
        console.log('Invalid input');
    }
}
maxNumbers(a, b, c)