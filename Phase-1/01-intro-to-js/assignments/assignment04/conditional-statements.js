//1
// let temperature=35
// if(temperature>30){
//     console.log("It's hot!");
// }

//2
// let age=16
// if(age>=18){
//     console.log("You can drive");// statement is executed but condition fails 
// }

//3
// let num = 0
// if (num) {
//     console.log('Number exists') 
// }
// console.log('End of code')//Explanation: This statement is executed because in condition num has 0 is a falsy value

//4
// let username = "admin"
// if (username) {
//     console.log('Welcome ' + username)//both statements printed username has value that pass the condition in if statement 
// }
// console.log('Rest of the code')

//5
// let score=95
// if(score>=90){
//     console.log("Excellent!");
// }

//6
// let price = 100
// if (price >= 50) {
//     console.log('Expensive item')//this statement is printed if condition passes
// }

//7
// let isRaining=true
// if(isRaining){
//     console.log("Take an Umbrella");
// }

//8
// let name = ""
// if (name) {
//     console.log('Hello ' + name)
// }
// console.log('Program ended')//this statement is executed name holds falsy value

//9
// let marks=85
// if(marks>=40){
//     console.log("Pass");
// }

//10
// let num = 50
// if (num > 30) 
//     console.log('Greater than 30')//if condition passes and statement printed
//     console.log('This is a big number')//executes next log statement

// console.log('Done')//all 3 log statements are executed as condition true


//Section 2: if...else Statements (10 Questions)

//11
// let age=15
// if(age>=18){
//     console.log("Adult");
// }else{
//     console.log("minor");
// }

//12
// let num = 7

// if (num >= 10) {
//     console.log('Number is greater than or equal to 10')//not executes condition fails
// } else {
//     console.log('Number is less than 10')//this statement is executed
// }

//13
// let number=8
// if(number/2){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

//14
// let username = 'omer'
// if (username == 'admin') {
//     console.log('Hello admin')
// } else {
//     console.log('Hello user')//This log statement is executed as the condition fails
// }

//15
// let password="pass123"
// if(password="admin123"){
//     console.log("Wrong password!");
// }else{
//     console.log("Login Successfull!");
// }

//16
// let marks = 35
// if (marks >= 40) {
//     console.log('Pass')
// } else {
//     console.log('Fail')//This statement is executed as condition fails
// }

//17
// let a=10,b=20
// if(a>b){
//     console.log(a,'is larger');
// }else{ 
//     console.log(b,'is larger' );  
// }

//18
// let temperature = 25
// if (temperature > 30) {
//     console.log('Hot weather')
// } else {
//     console.log('Pleasant weather')//tihs statement is executed as condition fails
// }

//19
// let num=-5
// if(num<=0){
//     console.log("negative or zero");
// }else{
//     console.log('Positive');
// }

//20
// let name = 'Omer'
// if (true) {
//     let name = 'Ahmed'
//     console.log(name)//Ahmed
// }
// console.log(name)//Omer

//Section 3: if...else if...else Ladder (10 Questions)

//21
// let marks=75
// if(marks>=90){
//     console.log("A Grade");
// }else if(marks>=70)
// {
//     console.log("B Grade");
// }else if(marks>=50){
//     console.log("C Grade");
// }else{
//     console.log("Fail");
    
// }

//22
// let name = 'fahad'
// if (name == 'omer') {
//     console.log('Hello omer')
// } else if (name == 'fahad') {
//     console.log('Hello fahad')//This statement will be executed as the 1st condition fails
// } else {
//     console.log('Hello stranger')
// }

//23
// let day=3
   
//     if(day==1){
//         console.log('monday');
//     }
//     else if(day==2){
//         console.log('tuesday');
//     }else if(day==3){
//         console.log('wednesday');
//     }else{
//         console.log('etc');
        
//     }
    

//24
// let num = 15
// if (num > 20) {
//     console.log('Greater than 20')
// } else if (num > 10) {
//     console.log('Greater than 10')//This statement executed after 1st condiation fails
// } else if (num > 5) {
//     console.log('Greater than 5')
// } else {
//     console.log('5 or less')
// }


//25
// let age=35
// if(age<13){
//     console.log('Child');
// }else if(age<20){
//     console.log('Teenager');
// }else if(age<60){
//     console.log('Adult');
// }else{
//     console.log('Senior');
// }

//26
// let price = 1500
// let discount = 0
// if (price >= 5000) {
//     discount = 30
// } else if (price >= 2000) {
//     discount = 20
// } else if (price >= 1000) {
//     discount = 10
// } else {
//     discount = 5
// }
// console.log('Your discount is ' + discount + '%')//10

//27
// let score=0
// if(score==0){
//     console.log('No score yet');
// }else if(score<50){
//     console.log('fail');
// }else if(score<75){
//     console.log('Pass');
// }else{
//     console.log('Excellent');
// }

