//JavaScript Array Methods & Objects 
//1
// const nums=[1,2,3,4,5]

// let newArr=nums.map((ele)=>{
//     return ele*3
// })
// console.log(newArr);


//2
// const nums=[10,20,30,40,50]

// let newArr=nums.map((ele)=>{
//     return ele/10
// })
// console.log(newArr);


//3
// const words=['hello','world','javascript']

// let newArr=words.map((ele)=>{
//     return ele.toUpperCase()
// })
// console.log(newArr);


//4
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArray=nums.filter((ele)=> {
//     if(ele%2==1) return ele
// })
// console.log(newArray);


//5
// const nums = [5, 12, 3, 18, 25, 7, 30]

// let newArr=nums.filter((ele)=>{
//     if(ele>10) return ele
// })
// console.log(newArr);


//6
// const names = ['Ali', 'Bob', 'Sam', 'John', 'Jo']

// let newArr=names.filter((ele)=>{
//     if(ele.length>3) return ele
// })
// console.log(newArr);


//7
// const nums = [1, 2, 3, 4, 5]

// let newVal=nums.forEach((val)=>{
//     return val*5                    //undefined
// })
// console.log(newVal);


//8
/* .map=> is used to return the values of all elements in the array
   .foreach=> is used to perform the operation in the elements but don't return the new array
   or don't modify the original array

   example:
 let newVal=nums.forEach((val)=>{
//     return val*5                    //undefined
// })
// console.log(newVal);
*/


//9
// const student = {
//     name: 'Rahul',
//     age: 22,
//     city: 'Mumbai',
//     course: 'Fullstack'
// }

// function test(student){
//     //return Object.keys(student)
//     return Object.values(student)
// }
// console.log((test(student)));


//10
// const nums = [1, 2, 3, 4, 5]

// for(let i=0;i<nums.length;i++){
//     nums[i]=nums[i]*2
// }
// console.log(nums);


//11
// const prices = [100, 200, 350, 400, 150]

// let newArray=prices.map((val)=>{
//     return val+(val*18/100)
// })
// console.log(newArray);


//12
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newVal=nums.filter((val)=>{
//     if(val%2==0) return val
// })
// let newVal1=newVal.map((val)=> val*2)
// // console.log(newVal);
// console.log(newVal1);


//13
// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ]

// let arr=students.filter(students=>students.marks>=50)
// console.log(arr);



// 14
// const newArr=students.map(students=>students.name)
// console.log(newArr);



//15
// const array=students.map((student)=>{
//     if(student['marks']>=80) return  student.grade='A'
//     else if(student['marks']>=60) return student.grade='B'
//     else if(student['marks']>=50) return student.grade='C'
//     else if(student['marks']<50) return student.grade='F'
// })
// console.log(students);


//16
// const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat']

// const newWords=words.filter((ele)=>{
//         if(ele.length>4) return ele
// })
// const newCap=newWords.map((ele)=>ele.charAt(0).toUpperCase()+ele.slice(1))
// console.log(newWords);
// console.log(newCap);



//17
// const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM']

// const newMail=emails.map((ele)=> ele.toLowerCase())
// console.log(newMail);



//18
// const nums = [1, 2, 3, 4, 5]

// const newArr = nums.map((val) => {
//     return {
//         val: val,
//         square: val*val
//     }
// })
// console.log(newArr);



// 19
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 28,
//     email: 'john@example.com',
//     isActive: true
// }

// let arr1=Object.keys(user)
// let arr2=Object.values(user)
// arr1.forEach((i,j)=>{
//     console.log(arr1[j],':',arr2[j]);
// })



//20
// const nums = [-5, -3, 0, 2, 4, -1, 7, -8]

// const newArr=nums.filter((ele)=>{
//     if(ele>0) return ele
// })
// const newSqr=newArr.map((val)=>val*val)
// console.log(newArr);
// console.log(newSqr);



//21
// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]

// const newCart=cart.map((ele)=>{
//     ele.total=(ele.price)*(ele.qty)
//     return ele
// })
// console.log(newCart);



//22
// const newTotal=newCart.filter((ele)=>{
//     if(ele.total>1000) return ele
// })
// console.log(newTotal);



//23
// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]

// const new1=users.filter((ele)=>{
//     if(ele.country=='India' && ele.age>=18) return ele
// })
// console.log(new1);


//24
// const new2=new1.map((val)=>val.name)
// console.log(new2);


//25
// const sentences = ['hello world', 'i love javascript', 'coding is fun']

// const newLetter=sentences.map((ele)=>{
//   return ele.charAt(0).toUpperCase()+ele.slice(1)
// });
// console.log(newLetter);


//26
// const data = [1, 'two', 3, 'four', 5, 'six', 7]

// const newNum=data.filter((val)=>{
//   if(typeof val=='number') return val
// })
// console.log(newNum);


//27
// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ]

// const newEmp=employees.filter((ele)=>{
//   if(ele.department=='Engineering') return ele
// })
// const newSal=newEmp.map((val)=>{
//   return val=val.salary+(val.salary*10/100)
// })
// console.log(newEmp);
// console.log(newSal);


//28
// employees.forEach((emp)=>{
//   console.log(`${emp.name} works in ${emp.department} and earns ${emp.salary}`);
// })


//29
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newEven=nums.map((val)=>{
//   if(val%2==0) return val
// })                          /* returns even numbers from the array but also perfroms the operation on all
//                               the elements of the array it returns undefined */
// console.log(newEven);


30
const products = [
    { name: 'Laptop', price: 50000, inStock: true },
    { name: 'Phone', price: 20000, inStock: false },
    { name: 'Tablet', price: 30000, inStock: true },
    { name: 'Watch', price: 5000, inStock: false },
    { name: 'Headphones', price: 3000, inStock: true }
]

const newProduct=products.filter((ele)=>ele.inStock==true
)
console.log(newProduct);

const newPrice=newProduct.map((val)=>{
  return val.price-(val.price*10/100)
  
})
console.log(newPrice);

newPrice.forEach((ele)=>{
  console.log(`${ele[name]} is available for ${ele.price}`);
})
