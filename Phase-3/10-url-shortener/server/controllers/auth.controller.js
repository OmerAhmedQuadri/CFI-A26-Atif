import { cookkieConfig } from "../config/cookie-config.js";
import { validateRegistrationOtp } from "../services/auth.services.js";
import { sendOtp } from "../services/email.services.js";
import { createUser, findUserByEmail } from "../services/user.services.js";
import { generateJWTToken } from "../utils/jwt.utils.js";
import { generateOtp } from "../utils/otp.utils.js";





export const register = async (req, res) => {
    const { fullname, email, password } = req.user
    try {
        const user = await createUser({ fullname, email, password })

        return res.status(200).send({
            success: true,
            message: 'User Registerd Successfully!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Errror'
        })
    }
}

export const validateUserRegistration = async (req, res) => {
    const { email, otp } = req.body || {}

    if (!email) {
        return res.status(400).send({
            success: false,
            message: 'Email is required'
        })
    }

    if (!otp) {
        return res.status(400).send({
            success: false,
            message: 'Otp is required'
        })
    }

    try {
        const { success, message } = await validateRegistrationOtp(email, otp)
        if (success) {
            return res.status(200).send({
                success: true,
                message: 'OTP verified Successfully'
            })
        }
        else{
            return res.status(400).send({
                success: false,
                message: 'Invalid OTP'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Error'
        })
    }
}

export const resendRegisterOtp = async(req, res)=>{
    const {email} = req.body || {}
    if(!email){
        return res.status(400).send({
            success: false,
            message: 'Email is required'
        })
    }
    try {
        const user = await findUserByEmail(email)

        if(user && user.status == 'pending'){
            user.authTokens.userRegistration.otp = generateOtp()
            user.authTokens.userRegistration.expires = new Date(Date.now() + 1 * 60 * 1000).toISOString()
            await user.save()

            await sendOtp(email, user.authTokens.userRegistration.otp)
            return res.status(200).send({
                success: true,
                message: 'Otp resent Successfully!'
            })
        }else if(user){
            return res.status(400).send({
                success: false,
                message: 'User already verified'
            })
        }else{
            return res.status(400).send({
                success: false,
                message: 'User not Found'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server Error'
        })
    }
}

export const login = async(req, res)=>{
    const user = req.user
    const token = await generateJWTToken(user._id)

    res.cookie('token', token, cookkieConfig)
    return res.status(200).send({
        success: true,
        message: 'User Logged in Successfully!',
        data: user
    })
}