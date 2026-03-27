const fruits=['apple','mango','anas','apple','mango','orange','mango']

const fruitsobject=fruits.reduce((obj,fruit)=>{
    //console.log(obj,fruit);
    if(!(obj[fruit])) obj[fruit]=1
    else obj[fruit]++
    
    return obj
},{})
console.log(fruitsobject)