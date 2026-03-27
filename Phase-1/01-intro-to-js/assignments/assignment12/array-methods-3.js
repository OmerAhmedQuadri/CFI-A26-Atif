//1
// const nums = [10, 20, 30, 40, 50, 30, 60];

// // const newNum=nums.indexOf(30)
// // console.log(newNum);


//2
// const num=nums.indexOf(30,3)
// console.log(num);


//3
// const colors = ['red', 'blue', 'green', 'blue', 'yellow'];

// const newColor=colors.lastIndexOf('blue')
// console.log(newColor);


//4
// const nums = [1, 2, NaN, 4, 5];

// const index=nums.includes(NaN)  //true
// const index2=nums.indexOf(NaN) //-1
// console.log(index);
// console.log(index2);


//5
// const permissions = ['read', 'write', 'execute'];
// const userPermission = 'write';

// const user=permissions.includes(userPermission)
// if(user){
//     console.log('Access Granted!');
// }else{
//     console.log('Access Denied!');
// }
// console.log(user);


//6
// const nums = [2, 4, 6, 8, 10,];

// const evenCheck=nums.every(n=>n%2==0)
// console.log(evenCheck);


//7
// const nums = [1, 2, 3, 4, 5, 6];

// const greater=nums.some(n=>n>5)
// console.log(greater);


//8
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 }
// ]

// const newUsers=users.every(n=>n.age>=18)
// console.log(newUsers);


//9
// const pastUsers=users.some(n=>n.age<18)
// console.log(pastUsers);


//10
// const stack = [];

// stack.push('A','B','C')//adds elements in that array
// stack.pop()//removes the last element 'C'
// stack.pop()//removes the last second element'B' remains 'A' in the array

// console.log(stack);


//11
// const queue = ['task1', 'task2', 'task3'];

// queue.shift()
// queue.unshift('urgent-task')
// console.log(queue);


//12
// const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// const newFruits=fruits.slice(1,4)
// console.log(newFruits);


//13
// const lastIndex=fruits.slice(-2)
// console.log(lastIndex);


//14
// const nums = [1, 2, 3, 4, 5];

// nums.splice(2,2)
// nums.splice(2,3,99,88,5)
// console.log(nums);


//15
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr=arr1.concat(arr2)
// console.log(newArr);

// const arr3=[...arr1,...arr2]
// console.log(arr3);


//16
// const words = ['JavaScript', 'is', 'awesome'];

// const newWords=words.join(' ')
// console.log(newWords);
// const newWords1=words.join('-')
// console.log(newWords1);
// const newWords2=words.join('')
// console.log(newWords2);.


//17
// const csv = "John,Doe,30,john@example.com";

// const newArr=csv.split(",")
// console.log(newArr);


//18
// const nums = [1, 2, 3, 4, 5];

// const newNum=nums.reverse()
// console.log(newNum);
// console.log(nums);//yes mutate the original array


//19
// const str = "JavaScript";

// const newStr=str.split('').reverse().join("")
// console.log(`"${newStr}"`);


//20
// const words = ['zebra', 'apple', 'mango', 'banana'];

// words.sort()
// console.log(words);


//21
// const nums = [100, 5, 20, 10, 1000];

// const newNum=nums.sort((a,b)=>{
//     return a-b
// })
// console.log(newNum);


//22
// const descending=nums.sort((a,b)=> (b-a))
// console.log(descending);



//23
// const users = [
//     { name: 'Charlie', age: 35 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 }
// ];

// const newUsers=users.sort((a,b)=>a.age-b.age)
// console.log(newUsers);


//24
// const newName=users.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(newName);


//25
// const nested = [1, [2, 3], [4, [5, 6]]];

// const newNested=nested.flat(Infinity)
// console.log(newNested);


//26
// const arr = [1, 2, 3, 4, 5];

// const newArr=arr.fill(0,1,3,0)
// console.log(newArr);


//27
// const fruits = ['apple', 'banana', 'orange', 'grape'];

// const newFruits=fruits.at(0)
// console.log(newFruits);
// const newFruits1=fruits.at(-1)
// console.log(newFruits1);
// const newFruits2=fruits.at(-2)
// console.log(newFruits2);


//28
// const nums = [1, 2, [3, [4, [5]]]];

// nums.toString()
// console.log(nums);// shows array in the nested array


//29
// const prices = [1000.50, 2500.75, 500.99];

// const newPrice=prices.map(price=>
//     price.toLocaleString('en-IN',{
//         style:'currency',
//         currency:'INR'
//     })
// )
// console.log(newPrice);

// const newPrice1=prices.map(price=>
//     price.toLocaleString('en-US',{
//         style:'currency',
//         currency:'USD'
//     })
// )
// console.log(newPrice1);

// const newPrice2=prices.map(price=>
//     price.toLocaleString('en-EU',{
//         style:'currency',
//         currency:'EUR'
//     })
// )
// console.log(newPrice2);


//30
// const nums = [1, 2, 3, 4, 5];

// const newNums=nums.toReversed()
// console.log(newNums);
// console.log(nums);//original array doesn't changed

// nums.reverse()
// console.log(nums);//original array has been changed


//31
// const items = ['apple', 'banana', 'orange', 'grape', 'mango'];

// function removeItem(arr,item){
//     const index=arr.indexOf(item)
//     if(index!=-1){
//         arr.splice(index,1)
//     }
//     return arr
// }
// console.log(removeItem(items,'orange'));


//32
const nums = [5, 10, 15, 20, 25, 30, 15, 35];

const newNum=nums.indexOf(15,0) 
    // nums.fromIndex(0,7)
console.log(newNum);
