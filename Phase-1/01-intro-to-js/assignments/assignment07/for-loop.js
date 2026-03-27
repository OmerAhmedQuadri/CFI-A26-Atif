//JavaScript For Loops - Practice Assignment (20 Questions)
//Section 1: Basic For Loops 
//1

// for(let i=1;i<=10;i++){
//     console.log(i);         //1 to 10 numbers
// }

//2
// let i = 1
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// for(let i=1;i<=10;i++){
//     console.log(i);         //prints 1 to 10
// }


//3
// for (let i = 1; i <= 10; i++) {
//     if (!(i % 2)) {
//         console.log(i)      //prints even number between 1 to 10
//     }
// }

//4
// for (let i = 1; i <= 10; i++)
//     if (!(i % 2)) {
//         console.log(i)
//         console.log('omer')     //prints omer even number of times with even numbers
//     }


//5
// for(let i=1;i<=20;i++){
//     if(i%2){
//         console.log(i);
//     }
// }


//Section 2: Nested For Loops - 
//6
//let max = 5
// for (let rows = 0; rows < max; rows++) {                //00
//     let str = ''                                        //1011
//     for (let cols = 0; cols <= rows; cols++) {          //202122
//         str = str + rows + cols                         //30313233
//     }                                                   //4041424344
//     console.log(str)
// }


//7
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {    //6 times omer will be printed
//         console.log('omer')
//     }
// }


//8
// let max=5
// for(let i=1;i<=1;i++){
//     let str=''
//     for(let j=1;j<=max;j++){ 
//         str=str+'* '
//     console.log(str);
//     }
// }


//9
// let max=5
// for(let i=1;i<=1;i++){
//     str=''
//     for(let j=1;j<=max;j++){
//         str=str+j+' '
//         console.log(str);
//     }
// }


//10
// let rows = 4
// let cols = 5                                        //1 2 3 4 5
// for (let i = 1; i <= rows; i++) {                   //2 3 4 5 6
//     let str = ''                                    //3 4 5 6 7
//     for (let j = i; j <= cols + i - 1; j++) {       //4 5 6 7 8
//         str = str + j + ' '                        
//     }
//     console.log(str)
// }

//Section 3: Arrays with For Loops
//11
// let arr = [23, 54, 98, 76]                  
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])                 // prints the arr values through indexing
// }


//12
// let sum1=0
// let arr=[10,20,30,40,50]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);
//     sum1= sum1+arr[i]
// }
// console.log('sum: '+sum1);

//13
// let arr2=[5,10,15,20,25,30]
// for(let i=0;i<arr2.length;i++){ 
//     if(!(arr2[i]%2)){
//         console.log(arr2[i]);
//     }
// }


//14
// let arr = [5, 10, 15, 20]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)            //50


//15
// let array=['apple','banana','kiwi','orange','grapes']
// for(i=0;i<array.length;i++){
//     console.log(i+':'+array[i]);
// }


//Section 4: 2D Arrays / Matrix
//16
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])                  //prints the same matrix
// }


//17
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]
// let sum = 0
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         sum = sum + matrix[i][j]
//         console.log(matrix[i][j])               //prints all the elements of the 2d array and 
//     }                                                sum: 6732
// }
// console.log(sum)


//18
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         matrix[i][j] = matrix[i][j] * 10
//         console.log(matrix[i][j])           //each value is multiplied by 10 in the array
//     }
// }


//19
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let sum=0
// for(let i=0;i<=2;i++){
//     for(j=0;j<3;j++){
//         console.log(arr[i][j]);
//         sum=sum+arr[i][j]
//     }
// }
// console.log(sum);


//20
let arr=[
    [10,20,30,40],
    [50,60,70,80]
]
for(let i=0;i<arr.length;i++){
    arr[i]=[]
    for(let j=0;j<4;j++){
        arr[i][j]=arr[i][j]*2
        console.log(arr[i][j]);
    }
}