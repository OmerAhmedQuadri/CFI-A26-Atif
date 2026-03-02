//50
//Write a program to generate 10 random numbers in an Array (ranging 
// from 1 to 100). After generating the 10 random numbers, find the Mean, 
// Mode, and Median values of those Array elements. 

let arr=[]
for(let i=0;i<10;i++){ 
    arr[i]=Math.floor(Math.random(arr)*100)+1
}
console.log(arr);

//mean
let sum=0
let mean=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
mean=sum/arr.length
console.log(`Mean=${mean}`);

//median
arr.sort((a,b)=>a-b)
console.log(arr);
let median

if(arr.length%2==0){
    median=(arr[arr.length/2]+arr[(arr.length/2)-1])/2
}else{
    median=arr[arr.length/2]
}
console.log(`Median=${median}`);

//mode
let count=arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
},{})

console.log(count);

let max=Math.max(...Object.values(count))

if(max==1){
    console.log('No repeating numbers');
}else{
    let mode=Object.keys(count).filter(ele=> count[ele]==max)
    console.log(`Mode=${mode.join(',')}`);
}
