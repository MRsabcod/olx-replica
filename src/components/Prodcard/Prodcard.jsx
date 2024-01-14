import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const Prodcard = (props) => {
   const items=props.items
//    console.log(items)
    return (
        <Link to={`/details/${items.id}`}  >
            <div className='flex rounded-[0.4rem] mb-5 overflow-hidden flex-col  justify-evenly w-[22vw] h-[49vh] border-[0.1rem] border-solid border-[#002f3433]'>
                <div className={`w-full h-full bg-no-repeat bg-cover bg-left-top bg-[image:var(--image-url)]`}   style={{'--image-url': `url(${items.thumbnail})`}}></div>
                <div className=' w-full pt-[1rem] pb-0 pl-[1.6rem] pr-[1.6rem] flex-col flex  h-full'>
                    <div className='flex justify-between  items-center mb-[0.8rem]'>
                        <h1 className='text-2xl'>RS {items.price}</h1>
                        <FaRegHeart />
                    </div>
                    <div className='h-[2.9rem] w-full text-[1rem] ' >
                        <h2 className=''>{items.title}</h2>

                    </div>
                    <div >
                        <h3>Bahawalpur Road, Multan</h3>
                        <h4>4 weeks ago</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Prodcard