import readlineSync from 'readline-sync'
let name=readlineSync.question('Enter your name: ')
let age=readlineSync.questionInt('Enter your age: ')
let company=readlineSync.question('Enter your company name')
console.log('\n output:');

console.log(
    `hii ${name}
your age: ${age}
working at: ${company}`)
