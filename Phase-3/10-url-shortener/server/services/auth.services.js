
import User from "../models/user.model.js"
import { hashPassword, comparePassword } from "../utils/bcrypt.utils.js"

export const validatePassword = async(userId, password) =>{
    const user = await User.findById(userId)
    const isValid = await comparePassword(password, user.password)
    return isValid
}

export const validateRegistrationOtp = async(email, otp) =>{
    const user = await User.findOne({email})

    if(user && user.status == 'pending'){
        if(user.authTokens.userRegistration.otp == otp){
            const expiry = new Date(user.authTokens.userRegistration.expires)
            if(expiry.getTime() < new Date()){
                return{
                    success: false,
                    message: 'OTP Expired'
                }
            }
            user.status = 'Active'
            user.authTokens.userRegistration.otp = null
            user.authTokens.userRegistration.expires = null
            await user.save()
            return{
                success: true,
                message: 'User verified Successfully, You can login now'
            }
        }else{
            return{
                success: false,
                message: 'Invalid OTP'
            }
        }
    }else if(user){
        return{
            success: false,
            message: 'User already verified!'
        }
    }else{
        return{
            success: false,
            message: 'User not Found!'
        }
    }
}