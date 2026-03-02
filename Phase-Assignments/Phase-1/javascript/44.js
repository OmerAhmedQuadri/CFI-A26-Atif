//44
//What is the output of this code and why?  
// console.log([] + []);  
// console.log([] + {});  
// console.log({} + []); 


console.log([] + []);  //empty array is an empty string so it prints only empty space
console.log([] + {});  //it prints empty space+[object Object]
console.log({} + []);  //it prints empty space+[object Object]