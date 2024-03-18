import secjwt from "../config/jwt.js";
import User from "../model/User.js";
import jwt from 'jsonwebtoken'

const verifyToken=async(req,res,next) => { 
const token=req?.headers?.authorization?.slice(7)
console.log(token)
if(!token){
res.status(401).json({message:"No Token Provided"})}

try{
    const decoded = jwt.verify(token,secjwt);
    const tokenExsist=await User.findOne({token:token})
    console.log(tokenExsist,"TE")
    if(!tokenExsist )
    {
    return res.status(403).send({message:"The token has been logged out or is invalid"})
    }
    req.userId=decoded._id;
req.tokenToLogout=token;
next()
}
catch (e){
    return  res.status(401).send({message:'Invalid Token',error:e})
}
}
export default verifyToken