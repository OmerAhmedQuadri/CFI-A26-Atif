import express from 'express'
import { createShortUrl } from '../controllers/url.controller'

const router = express.Router()


router.post('/create',createShortUrl)

export default router