//17
// Explain slice and splice. 

/*
slice: slice is used to extract some part or portion of the array 
Ex: 
*/
let arr = [10, 20, 30, 40, 50];
let newArr = arr.slice(1, 4);
console.log(newArr);

/*
splice: splice is also a array helper method which is used to remove ,add or replace elements 
Ex:
*/ 

let arr1 = [10, 20, 30, 40, 50];

let removed = arr.splice(1, 2);
console.log(removed); // [20, 30]