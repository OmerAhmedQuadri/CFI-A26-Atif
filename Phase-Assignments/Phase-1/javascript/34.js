//34
//Construct a CLI application with the following operations menu: 
// 0. Exit 
// 1. Area of square 
// 2. Area of rectangle 
// 3. Area of circle 

import readlineSync from 'readline-sync'
function square() {
    let side = readlineSync.questionInt('Enter the side: ')
    let area = side * side
    return `Area= ${area}`
}
function rectangle() {
    let length = readlineSync.questionInt('Enter the length: ')
    let breadth = readlineSync.questionInt('Enter the breadth: ')
    let area = length * breadth
    return `Area= ${area}`
}
function circle() {
    let radius = readlineSync.questionInt('Enter the radius: ')
    let area = 2 * 3.14 * radius
    return `Area= ${area}`
}
function main() {
    while (true) {
        console.log('\n===Areas===');
        console.log('0.Exit');
        console.log('1.Area of square');
        console.log('2.Area of rectangle');
        console.log('3.Area of circle');

        let choice = readlineSync.questionInt("Enter your choice: ")
        switch (choice) {
            case 0:
                console.log('Exiting...');
                return
            case 1:
                console.log(square());
                break;
            case 2:
                console.log(rectangle());
                break;
            case 3:
                console.log(circle());
                break;
            default:
                console.log('Invalid choice');
        }
    }
}
main()