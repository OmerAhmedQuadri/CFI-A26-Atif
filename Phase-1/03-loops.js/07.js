import readline from 'readline-sync'
//*
//* *
//* * *

let str=''
let i=0
let max=readline.question('number of times: ')
while(i<max){
    str=str+'* '
    console.log(str);
    i++
}
console.log('rest of the code');
