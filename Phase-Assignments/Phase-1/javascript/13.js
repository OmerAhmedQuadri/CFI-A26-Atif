//13
//Write a function using filter() to find all words longer than 4 
// letters in an array of strings. 
//Expected output: [function,array, object]

let arr=['function','array','object','node']

function longWord(arr){
    let newArr=arr.filter((ele)=>{
        if(ele.length>4){
            return ele
        }
    })
    return newArr
}
console.log(longWord(arr));
