//42
//What are spread and rest operators? Explain their differences with examples. 

/*spread operator: is the operator which is used to extract the values of the array or object 
in to another variable

Ex:
*/
let arr1 = [1, 2, 3]
let arr2 = [...arr1]

console.log(arr2);

/*
rest operator: it is used to collect the values of the object and arrays 
*/
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30, 40);