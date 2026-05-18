import { json } from "express";
import { readDB,writeDB } from "../models/task.js";

const getAllTasks=async(req,res)=>{
    const data= await readDB()
    res.json(data)
}

const getTaskById=async(req,res)=>{
    const data=await readDB()
    const id=req.params.id

    const task=data.findIndex(t=>t.id==id)
    if(!t)return res.json({staus:false, message:'ID not found'})
    
    res.json({status:true, message:`task found at ${task}` })
}