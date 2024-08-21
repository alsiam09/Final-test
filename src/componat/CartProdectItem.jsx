import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { CgMathMinus } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { clear, qunDec, qunInc, qunRem } from './slice/prodectSlice';
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const CartProdectItem = ({CartData}) => {
    let dispatch = useDispatch()
    let handleIncre = ({ item , index}) => {
        dispatch(qunInc({ item , index}))
    }
    let handleDncre = (index) => {
        dispatch(qunDec(index))
    }
    let HandleRem = (index) => {
        dispatch(qunRem(index))
    }
    let HandleClearCart = (CartData) =>{
        dispatch(clear(CartData))
    }
  return (
    <div className="ItemBox py-[70px] w-[65%]">
        <div className="head mb-[40px] flex">
            <h2 className='text-[20px] font-[600] text-[#1D3178] w-[35%] '>Product</h2>
            <h2 className='text-[20px] font-[600] text-[#1D3178] w-[25%] flex justify-center'>Price</h2>
            <h2 className='text-[20px] font-[600] text-[#1D3178] w-[25%] flex justify-center'>Quantity</h2>
            <h2 className='text-[20px] font-[600] text-[#1D3178] w-[15%] flex justify-center'>Total</h2>
        </div>
        {CartData.map((item , index)=>(
             <div className="head py-[10px] border-b-[1px] border-[#000] mb-[5px] flex">
                <div className="prodect gap-[10px] flex w-[35%]">
                    <img src={item.thumbnail} className=' rounded-[5px]  w-[80px] border-[3px] border-[#1D3178] h-[80px]' alt="" />
                    <div className=" relative imgBox">
                    <icon onClick={()=>HandleRem(index)} className='top-0 right-0 bg-[#fff] rounded-[50%] text-[#000] text-[25px] absolute ' ><IoCloseCircleSharp/></icon>
                    </div>
                    <div className="title flex flex-wrap">
                        <h2 className='text-[15px] text-[#1D3178] font-[500]'>{item.title}</h2>
                        <h2 className='font-[700] text-[16px] text-[#FB2E86] '>BRAND: <span className='text-[#000]'>{item.brand}</span> </h2>
                    </div>
                </div>
                <div className="prodect flex justify-center items-center w-[25%]">
                    <h2 className='text-[16px] text-[#1D3178] font-[600]'>${item.price}</h2>
                </div>
                <div className=" gap-[10px] prodect flex items-center justify-center w-[25%]">
                    <h2 onClick={()=>handleIncre({item , index})} className='text-[#FB2E86] font-[700] text-[20px] '><FaPlus/></h2>
                    <h2 className='text-[#1D3178] font-[700] text-[22px] '>{item.qun}</h2>
                    <h2 onClick={()=>handleDncre(index)} className='text-[#FB2E86] font-[700] text-[20px] '><CgMathMinus/></h2>
                </div>
                <div className="gap-[10px] prodect flex items-center justify-center w-[15%]">
                <h2 className='text-[#1D3178] font-[700] text-[15px] '>${((item.price)*(item.qun)).toFixed(2)}</h2>

                </div>
         </div>
        ))}
        <div className="bttomBox w-[100%] flex justify-between items-center">
            <h2 className='w-[150px] h-[40px] rounded-[5px] flex items-center justify-center bg-[#FB2E86] text-[#fff] text-[17px] font-[500]' > <Link to={'/'}>Update Curt</Link> </h2>
            <h2 onClick={()=>HandleClearCart(CartData)} className='w-[150px] h-[40px] rounded-[5px] flex items-center justify-center bg-[#FB2E86] text-[#fff] text-[17px] font-[500]' >clear Cart</h2>
        </div>
    </div>
  )
}

export default CartProdectItem