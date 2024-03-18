import React, { useContext, useState } from 'react'
import Usercontext from '../../context/Usercontext'
import Usercontextprovider from '../../context/Usercontextprovider'
import Signin from '../Signin/Signin'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import axios from 'axios'
// or via CommonJS


const Login = () => {
  // const { setuser }=useContext(Usercontext)
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault();

    // setuser('harshit')
    try {


      axios({

        method: 'put',

        url: '/users/login',

        data: {

          email,
          password,



        }

      })

        .then(response => {
          console.log(response.data.token)
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          Swal.fire({
            title: "LOGIN SUCCESSFUL",
            text: "You are Registered!",
            icon: "success",

          }).then((result) => {
            if (result['isConfirmed']) {
              navigate('/')
            }
          })


        })

        .catch(error => console.log(error));


    }
    catch (e) {
      console.error(e)

    }
  }
  const userlogout = (e) => {
    e.preventDefault()
  try{
    axios({

      method: 'put',

      url: '/users/logout',

      headers: {

        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`


      },

     

}).then(response => console.log(response.data))

.catch(error => console.log(error));
}
catch (e){console.error("Error in logging out",e)}

       }


  return (

    <div className='h-[35rem]'>
      {/* <Signin/> */}

      <form className='flex flex-col rounded  justify-center gap-5 p-10 w-[28rem] h-[28rem] absolute top-[76%] left-1/2  -translate-x-1/2 -translate-y-1/2  border-black border-solid border-2'>
        <h1 className='text-center text-3xl mb-5'>LOGIN FORM</h1>

        <input className='rounded' type="email" value={email} placeholder='email' onChange={(e) => setemail(e.target.value)} />
        <input className='rounded' type="password" value={password} placeholder='password' onChange={(e) => setpassword(e.target.value)} />
        {/* <input className='rounded' type="password"  value={ username }  placeholder='password' onChange={(e)=>setusername(e.target.value)} /> */}
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e) => { login(e) }}>LOGIN</button>
        <span className='text-center'>Create An Account <Link to='/signin' className='text-center underline'>Signin</Link></span>

        <Link to='/forgotpassword' className='text-center underline' >Forgot Password</Link>
        <button  className='text-center underline' onClick={userlogout} >Logout</button>

      </form>
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false} pauseOnFocusLossdraggablepauseOnHover={false} theme="dark" transition='Zoom' />


    </div>

  )
}

export default Login