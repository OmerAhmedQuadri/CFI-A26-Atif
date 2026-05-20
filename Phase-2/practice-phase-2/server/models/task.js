import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskname:{
        type: String,
        required: true
    },
    deadline:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true,
        enum: ['high', 'medium', 'low'],
        default: 'medium'
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true
}
)

const Task = mongoose.model('Task',taskSchema)
export default Task