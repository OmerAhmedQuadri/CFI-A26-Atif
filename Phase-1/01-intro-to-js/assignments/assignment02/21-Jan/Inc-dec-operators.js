//1.Basic Post-Increment
// let a = 5
// console.log(a++)//5
// console.log(a)//6

//2.Basic Pre-Increment
let b = 5
console.log(++b)//6
console.log(b)//6

//3.Basic Post-Decrement
let c = 10
console.log(c--)//10
console.log(c)//9

//4.Basic Pre-Decrement
let d = 10
console.log(--d)//9
console.log(d)//9

//5.Post-Increment in Expression
// let x = 7
// let y = x++ + 5
// console.log(y)//12
// console.log(x)//8

//6.Pre-Increment in Expression
let x = 7
let y = ++x + 5
console.log(y)//13
console.log(x)//8

//7.Multiple Post-Increments
let num = 3
console.log(num++)//3
console.log(num++)//4
console.log(num++)//5
console.log(num)//6

//8.Mixing Pre and Post Increment
let a = 5
let result = a++ + ++a
console.log(result)//12
console.log(a)//7

//9.Decrement in Expression
let p = 20
let q = --p + p--
console.log(q)//38
console.log(p)//18

//10.Complex Expression
let m = 10
let n = m++ + m + ++m
console.log(n)//33
console.log(m)//12