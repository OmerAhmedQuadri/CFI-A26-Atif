//accessing through objects in function

let user={
    name:'Atif',
    age:21,
    city:'Hyderabad',
}

function test(usr){
    const{ age, name, city,pin=505001}=usr
    console.log(age,name,city,pin);
    console.log(usr);
    
}
test(user)