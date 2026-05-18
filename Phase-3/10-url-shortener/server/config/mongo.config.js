import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
export const dbConnect = async () =>{
    try {
        const db = process.env.MONGO_URL
        await mongoose.connect(db)
        console.log('DB Connected successfully✅');
       
    } catch (error) {
        console.log('Failed to connect database❌');
        console.log(error);
    }
}
dbConnect()