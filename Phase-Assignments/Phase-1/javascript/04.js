//4
// Write a program to print the following pattern. 
// 10 
// 10 20 
// 10 20 30 
// 10 20 30 40

let str = ''
let i = 1
while (i <= 4) {
    str = str + i * 10 + ' '
    console.log(str);
    i++
}