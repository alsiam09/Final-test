import React, { useContext } from "react";
import Slider from "react-slick";
import '../../extraCss/productslice.css'
import { useNavigate } from "react-router-dom";
const FreaturedProItem = ({Data }) => {
    let navigate = useNavigate()
    let handleIDB = (item) =>{
        navigate(`/ProductDetails/${item.id}`)
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
      };
  return (
    <Slider className="mx-[20px] gap-5" {...settings}>
        {Data.map((item)=>(
        <div className="box w-[100%] p-[10px]">
            <div className="proBox relative  w-[100%] group hover:bg-[#2F1AC4] 2xl:h-[500px] h-[420px]">
            <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
            <h3 onClick={()=>handleIDB(item)} className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1] duration-[12] absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
            <div className="shortdetail  w-[100%] flex justify-center items-center">
                <div className="minibox text-center my-[20px]">
                <h2 className=" group-hover:text-[#fff] text-[#FB2E86] text-[22px] font-bold">{item.category}</h2>
                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">{item.title.substring(0,20) + '...'}</h2>
                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">${item.price}</h2>
                </div>
            </div>
        </div>
        </div>
        ))}
    </Slider>
  )
}

export default FreaturedProItem