//1:40
import express from 'express'
import dotenv from 'dotenv'
import taskRouter from './routes/task.routes.js'
import dbConnect from './utils/dbConnect.js'

dotenv.config()

const PORT = process.env.PORT

const server = express()
server.use(express.json())

server.use('/api/tasks', taskRouter)

server.listen(PORT, ()=>{
    console.log('Server is Running at a port@ '+PORT);
})

server.use((req, res)=>{
    return res.status(500).send({
        success: false,
        message: 'Route not found'
    })
})