//28
// let temperature = 15
// if (temperature < 0) {
//     console.log('Freezing')
// } else if (temperature < 10) {
//     console.log('Cold')
// } else if (temperature < 20) {
//     console.log('Cool')            //this statement will be executed
// } else if (temperature < 30) {
//     console.log('Warm')
// } else {
//     console.log('Hot')
// }

//29
// let price=3500
// let discount
// if (price>=5000){
//     discount=25
// }else if(price>=3000){
//     discount=15
// }
// else if(price>=1000){
//     discount=10
// }else{
//     discount=0
// }
// console.log('discount:',discount+'%');

//30
// let bmi=22
// if(bmi<18.5){
//     console.log('Underweight');
// }else if(bmi<25){
//     console.log('Normal');
// }else if(bmi<30){
//     console.log('Overweight');
// }else{
//     console.log("Obese");
// }

//Section 4: Nested if...else (8 Questions)

//31
//let name = 'yash'
//let marks = 75

// if (name == 'yash') {
//     if (marks > 90) {
//         console.log('Yash scored excellent')
//     } else if (marks > 60) {
//         console.log('Yash passed')//This statement will be executed
//     } else {
//         console.log('Yash failed')
//     }
// }


//32
// let username='admin'
// let password='1234'
//     if(username=='admin'){
//         if(password=='1234'){ 
//             console.log('Login Successfull');
//         }
//         else if(password=!'1234'){
//             console.log('Wrong Password');
//         }else{
//             console.log('User not found');
//         }
//     }

//33
//let age = 25
//let hasLicense = true
// if (age >= 18) {
//     if (hasLicense) {
//         console.log('You can drive')// This statement will be executed
//     } else {
//         console.log('You need a license')
//     }
// } else {
//     console.log('You are too young')
// }

//34
// let age=15
// let hasParent=true
// if(age>=18){
//     console.log("Ticket confirmed");
//     }
//     if(age<18){
//         if(hasParent){
//             console.log("Ticket confirmed with parent");
            
//         }
//         else{
//             console.log("Need parent permission");
            
//         }
//     }


//35
// let marks = 85
// let attendance = 90

// if (marks >= 80 && attendance >=85) 
// {
//         console.log('Excellent student')
// }

//36
//let num = 10
// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log('Positive even number')//this statement will be executed
//     } else {
//         console.log('Positive odd number')
//     }
// } else {
//     console.log('Negative or zero')
// }


//37
// let marks=78
// let attendance=70
// if(marks>=40){
//     if(attendance>=75){
//         console.log("Pass");
        
//     }else{
//         console.log("Detained due to low attendance");
        
//     }
// }else{
//     console.log("Fail");
    
// }

//38
// if (age >= 18 && isCitizen) {
//         console.log('Can vote')
    
// }


//Section 5: Template Literals (5 Questions)

//39
// let a = 20
// let b = 50
// let max
// if (a > b) {
//     max = a
// } else {
//     max = b
// }
// console.log(`Max value is: ${max}`)//max value is: 50

//40
// let name='omer'
// let age=25
// console.log(`myname is: ${name},and my age: ${age}`);

//41
// let price = 5000
// let discount = 20
// console.log(`Price: ${price}, Discount: ${discount}%, Final: ${price - (price * discount / 100)}`)
// /*
// 4000
// */

//42
// let item='Laptop'
// let price=50000
// let quantity=2
// console.log(`item: ${item}, price: ${price}, quantity: ${quantity}, total: ${price+price}`);

//43
// Method 1
//console.log('Max value is: ' + max)//This method is string concatenation
// Method 2
//console.log(`Max value is: ${max}`)//This is string literal

//44
// let item = 'carrot'

// switch (item) {
//     case 'apple':
//         console.log('It is a fruit')
//         break
//     case 'carrot':
//         console.log('It is a vegetable')//This case will be executed
//         break
//     case 'tomato':
//         console.log('It is a vegetable')
//         break
//     default:
//         console.log('Unknown item')
// }

//45
// let day='3'
// switch(day){
//     case '1':
//         console.log("Monday");
//         break
//     case '2':
//         console.log("Tuesday");
//         break
//     case '3':
//         console.log("Wednesday");
//         break
//     case '4':
//         console.log("Thursday");
//         break
//     case '5':
//         console.log("Friday");
//         break
//     case '6':
//         console.log("Saturday");
//         break
//     case '7':
//         console.log("Sunday");
//         break
// }


//46
// let num = 2
// switch (num) {
//     case 1:
//         console.log('One')
//     case 2:
//         console.log('Two')// executed
//     case 3:
//         console.log('Three')//this case also executes
//     default:
//         console.log('Other')//this case also executes
// }

//47
// let grade='B'
// switch(grade){
//     case 'A':
//         console.log("Excellent");
//         break
//     case 'B':
//         console.log("Good");
//         break
//     case 'C':
//         console.log("Average");
//         break
//     case 'D':
//         console.log("Fail");
//     default:
//         console.log("Invalid grade");     
// }

//48
// let color = 'red'

