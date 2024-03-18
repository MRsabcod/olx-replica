import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Prodcard from './components/Prodcard/Prodcard'
import { auth } from './config/Firebase/Firebase'
import Usercontext from './context/Usercontext'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './screens/Login/Login'
import { useOutletContext } from 'react-router-dom'

console.log(auth)
Header
const App = () => {
  const [prodbucket, setprodbucket] = useState([])
  const [category, setCategory] = useState([])
  const productadata=useOutletContext()

console.log(productadata)
  return (
    <Usercontextprovider value={category} >
      {/* <Login/> */}
      {/* <Header categories={category}  /> */}
      <div className='1.6rem  w-full  max-w-screen-xl mt-[1.6rem] mb-[1.6rem] mr-auto ml-auto flex justify-evenly flex-wrap '>
        {productadata?.map((items) => {
          console.log(items)
          return <Prodcard items={items} categories={category} />
        })}

      </div>
      {
        category.map((item)=>{
          console.log(item)
        })
      }
        
    </Usercontextprovider>
  )
}


export default App