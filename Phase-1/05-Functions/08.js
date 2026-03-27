//wap to find the given number is prime or not
function isPrime(num){
    if(num<2) return false
    let prime=true
    for(let i=2;i<num;i++){ 
        if((num%i==0)){
            prime=false
            break
        }
    }
    return true
}
console.log(isPrime(1));
// for(let i=0;i<100;i++){
//     if(isPrime(i)) console.log(i)
// }
