import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const db= process.env.MONGO_URL

const dbConnect = async()=>{
    try {
        await mongoose.connect(db)
        console.log('db connected successfully✅');
    } catch (error) {
        console.log('db connection failed❌');
    }
}
dbConnect()
export default dbConnect