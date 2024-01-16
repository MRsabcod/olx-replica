import { useEffect, useState } from "react"
import { Addproducts, Getproducts } from "./Firebase"

import React from 'react'



  
  
export const response=await Getproducts()
 
 
 export const products = async () => {
   let prodbucket=[]
 let category=[]
    console.log(response)
    prodbucket=(response)
    const categorydup=[]
    response.map((elem)=>{
      if(!categorydup.length || categorydup[categorydup.length-1]!=elem.category){
        categorydup.push(elem.category)
      }
    })
    category=categorydup
  
  
  
      
  
  return category
    }

 