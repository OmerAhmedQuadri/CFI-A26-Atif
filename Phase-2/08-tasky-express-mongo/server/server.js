import express from 'express'
import './db-connect.js'
import taskRouter from './routes/task.routes.js'

const PORT  = 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server is running!'
    })
})

app.use('/api/tasks/', taskRouter)


app.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'Route not found'
    })
})

app.listen(PORT, ()=>{
    console.log('Server is running...');
})
