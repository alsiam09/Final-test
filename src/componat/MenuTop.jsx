import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
const MenuTop = () => {
  return (
    <section className='bg-[#7E33E0] '>
        <div className="container flex justify-between mx-auto h-[44px]">
            <div className="menuleft gap-[10px] flex items-center h-[100%] ">
                <div className="email gap-[10px] flex">
                    <icon className='text-[25px] text-[#fff]'><MdOutlineEmail/></icon>
                    <span className='text-[16px] text-[#fff]'>alsiam.personal@gmail.com</span>
                </div>
                <div className="number gap-[10px] flex">
                    <icon className='text-[25px] text-[#fff]'><IoCallSharp/></icon>
                    <span className='text-[16px] text-[#fff]'>alsiam.personal@gmail.com</span>
                </div>
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
                <div className=" gap-[5px] flex">
                    <span className='text-[16px] text-[#fff]'>Login</span>
                    <icon className='text-[20px] text-[#fff]'><FaUser/></icon>
                </div>
                <div className=" gap-[5px] flex">
                    <span className='text-[16px] text-[#fff]'>Wishlist</span>
                    <icon className='text-[20px] text-[#fff]'><FaHeart/></icon>
                </div>
                <div className=" gap-[5px] flex">
                    <icon className='text-[25px] text-[#fff]'><IoMdCart/></icon>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MenuTop