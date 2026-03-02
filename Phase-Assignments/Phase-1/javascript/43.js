//43
// What is the difference between for…of and for…in loops?

/*
for..of: it performs operations only on Arrays and Strings and returns each and every element
in the array or string
*/
//Ex:

let arr=[10,20,30]
for (let value of arr){
    console.log(value);
}

/*
for..in: for in performs operation only on object keys and values
*/
//Ex:

let obj={
    name:'Atif',
    age:21,
    city:'hyd'
}

for(let value in obj){
    console.log(obj[value])
}