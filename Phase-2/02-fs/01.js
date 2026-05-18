import { error } from 'console';
import fs from 'fs'
console.log('Start');

fs.readFile('file.txt','utf8',(error,data)=>{
    if(error){
        console.log('Oops:');
        console.log(error);
        return
    }
    console.log(data);
})
console.log('end');
