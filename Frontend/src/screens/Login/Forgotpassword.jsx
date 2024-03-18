import React, { useState } from 'react'
import { forgotpassword } from '../../config/Firebase/Firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Forgotpassword = () => {
    const [email, setemail] = useState('')
    const navigate=useNavigate()
    const alert=(title,icon)=>{
       return  Swal.fire({
            title:title,
            text: `Welcome `,
            icon: icon,
            
          })
    }
    const  handleSubmit = (e) => {
        e.preventDefault()
        console.log(email);
        try{

            forgotpassword(email,()=>{alert("Sent succesfully",'success')},()=>{alert("Sent Unsuccesfully",'error')})
            
             
        }
        
        catch(e){
            console.log(e)

        }
    }
    
  return (
    <div className='h-[35rem]'>
         <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col rounded  justify-center gap-5 p-10 w-[28rem] h-[15rem] absolute top-[76%] left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2'>
      <h1 className='text-center text-3xl mb-5'>FORGOT PASSWORD</h1>
           
            <input className='rounded' type="email" value={ email } placeholder='email' onChange={(e)=>setemail(e.target.value)} />
       <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Get Password</button>
            
            </form>
    </div>
  )
}

export default Forgotpassword