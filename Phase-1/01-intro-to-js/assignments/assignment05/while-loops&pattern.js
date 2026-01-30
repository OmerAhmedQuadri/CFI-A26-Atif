//Section 1: Basic While Loop (10 Questions)

//1
// let num = 5

// while (num > 0) {
//     console.log('hello world', num)//helloworld 5 times
//     num--
// }
// console.log('rest of the code')//rest of the code

//2
// let num=1
// while (num<=5) {
//     console.log(num);
//     num++
// }

//3
// let i = 1
// while (i < 5) {
//     console.log(i)//1,2,3,4
//     i++
// }
// console.log('rest of the code')//rest of the code

//4
// let i=1
// while (i<=10) {
//     console.log('omer',i);
//     i++
// }

//5
// let i = 0
// while (i < 10) {
//     console.log('omer')//omer 10times
//     i = i + 1
// }
// console.log(i)// i value= 10

//6
// let i=10
// while (i>=1) {
//     console.log(i);
//     i--
// }

//7
// let i = 0

// while (i < 5) {
//     console.log(i)//infinity 0
// }

//8
// let i=1
// let num=5
// while (i<=5) {
//     console.log(i*2);
//     i++
// }


//9
// let i = 0

// while (i < 5) {
//     console.log(i)//1,2,3,4
//     i++
// }
// console.log('some other code')//this log statment executed

// while (i < 10) {
//     console.log(i)//5,6,7,8,9
//     i++
// }
// console.log('rest of the code')//this statement executed

//10
// let i=0
// let max=4
// while (i<=max) {
//     console.log((i*2)+1);
//     i++
// }

//Section 2: While Loop with Post-Increment (i++) (8 Questions)
//11
// let i = 0
// while (i < 10) {
//     console.log(i++)// print 0 till 9
// }

//12
// let i = 0

// while (i < 10) {
//     console.log(i++)//print 0-9
// }
// console.log('some other code')// this statement will be printed

// while (i < 5) {
//     console.log(i++)//condition fails
// }
// console.log('rest of the code')//statement executed

//13.
// let i=5
// let max=10
// while (i<=max) {
//     console.log(i++);
// }

//14
// Version 1
// let i = 0
// while (i < 5) {
//     console.log(i)//0-4
//     i++
// }
// // Version 2
// let j = 0
// while (j < 5) {
//     console.log(j++)//0-4 no difference
// }


//15
// let num = 1
// while (num <= 3) {
//     console.log(num++)//1,2,3
//     console.log(num)//1-4
// }

//16
// let i=5
// let max=10
// while (max>=i) {
//     console.log(max--);
   
// }

//17
// let i = 0
// while (i < 5) {
//     console.log('Count:', i++)//0,1,2,3,4
// }
// console.log('Final i:', i)//5

//18
// let i=0
// let num=5
// while (i<=5) {
//     console.log(i*2);
//     i++
// }

//Section 3: While Loop with Pre-Increment (++i) (8 Questions)
//19
// let i = 0
// while (i < 10) {
//     console.log(++i)//1-10 because of pre=-increment
// }

//20
// let i = 0
// while (i < 10) {
//     console.log(++i)//1-10
// }
// console.log('some other code')//some other code

// while (i < 5) {
//     console.log(++i)//not executes as condition fails
// }
// console.log('rest of the code')//rest of the code

//21
// Version 1: Post-increment
// let i = 0
// while (i < 5) {
//     console.log(i++)//it prints 0-4 as it contains post increment
// }
// // Version 2: Pre-increment
// let i = 0
// while (i < 5) {
//     console.log(++i)// it prints 1-5 as it contains pre increment
// }

//22
// let i = 0
//  while (i < 5) {
//      console.log(++i)

//  }

//23
// let num = 0
// while (num < 3) {
//     console.log(++num)//1,2,3
//     console.log(num)//1,2,3
// }


//24
// Code	                                 First Print     Second Print       Third Print
// i = 0; while(i < 3) console.log(i++)		  0                1                  2       
// i = 0; while(i < 3) console.log(++i)		  1                2                  3      
// i = 1; while(i < 4) console.log(i++)		  1                2                  3
// i = 1; while(i < 4) console.log(++i)		  2                3                  4


