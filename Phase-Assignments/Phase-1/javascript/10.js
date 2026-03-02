//10
//Write a function that finds the factorial of a number using: 
//➔ Recursion 
// ➔ For loop
//Expected output: 720

function factorial(num){
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}
// console.log(factorial(6));


function recFactorial(n){
    
    return n*factorial(n-1)
}
console.log(recFactorial(6));

