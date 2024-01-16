import React, { useState, useEffect } from 'react'
import { Carousel } from 'flowbite-react'
import { Link, useParams } from 'react-router-dom'
import ReactDOM from 'react-dom';
// import { IoIosArrowForward } from "react-icons/io";
import Header from '../../components/Header/Header';

import { IoCallOutline, IoChatbubblesOutline, IoChevronForward, IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaForward, FaRegHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { getAporduct } from '../../config/Firebase/Firebase';





const Details = ({categories}) => {

    const { prodid } = useParams()
    const [proddetails, setProddetails] = useState([])
    const product = async () => {

      const resp=await getAporduct(prodid)

setProddetails(resp)

    }
    useEffect(() => {


        product()
    }, [])
    console.log(proddetails)
    console.log(proddetails.images)
    console.log(proddetails?.description)
    return (
        <>
            <Header categories={categories} />
            <div className='max-w-screen-xl mr-auto ml-auto  flex gap-5 justify-between'>

                <div className='max-w-[calc(100%-27rem)] flex flex-1 flex-col mt-[1.6rem] pt-[1.6rem] pb-[1.6rem] items-center justify-center'>




                    {/* <Carousel width="50vw" className='w-full' >
                    {
                        proddetails.images?.map(element => {
                            return <div className='bg-black'>
                                <img src={element} alt="s" />
                            </div>
                        })
                    }
                </Carousel> */}



                    <div className="h-56 w-full sm:h-64 xl:h-[31rem] 2xl:h-96">
                        <Carousel className='w-full' slide={false} theme={{
                            "root": {
                                "base": "relative h-full w-full",
                                "leftControl": "absolute bg-black top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
                                "rightControl": "absolute top-0 bg-black right-0 flex h-full items-center justify-center px-4 focus:outline-none"
                            }, "indicators": {
                                "active": {
                                    "off": "bg-gray-300 border border-solid border-gray-600 w-[0.4rem] h-[.4rem] hover:bg-gray-600 dark:bg-black dark:hover:bg-gray-800",
                                    "on": " border border-solid border-gray-700 bg-gray-50 dark:bg-gray-800"
                                },
                                "wrapper": " absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 flex items-center"

                            },
                            "item": {
                                "base": "absolute bg-black  top-1/2 left-1/2 block w-fit h-full -translate-x-1/2 -translate-y-1/2",
                                "wrapper": {
                                    "off": "w-full bg-white flex-shrink-0 transform cursor-default snap-center",
                                    "on": "w-full bg-black flex-shrink-0 transform cursor-pointer snap-center"
                                }
                            }

                        }}>

                            {
                                proddetails.images?.map(element => {
                                    return <img src={element} alt="s" className='bg-ye' style={{ width: '' }} />

                                })
                            }
                        </Carousel>
                    </div>








                    <div className='border-2 mt-[1.6rem] flex flex-col justify-evenly  rounded p-[1rem] border-solid w-full border-[#d8dfe0]'>
                        <div className='flex justify-between  '>
                            <div className='flex items-center  mb-[0.8rem]'>

                                <h1 className='font-bold text-[#002f34] text-[2.5rem] leading-[3.5rem]'>Rs {proddetails.price * 282}</h1>
                            </div>
                            <IconContext.Provider value={{ size: '1.5rem', color: '#002f34' }}>
                                <div className='flex gap-4 p-[0.5rem]'>
                                    <IoShareSocialOutline />
                                    <FaRegHeart />
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div><h2 className='font-bold text-[#002f34] text-[1.5rem] leading-[1.5rem] tracking-normal mb-[0.8rem]'>{proddetails.title}</h2></div>
                        <div className='flex justify-between'>

                            <div className='flex items-center text-[0.95rem]'>
                                <IoLocationOutline color='#002f34' size="1.2rem" className='mr-[0.3rem] ml-[-0.3rem]' />
                                <h3>Federal B Area, Karachi</h3>
                            </div>
                            <div>
                                <span>14 hours ago</span>
                            </div>

                        </div>
                    </div>
                    <div className='border-2 mt-[1.6rem] flex flex-col justify-evenly  rounded p-[1rem] border-solid w-full border-[#d8dfe0]'>
                      
                            <div className='flex items-center  mb-[0.8rem]'>

                                <h1 className='font-bold text-[#002f34] text-[1.8rem] leading-[3.5rem]'>Details</h1>
                            </div>
                                <div className='flex flex-wrap '>

                                <div className='basis-1/2 '>
                                    <div className='flex flex-wrap mb-[1.6rem]'>
                                        <span className='flex-1'>Brand</span>
                                        <span className='flex-1'>{proddetails.brand}</span>

                                    </div>
                                </div>
                               
                                <div className='basis-1/2'>
                                    <div className='flex flex-wrap mb-[1.6rem]'>
                                        <span className='flex-1'>Discount</span>
                                        <span className='flex-1'>{proddetails.discountPercentage}</span>

                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex flex-wrap mb-[1.6rem]'>
                                        <span className='flex-1'>Stock</span>
                                        <span className='flex-1'>{proddetails.stock}</span>

                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex flex-wrap mb-[1.6rem]'>
                                        <span className='flex-1'>Rating</span>
                                        <span className='flex-1'>{proddetails.rating}</span>

                                    </div>
                                </div>








                        </div>
                    </div>
                    <div className='border-2 mt-[1.6rem] flex flex-col justify-evenly  rounded p-[1rem] border-solid w-full border-[#d8dfe0]'>
                    <div className='flex items-center  mb-[0.8rem]'>

<h1 className='font-bold text-[#002f34] text-[2.5rem] leading-[3.5rem]'>Description</h1>

</div>
<div>
   {proddetails.description?.split('. ').map((elem)=>{
    return <li>{elem}</li>
   })}
</div>
                        
                        </div>
                </div>
                <div className='w-[27rem] border-2 border-transparent border-solid  flex flex-col mt-[1.6rem] pt-[1.6rem] pb-[1.6rem] items-center '>
                    <div className='w-full border-2  border-solid border-[#d8dfe0]'>
                        <div className='flex flex-col  p-4 '>
                            <div className='flex items-center gap-2'>

                                <div className=''>
                                    <img src="	https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" className='object-cover w-[4rem] h-[4rem]' />
                                </div>
                                <div >
                                    <h1 className='text-[#002f34] font-bold text-base' >Owner</h1>
                                    <h2> {proddetails.brand}</h2>

                                    <Link><span className='flex items-center font-bold text-sm  text-[#002f34] mt-[0.8rem]'>See profile <IoChevronForward size='1rem' className='ml-[0.5rem]' />  </span></Link>

                                </div>
                            </div>

                            <div className='mt-4'>
                                <button className='flex items-center justify-center  gap-2 font-bold w-full h-[48px] rounded-md text-white bg-[#002f34]'><IoCallOutline color='white' size='1.1rem' fill='white' /> Show phone number</button>
                            </div>
                            <div className='mt-4'>
                                <button className='flex hover:border-4 items-center justify-center  gap-1 font-bold w-full h-[48px] rounded-md text-[#002f34] border-[#002f34] border-2 border-solid'><IoChatbubblesOutline color='#002f34' size='1.3rem' fill='white' /> Chat</button>
                            </div>
                        </div>
                        

                    </div>

                    <div className='w-full border-2  border-solid border-[#d8dfe0]'>
                        <div>
                            
                        </div>
                    </div>

                    
                </div>
               
                {/* {
            proddetails.map((product)=>{
return <div>
    <img src={product.images} alt="" />
</div>
            })
        } */}
            </div>
        </>
    )
}

export default Details