//for in object
let obj={
    name:'Atif',
    age:21,
    phone:123456789,
    city:'Hyderabad',
    pin:500000,
}

for (const e in obj) {
    console.log(`${e}: ${obj[e]}`);
    
  
}
//for of -for in array
let arr=[21,23,34,65,76,98,104]
let tar=23

for (const ele of arr) {
    console.log(ele);
}
for (const ele in arr) {
    console.log(ele);
}