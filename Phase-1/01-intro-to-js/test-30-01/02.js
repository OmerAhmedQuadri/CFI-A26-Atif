import readlineSync from 'readline-sync'
let num=readlineSync.questionInt("Enter a number: ")
if(num%20){
    console.log("Number is Even");
}else{
    console.log("Number is not even");
}