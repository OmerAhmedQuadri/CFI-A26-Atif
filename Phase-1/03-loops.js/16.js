
// do {
//     console.log("hello");
    
// } while (0);

// let i=600
// let max=100
// do{
//     if(i%3==0){
//         console.log(i);   //do while executes the code atleast once even if the code is false
//     }
//    i++

// }while (i<=max)

import readlineSync from 'readline-sync'
let oneTimePassword=4444
let userInput
let count=0
let allowedCount=5
let loginstatus=true
do {
    if(allowedCount==count){
        loginstatus=false
        break
    }
    count++
    userInput= readlineSync.questionInt('Enter the OTP: ')
} while (oneTimePassword!==userInput);
//console.log("Login succefull!!");
loginstatus ? console.log("Login successfull!!"): console.log("failed");


