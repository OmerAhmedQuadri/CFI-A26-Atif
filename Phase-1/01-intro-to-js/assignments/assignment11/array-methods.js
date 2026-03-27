//JavaScript Array Methods Assignment
//1
// const nums = [5, 10, 15, 20, 25]

// const newNum=nums.reduce((acc,curr)=>acc+curr,0)
// console.log(newNum);


//2
// const nums = [2, 3, 4, 5]

// const newProduct=nums.reduce((acc,curr)=> acc*curr,1)
// console.log(newProduct);


//3
// const nums = [45, 23, 67, 12, 89, 34]

// const max=nums.reduce((acc,curr)=>{
//     return(acc>curr) ? acc:curr
// },nums[0])
// console.log(max);


//4
// const nums = [45, 23, 67, 12, 89, 34]

// const min=nums.reduce((acc,curr)=>{
//     return(acc<curr)? acc: curr
// },nums[0])
// console.log(min);


//5
// const words = ['hello', 'world', 'javascript', 'is', 'awesome']

// const string=words.reduce((acc,curr)=>{
//     return acc+' '+curr
// },)
// console.log(string);


//6
// const nums = [10, 20, 30, 40, 50]

// const res=nums.find((n)=>{
//     if(n>25) return n
// })
// console.log(res);


//7
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ]

// const res=users.find((obj)=>{
//     if(obj.name=='Bob')return obj
// })
// console.log(res);

// //8
// const index=users.findIndex((n)=>{
//     if(n.name=='Charlie')return n
// })
// console.log(index);


//9
// const nums = [5, 12, 8, 130, 44]

// const greater=nums.findIndex((n)=>{
//     if(n>100)return n
// })
// console.log(greater);


//10
// const nums = [1, 2, 3, 4, 5]

// const newNum=nums.reduce((acc,curr)=>{
//     return acc,curr
// })
// console.log(newNum)

// const newNum=nums.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(newNum)       


//11
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']

// const newList=fruits.reduce((acc,curr)=>{
//     if(acc[curr]==undefined) acc[curr]=1
//     else acc[curr]++
//     return acc
// },{})
// console.log(newList);


