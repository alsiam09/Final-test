import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutclear } from './slice/prodectSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MenuTop = () => {
    let cartItems = useSelector((item)=>item.counter.CartItem)
    let User = useSelector((item)=>item.counter.userId)
    let dispatch = useDispatch()
    console.log();
    
    let navigate = useNavigate()
    let ShowUser = useRef()
    let ShowUser2 = useRef()
    let [ show , setshow ] = useState(false)
    let GoLogin = () =>{
        navigate('/Login')
        setshow(false)
    }
    let MyAccountGo = () => {
        navigate('/Myaccount')
        setshow(false)
    }
    let GoSingup = () =>{
        navigate('/Singup')
        setshow(false)
    }
    let LogOut = () =>{
        toast('LogOut processing')
        setTimeout(() => {
            dispatch(LogOutclear(User))
            toast('Success')
        }, 50);
        setshow(false)
    }
    useEffect(()=>{
        let HandleclickoutSlide = (e) => {
            if (ShowUser.current.contains(e.target)) {
                setshow(true)
            }else{
                if (ShowUser2.current.contains(e.target)) {
                    setshow(true)
                }else{
                    setshow(false)
                }
            }
            
        }
        document.addEventListener("click",HandleclickoutSlide);
        return () => document.removeEventListener("click" ,HandleclickoutSlide)
    })
    
  return (
    <section className='bg-[#7E33E0] '>
                    <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <div className="container flex justify-between mx-auto h-[44px]">
            <div className="menuleft gap-[10px] flex items-center h-[100%] ">
                <a href="mailto:alsiam.personal@gmail.com">
                <div className="email cursor-pointer gap-[10px] flex">
                    <icon className='text-[25px] text-[#fff]'><MdOutlineEmail/></icon>
                    <span className='text-[16px] text-[#fff]'>alsiam.personal@gmail.com</span>
                </div>
                </a>
                <a href="tel:+01813904257">
                <div className="number cursor-pointer gap-[10px] flex">
                    <icon className='text-[25px] text-[#fff]'><IoCallSharp/></icon>
                    <span className=' text-[16px] text-[#fff]'>+880 1813 90 42 57</span>
                </div>
                </a>
            </div>
            <div className="menuright gap-[10px] flex items-center h-[100%] ">
                <div className=" gap-[5px] flex">
                    <span className='text-[16px] text-[#fff]'>English</span>
                    <icon className='text-[25px] text-[#fff]'><IoIosArrowDown/></icon>
                </div>
                <div className=" gap-[5px] flex">
                    <span className='text-[16px] text-[#fff]'>USD</span>
                    <icon className='text-[25px] text-[#fff]'><IoIosArrowDown/></icon>
                </div>
           { User.length > 0 ? 
                <>
                {User.map((item)=>(

                item.map((Data)=>(
                    
                 <div className=" relative ">
                    {console.log(Data)
                    }
                 <div ref={ShowUser} className="cursor-pointer gap-[5px] flex">
                     <span className='text-[16px] text-[#fff]'>{Data.username}</span>
                     <icon className='text-[20px] text-[#fff]'><FaUser/></icon>
                 </div>
                 {show &&
                 <ul ref={ShowUser2} className="cursor-pointer login absolute top-[35px] left-0 w-[200px]">
                     <li onClick={MyAccountGo} className='text-[18px] font-[600] hover:bg-[#fff] hover:border-[3px] hover:text-[#000] hover:border-[#000] flex justify-center items-center h-[50px] bg-[black] text-[#fff]'>My Account</li>
                     <li onClick={LogOut} className='text-[18px] font-[600] hover:bg-[#fff] hover:border-[3px] hover:text-[#000] hover:border-[#000] flex justify-center items-center h-[50px] bg-[black] text-[#fff]'>Log Out</li>
                 </ul>
                 }
                 </div>
        ))
    ))}
                       
                </> :
                <>
                                    <div className=" relative ">
                                    <div ref={ShowUser} className=" cursor-pointer gap-[5px] flex">
                                        <span className='text-[16px] text-[#fff]'>Login</span>
                                        <icon className='text-[20px] text-[#fff]'><FaUser/></icon>
                                    </div>
                                    {show &&
                                    <ul ref={ShowUser2} className="login cursor-pointer absolute top-[35px] left-0 w-[200px]">
                                        <li onClick={GoLogin} className='text-[18px] font-[600] hover:bg-[#fff] hover:border-[3px] hover:text-[#000] hover:border-[#000] flex justify-center items-center h-[50px] bg-[black] text-[#fff]'>Login</li>
                                        <li onClick={GoSingup} className='text-[18px] font-[600] hover:bg-[#fff] hover:border-[3px] hover:text-[#000] hover:border-[#000] flex justify-center items-center h-[50px] bg-[black] text-[#fff]'>Sing up</li>
                                    </ul>
                                    }
                                    </div>
                </>
                
                                }  
                <div className=" gap-[5px] flex">
                    <span className='text-[16px] text-[#fff]'>Wishlist</span>
                    <icon className='text-[20px] text-[#fff]'><FaHeart/></icon>
                </div>
                <div className=" relative gap-[5px] flex">
                    <Link to={'/Cart'}>
                    <icon className='text-[25px] text-[#fff]'><IoMdCart/></icon>
                    <h2 className='text-[14px] font-[500] text-[#fff] w-[20px] h-[20px] absolute top-[-20%] right-[-20%] rounded-[50%] bg-[red] flex justify-center items-center'>{cartItems.length}</h2>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MenuTop