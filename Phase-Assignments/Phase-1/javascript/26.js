//26
// Explain .find() and .findIndex() with examples 

//.find(): it is an array helper method finds the first element after the condition

let arr=[5,10,15,20,25]

let newArr=arr.find((ele)=>{
    return ele>10
})
console.log(newArr);    

//.findIndex(): finds the index of the element after the first element after the condition

let arr1=[1,2,3,4,5]

let newArr1=arr1.findIndex((ele)=>{
    return ele>4
})
console.log(newArr1);





