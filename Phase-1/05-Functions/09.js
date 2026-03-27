function fact(num){
    let mul=1
    for(let i=num;i>0;i--){
    mul=mul*i
    }
    return mul
}
console.log(fact(6));
