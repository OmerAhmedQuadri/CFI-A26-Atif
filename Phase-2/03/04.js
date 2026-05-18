import fs from 'fs/promises'
import { question, questionInt } from 'readline-sync'
import { hashPassword,comparePassword } from './01-bcrypt.js'

const createUser = async() =>{
    const user = {
        id:Date.now(),
        username:question('Enter the name of the user: '),
        password:question('create a password: '),
        confirm:question('Confirm your password: ')
    }
    const data=await fs.readFile('./users.json','utf-8')
    const users=JSON.parse(data)

    const existingUser = users.find((usr)=>{
        return usr.username == user.username
    })

    if(existingUser) return console.log('User already exists!');
    

    while(user.password != user.confirm){
        console.log('Passwords donot match');
        user.password=question('Create a password: ')
        user.confirm=question('Confirm your password: ')
    }
    delete user.confirm

    user.password=await hashPassword(user.password)

    users.push(user)
    await fs.writeFile('./users.json',JSON.stringify(users,null,4))

} 
const login = async () =>{
    const username=question('Please enter username: ')
    const password=question('Enter your password: ')

    const data=await fs.readFile('./users.json','utf-8')
    const users=JSON.parse(data)

    const user=users.find((usr)=>{
        return usr.username==username
    })
    if(!user)return console.log('User not found!: ');
    const auth=await comparePassword(password,user.password)
    if(!auth) console.log('Invalid Password!')
    else { 
        console.log('Welcome'+username+'!');
    }
}
const app =async () =>{
    while(true){ 
        console.log('\n ===Menu=== ');
        console.log('0.Exit');
        console.log('1.Create User');
        console.log('2.Login');
        console.log('3.Send OTP');
        
        const choice=questionInt('Enter your Choice: ')
        
        switch(choice){
            case 0:
                return
            case 1:
                await createUser()
                break;
            case 2:
                await login()
                break;
            default:
                break;
        }
    }
}
app()