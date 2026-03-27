//wap to create an array and read the all the elements of the array from user
import readlineSync from 'readline-sync'
let l=readlineSync.questionInt("Enter the length of the array: ")
console.log(l);
let arr1=[]
for(let i=0;i<l;i++){
    arr1[i]=readlineSync.questionInt("Enter the elements: ")
    arr1[i]=[]
    for(let j=0;j<l;j++){
        arr1[i][j]=readlineSync.question("Enter the 2nd array elements")
    }
}
console.log(arr1);
