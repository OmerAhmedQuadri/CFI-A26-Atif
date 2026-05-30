import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { getUserDetails } from '../controllers/user.controller.js'

const router = express.Router()

router.use(authMiddleware)
router.post('/',getUserDetails)

export default router
