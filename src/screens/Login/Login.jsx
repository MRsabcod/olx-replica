import React, { useContext, useState } from 'react'
import {  userlogin } from '../../config/Firebase/Firebase'
import Usercontext from '../../context/Usercontext'
import Usercontextprovider from '../../context/Usercontextprovider'
import Signin from '../Signin/Signin'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  // const { setuser }=useContext(Usercontext)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate =useNavigate()
    
   const login=async(e)=>{
        e.preventDefault();
        
        // setuser('harshit')
        try{
          
          await  userlogin({email,password})
          // navigate('/')

        }
        catch(e){
            console.error(e)
        }
    }


  return (
 
    <div>
      {/* <Signin/> */}
      
        <form className='flex flex-col rounded justify-center gap-5 p-10 w-[28rem] h-[20rem] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2'>
      <h1 className='text-center text-3xl mb-5'>LOGIN FORM</h1>
           
            <input className='rounded' type="email" value={ email } placeholder='email' onChange={(e)=>setemail(e.target.value)} />
            <input className='rounded' type="password"  value={ password }  placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
       <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e)=>{login(e)}}>LOGIN</button>
       <ToastContainer  />
            </form>

    </div>
   
  )
}

export default Login