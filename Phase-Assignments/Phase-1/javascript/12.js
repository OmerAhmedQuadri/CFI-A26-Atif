//12
// Create a leap year checker function: 
// year = 20xx 
// Print "Leap year" or "Not a leap year" 
// A year is leap if divisible by 4 AND (not divisible by 100 OR 
// divisible by 400)
//Expected output: Leap year

let year=2028
function leapYear(year){
    if(year%4==0 && year%100!=0 ||year%400==0){
        console.log('Leap year');
    }else{
        console.log('not a leap year');
    }
}
leapYear(year)