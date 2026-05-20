import Task from "../models/task.js";


export const getAllTasks = async(req, res)=>{
    try {
        const tasks = await Task.find()
        if(!tasks || tasks.length == 0){
            return res.status(400).send({
                success: false,
                message: 'No Task Available',
                data: null
            })
        }
        res.status(200).send({
                success: true,
                message: 'Tasks Fetched Successfully',
                data: tasks
        })       
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error',
            data: null
        })
    }
}

export const getTaskById = async(req, res)=>{
    try {
        const {id} = req.params
        if(!id || id.length != 24){
            return res.status(400).send({
                success: false,
                message: 'Inavlid Id or Id length',
                data: null
            })
        }
        const tasks = await Task.findById(id)
        if(!tasks){
            return res.status(400).send({
                success: false,
                message: 'No Task Found with this Id',
                data: null
            })
        }
        if(tasks.length == 0){
            return res.status(400).send({
                success: false,
                message: 'No tasks available',
                data: null
            })
        }
        res.status(200).send({
                success: true,
                message: 'TaskById Fetched Successfully',
                data: tasks
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error',
            data: null
        })       
    }
}