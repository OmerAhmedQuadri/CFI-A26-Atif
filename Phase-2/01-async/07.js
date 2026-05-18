console.log('Hello world');
setTimeout((id)=>{
    const user={
        name:'John doe',
        age:25
    }
    console.log(`User ID:${id}: user Name:${user.name},user Age:${user.age}`);
},5000,1200)

setTimeout(()=>{
    console.log('First');
},1000)

setTimeout(()=>{
    console.log('Second');
},1500)