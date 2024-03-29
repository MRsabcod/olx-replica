import React, { StrictMode, useEffect, useState } from 'react'
import { IoCartOutline, IoHomeOutline, IoLaptopOutline, IoPhonePortraitOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { FaPaintbrush } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth, db, userprofiledata } from '../../config/Firebase/Firebase';
import { data } from 'autoprefixer';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const Header = ({ categories }) => {
    const [first, setFirst] = useState(false)
    const [userdetails, setuserdetails] = useState(null)
    const [screenChange, setscreenChange] = useState(false)
    const [categoryname, setcategoryname] = useState('')
    const navigate = useNavigate()
    const showcart = useSelector(state => state?.prods?.count)
    console.log(showcart)
    const goto = (e) => {

        setcategoryname(e.currentTarget.id)


        // navigate(`/${e?.target?.value}`)

    }


    /**
     * Summary: This code is written in JavaScript (JSX) language.
     * It contains a useEffect hook that navigates to a specific category page.
     */

    useEffect(() => {
        if (categoryname != '')
            navigate(`/${categoryname}`)



    }, [categoryname, navigate])


    let s = ''
    // document.addEventListener('click',()=>{
    //     setscreenChange(!screenChange)
    // })
    const userdata = async () => {
        let userdup = []
        await userprofiledata().then(async resp => {
            console.log(e)

            setuserdetails(e)



        })
            .then(data => console.log(data))
        console.log(userdetails)

    }
    useEffect(() => {

        onAuthStateChanged(auth, async (user) => {


            const usercur = auth?.currentUser
            console.log(usercur)
            const q = query(collection(db, "users"), where("email", "==", user.email))
            // console.log(q)
            const querySnap = await getDocs(q);

            querySnap.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                setuserdetails(doc.data())
                console.log(doc.data())

            });
        })
    }, [])
    console.log(categoryname)


    return (
        <div>
            <header className="flex flex-col  sticky z-50 top-0 bg-[#f7f8f8] ml-auto mr-auto ">
                <nav className='flex items-center'>
<div className='flex items-center gap-5 max-w-7xl pt-[1.6rem] pb-[1.6rem]  w-full ml-auto mr-auto'>
                    <div>
                        <Link to='/'>
                            <svg height="1.2rem" width='2.5rem' fill='#3a77ff' viewBox="0 0 36.289 20.768" alt="Logo" className="_10c831ef"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z">
                            </path></svg>
                        </Link>
                    </div>

                    {categories?.map((elem) => {

                        return <div  id={elem} onClick={(e) => { goto(e); console.log(e?.currentTarget?.id) }}>
                            <Link className='flex items-center gap-3' >
                            <div className='category flex items-center justify-center ' >
                                {elem === "laptops" && <IoLaptopOutline />}
                                {elem === "smartphones" && <IoPhonePortraitOutline />}
                                {elem === "fragrances" && <i className="fa-solid fa-spray-can-sparkles fa-md "></i>}
                                {elem === "skincare" && <FaPaintbrush />}
                                {elem === "groceries" && <i className="fa-solid fa-cart-shopping"></i>}
                                {elem === "home-decoration" && <IoHomeOutline />}
                            </div>
                            <span >{elem}</span>
                        </Link>
                        </div>
                    })}
                    </div>
                    <div className=''>

                        <Link to={auth.currentUser?"/cart":"/login"} className='flex'><IoCartOutline size={40} />
                        <div className='bg-[#002F34] rounded-[50%] relative right-4   w-[25px] h-[25px] flex justify-center items-center '>
                            <span className='font-bold text-white'>{showcart}</span>
                        </div>
                        </Link>
                    </div>
                </nav>
                <nav className='flex items-center gap-5 max-w-7xl pt-[1.6rem] pb-[1.6rem] justify-evenly w-full ml-auto mr-auto'>
                    <div className=''>
                        <Link to='/' className=''>
                            <svg height="60" width='60' viewBox="0 0 36.289 20.768" alt="Logo" >
                                <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z">
                                </path></svg></Link></div>
                    <div className=''>
                        <div className='flex gap-5 bg-white h-12 items-center border-2 border-solid rounded border-[#012f34] focus-within:border focus-within:border-[#23e5db] focus-within:border-solid'>

                            <svg className='ml-[.8rem]' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024" ><path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z">
                            </path></svg>
                            <input type="text" placeholder='Search Any City' className='w-full h-full border-none border-0 !outline-none focus:ring-transparent  ' />
                            <div>

                                <img className='mr-4 w-[13px] h-[13px]' src="https://www.olx.com.pk/assets/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'><div className='flex  gap-5 bg-white h-12 items-center border-2 border-solid rounded border-[#012f34] focus-within:border focus-within:border-[#23e5db] focus-within:border-solid'>
                        <input type="text" placeholder='Search Any City' className='w-full h-full border-none border-0 !outline-none focus:ring-transparent ml-[.2rem]' />
                        <button className='bg-[#002f34] w-[69px] h-[48px] flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="25" height="25" fill='white' viewBox="0 0 1024 1024" ><path d="M448 725.33c-152.92 0-277.33-124.41-277.33-277.33S295.08 170.67 448 170.67 725.33 295.08 725.33 448 600.92 725.33 448 725.33zm436.44 98.78v.02L732.52 672.19c48.77-61.78 78.15-139.54 78.15-224.19 0-199.98-162.7-362.67-362.67-362.67S85.33 248.03 85.33 448c0 199.98 162.69 362.67 362.67 362.67 84.63 0 162.41-29.38 224.17-78.15l206.14 206.15h60.36v-60.33l-54.23-54.23z"></path></svg>
                        </button>
                    </div>

                    </div>

                    <div>
                        {userdetails === null ? <div  className=' flex gap-2 hover:border-b-transparent  ' ><Link to='/login' >LOGIN</Link><span>|</span><Link to='/signin'>Sign Up</Link></div> : userdetails != null ? <Link to='/login'>{userdetails?.fullname}</Link> : <div>Loading</div>}
                    </div>
                    <div>
                        <Link to={auth.currentUser?"/cart":"/addproduct"} className='sellbtn flex relative items-center justify-center rounded-[30px]  ' >
                            <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" />
                            <div className='p-3 flex  items-center justify-center absolute '>
                                <img className='mr-[0.4rem]' src="https://www.olx.com.pk/assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg" alt="" />
                                <span>SELL</span>
                            </div>
                        </Link>
                    </div>
                </nav>
            </header></div>
    )
}

export default Header