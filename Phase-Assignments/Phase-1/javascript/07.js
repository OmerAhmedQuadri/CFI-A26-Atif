//7
//Write a function that takes a number and prints EVEN or ODD, or throws 
// an error if the given argument is not a number.
//expected output: if num=5 prints ODD
function evenOdd(num) {
    if (typeof num != 'number' || (Number.isNaN(num))) {
        console.log('Given argument is not a Number');
    } else if (num % 2 == 0) {
        console.log('EVEN');
    } else {
        console.log('ODD');
    }
}
evenOdd(8)