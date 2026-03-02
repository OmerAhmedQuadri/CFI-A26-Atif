//2
// Write a program that prints the sum of numbers from 1 to N (take N as input).
//Expected output: 1+2+...+N
let n = 10
let i = 1
let sum = 0
while (i <= n) {
    sum = sum + i
    i++
}
console.log(sum);