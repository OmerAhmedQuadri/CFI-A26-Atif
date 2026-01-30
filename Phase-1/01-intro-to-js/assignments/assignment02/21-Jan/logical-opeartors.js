//1.Basic AND operator 
console.log(true && true)//true

//2.Basic OR Operator
console.log(false || false)//false

//3.Basic NOT Operator
console.log(!true)//false

//4.AND with False
console.log(true && false)//false

//5.OR with True
console.log(false || true)//true

//6.NOT False
console.log(!false)//true

//7.Combined AND and NOT
console.log(true && !false)//true

//8.OR and AND Together
console.log(false || true && false)//false

//9.NOT with AND
console.log(!(true && false))//true

//10.Complex Expression 1
console.log(!(false || false) && true)//true

//11.OR, AND, and NOT
console.log(true || false && !true)//true

//12.NOT with OR
console.log(!(true || false) && false)//false

//13.Nested NOT and AND
console.log(false || !(true && false))//true

//14.Complex Expression 2
console.log(!(false || true && false))//true

//15.Multiple Operations
console.log(true && !(false || true && false))//true

//16.Parentheses and NOT
console.log(!(true && (false || true)) || false)//false

//17.Double NOT
console.log(false || !(!(true && false) || false))//false

//18.Complex Nested Expression
console.log(!(false && (true || false)) && true)//true

//19.Multiple NOT Operations
console.log(!((true || false) && !(false && true)))//false

//20.Advanced Combination
console.log(false || !(true && !(false || true && false)))//false

//21.Triple NOT
console.log(!(!true || (false && !(true || false))))//true

//22.Deeply Nested Expression
console.log(!(false || !(!(true && false) && (false || true))))//true

//23.Very Complex Expression
console.log(!((false || true) && !(!(false && true) || !(true || false && true))))//true

//24.Combined Expression with OR
console.log((true && false) || true)//true

//25.Ultimate Challenge
console.log(false || !(!(false || true) && false))//true

//26.AND with Numbers
console.log(100 && 40 && 30)//30

//27.AND with Zero
console.log(100 && 40 && 0 && 15)//0

//28.AND with Empty String
console.log(100 && 40 && "" && 15)//""

//29.AND with Undefined
console.log(100 && 40 && undefined && 15)//undefinied

//30.AND with Null
console.log(100 && 40 && null && 15)//null

//31.AND with All Falsy Values
console.log(undefined && null && NaN && "hello")//undefined

//32.OR with Numbers
console.log(100 || 40 || 30)//100

//33.OR with Zero First
console.log(0 || 40 || 30)//40

//34.OR with Empty String and Zero
console.log(0 || "" || 30)//30

//35.OR with Multiple Falsy Values
console.log(0 || "" || undefined || null)//null

//36.OR with False First
console.log(false || 0 || "" || undefined)//undefined

//37.OR with Strings
console.log("" || "hello" || 0)//hello

//38.OR with Null and Number
console.log(null || undefined || false || 50)//50

//39.OR with Boolean Values
console.log(false || true || false)//true

//40.OR with NaN
console.log(0 || NaN || "JS")//JS

//41.OR with All Falsy
console.log(undefined || null || 0 || "")//""

//42.OR with Long Falsy Chain
console.log("" || 0 || undefined || null || NaN || "hello")//hello

//43.OR with Two Strings
console.log("" || "7")//7

//44.AND with String and Number
console.log("hello" && 100 && 50)//50

//45.AND with False at End
console.log(10 && 20 && 30 && false)//false

//46.OR with Number First
console.log(25 || 0 || "")//25

//47.AND with NaN
console.log(50 && NaN && 100)//NaN

//48.Mixed AND and OR
console.log(0 || 10 && 20)//20

//49.Complex Mixed Expression
console.log(false && 10 || 30)//30

//50.Ultimate Value Challenge
console.log("" || 0 && 50 || "end")//end