import React from 'react'
import { IoMdSearch } from "react-icons/io";

const MenuButtom = () => {
  return (
    <section>
    <div className="container flex justify-between mx-auto h-[60px]">
        <div className="menuleft gap-[90px] flex items-center h-[100%] ">
            <div className=" Logo gap-[10px] flex items-center h-[100%]">
                <h1 className=' pb-[5px] text-[34px] font-[700]'>Hekto</h1>
            </div>
            <ul className=" Logo  gap-[30px] flex items-center h-[100%]">
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Home</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Pages</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Products</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Blog</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Shop</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Contact</li>
            </ul>
        </div>
        <div className="menuright gap-[10px] flex items-center h-[100%] ">
            <div className=" flex">
                <input type="text" className='text-[16px] outline-none pl-[10px] text-[#FB2E86] w-[266px] h-[40px] bg-[#D9D9D9]'/>
                <icon className='text-[25px] flex justify-center items-center font-[700] w-[40px] h-[40px] bg-[#FB2E86] text-[#fff]'><IoMdSearch/></icon>
            </div>
        </div>
    </div>
    </section>
  )
}

export default MenuButtom