//41
// let product=[
//     {name:'abc',price:500,inStock:'available'},
//     {name:'def',price:900,inStock:'unAvailable'},
//     {name:'xyz',price:1000,inStock:'notAvailable'},
// ]
// console.log(product);

//42
// console.log(product[1].price);

//43
// let object={
//     name:'atif',
//     age:21,
//     skills:['python','javascript','C']
// }
// console.log(object.skills[1]);

//44
// let fruits = ['apple', 'mango']
// let veggies = ['tomato', 'potato']
// let basket = [fruits, veggies]

// basket[0].push('banana')
// console.log(fruits)//apple,mango,banana
// console.log(basket[0])//apple,mango,banana

//45
// let student={
//     name:'Atif',
//     rollNumber:22,
//     marks:[10,20,30]
// }
// let total=student.marks[0]+student.marks[1]+student.marks[2]
// let average=total/student.marks.length
// console.log(average);

//46
// let obj1={
//     name:'Atif',
//     age:21,
//     city:'Hyderabad'
// }
// let obj2={
//     name:'Atif',
//     age:21,
//     city:'Hyderabad'
// }
// console.log(obj1==obj2);//Explanation: it doesn't possess the same memory 

//47
// let arr = [1, 2, 3]
// arr.push(4)
// arr[0] = 10
// arr.pop()
// console.log(arr)//10,2,3
// console.log(arr.length)//3

//48
// let school={
//     name:'shadan',
//     address:{
//         city:'hyderabd',
//         pincode:505001,
//     },
//     students:['Mohammad','Atif','uddin']
// };
// console.log(school.address.city);

//49
// Case 1
// let obj2 = obj1//obj1 is assigning to obj2 and its stores only reference
// // Case 2  
// let obj2 = { ...obj1 }//here obj1 using spread operator (copy)from obj1 to obj2

//50
// let Array=[
//     {
//         name:'atif',
//         hobbies:['watching movies','playing']
//     },
//     {
//         name:'uddin',
//         hobbies:['travelling','reading']
//     },
// ]
// console.log(Array[0].hobbies[1])
