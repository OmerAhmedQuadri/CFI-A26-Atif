import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/mongo.config.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use((req, res,next) =>{
    console.log((new Date()).toLocaleTimeString(), req.method , req.url);
    next()
})

// app.use('/api/auth', authRouter)
// app.use('/api/users', userRouter)
// app.use('/api/url', urlRouter)


app.use((req, res) =>{
    res.status(404).send({
        success: false,
        message: 'Route not found'
    })
})


app.listen(PORT, () =>{
    console.log(`Server is Running at Port http://localhost:${PORT} ${(new Date()).toLocaleTimeString()}`);
})