import express from 'express'
import { createShortUrl, getUserUrls } from '../controllers/url.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = express.Router()

router.use(authMiddleware)
router.post('/create',createShortUrl)
router.get('/', getUserUrls)

export default router