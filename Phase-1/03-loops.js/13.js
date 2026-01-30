//write a program to print even numbers<= n

// import readlineSync from 'readline-sync'
// let i=1
// let num=readlineSync.question("Enter a number: ")
// while (i<=num) {
//     console.log(i)
//     i=i+2
// }

// import readlineSync from 'readline-sync'
// let i=2
// let num=readlineSync.question("Enter a number: ")
// while (i<=num) {
//     if (i%2==0) {
//         console.log(i);
        
//     }
// }   i+++


// let i=2
// let max=10
// max=max*2
// while (i<=max) {
//     console.log(i);
//     i+=2
// }

// let i=1
// let n=5
// let even_number=2
// while (i<=n) {
//     console.log(even_number);
//     even_number=even_number+2
//     i++
// }

// let i=1
// let n=5
// while(i<=n){
//     console.log(i*2);
//     i++
// }

let i=1
let n=5
let even_number=[]
while(i<=n){
    even_number.push(i*2);
    i++
}
console.log(even_number)