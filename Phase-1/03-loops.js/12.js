import readlineSync from 'readline-sync'
let i=1
let num= readlineSync.question("Enter n natural numbers: ")
let sum=0

while (i<=num) {
    sum=sum+i
    i++
}
console.log(sum);