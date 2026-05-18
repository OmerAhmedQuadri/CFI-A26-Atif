console.log('1');
setTimeout(()=>{
    console.log('Iam First');
},0)

console.log('11');
setTimeout(()=>{
    console.log('Iam Second');
},0)

console.log('111');
setTimeout(()=>{
    console.log('Iam Third');
},0)

setTimeout(()=>{
    console.log('Iam just getting started with Adv.JS');
    setTimeout(()=>{
        console.log('Iam just getting started again');
    },1000)
},2000)