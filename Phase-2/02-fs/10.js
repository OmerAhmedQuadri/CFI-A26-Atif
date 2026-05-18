import { error } from 'console';
import fs from 'fs'
import { json } from 'stream/consumers';
let path='./github-users.json'
fetch('https://api.github.com/users')
.then(response=>{
    if(!response.ok){
        throw new Error('error')
    }
    // console.log(res);
    // console.log(res.json());
    return response.json()
})
.then(response=>{
    // console.log(response);
    // let usersdata=response.map((usr)=>{
    //     return {
    //         id:usr.id,
    //         login:usr.login
    //     }
    // })
    let usersdata=response.filter((usr)=> usr.id%2==0)
    fs.writeFile(path,JSON.stringify(usersdata,null,4),(err)=>{ 
    if(err)console.log('Error writing file');
    console.log('Saved Succesfully');
      
})
})
.catch(err=>{
    console.log(err);
})