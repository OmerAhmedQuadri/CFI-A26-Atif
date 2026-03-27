//wa function that takes 2 values one for search 
import readlineSync from 'readline-sync'
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i
    }
    return -1
}
//console.log(linearSearch([10,20,30,50,40],50));
(function test() {
    while (true) {
        console.log('1.Linear search\n2.Exit');
        let choice = readlineSync.questionInt('Enter your Choice: ')
        switch (choice) {
            case 1:
                let size = readlineSync.questionInt('Enter the size of the array: ')
                let arr = []
                let i
                for (i = 0; i < size; i++) {
                    arr.push(readlineSync.questionInt(`Enter the${i}element: `))
                }
                let target = readlineSync.questionInt('Enter the target value: ')
                let op = linearSearch(arr, target)
                if (op == -1) {
                    console.log('Element not found!')
                } else if (op == undefined) {
                    console.log('Enter the valid array!')
                } else {
                    console.log('Element is found at ' + i);

                }
                break;
            case 2:
                return
            default:
                break
        }
    }
})()
