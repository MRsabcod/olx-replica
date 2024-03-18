import express from 'express'
import userRouter from './user.js'
import adsRouter from './ads.js'
const router=express.Router()

router.use('/users',userRouter)
router.use('/ads',adsRouter)
export default router