//25
// let i=6
// let min=2
// while (i>=min) {
//     console.log(--i);
    
// }


//26
// let i = 0
// while (++i < 5) {
//     console.log(i)//1,2,3,4
// }
// console.log('Final:', i)//5

//Section 4: String Building with Loops (10 Questions)
//27
// let str = ''
// str = str + '*'
// console.log(str)//*
// str = str + '*'
// console.log(str)//**
// str = str + '*'
// console.log(str)//*** 

//28
// let str=""
// let count=0
// while (count<3) {
//     console.log(str=str+'*');
//     count++
// }

//29
// let str = ''
// let i = 0
// while (i < 3) {
//     str = str + '* '
//     console.log(str)//print * triangle
//     i++
// }
// console.log('rest of the code')//rest of the code

//30
//  let str=""
// let count=0
// while (count<5) {
//     console.log(str=str+'#');
//     count++
// }


// //31
// let str = ''                        //0
// let i = 0                           //0 1
// while (i < 4) {                     //0 1 2
//     str = str + i + ' '             //0 1 2 3
//     console.log(str)
//     i++
// }

//32
// let str=''
// let i=1
// let j= 65;
// while (i<5) {
//     str=str+String.fromCharCode(j)+' '
//     console.log(str);
//     i++
//     j++
    
// }
// //console.log(str);


//33
// let str = ''                    //1
// let i = 1                       //1 2
// while (i <= 5) {                //1 2 3
//     str = str + i + ' '         //1 2 3 4
//     console.log(str)            //1 2 3 4 5
//     i++
// }

//34
// let arr=['H','E','L','L','O']
// let i=0
// let arr2=[]
// while (i<5) {
//    arr2.push(arr[i])
//    console.log(arr2.join(''));
//    i++
// }

//35
// let str = '0 '                  
// let i = 1                       //0 1
// while (i < 5) {                 //0 1 2
//     str = str + i + ' '         //0 1 2 3
//     console.log(str)            //0 1 2 3 4
//     i++
// }


// 36
// let str = ''                    //2
// let i = 1                       //2 4
// while (i < 6) {                 //2 4 6
//     str = str + i*2 + ' '       //2 4 6 8
//     console.log(str)            //2 4 6 8 10
//     i++
// }


//Section 5: Pattern Problems - Part 1 (10 Questions)
//37
// let i = 1                       //1
// let n = 6                       //1 2
// let str = ''                    //1 2 3 
// while (i < n) {                 //1 2 3 4
//     str = str + i + ' '         //1 2 3 4 5
//     console.log(str)
//     i++
// }


//38
// let i = 1                       
// let n = 11                      
// let str = ''                    
// while (i < n) {                 
//     str = str + i + ' '         
//     console.log(str)
//     i++
// }

//39
// let i = 0                               //a
// let max = 4                             //a a a
// let str = 'a '                          //a a a a a
// while (i < max) {                       //a a a a a a a 
//     console.log(str)
//     str = str + 'a a '
//     i++
// }

//40
// let i = 1                       //1
// let n = 7                       //1 2
// let str = ''                    //1 2 3 
// while (i < n) {                 //1 2 3 4
//     str = str + i + ' '         //1 2 3 4 5 
//     console.log(str)            //1 2 3 4 5 6
//     i++
// }

//41
// let str = ''
// let i = 0
// while (i < 5) {
//     str = str + '* '
//     console.log(str)//print * triangle
//     i++
// }

//42
// let str = ''
// let i = 0
// while (i < 4) {
//     str = str + '@ '
//     console.log(str)//print @ triangle
//     i++
// }

//43
// let i = 5                       //5
// let n = 0                       //5 4
// let str = ''                    //5 4 3 
// while (i > n) {                 //5 4 3 2 
//     str = str + i + ' '         //5 4 3 2 1 
//     console.log(str)
//     i--
// }

