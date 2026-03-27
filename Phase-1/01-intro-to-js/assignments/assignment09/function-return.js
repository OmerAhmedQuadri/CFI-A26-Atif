//Basic Functions
//1
// function checkAge(age){
//     if(age<18) return "minor"
//     else if(age>=18 && age<65) return "Adult"
//     else if(age>65) return "Senior"
// }
// console.log(checkAge(21));


//2
// function greetuser(name){
//     console.log(`Welcome ${name}!`);// welcome name is printed if we use return also we are not capturing return in function call
// }
// greetuser('admin')


//3
// function multiply(a,b=10){
//     return a*b
// }
// console.log(multiply(5))

//4
// function divide(a,b){
//     if(b==0) return (console.log("Error!")&& undefined)
//     else if(typeof (a==Number &&b==Number)) return a/b
//     else return "Error!"
// }
// console.log(divide(5,0));



//5
// function isValidInput(value){
//     if(!value) return true
//     return false
// }
// console.log(isValidInput(12));


//Array Operations 
//6
// function giveOdds(arr){
//     let arr1=[]
//     if(Array.isArray(arr)){
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]%2==1){ 
//             arr1.push(arr[i])
//             }
//         }
//         return arr1
//     }
//     else return []
// }
// console.log(giveOdds([1,2,3,4,5,6,7]));


//7
// function countOccurences(arr,target){
// let count=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target) count++ 
// }
// return count
// }
// console.log(countOccurences([1,2,3,2,4,2],2));


//8
// function filterGreaterThan(arr,threshold){
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>threshold){
//         arr1.push(arr[i])
//     }
// }
// return arr1
// }
// console.log(filterGreaterThan([10,20,30,35,40,45],30));


//9
// function sumArray(arr){
//     let sum=0
//    if(!(Array.isArray(arr))){
//     console.log("Error!")
//     return undefined
//    }
//    if(arr==[]) return 0
//     for(let i=0;i<arr.length;i++){ 
//         if(Array.isArray){ 
//             sum=sum+arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumArray([]));


//10
// function findMax(arr){
//     let num=arr[0]
//     if(arr==[]) return undefined
//     for(let i=0;i<arr.length;i++){
//         if(num<arr[i]){
//             num = arr[i]
//         }
//     }
//     return num
// }
// console.log(findMax([10,50,20,40,30]));


//Number Analysis 
//11
// function isPerfect(num){
//     let sum=0
//     for(let i=0;i<num;i++){
//         if(num%i==0){
//             sum=sum+i
//         }
//     }
//     if(num==sum) return "Perfect number"
//     else return "Not a perfect number"
// }
// console.log(isPerfect(10));


//12
// function isArmstrong(num){
//     let sum=0
//     let arr=[]
//     let count=0
//     let temp=num
//     while(num>0){
//         arr.push(num%10)
//         num=Math.trunc(num/10)
//         count++
//     }
//     for(let i=0;i<arr.length;i++){
//         sum=sum+(Math.pow(arr[i],count))
//     }
//     if(temp==sum) return "Armstrong Number"
//     else return "Not an Armstrong Number"
// }   
// console.log(isArmstrong(153));


//13
// function isprime(num){
//     if(num<2) return false
//     for(let i=2;i<num;i++){
//         if(num%i==0){ 
//              return false
//         }
//     }
//     return true
// }
// //console.log(isprime());

// function primesInRange(start,end){
//     let arr=[]
//     for(let i=start;i<=end;i++){
//         if(isprime(i))
        
//          arr.push(i)
//     }
//     return arr
// }
// console.log(primesInRange(2,100));


//14
// function sumOfDigits(num){
//     let sum=0
//     let digits=0
//     if(typeof num=='number'){ 
//         while(num>0){ 
//             digits=(num%10)
//             sum=sum+digits
//             num=Math.trunc(num/10)
//         }
//     }else{
//         console.log("Enter numbers");
//     }
//     return sum
// }
// console.log(sumOfDigits(1234));


//15
// function reverseNumber(num){
//     let rev=0
//     let digits=0
//     if(typeof num=='number'){ 
//         while(num>0){
//             digits=num%10
//             rev=rev*10+digits
//             num=Math.trunc(num/10)
//         }
//     }else "Enter a valid number"
//     return rev
// }
// console.log(reverseNumber(2580));


//16
// function fibonacci(n,a=0,b=1,arr=[]){
//     if(n<=0) return arr
//     if(a==0 && b==1){
//         arr.push(a,b)
//     }
//     let c=a+b
//     arr.push(c)
//     return fibonacci(n-1,b,c,arr)
// }
// console.log(fibonacci(7));


//17
// function sumNatural(n){
//     if(n<=0) return n
//     return n+sumNatural(n-1)

// }
// console.log(sumNatural(10));


//18
// function power(base,exponent){
//     if(exponent<=0) return 1
//     return base*power(base,exponent-1)
// }
// console.log(power(2,4));


//19
// function countDown(num){
//     if(num<=0) return 0
//     console.log(num);
//     countDown(num-1)
// }
// console.log(countDown(60));


//20
// function sumArrayRecursive(arr,index,sum=0){
//     if((!(Array.isArray(arr)) && index<0)) return []
//     if(index>=arr.length) return 0
//     return arr[index]+sumArrayRecursive(arr,index+1)
// }
// console.log(sumArrayRecursive([10,20,30,40,50,50],0));

