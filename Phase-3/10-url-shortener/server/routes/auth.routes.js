import express from 'express'
import { loginMiddileware, registerMiddileware } from '../middlewares/auth.middleware'

const router = express.Router()

router.post('/register',registerMiddileware, register)
router.post('/register/verify-otp', validateUserRegistration)
router.post('/register/resend-otp', resendRegisterOtp)

router.post('/login',loginMiddileware, login)

export default router