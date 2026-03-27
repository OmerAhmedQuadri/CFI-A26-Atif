// let arr=[4,9,99,109,50,2,-55]

// let max=arr.reduce((acc,val)=>{
//     return acc>val ? acc:val
// })
// console.log(max);



let arr=[-99,9,99,109,50,2,-55]

let min=arr.reduce((acc,val)=>{
    return acc<val ? acc:val
},arr[0])
console.log(min);
