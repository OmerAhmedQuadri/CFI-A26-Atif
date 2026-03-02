//30
//Write a recursive function to print numbers from 1 to 5. 

function recNumbers(n){
    if(n>5) return 
    console.log(n);
    recNumbers(++n)
}
recNumbers(1)

