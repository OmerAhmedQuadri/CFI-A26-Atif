import express from 'express'
import fs from 'fs/promises'

const PORT = 3000
const app = express()
const db = './tasks.json'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})
app.get('/api/tasks', async (req, res) => {
    const data = await readDB()
    res.json(data)
})

app.get('/api/tasks/:id', async(req, res) => {
    const id = req.params.id
    const data = await readDB()

    const task = data.find((task) => task.id == id)
    if (!task) return res.json({ status: false, message: 'task not found' })

    res.json({ status: true, message: 'task fetch successfully', task: task })
})
const createTaskMiddleware=(req,res,next)=>{
    const newTask = req.body
    if (!newTask.id || !newTask.task) return res.send('Inavlid data')
    next()
}

const createTaskController= async (req, res) => {
    const tasks = await readDB()
    const newTask=req.body

    const index = tasks.findIndex(task => task.id == newTask.id)
    if (index != -1) return res.json({status:false,message:'Task already exist'})
    console.log(newTask);
    tasks.push(newTask)
    await writeDB(tasks)

    res.json({status:true,message:'Task created successfully'})
}
app.post('/api/create',createTaskMiddleware,createTaskController)

async function readDB() {
    try {
        const data = await fs.readFile(db, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.log('Read DB error: ', error);
    }
}

async function writeDB(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 4)
        await fs.writeFile(db, data)
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT,()=>{
    console.log('Server is running');
})
