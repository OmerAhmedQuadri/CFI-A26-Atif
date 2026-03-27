let arr=[21,23,34,65,76,98,104]
let tar=23

function binarySearch(arr,tar){
    let left=0
    let right=arr.length-1
    let mid=(left+right)/2

    while(left<=right){
        mid=(left+right)/2
        if(arr[mid]==tar){
            return mid
        }else if(arr[mid]<tar){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return -1
}
let index=binarySearch(arr,tar)
if(index==-1){
    console.log('Element not found!');
}else{
    console.log('element found at index: '+index);
}