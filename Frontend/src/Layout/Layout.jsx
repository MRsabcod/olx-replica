import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
// import {  products, response } from '../config/Firebase/Api'
import { Addproducts } from '../config/Firebase/Firebase'
import { useState } from 'react'
import axios from 'axios'
const Layout = () => {
    const [productbuck, setproductbuck] = useState([])
    const [category, setcategory] = useState([])
     const Getproducts=async()=>{
      const products=[]
    
    try{
      await axios.get('/ads/')
      
        .then(response => {response.data.data.map((item)=>products.push(item)); console.log(products)})
      
        .catch(error => console.log(error));
       
    }catch(e){
      console.error(e)
    }
    return products
    
    }
    useEffect(() => {
      Addproducts()
      // console.log(response)

 Getproducts().then(resp=>
 setproductbuck(resp))
  
        // products().then((res)=>{setcategory(res)})
        }, [])
  console.log(productbuck)      
        // Addproducts().then((res)=>{setproductbuck(res)})
  return (
    <>
     
    <Header categories={category} />
      <Outlet context={productbuck} />
      
    </>
  )
}

export default Layout