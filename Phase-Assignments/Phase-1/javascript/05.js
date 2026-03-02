//5
//Write a program to print numbers from 1 to 30 but skips multiples of 3 using continue. 
// Ex: 1 2 4 5 7 8 10 11 13...29 

let i = 1
let str=''
while (i <= 30){ 
    if (i % 3 == 0)  {
        i++
        continue
    }
    str=str+i+' '
    i++
}
console.log(str);
