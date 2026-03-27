const users=[
    {name: 'omer',role: 'admin'},
    {name: 'atif',role: 'manager'},
    {name: 'yash',role: 'user'}

]

const hasAdmin=users.some((user)=>user.role=='editor')
console.log(hasAdmin);