// switch (color) {
//     case 'red':
//     case 'pink':
//         console.log('Shades of red')//This part will be executed
//         break
//     case 'blue':
//     case 'navy':
//         console.log('Shades of blue')
//         break
//     default:
//         console.log('Other color')
// }

//49
// let month='5'
// switch(month){
//     case '1':
//         console.log("January");
//         break
//     case '2':
//         console.log("February");
//         break
//     case '3':
//         console.log("March");
//         break
//     case '4':
//         console.log("April");
//         break
//     case '5':
//         console.log("May");
//         break
//     case '6':
//         console.log("June");
//         break
        
// }

//50
/*
You should use switch when comparing one variable with multiple
fixed values using equality, as it makes the code cleaner and more readable.
Use if...else if when conditions involve ranges, comparisons, or complex logic.
*/

//51
// let fruit = 'apple'

// if (fruit === 'apple') {
//     console.log('Red fruit')//This statement is printed
// } else if (fruit === 'banana') {
//     console.log('Yellow fruit')
// } else if (fruit === 'orange') {
//     console.log('Orange fruit')
// } else {
//     console.log('Unknown fruit')
// }


//Section 7: Ternary Operator (9 Questions)
//52
// let marks = 90
// marks >= 80 ? console.log('Passed') : console.log('Failed')//passed

//53
// let age = 20
// let status

// if (age >= 18) {
//     status = 'Adult'
// } else {
//     status = 'Minor'
// }
// console.log(status)//adult

//54
// let num = 7
// let result = num % 2 === 0 ? 'Even' : 'Odd'
// console.log(result)//odd

//55
// let num=-5
// let abc=(num<=0 ? 'negative or zero' : 'Positive')
// console.log(abc);


//56
// let price = 1200
// let discount = price >= 1000 ? 20 : 10
// console.log(`Discount: ${discount}%`)//20

//57
// let username='admin'
// let result=(username='admin' ? 'Welcome Admin': 'Welcome guest')
// console.log(result);


//58
// let marks = 85
// let grade = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : 'F'
// console.log(grade)//B

//59
/*
You should avoid using **ternary operators** when conditions are complex or nested, as they reduce readability.
They are also not suitable when the logic involves multiple statements or side effects.
*/

//60
// let score = 55
// let result=(score >= 50 ?'Pass':'Fail')
// console.log(result)


//Section 8: Mixed Challenges (10 Questions)

//61
// let num1=10
// let num2=5
// let operator='+'
// switch(operator){
//     case '+':
//         console.log(num1+num2);
//         break
//     case '-':
//         console.log(num1-num2);
//         break
//     case '*':
//         console.log(num1*num2);
//         break
//     case '/':
//         console.log(num1/num2);
//         break
//     case '%':
//         console.log(num1%num2);
//         break
// }


//62-if-else
// let light='yellow'
// if(light=='red'){
//     console.log('stop');
// }else if(light=='yellow'){
//     console.log('Get ready');
// }else{
//     console.log('go green');
    
// }

//62-switch case
// let light='yellow'
// switch(light){
//     case 'red':
//         console.log("stop");
//         break
//     case 'yellow':
//         console.log("Get ready");
//         break
//     case 'green':
//         console.log("Go");
//         break
// }


//63
// let balance=5000
// let withdrawAmount=3000
// if(withdrawAmount<=balance){
//     console.log(balance=balance-withdrawAmount);
// }else{
//     console.log("Insufficient Balance");
//}


//64
// let year=2024
// if(year%4==0 && (year%100!=100/400)){
//     console.log("Leap year");
// } else{
//     console.log("Not a leap year");
    
// }

//65
// let password='pass123'
// if(password.length>=12){
//     console.log("strong");
// }else if(password.length>=8){
//     console.log("Medium");
// }else if(password.length<8){
//     console.log("Weak");
// }

//66
// let price=2500
// let discount
// let ispremiumMember=false
// if(ispremiumMember){
//     discount=30
// }else if(price>=5000){
//     discount=25
// }else if(price>=3000){
//     discount=20
// }else if(price>=1000){
//     discount=15
// }
// console.log(`final price= ${price-(price*discount/100)}`);


//67
// let marks=75
// let attendance=80
// let hasFee=true
// if(marks>=40 && attendance>=75 && hasFee){
//     console.log("Eligible");
// }else{
//     console.log("Not Eligible");
// }

//68
// let num=0
// if(num==0){
//     console.log("zero");
// }else if(num>0){
//             if(num%2==0){
//                 console.log('Even');
//             }else{
//                 console.log('Odd');
//             }
// }else if(num<0){
//             if(num%2==0){
//                 console.log("Even");  
//             }else{
//                 console.log("Odd");
                
//             }
// }

//69

//70
// let hour = 14;
// if (hour >= 5 && hour < 12) {
//   console.log("Good morning");
// } else if (hour >= 12 && hour < 17) {
//   console.log("Good afternoon");
// } else if (hour >= 17 && hour < 21) {
//   console.log("Good evening");
// } else {
//   console.log("Good night");
// }
