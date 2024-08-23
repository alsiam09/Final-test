import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { apiData } from './ContextApi';
import { Link, useNavigate } from 'react-router-dom';

const MenuButtom = () => {
    let Prodectdata = useContext(apiData)
   let [SVI, setSVI] = useState('');
    let [ InputSer , SetInputSer ] = useState([])
    let navigate = useNavigate()
    let HandleSer = (e) =>{
        setSVI(e.target.value)
        if (e.target.value === "") {
            SetInputSer([])
        }else{
            let SearchFilter = Prodectdata.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
              SetInputSer(SearchFilter)
              setHighlightedIndex(-1); 
        }

    }
    let [highlightedIndex, setHighlightedIndex] = useState(-1);
    let handleserIn = (id) => {
        navigate(`/ProductDetails/${id}`)
        SetInputSer([])
        setSVI('')
    }
    let HandleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
          setHighlightedIndex((prevIndex) =>
            prevIndex < InputSer.length - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (e.key === "ArrowUp") {
          setHighlightedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        } else if (e.key === "Enter" && highlightedIndex >= 0) {
          handleserIn(InputSer[highlightedIndex].id);
        }
      };
    
  return (
    <section className='w-[100%] bg-[#fff]'> 
    <div className="container flex justify-between mx-auto bg-[#fff] h-[60px]">
        <div className="menuleft gap-[90px] flex items-center h-[100%] ">
            <div className=" Logo gap-[10px] flex items-center h-[100%]">
                <h1 className=' pb-[5px] text-[34px] font-[700]'>Hekto</h1>
            </div>
            <ul className=" Logo  gap-[30px] flex items-center h-[100%]">
                <Link to={'/'} className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Home</Link>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Pages</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Products</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Blog</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Shop</li>
                <li className='text-[19px] text-[#0D0E43] hover:text-[#FB2E86] font-[400]'>Contact</li>
            </ul>
        </div>
        <div className="menuright gap-[10px] flex items-center h-[100%] ">
            <div className=" flex">
                <input value={SVI} onKeyDown={HandleKeyDown} onChange={HandleSer} type="text" className='text-[16px] outline-none pl-[10px] text-[#FB2E86] w-[266px] h-[40px] bg-[#D9D9D9]'/>
                <icon className='text-[25px] flex justify-center items-center font-[700] w-[40px] h-[40px] bg-[#FB2E86] text-[#fff]'><IoMdSearch/></icon>
            </div>
        </div>
        <div className="Box z-[999] fixed top-[100px] left-[50%] translate-x-[-50%] w-[50%]">
        {InputSer.map((item , index)=>(
        <div key={item.id} onClick={()=>handleserIn(item.id)}  className={`box flex bg-[#fff] h-[100px] items-center justify-between px-[30px] ${highlightedIndex === index ? 'bg-gray-300' : ''}`}>
            <h2 >{item.title.substring(0,20) + '...'}</h2>
            <img src={item.thumbnail} className='w-[80px] h-[80px]' alt="" />
        </div>
            ))}
            </div>

    </div>
    </section>
  )
}

export default MenuButtom