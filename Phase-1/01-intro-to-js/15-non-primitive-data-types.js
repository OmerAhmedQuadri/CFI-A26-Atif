// let arr=[23,'atif',true,null]
//     console.log(arr[1]);
    
//     arr[2]='uddin'
//     arr.push(20)
//     console.log(arr.length);
//     arr[arr.length]=50

// console.log(arr[arr.length-1]);
// console.log(arr);
// let firstelement=arr.shift()
// console.log(arr);
// console.log(firstelement);

// console.log(arr.unshift('cfi'));
// console.log(arr);
// let fruits=['apple','mango','guava']
// let veggies=['Tomato','potato','carrot']
// let basket=[fruits,veggies]
// console.log(basket);
// console.log(basket[0].length);
// console.log(basket[0][1]);
// console.log(basket.length);
// console.log(basket.flat())
// console.log(basket);

// let arr=[10,'atif',['apple','banana']]
// console.log(arr)
// console.log(arr[2]);
// console.log(arr[2][1]);
// let headers= ['Name','age','Address']
// let students=[
//     ['Name','age','Address'],
//     ['Atif',21,'Masab Tank'],
//     ['Fahad',21,'Towlichoki'],
//     ['yashwanth',21,'IDPL']
// ]
// console.table(students,headers);
//console.log(students);

// let arr1= [10,20,30]
// let arr2=arr1
// arr1.push(100)
// arr2[3]=40
// console.log(arr1)
// console.log(arr2);

let arr1=[100,200,300]
let arr2=[...arr1]
let arr3=[arr1,arr2]
arr2.push(400)
arr1.push(300)
arr1.pop(0)
arr1.shift()
arr1.unshift(100)
arr3.flat()
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);
console.log(arr1==arr2);





