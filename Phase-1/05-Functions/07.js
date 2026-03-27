let nums=[23,55,64,76,99,108]
// let evens=[]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         evens.push(nums[i])
        
//     }
// }
// console.log(evens);

function giveEvens(nums){
    if(!(Array.isArray(nums))){
        console.log('please enter a valid array');
        return
    }
    let evens=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0) evens.push(nums[i])
    }
    return evens
}
console.log(giveEvens(''));
