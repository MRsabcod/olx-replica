import React, { useState } from 'react'
import Usercontext from './Usercontext'


const Usercontextprovider = ({children,value}) => {
  const productsfetch=()=>{
    
  }
    const [user, setuser] = useState('')
  return (
    <Usercontext.Provider value={value}>
        {children}
    </Usercontext.Provider>
  )
}

export default Usercontextprovider