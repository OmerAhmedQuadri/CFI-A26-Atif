//22
//22. Write a program to find the average of numbers in an array. 
//Expected output: 30

let arr=[10,20,30,40,50]
let avg=0
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
avg=sum/arr.length
console.log(avg);
