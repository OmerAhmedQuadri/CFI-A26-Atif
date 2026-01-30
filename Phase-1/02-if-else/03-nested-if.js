// const name='Atif'
// const marks=80
// if(name=='Atif'){
//     if(marks>90){ 
//         console.log('Atif has scored');
//     }
//    else if(marks>60){
//     console.log('Atif just passed');
//     }
//     else{
//         console.log('Atif has failed');
        
//     }
// }
// else if(name=='yash'){
//     if(marks>90){
//         console.log('yash has scored');
//     }
//     else if(marks>70){
//         console.log('yash just passed');
//     }
//     else if(marks<50){
//         console.log('yash has failed');
//     }
// }else{
//     console.log('incorrect name');
// }

// let a=10
// let b=20
// let max
// if(a>b){
//     max=a
// }else{
//     max=b
// }
// console.log(`max value is: ${max}`);//string or template literal-using backticks``

const price=500
let discount=0
if(price>=1000){
    discount=20
}else if(price>=500){
    discount=15
}else{
    discount=10
}
console.log(`your discount is ${discount}`);
