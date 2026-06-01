import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import urlRouter from './routes/url.routes.js'
import cookieParser from 'cookie-parser'
import { dbConnect } from './config/mongo.config.js'
import { redirect } from './controllers/url.controller.js'
import cors from 'cors'


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }))
}
app.use(cookieParser())
app.use(express.json())

app.use((req, res,next) =>{
    console.log((new Date()).toLocaleTimeString(), req.method , req.url);
    next()
})

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/url', urlRouter)

app.get('/:shortUrl', redirect)


app.use((req, res) =>{
    res.status(404).send({
        success: false,
        message: 'Route not found'
    })
})


app.listen(PORT, () =>{
    console.log(`Server is Running at Port http://localhost:${PORT} ${(new Date()).toLocaleTimeString()}`);
})