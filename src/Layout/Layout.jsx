import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import {  products, response } from '../config/Firebase/Api'
import { Addproducts } from '../config/Firebase/Firebase'
import { useState } from 'react'

const Layout = () => {
    const [productbuck, setproductbuck] = useState([])
    const [category, setcategory] = useState([])
    
    useEffect(() => {
      Addproducts()
      setproductbuck(response)
        products().then((res)=>{setcategory(res)})
        }, [])
        // Addproducts().then((res)=>{setproductbuck(res)})
  return (
    <>
     
    <Header categories={category} />
      <Outlet context={productbuck} />
      
    </>
  )
}

export default Layout