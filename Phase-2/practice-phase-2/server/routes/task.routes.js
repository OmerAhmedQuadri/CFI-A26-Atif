import express from 'express'
import {getAllTasks, getTaskById} from '../controllers/task.controller.js'
const router = express.Router()

router.get('/',(req, res)=>{
    res.send({
        success: true,
        message: 'taskRouter is working good'
    })
})

router.get('/v1', getAllTasks)
router.get('/v1/:id',getTaskById)
// router.get('/v1/priority/:priority',getTaskByPriority)

// router.post('/v1/add', addTask)

// router.put('/v1/update', updateTask)
// router.put('/v1/markcomplete/:id', markComplete)

// router.delete('/v1/delete/:id', deleteTask)

router.use((req, res)=>{
    return res.status(500).send({
        success: false,
        message: 'Invalid Route not found'
    })
})

export default router