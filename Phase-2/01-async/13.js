console.log('Hello start');

let id = setTimeout(() => {
    console.log('Iam in middle');
}, 2000)
// console.log(id);
clearTimeout(id)

console.log('end');
