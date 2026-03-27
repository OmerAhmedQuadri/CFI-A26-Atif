const arr=[21,100,1,2,1000]

console.log(arr);
arr.sort((a,b)=>{
    console.log(a,b);
    return a-b
})
console.log(arr);

