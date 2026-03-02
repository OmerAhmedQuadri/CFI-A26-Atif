//47
//. Write a program to count frequency of each element and store in an object. 
//Ex: ['a', 'b', 'a', 'c', 'b', 'a'] -> { a: 3, b: 2, c: 1 } 

let arr = ['a', 'b', 'a', 'c', 'b', 'a']

let count = {}
for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]]||0) + 1
}
console.log(count);
