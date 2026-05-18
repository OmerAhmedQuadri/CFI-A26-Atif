import express from 'express'
import './dbConnect.js'
import movieRouter from './routes/movie.routes.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({
        success: true,
        message :'server is running',
    })
})

app.use('/api/',movieRouter)

app.use((req,res)=>{
    res.status(404).send({
        status: false,
        message: 'route not found'
    })
})

app.listen(PORT,()=>{
    console.log('server is running');
})