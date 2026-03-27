const nums=[23,54,96,108,73]

const res=nums.findIndex((n)=>{
    if(n%2==0) return true
})

const res2=nums.findIndex((n)=> n>100)
console.log(res);
console.log(res2);