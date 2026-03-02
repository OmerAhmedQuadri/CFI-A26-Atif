//20
//Create a simple timer app using setInterval() that counts down from 5 to 0, then prints "Time’s up!". 

let count=5
let id=setInterval(()=>{
    console.log(count);
    if(count==0){
        console.log('Times up!');
        clearInterval(id)
    }
    count--
},1000)