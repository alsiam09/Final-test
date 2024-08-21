import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoCloseCircleSharp } from "react-icons/io5";

const CartTotal = ({CartData}) => {
  let navigate = useNavigate()
  let [ error , seterror ] = useState(false)
  let { totalPrice , totalquantity } = CartData.reduce((acc , item)=>{
    acc.totalPrice += item.price * item.qun,
    acc.totalquantity += item.qun 
    return(
      acc
    )
  },{totalPrice:0 , totalquantity:0})
  let HandleGoCheckout = () => {
    if (totalquantity) {
      navigate('/Checkout')
    }else{
      seterror(true)
    }
  }
  let HandleCheErrMesRem = () => {
    seterror(false)
  }
  return (
    <div className="box w-[35%] py-[70px]">
      {error === true 
      &&
      <div className=" p-[40px] errormesBox fixed top-[50%] left-[50%] w-[100%] h-[100%] bg-[#00000054] translate-y-[-50%] translate-x-[-50%]">
       <div className="box absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[300px] rounded-[10px] bg-[#fff] p-[50px]">
      <icon onClick={HandleCheErrMesRem} className='top-0 right-0 bg-[#fff] rounded-[50%] text-[#000] text-[30px] absolute ' ><IoCloseCircleSharp/></icon>
       <h2 className='text-[20px] text-[#000] font-[400] '>There are no <span className='font-[700] text-[red]' >Prodect</span> on the <span className='font-[700] text-[red]' >Cart</span></h2>
       <h2 className='bg-[#19D16F] text-[#fff] mt-[20px] rounded w-[200px] h-[50px] flex justify-center items-center text-[18px] font-[600]'><Link to={'/'}>Shoping now</Link></h2>
       </div>
      </div>
       }
      <div className="total w-[100%]">
        <h2 className='text-[20px] font-[600] text-[#1D3178] w-[100%] flex justify-center mb-[40px]'>Cart Totals</h2>
        <div className="totalBox bg-[#E8E6F1] w-[100%] p-[20px] h-[300px] rounded-[20px]">
          <h2 className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center'>Totalquantity:<span>{totalquantity}</span></h2>
          <h2 className=' border-b-[1px] border-[#fff8f8] w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center'>Totals:<span>{totalPrice.toFixed(2)}</span></h2>
          <h2 onClick={HandleGoCheckout} className='w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-center mt-[100px] items-center text-[#fff] bg-[#19D16F] rounded-[10px]'>Proceed To Checkout</h2>
        </div>
      </div>
      <div className="copon w-[100%]">
        <h2 className='text-[20px] font-[600] text-[#1D3178] w-[100%] flex justify-center my-[20px]'>Calculate Shopping</h2>
        <div className="coponBox bg-[#E8E6F1] w-[100%] p-[20px] h-[300px] rounded-[20px]">
          <input  className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder='Bangladesh' type="text" />
          <input  className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder='Mirpur Dhaka - 1200' type="text" />
          <input  className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder='Postal Code' type="text" />
          <h2 className='w-[65%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-center mt-[60px] items-center text-[#fff] bg-[#FB2E86] rounded-[10px]'>Calculate Shiping</h2>
        </div>
      </div>
    </div>
  )
}

export default CartTotal