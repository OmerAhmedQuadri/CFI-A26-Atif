//wap to calculate the factorial of the given number using recursive function
function factorial(num){
   if(num==1) return 1
   return num*factorial(--num)

}
console.log(factorial(5))

