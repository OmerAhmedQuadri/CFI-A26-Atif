//Section 1: Basic Functions
//1
// function sayHello(name) {
//     console.log('Hello ' + name)
// }

// sayHello('omer')//Hello omer
// sayHello('taha')//Hello taha
// sayHello('maseeh')//Hello maseeh


//2
// function greet(name){
//     console.log(`Welcome[${name}]!`);
// }
// greet('Atif')
// greet('uddin')
// greet('Mohammad')

//3
// console.log(sayHello)
// function sayHello(name) {           //returns just function with parameter
//     console.log('Hello ' + name)
// }


//4
// function printMessage(){
//     for(let i=1;i<=3;i++){
//         console.log('JavaScript is awesome!');
//     }   
// }
// printMessage()

//5
// function displayInfo(name, age, city) {
//     console.log('Name:', name)//prints name as omer 
//     console.log('Age:', age)//prints age as 25
//     console.log('City:', city)//prints city as Hyderabad
// }
// displayInfo('Omer', 25, 'Hyderabad')

//6
// function introduce(name,age,profession){
//     console.log(`name:${name}, age:${age}, profession:${profession}`);
// }
// introduce('Atif',21,'student')

//7
// sayHello('Omer')                    //accessing before variable initialization
// let sayHello = function(name) {
//     console.log('Hello ' + name)
// }


//8
// function multiply(a,b){
//     console.log(a*b);
// }
// multiply(5,4)
// multiply(10,3)
// multiply(7,8)

//Section 2: Function Expressions
//9
// let printNumbers = function(max) {
//     for (let i = 1; i <= max; i++) {
//         console.log(i)                  //prints number from 1 to 10
//     }
// }
// printNumbers(10)


//10
// let greet= function(name){
//     console.log("Hello "+ name);
// }
// greet('Atif')


//11
// Version 1
// function add(a, b) {            //function declaration
//     console.log(a + b)
// }
// // Version 2
// let add = function(a, b) {         //function expression declaring the variable first
//     console.log(a + b)
// }

//12
// let printEven= function(max){
//     for(let i=1;i<=max;i++){
//         if(!(i%2)){
//             console.log(i);
//         }
//     }
// }
// printEven(20)


//13
// let calculate = function(a, b) {
//     console.log('Sum:', a + b)      //prints sum=a+b: 8
//     console.log('Product:', a * b)  //prints product=a*b: 15
// }
// calculate(5, 3)


//14
// let printPattern= function(max){
//     let str=''
//     for(let i=1;i<=max;i++){
//         str=str+'* '
//         console.log(str);
//     }
// }
// printPattern(4)


//Section 3: Return Statement
//15
// function sum(a = 10, b = 20) {
//     console.log('code before return statement')//then print this statement next
//     return a + b
//     console.log('code after return statement')
// }
// console.log('code before function call')//prints this statement first 
// console.log(sum(5))                     //3rd statement prints function call
// console.log('code after function call')// 4th statement print this line

/*Question: Does the line after return execute? Why or why not?
it doesnot execute line after return statement because arguments pass to the parameters return and next line won't printed
*/

//16
// Function 1
// function add1(a, b) {         //this function also executes but without return statement so result 1 contains no values undefined
//     console.log(a + b)
// }
// // Function 2
// function add2(a, b) {
//     return a + b
// }                              //function 2 executes with return statement
// let result1 = add1(10, 20)
// let result2 = add2(10, 20)
// console.log(result1)         //30
// console.log(result2)         //30


//17
// function getMax(a,b){
//     if(a<b){
//         return b
//     }else{
//         return a
//     }
// }
// console.log(getMax(10,20))
// console.log(getMax(50,30))


//18
// function multiply(a, b) {
//     return a * b
// }
// let result = multiply(5, 4)
// console.log(result)             //20
// console.log(multiply(10, 3))    //30


//19
// function calculateArea(len,wid){
//     return len*wid
// }
// let area=calculateArea(10,5)
// console.log('Area:'+area);


//20
// function checkAge(age) {
//     if (age >= 18) {
//         return 'Adult'
//     } else {
//         return 'Minor'
//     }
// }
// console.log(checkAge(25))   //Adult
// console.log(checkAge(15))   //Minor


//21
// function isEven(num){
//     if(num%2){
//         return false
//     }else{
//         return true
//     }
// }
// console.log(isEven(2));

//22
// function calculateGrade(num){
//     if(num>=90){
//         return 'A'
//     }else if(num>=80){
//         return 'B'
//     }else if(num>=70){
//         return 'C'
//     }else if(num>=60){
//         return 'D'
//     }else if(num<60&& num>=0){
//         return 'F'
//     }else if(num<0){
//         return 'Invalid number'
//     }
// }
// console.log(calculateGrade(-5));


//Section 4: Default Parameters 
//23
// function sum(a = 10, b = 20) {
//     return a + b
// }
// console.log(sum(5, 15))// prints taking arguments from function call sum: 20
// console.log(sum(5))// 25
// console.log(sum())//30


//24
// function greet(name='Guest'){
//     console.log('Hello '+name)
//     return name
// }
// greet("Atif")
// greet()


//25
// function calculatePrice(price,discount=0){
//     return price-(price*discount/100)
// }
// console.log(calculatePrice(1000,10));
// console.log(calculatePrice(1000));


//26
// function introduce(name = 'Anonymous', age = 0, city = 'Unknown') {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// }
// introduce('Omer', 25, 'Hyderabad')//name: omer, age: 25, city: Hyderabad
// introduce('Ali', 22)//name: ali, age: 22, city: Unknown
// introduce('Sara')//name: Sara, age: 0,city: Unknown
// introduce()//name: Anonymous, age: 0,city : Unknown

//Section 5: User Input with Functions 
//27
// import readlineSync from 'readline-sync'
// function userDetails() {
//     let username = readlineSync.question('Enter username: ')//takes name from the user input
//     let userrole = readlineSync.question('Enter the user role: ')//takes role from the user input
//     return {username, userrole}//returns both name and role in object
// }
// let user = userDetails()
// console.log(user)


//28
// import readlineSync from 'readline-sync'
// function getAge(num){
//     num=readlineSync.questionInt("Enter the age: ")
//     return num
// }
// let age=getAge()
// console.log(age);


//29
// import readlineSync from 'readline-sync'
// function login(){
//     let username=readlineSync.question("Enter username: ")
//     let password=readlineSync.questionInt("Enter the password: ")
//     if(username=='admin' && password==1234) return "Login Successful"
//     return "Invalid credentials" 
// }
// console.log(login());


//30

