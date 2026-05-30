import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware'

const router = express.Router()

router.use(authMiddleware)
router.post('/',getUserDetails)

export default router
