// const nums=[12,24,33,65,76,-99]

// const allNaturals=nums.every((n)=> n>0)
// console.log(allNaturals);


// const arr=[24,54,45,6,99,108,30]

// const valid=arr.every((ele)=>ele%3==0)
// console.log(valid);


const users=[
    {name: 'omer',age:21},
    {name: 'atif',age:18},
    {name: 'yash',age:17}

]

const allAdults=users.every((ele)=>{
    return ele.age>=18
})
console.log(allAdults);
