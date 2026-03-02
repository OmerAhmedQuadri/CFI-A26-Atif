//24
//What is the difference between break and continue? Give one example of each.

/*
break: break will break the loop and returns the it exits the loop and continues 
executing the code after the loop
Ex:
*/
for(let i = 1; i <= 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}


/*
continue: it is used to skip the current iteration and move to the next iteration of the loop.
The loop does not stop it just skips that specific iteration.
Ex:
*/
for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}