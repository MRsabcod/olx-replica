import { Carousel, Dropdown } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { addProductManually } from '../../config/Firebase/Firebase'
// import  {Map}  from 'react-map-gl'
import Mapcomp from '../../components/Map/Map'

const AddProd = () => {
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [category, setcategory] = useState('')
  const [price, setprice] = useState(0)
  const [images, setimages] = useState([])
  const [id, setid] = useState(31)


  const getimg = (e) => {
    let imglst = [...images]
    if (e.target.files[0]) {
      imglst.push((e.target.files[0]))
      setimages(imglst)

    }
  }

const handleSubmit=(e) => {

  e.preventDefault();
  const fd=new FormData()
  let imglnks=[]
  images.forEach(element => {
fd.append(images)
    // imglnks.push(URL.createObjectURL(element))
  });
  console.log("Image Links",imglnks);


  console.log(imglnks)
 let proddetails={
 
title:title,
description:desc,
images:imglnks,
id:id,
price:price,

}
addProductManually(proddetails,id)

 setid(id+1)
}
const deleteimg=(index) => { console.log(images.splice(index,1)) }
console.log(typeof images[0])

  return (
    <form className='m-8' onSubmit={handleSubmit}>
      <div >Add Product</div>
      <div className='w-1/2 mt-4 flex flex-col gap-3 '>
        <div>
          <h1>Title:</h1>
          <input className='rounded w-full mt-2' type="text" name='title' placeholder='Product Title' onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
          <h1>Description:</h1>
          <textarea name="desc" className='rounded w-full mt-2' onChange={(e) => setdesc(e.target.value)}></textarea>
        </div>
        <div>
        <h1>Price:</h1>
        <input type="number" min="0" step=".01" name="price" className='mt-2 rounded w-full' onChange={(e) => setprice(e.target.value)}/>

        </div>

      </div>
      <div className='inline-flex flex-col gap-3  '>
        <div className='inline-flex justify-evenly mt-5 border-2 border-black border-solid '>

          {images.map((img,index) => {

            return <img onClick={()=>{deleteimg(index)}} width='60px' height='60px' src={URL.createObjectURL(img)} alt="" />

          })}
        </div>
        <input type="file" className='rounded' onChange={(e) => { getimg(e) }} accept="image/png, image/jpeg" />
<div>
<Mapcomp/>
</div>
        <div className='mt-4 w-full'>

          <button type='submit' className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Add Product</button>
        </div>

      </div>
    </form>
  )
}

export default AddProd