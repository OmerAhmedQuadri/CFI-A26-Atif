import fs from 'fs'

const users=[
    {name:'omer',age:21,city:'Hyderabad'},
    {name:'fahad',age:21,city:'tolichowki'},
    {name:'fazal',age:21,city:'Masab Tank'},
]

console.log(users);
console.log(typeof users);
const data=JSON.stringify(users,null,4)
console.log(data);
console.log(typeof data);

