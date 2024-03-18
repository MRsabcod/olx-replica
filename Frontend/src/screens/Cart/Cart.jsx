import { Card } from 'flowbite-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prodcard from '../../components/Prodcard/Prodcard'
import { removeCartItem } from '../../features/addprodSlice'

const Cart = () => {
  
const dispatch=useDispatch()

    const showcart=useSelector(state=>state?.prods?.cart)

    const deleteitem=(prod,id) => { 
      dispatch(removeCartItem({prod,id})) 
    }
  return (
    <div className='flex gap-2 '>
       
       {showcart?.map((prod,index)=>{
        console.log(prod)
        // console.log(prod)
       return <div className=' rounded-[0.4rem]  overflow-hidden   w-[15vw] h-[66vh] border-[0.1rem] border-solid border-[#002f3433] m-10'>
           <Prodcard items={prod} width='w-[15vw]'/>
           <div className='mt-4'>
                                <button onClick={()=>{deleteitem(prod,index)}} className='flex items-center justify-center m-auto  gap-2 font-bold p-3 rounded-md text-white bg-[#002f34]'> Delete item</button>
                            </div>
        <span>{index+1}</span>
           
        </div>
       })}
     
    </div>
  )
}

export default Cart