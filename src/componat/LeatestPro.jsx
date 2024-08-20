import React, { useEffect, useState } from 'react'

const LeatestPro = ({Cateadd , Data}) => {
  return (
    <section>
        <div className="container mx-auto">
        <div className="box flex flex-wrap">
            {Cateadd.length > 0 ?
                    Cateadd.map((item)=>(
                        <div className="box w-[25%] p-[10px]">
                            <div className="proBox relative  w-[100%] group hover:bg-[#2F1AC4] h-[420px]">
                            <img className="bg-[#F6F7FB]" src={item.thumbnail} alt="" />
                            <h3 className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1] duration-[12] absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                            <div className="shortdetail  w-[100%] flex justify-center items-center">
                                <div className="minibox text-center my-[20px]">
                                <h2 className=" group-hover:text-[#fff] text-[#FB2E86] text-[22px] font-bold">{item.category}</h2>
                                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">{item.title.substring(0,20) + '...'}</h2>
                                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">${item.price}</h2>
                                </div>
                            </div>
                        </div>
                        </div>
                        ))
            :
            Data.map((item)=>(
                <div className="box w-[25%] p-[10px]">
                    <div className="proBox relative  w-[100%] group hover:bg-[#2F1AC4] h-[420px]">
                    <img className="bg-[#F6F7FB]" src={item.thumbnail} alt="" />
                    <h3 className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1] duration-[12] absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                    <div className="shortdetail  w-[100%] flex justify-center items-center">
                        <div className="minibox text-center my-[20px]">
                        <h2 className=" group-hover:text-[#fff] text-[#FB2E86] text-[22px] font-bold">{item.category}</h2>
                        <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">{item.title.substring(0,20) + '...'}</h2>
                        <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">${item.price}</h2>
                        </div>
                    </div>
                </div>
                </div>
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default LeatestPro