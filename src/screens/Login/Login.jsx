import React, { useContext, useState } from 'react'
import {  userlogin, userlogout } from '../../config/Firebase/Firebase'
import Usercontext from '../../context/Usercontext'
import Usercontextprovider from '../../context/Usercontextprovider'
import Signin from '../Signin/Signin'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

// or via CommonJS


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
          
        Swal.fire({
          title: "LOGIN SUCCESSFUL",
          text: `Welcome `,
          icon: "success",
          
        }).then((result) => {
          if (result['isConfirmed']){
            navigate('/')
        }})
          

      }
        catch(e){
            console.error(e)
            
        }
    }


  return (
 
    <div className='h-[35rem]'>
      {/* <Signin/> */}
      
        <form className='flex flex-col rounded  justify-center gap-5 p-10 w-[28rem] h-[22rem] absolute top-[76%] left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2'>
      <h1 className='text-center text-3xl mb-5'>LOGIN FORM</h1>
           
            <input className='rounded' type="email" value={ email } placeholder='email' onChange={(e)=>setemail(e.target.value)} />
            <input className='rounded' type="password"  value={ password }  placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
       <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e)=>{login(e)}}>LOGIN</button>
       <span className='text-center'>Create An Account <Link to='/signin' className='text-center underline'>Signin</Link></span>
          
           <Link to='/forgotpassword' className='text-center underline' >Forgot Password</Link>
           <Link to='/forgotpassword' className='text-center underline' onClick={userlogout} >Logout</Link>
           
           </form>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false} pauseOnFocusLossdraggablepauseOnHover={false}   theme="dark" transition='Zoom'/>


    </div>
   
  )
}

export default Login