import React, { useEffect, useState } from 'react'
import { categoryProducts } from '../../config/Firebase/Firebase'
import { useParams } from 'react-router-dom'
import Prodcard from '../../components/Prodcard/Prodcard'

// const Category =async () => {
// //     const { category } = useParams()
// //   const [prodbucket, setprodbucket] = useState([])
    
// //     const response=await categoryProducts(category)
// //   console.log(response)
// //   setprodbucket(response)
// //   console.log(prodbucket)
//   return (

//       <div className='w-full max-w-screen-xl mt-[1.6rem] mb-[1.6rem] mr-auto ml-auto flex justify-evenly flex-wrap '>
//         kk

//       </div>
// )}

// export default Category

const Category = () => {
    const { prodcategory } = useParams()
// 
    const [prodbucket, setprodbucket] = useState([])
  const [category, setCategory] = useState([])
  const products = async () => {

  const response=await categoryProducts(prodcategory)
  console.log(response)
  setprodbucket(response)
}
useEffect(() => {
  products()

 
}, [])
console.log(prodbucket)
  return (
  
    <div className='w-full max-w-screen-xl mt-[1.6rem] mb-[1.6rem] mr-auto ml-auto flex justify-evenly flex-wrap '>
      {prodbucket.map((items) => {
        return <Prodcard items={items} categories={category} />
      })}

    </div>
  )
}

export default Category