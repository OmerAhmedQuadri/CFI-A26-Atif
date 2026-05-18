import express from 'express'

const router = express.Router()


router.post('/create',createShortUrl)
export default router