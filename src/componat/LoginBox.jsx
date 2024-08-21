import React from 'react'
import { Link } from 'react-router-dom'
const LoginBox = () => {
  return (
    <div className="Mainbox py-[70px] w-[100%]">
        <div className="LoginBox rounded-[7px] p-[30px] bg-[#F8F8FB] w-[544px] h-[474px] mx-auto">
            <h2 className='text-[36px] font-[700] flex justify-center mb-[10px]'>Login</h2>
            <span className='text-[#9096B2] text-[17px] flex justify-center mb-[25px]' >Please login using account detail bellow.</span>
            <input className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Email Address' type="text" />
            <input className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Password' type="text" />
            <span className='text-[#9096B2] text-[17px] flex justify-start mb-[25px]' ><Link>Forgot your password?</Link></span>
            <h2 className='w-[100%] h-[50px] bg-[#FB2E86] text-[#fff] text-[18px] mb-[35px] flex justify-center items-center rounded font-[600]'>Sing in</h2>
            <span className='text-[#9096B2] text-[17px] flex justify-center ' >Don’t have an Account?<Link className='text-[#44df44] underline'>Create account</Link></span>
        </div>
    </div>
  )
}

export default LoginBox