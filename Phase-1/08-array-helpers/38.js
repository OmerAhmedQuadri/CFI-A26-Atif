const num = [56235466.33 , 4567.89, 974345778]

console.log(num);
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));
console.log(num.toLocaleString('en-US'));
console.log(num.toLocaleString('en-EU'));
console.log(num.toLocaleString('de-DE'));

console.log(typeof num.toLocaleString());


console.log(num.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'//INR EUR 
}))
console.log(num.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'//INR EUR 
}))
console.log(num.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD'//INR EUR 
}));