import express from 'express'
import { loginMiddileware, registerMiddileware } from '../middlewares/auth.middleware.js'
import { login, register, resendRegisterOtp, validateUserRegistration } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register',registerMiddileware, register)
router.post('/register/verify-otp', validateUserRegistration)
router.post('/register/resend-otp', resendRegisterOtp)

router.post('/login',loginMiddileware, login)

export default router