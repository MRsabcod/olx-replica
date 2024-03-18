import express from 'express'
import Ads, { upload } from '../model/Ads.js'
import verifyToken from '../middleware/verifyToken.js'

const adsRouter=express.Router()

adsRouter.get( '/', async(req,res)=>{
const ads=await Ads.find()
    
    res.status(200).json({message:'Welcome to the Advertisement Route!',data:ads})

})
adsRouter.post('/add', verifyToken,upload.single('images'),async (req,res)=> {
    const imageName = req?.file?.filename;
    try{
    
   const newAdd =await Ads.create({...req.body,images:imageName }) 
   if(!newAdd) return res.status(400).send('Invalid ad')
   res.status(201).send({message:'AD CREATED', data:newAdd})
    }catch(err){
        return res.status(400).send("Error creating new add")
    }
   
})

export default adsRouter