//44
// let str=''
// let i=1
// let j=65
// while (i<6) {
//     str=str+String.fromCharCode(j)+' '
//     console.log(str);
//     i++
//     j++
// }


//45
// let str=''
// let i=1
// let j=10
// while(i<j){
//     str=str+i+' '
//     console.log(str);
//     i+=2
// }

//46
// let str=''
// let i=1
// let j=6
// while (i<j) {
//     str=str+i*2+' '
//     console.log(str);
//     i++
// }

//Section 6: User Input with readline-sync (8 Questions)

//47
//prints name and age with user input by accessing with string lateral
// import readlineSync from 'readline-sync'
// let name=readlineSync.question("Enter your name: ")
// let age=readlineSync.questionInt("Enter your age: ")
// console.log(`Hello${name},you are${age},years old`);


//48
// import readlineSync from 'readline-sync'
// let name=readlineSync.question("Enter your name: ")
// let i=1
// while (i<6) {
//     console.log(`Welcome ${name}!`);
//     i++
// }


//49
// import readlineSync from 'readline-sync'                        //*
// let str = ''                                                    //* *
// let i = 0                                                       //* * *
// let max = readlineSync.questionInt('Enter a number: ')          //* * * *
// while (i < max) {                                               //* * * * *
//     str = str + '* '
//     console.log(str)
//     i++
// }


//50
// import readlineSync from 'readline-sync'
// let num=readlineSync.questionInt("Enter a number: ")
// let i=1
// while (i<=5) {
//     console.log(i++);
// }

//51
// import readlineSync from 'readline-sync'
// let name=readlineSync.question("Enter your name: ")
// let num=readlineSync.questionInt("How many times wanna print it? ")
// let i=0
// while (i<5) {
//     console.log(name);
//     i++
// }

//52
/* the difference between question() and questionInt()?
question()=takes input strings and print
questionInt()=prints only integer values
*/

//53
// import readlineSync from 'readline-sync'
// let num=readlineSync.questionInt("Enter number for multiplication table: ")
// let i=1
// let j=1
// let mul=num*j
// while (i<=10) {
//     console.log(`${num}x${j}=${mul}`);
//     j++
//     i++
//     mul+=5
// }

//54
// import readlineSync from 'readline-sync'                        //*
// let str = ''                                                    //* *
// let i = 0                                                       //* * *
// let max = readlineSync.questionInt('Enter a number: ')          //* * * *
// while (i < max) {                                               //* * * * *
//     str = str + '* '
//     console.log(str)
//     i++
// }

//Section 7: Sum and Count with Loops (8 Questions)
//55
// let i=1
// let max=10
// let count=0
// while (i<=max) {
//     count=count+i
//     i++
// }
// console.log(count);


//56
// let sum = 0
// let i = 1

// while (i <= 5) {
//     sum = sum + i
//     console.log('i:', i, 'sum:', sum)//prints i:1-5 and sum: 15
//     i++
// }
// console.log('Total:', sum)//prints total sum=15

//57
// let i=1
// let max=10
// let sum=0
// while (i<=max) {
//     sum=sum+(i*2)
//     i++
// }
// console.log(sum);

//58
// let i=1
// let max=100
// let n=0
// while (i<=max) {
//     if (i%7==0) {
//     n++
//         console.log(i);
//     }
//     i++
// }
//     console.log(n);

//59
// import readlineSync from 'readline-sync'
// let num=readlineSync.questionInt("Enter a factorial number: ")
// let i=1
// let max=6
// let fact=1
// while (i<=num) {
//     fact=fact*i
//     i++
// }
// console.log(fact);

//60
// let i=1
// let max=50
// let sum=0
// while (i<=max) {
//     sum=sum+(i)
//     i+=2
// }
// console.log(sum);

//61
// import readlineSync from 'readline-sync'
// let num=readlineSync.questionInt("Enter a number: ")
// let i=0
// while (num>0) {
//     i++
//     num=Math.floor(num/10)
// }
// console.log(i);

//62
// let i=1
// let max=11
// let sum=3
// while (i<max) {
//    console.log(sum*i);
//    i++
   
// }


