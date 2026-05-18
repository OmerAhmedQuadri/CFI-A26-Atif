import express from 'express'
import fs from 'fs/promises'

const PORT=3000
const app=express()

async function serverLog(req) {
    const logData = `\n${new Date().toLocaleString()} || ${req.method} ${req.url} ${req.socket.remoteAddress}`
    await fs.appendFile('./server.log', logData)
}

app.use(async (req, res, next) => {
    await serverLog(req)
    // console.log(req.url);
    next()
})

// app.use((req, res, next) => {
//     if (req.socket.remoteAddress == '::ffff:127.0.0.1') {
//         res.send({
//             status: false,
//             message: 'You are not allowed to use this application!',
//             data: null
//         })
//     }
//     else next()
// })

app.get('/',(req,res)=>{
    res.send({
        'allowed operations':{
            add:'/add/n1/n2',
            sub:'/sub/n1/n2',
            mul:'/mul/n1/n2',
            div:'/div/n1/n2',
            mod:'/mod/n1/n2',
        }
    })
})

app.get('/add/:num1/:num2',(req,res)=>{
    try{ 
        const num1=parseFloat(req.params.num1)
        const num2=parseFloat(req.params.num2)

        if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.send({
            status:false,
            message:'please enter a valid number',
            data: null
        })
        return
        }
        res.send({
        status:true,
        message:'operation success',
        data:num1+num2
        })
    }catch (error){
        res.send(error)
    }
})

app.get('/sub/:num1/:num2',(req,res)=>{
    try{ 
        const num1=parseFloat(req.params.num1)
        const num2=parseFloat(req.params.num2)

        if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.send({
            status:false,
            message:'please enter a valid number',
            data: null
        })
        return
        }
        res.send({
        status:true,
        message:'operation success',
        data:num1-num2
        })
    }catch (error){
        res.send(error)
    }
})

app.get('/mul/:num1/:num2',(req,res)=>{
    try{ 
        const num1=parseFloat(req.params.num1)
        const num2=parseFloat(req.params.num2)

        if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.send({
            status:false,
            message:'please enter a valid number',
            data: null
        })
        return
        }
        res.send({
        status:true,
        message:'operation success',
        data:num1*num2
        })
    }catch (error){
        res.send(error)
    }
})

app.get('/div/:num1/:num2',(req,res)=>{
    try{ 
        const num1=parseFloat(req.params.num1)
        const num2=parseFloat(req.params.num2)

        if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.send({
            status:false,
            message:'please enter a valid number',
            data: null
        })
        return
        }
        res.send({
        status:true,
        message:'operation success',
        data:num1/num2
        })
    }catch (error){
        res.send(error)
    }
})

app.get('/mod/:num1/:num2',(req,res)=>{
    try{ 
        const num1=parseFloat(req.params.num1)
        const num2=parseFloat(req.params.num2)

        if(Number.isNaN(num1) || Number.isNaN(num2)){
        res.send({
            status:false,
            message:'please enter a valid number',
            data: null
        }) 
        return
        }
        res.send({
        status:true,
        message:'operation success',
        data:num1%num2
        })
    }catch (error){
        res.send(error)
    }
})

app.use((req, res) => {
    res.status(404).send({
        status: false,
        message: "Route not found, please check '/' for valid routes"
    })
})

app.listen(PORT,()=>{
    console.log('Server is running at 3000');
})