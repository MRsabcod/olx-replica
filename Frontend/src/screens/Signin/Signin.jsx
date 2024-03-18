import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword  } from "firebase/auth";

import { auth, googleregister, register } from '../../config/Firebase/Firebase';
import Usercontext from '../../context/Usercontext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// or via CommonJS

const Signin = () => {
  const navigate=useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  const [fullname, setFullname] = useState('')
  const [age, setage] = useState('')
    
     const signin=async(e)=>{
        e.preventDefault();
        try{

         axios({
         
          method: 'post',
         
          url: '/users/register',
         
          data: {
         
         email,password,username:fullname
         
         
          }
         
         })
         
          .then(response =>{ console.log(response)
            Swal.fire({
              title: "USER CREATED",
              text: "LOGIN FOR MORE...",
              icon: "success"
            }).then((result) => {
              if (result['isConfirmed']){
                navigate('/login')
              }
            })
          })
         
          .catch(error => console.log(error));
          
          
        }
        catch(e){
            console.error(e)
        }

    }
    const Googlesignin=async(e)=>{
      e.preventDefault();
      try{

        await  googleregister()
       navigate('/')
        
      }
      catch(e){
          console.error(e)
      }

    }
    // const {user}=useContext(Usercontext)
// console.log(user)
// console.log(email)
  return (
    <div className='h-[35rem]'>
      {/* {user} */}
        <form className='flex flex-col justify-center gap-3 p-10 w-[28rem] h-[30rem] absolute top-[79%] left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2 '>
      <h1 className='text-center text-3xl mb-5'>SIGNIN FORM</h1>
            <input type="email" value={ email } placeholder='email' onChange={(e)=>setemail(e.target.value)} />
            <input type="password"  value={ password }  placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
       <input type="text" onChange={(e)=>setFullname(e.target.value)} placeholder='name'/>
       <input type="number"onChange={(e)=>setage(e.target.value)}  placeholder='age' />
       
       
       <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e)=>{signin(e)}}>signin</button>
       <button type='submit' className='border-black border-solid border-2   hover:border-4 font-bold py-2 px-4 rounded' onClick={(e)=>{Googlesignin(e)}}>Continue With GOOGLE</button>
        <span className='text-center '>Already have an account <Link to='/login' className='text-black ml-1 border-b-2 hover:border-b-transparent border-b-black border-solid'><span>LOGIN</span></Link></span>
        </form>
    </div>
  )
}

export default Signin