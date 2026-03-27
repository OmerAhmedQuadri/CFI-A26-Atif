const users=[
    {name: 'omer',age:170},
    {name: 'zayd',age:23},
    {name: 'taha',age:22},
    {name: 'fahad',age:21},
    {name: 'atif',age:21},
    {name: 'yash',age:21},
    {name: 'haseeb',age:20},
    {name: 'anas',age:24},
    {name: 'maseeh',age:23},
    {name: 'afnan',age:23},
]

const userobj=users.reduce((obj,user)=>{
    // console.log(obj, user)
    if(obj[user.age]){
        obj[user.age].push(user.name)
    }
    else obj[user.age]=[user.name]
    return obj
},{})
console.log(userobj);
