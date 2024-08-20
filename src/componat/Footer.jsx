import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-[#EEEFFB]'>
      <div className="container justify-between flex py-[90px] mx-auto">
        <div className="companidetails">
          <h1 className='text-[38px] font-[700] mb-[30px]'>Hekto</h1>
          <div className=" mb-[30px] w-[389px] relative flex">
                <input type="text" className='text-[16px] outline-none pl-[10px] text-[#8A8FB9] w-[100%] h-[40px] bg-[#fff]' placeholder='Enter Email Address'/>
                <icon className=' absolute right-0 top-0 text-[25px] flex justify-center items-center font-[700] w-[130px] rounded-[5px] h-[40px] bg-[#FB2E86] text-[#fff]'>Sing up</icon>
            </div>
            <div className="contact">
          <span className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Contact Info</span>
          <span className='text-[#8A8FB9] text-[16px] mb-[20px] block'>17 Princess Road, London, Greater London NW1 8JR, UK</span>
        </div>
        </div>
        <div className="details flex gap-[60px] ">
          <ul>
            <li className='text-[22px] mb-[20px] font-[700]'>Catagories</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Laptops & Computers</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Cameras & Photography</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Smart Phones & Tablets</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Video Games & Consoles</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Waterproof Headphones</li>
          </ul>
          <ul>
            <li className='text-[22px] mb-[20px] font-[700]'>Customer Care</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>My Account</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Discount</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Returns</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Orders History</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Order Tracking</li>
          </ul>    
          <ul>
            <li className='text-[22px] mb-[20px] font-[700]'>Pages</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Blog</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Browse the Shop</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Category</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Pre-Built Pages</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>Visual Composer Elements</li>
            <li className='text-[#8A8FB9] text-[16px] mb-[20px] block'>WooCommerce Pages</li>
          </ul>    
        </div>
      </div>
    </section>
  )
}

export default Footer