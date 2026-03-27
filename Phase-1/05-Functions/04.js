//write a function named user details that takes user i/p for user name and user role and prints it to the console
import readlineSync from 'readline-sync'
function userDetails() {
    let userName=readlineSync.question("Enter name: ")
    let userRole=readlineSync.question("Emter your role: ")
    // console.log(userName);
    // console.log(userRole);

    return {userName,userRole}
}
let user=userDetails()
console.log(user);

console.log(typeof(userDetails));

