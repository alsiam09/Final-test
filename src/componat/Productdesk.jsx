import React, { useEffect, useState } from 'react'

const Productdesk = ({onprodata , onprodataX}) => {
  let [ loading  , setloading ] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setloading(true)
    },onprodataX)
  })
  
  return (
   <>
   {loading === true &&
    <div className="mainBox flex py-[100px] gap-[40px] w-[100%]">
    <div className=" ProdectImgBox flex h-[390px] gap-[10px] w-[50%]">
       <div className="miniimgbox w-[25%]">
  {onprodata?.images?.map((item)=>(
           <img className=' mb-[8px] w-[100%] h-[125px] border-[1px] border-[#9e9e9e] rounded-[6px]' src={item} alt="" />
   ))}

       </div>
       <div className="bigimgbox w-[75%]">
           <img src={onprodata.thumbnail} className='h-[391px] w-[100%] rounded-[6px]' alt="" />
       </div>
   </div>

   <div className="ProdectDetailBox w-[50%] py-[30px]">
       <h2 className='text-[36px] font-[700]'>{onprodata.title}</h2>
       <icon></icon>
       <h3 className='text-[16px] text-[#151875] font-[600]'>${onprodata.price} <span className=' ml-[10px] text-[#FB2E86]'>{onprodata.discountPercentage}% <span className=' uppercase '>discount</span></span> </h3>
       <p className='text-[#8A8FB9] w-[549px] font-[600] text-[16px] mb-[20px] block'>{onprodata.description}</p>
   </div>
</div>
   }
   </>
  )
}

export default Productdesk