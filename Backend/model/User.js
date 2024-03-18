import mongoose from 'mongoose'
 import { Schema } from "mongoose";
 import bcrypt from 'bcryptjs'
 import jwt from 'jsonwebtoken'
import secjwt from '../config/jwt.js';
const userSchema=new Schema({
    email: {type:String , unique:true,required:true},
    password: { type: String, required : true},
    username: { type: String,unique:true },
    token: {default:[],type:[]}

})
userSchema.methods.isCorrectPassword=function (password) {
    const user =this
    return bcrypt.compareSync(password, user.password);
}
userSchema.methods.generateToken= function(){
   const {_id}=this
const token =jwt.sign({_id},secjwt)
return token
}
userSchema.pre('save', function (next) {
    const user=this
    if(user.isModified('password')){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password=hash
}

    next()
})

 const User= mongoose.model('user',userSchema)
 export default User