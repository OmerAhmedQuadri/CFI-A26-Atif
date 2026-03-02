//3
//Write a function that prints multiplication table of a given number.(take user input for n) 
// Example output if n = 3: 3 x 1 = 3
// Expected output if n = 3: 3 x 1 = 3

import readlineSync from 'readline-sync'
let n=readlineSync.questionInt('Enter the number: ')
let mul = 0
let i = 0
for (i = 1; i <= 10; i++) {
    mul = n * i
    console.log(`${n} X ${i} = ${mul}`);
}
