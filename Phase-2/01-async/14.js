import {questionInt} from 'readline-sync'

let timer = questionInt('Enter the time for stopwatch: ')

let temp = timer
for (let i = timer; i > 0; i--) {
    setTimeout(() => {
        console.log(i);
    }, (timer - i + 1)*1000);
}