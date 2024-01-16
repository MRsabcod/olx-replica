import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword  } from "firebase/auth";

import { auth, googleregister, register } from '../../config/Firebase/Firebase';
import Usercontext from '../../context/Usercontext';
import { Navigate, useNavigate } from 'react-router-dom';


const Signin = () => {
  const navigate=useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [age, setage] = useState('')
    
     const signin=async(e)=>{
        e.preventDefault();
        try{

          await  register({email,password,age,fullname})
          navigate('/login')
        }
        catch(e){
            console.error(e)
        }

    }
    // const {user}=useContext(Usercontext)
// console.log(user)
// console.log(email)
  return (
    <div>
      {/* {user} */}
        <form className='flex flex-col justify-center gap-3 p-10 w-[28rem] h-[30rem] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2 '>
      <h1 className='text-center text-3xl mb-5'>SIGNIN FORM</h1>
            <input type="email" value={ email } placeholder='email' onChange={(e)=>setemail(e.target.value)} />
            <input type="password"  value={ password }  placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
       <input type="text" onChange={(e)=>setFullname(e.target.value)} placeholder='name'/>
       <input type="number"onChange={(e)=>setage(e.target.value)}  placeholder='age' />
       
       
       <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e)=>{signin(e)}}>signin</button>
       <button type='submit' className='border-black border-solid border-2   hover:border-4 font-bold py-2 px-4 rounded' onClick={(e)=>{googleregister(e)}}>Continue With GOOGLE</button>
        </form>
    </div>
  )
}

export default Signin