//23
// Write a function that checks if a given number is a prime number. 
//Expected output:7 prime Number

function checkPrime(num){
    if(typeof num !='number' || Number.isNaN(num)){ 
        console.log('Enter a valid number');
        return
    }
    if(num<2){
        console.log('Not a prime');
        return
    }
    for(let i=2;i<num;i++){
        if(num%i==0) {
            console.log('Not a Prime Number');
            return
        }
    }
    console.log('Prime Number');
}
checkPrime(7)
