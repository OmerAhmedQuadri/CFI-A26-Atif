import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const pass=process.env.password
console.log(pass);


// const hashPassword=async (password)=>{
//     const hashedPassword=await bcrypt.hash(password,15)
//     return hashedPassword
// }
// console.log(await hashPassword(pass));

const comparePassword= async (password,hashedPassword)=>{
    const match=await bcrypt.compare(password,hashedPassword)
    return match
}
console.log(await comparePassword(pass,'$2b$15$mrXy5psihIFuXSSDcm1.eef9uAmG1N8E5RVD33TCUZIbi1zjhVfvq'));