//find the largest element in the array
let arr2=[54,53,12,16,76,9]
let i=0
let j=0
while (i<arr2.length) {
    if (arr2[i]>j) {
        j=arr2[i]
    }
    i++
}
console.log(j);
