import { validatePassword } from "../services/auth.services.js"
import { findUserByEmail, findUserByEmailAndDelete, findUserById } from "../services/user.services.js"
import { validateJwtToken } from "../utils/jwt.utils.js"



const registerValidator = async({fullname, email, password})=>{
    const errors = {}
    if(!fullname){
        errors.fullname = 'Fullname is required'
    }
    if(!email){
        errors.email = 'E-mail is required'
    }
    if(!password){
        errors.password = 'Password is required'
    }
    return errors
}

export const registerMiddileware = async(req, res, next)=>{
    try {
        const {fullname, email, password} = req.body || {}
    const errors = await registerValidator({fullname, email, password})
    if(Object.keys(errors).length >0){
        return res.status(404).json({
            success: false,
            message: 'Bad Request',
            errors
        })
    }
    const existingUser = await findUserByEmail(email)
    
    if(existingUser && existingUser.status != 'pending'){
        return res.status(404).json({
            success: false,
            message: 'User already exists!'
        })
    }

    if(existingUser && existingUser.status == 'pending'){
        await findUserByEmailAndDelete(email)
    }

    req.user = {
        fullname, 
        email,
        password
    }
    next()
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Error'
        })
    }
}

export const loginMiddileware = async(req, res, next)=>{
    try {
        const {email, password} = req.body || {}
        if(!email){
            return res.status(404).send({
                success: false,
                message: 'Email is Required'
            })
        }
         if(!password){
            return res.status(404).send({
                success: false,
                message: 'Password is Required'
            })
        }

        const user = await findUserByEmail(email)
        
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not Found'
            })
        }
        if(user.status == 'pending'){
            return res.status(404).send({
                success: false,
                message: 'User not verified or registered yet '
            })
        }
        if(user.status == 'inactive'){
            return res.status(404).send({
                success: false,
                message: 'User is inactive'
            })
        }

        const isValid = await validatePassword(user._id, password)

        if(!isValid){
            return res.status(404).send({
                success: false,
                message: 'Inavlid Credentials'
            })
        }

        req.user = user
        next()

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Error'
        })
    }
}

export const authMiddleware = async(req, res, next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).send({
                success: false,
                message: 'Unauthorized'
            })
        }

        const id = await validateJwtToken(token)

        if(!id){
            return res.status(401).send({
                success: false,
                message: 'Unauthorized'
            })
        }
        req.user = await findUserById(id)
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Error'
        })
    }
}