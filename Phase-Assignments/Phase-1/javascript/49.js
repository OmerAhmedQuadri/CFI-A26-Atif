//49
//Write a program to find the largest and the smallest number in an 
// array (both with and without sorting).  
// Ex: [3, 1, 9, 4, 7] → 1, 9 

//without sorting 
//largest element & smallest element 
// let arr=[3,1,9,4,7]
// let max=arr[0]
// let min=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(max);
// console.log(min);




//with sorting
//largest & smallest element
let arr1=[3,1,9,4,7]
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[j]<arr1[i]){
            let temp=arr1[j]
            arr1[j]=arr1[i]
            arr1[i]=temp
        }
        if(arr1[j]>arr1[i]){

        }
    }
}
console.log(arr1);
console.log(`Smallest element=${arr1[0]}\nLargest element=${arr1[arr1.length-1]}`);




