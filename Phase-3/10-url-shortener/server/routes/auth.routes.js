import express from 'express'

const router = express.Router()

router.post('/register',registerMiddleware, register)
router.post('/register/verify-otp', validateUserRegistration)
router.post('/register/resend-otp', resendRegisterOtp)

router.post('/login',loginMiddleware, login)

export default router