//12
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const EvenOdd=numbers.reduce((acc,curr)=>{
//     if(curr%2==0) {
//      acc.even.push(curr)
//     }else{
//      acc.odd.push(curr)
//     }
//     return acc
// },{even: [], odd:[]})
// console.log(EvenOdd);


//13
// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 45 },
//     { name: 'Charlie', marks: 75 },
//     { name: 'David', marks: 92 }
// ]

// const total=students.reduce((acc,curr)=>{
//     return acc+curr.marks
// },0)
// console.log(total);

// const avg= total/students.length
// console.log(avg);


//14
// const high=students.reduce((acc,curr)=>{
//     return(acc>curr.marks) ? acc:curr.marks
// },0)
// console.log(high);


//15
// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]

// const newCart=cart.reduce((acc,curr)=>{
//     return acc+curr.price*curr.qty
// },0)
// console.log(newCart);


//16
// const users = [
//     { name: 'Alice', age: 25, city: 'Mumbai' },
//     { name: 'Bob', age: 30, city: 'Delhi' },
//     { name: 'Charlie', age: 25, city: 'Mumbai' },
//     { name: 'David', age: 30, city: 'Mumbai' }
// ]

// const city=users.reduce((acc,curr)=>{
//     if(curr.city=='Mumbai') {
//         acc.Mumbai.push(curr)
//     }
//     else{
//         acc.Delhi.push(curr)
//     }
//     return acc
// },{Mumbai:[],Delhi:[]})
// console.log(city);


//17
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// const newWords=words.find((ele)=>ele.length>6)
// console.log(newWords);


//18
// const products = [
//     { id: 1, name: 'Laptop', inStock: false },
//     { id: 2, name: 'Phone', inStock: true },
//     { id: 3, name: 'Tablet', inStock: true }
// ]

// const newProduct=products.find((ele)=>ele.inStock)
// console.log(newProduct);

//19
// const index=products.findIndex((ele)=>ele.id==3)
// console.log(index);


//20
// const nums = [3, 7, 12, 5, 8, 15, 20]

// const newNum=nums.findIndex((val)=>val%5==0)
// console.log(newNum);


//21
// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]

// const newUsers=users.reduce((acc,curr)=>{
//     if(curr.age<18){
//         acc.minors.push(curr)
//     }else if(curr.age>=18 && curr.age<25){
//         acc.adults.push(curr)
//     }else if(curr.age>=25){
//         acc.seniors.push(curr)
//     }
//     return acc
// },{minors:[], adults:[], seniors:[]})
// console.log(newUsers);


//22
// const nums = [[1, 2], [3, 4], [5, 6], [7, 8]]

// const newNums=nums.reduce((acc,curr)=>{
//     // console.log(curr.length)
//     if(curr.length==curr.length){
//         return acc.concat(curr)
//     }
// })
// console.log(newNums);


//23
// const transactions = [
//     { type: 'deposit', amount: 1000 },
//     { type: 'withdraw', amount: 500 },
//     { type: 'deposit', amount: 2000 },
//     { type: 'withdraw', amount: 300 },
//     { type: 'deposit', amount: 1500 }
// ]

// const newBal=transactions.reduce((acc,curr)=>{
//     if(curr.type=='deposit'){
//         acc+=curr.amount
//     }else if(curr.type=='withdraw'){
//         acc-=curr.amount
//     }
//     return acc
// },0)
// console.log(newBal);



//24
// const words = ['hello', 'world', 'this', 'is', 'javascript']

// const newWords=words.reduce((acc,curr)=>{
//     if(curr.length>acc.length){
//         return curr
//     }else return acc
// })
// console.log(newWords);


//25
// const students = [
//     { name: 'Alice', subjects: ['Math', 'Science'] },
//     { name: 'Bob', subjects: ['English', 'Math'] },
//     { name: 'Charlie', subjects: ['Science', 'History'] }
// ]

// const subjects=students.reduce((acc,curr)=>{
//     curr.subjects.forEach(sub=>{
//         if(!acc.includes(sub)){
//             acc.push(sub)
//         }
//     })
//     return acc
// },[])
// console.log(subjects);


//26
// const nums = [5, 10, 15, 20, 25, 30]

// const newNum=nums.reduce((acc,curr)=>{
//    acc[curr]=curr%10==0
//    return acc 
// },{})
// console.log(newNum);


//27
// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ]

// const total=employees.reduce((acc,curr)=>{
//     if(!acc[curr.department]){
//         acc[curr.department]=0
//     }
//     acc[curr.department]+=curr.salary
//     return acc
// },{})
// console.log(total);


//28
// const votes = ['Alice', 'Bob', 'Alice', 'Charlie', 'Bob', 'Alice', 'Charlie', 'Alice']

// const won=votes.reduce((acc,cur)=>{
//     acc[cur]=(acc[cur]||0)+1
//     return acc
// },{})

// const majority=Object.keys(won).reduce((i,j)=>  won[i]> won [j]?i:j)
// console.log(`${majority} with ${won[majority]},votes`);


//29
// const products = [
//     { id: 1, name: 'Laptop', price: 50000 },
//     { id: 2, name: 'Phone', price: 20000 },
//     { id: 3, name: 'Tablet', price: 30000 }
// ]

// const newProduct=products.reduce((acc,curr)=>{
//     if(!acc[curr.id]){
//         acc[curr.id]=curr
//     }
//     return acc
// },{})
// console.log(newProduct);


//30
// const orders = [
//     { userId: 1, items: [{ price: 100 }, { price: 200 }] },
//     { userId: 2, items: [{ price: 150 }] },
//     { userId: 1, items: [{ price: 300 }] },
//     { userId: 3, items: [{ price: 250 }, { price: 100 }] },
//     { userId: 2, items: [{ price: 200 }, { price: 150 }] }
// ]

// const total=orders.reduce((acc,curr)=>{
//     const orderTotal=(curr.items).reduce((i,j)=>i+j.price,0)
//         if(!acc[curr.userId]){
//             acc[curr.userId]=0
//         }
//         acc[curr.userId]+=orderTotal
//         return acc
// },{})
// console.log(total);
