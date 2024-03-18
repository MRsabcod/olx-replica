import express from 'express'
import User from '../model/User.js'
import router from './index.js'
import verifyToken from '../middleware/verifyToken.js'
const userRouter=express.Router()

userRouter.get('/',async (req, res) => {
const users=await User.find()
res.send({data:users,message:"FETCH SUCCESSFULLY"})
})
userRouter.post('/register',  async (req, res)=>{
    const body = req.body;
    try{
    if(body)
       return  User.create(body).then((user)=>res.status(201).json({data:user, message:'USER CREATED'}))
if(!body)
return  res.status(400).json({message:'DATA IS MISSING'})
    }
    catch(err){
        console.log(err)
    }
    })
    userRouter.put("/login",async (req, res)=>{
       const {email,password}=req.body
        const user=await User.findOne({email})
    if(!user) return res.status(400).send({ error: 'Invalid Email' })
    const isMatch= await user.isCorrectPassword(password)
if(!isMatch) return res.status(400).send({ error: 'Invalid Password' })
const token=user.generateToken();
console.log(token)
user.token.push(token)
await user.save()
return  res.send({message:"Logged in successfully",userId:user._id,token});
    })
    userRouter.put('/logout',verifyToken,async(req,res)=>{
      await  User.findByIdAndUpdate(req.userId ,{$pull:{token:req.tokenToLogout}},)
      res.send({message:"Successfully logged out!",userId:req.userId})
    })
export default userRouter
