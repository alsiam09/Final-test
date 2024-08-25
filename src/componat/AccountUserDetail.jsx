import React from 'react'
import { useSelector } from 'react-redux'

const AccountUserDetail = () => {
    let userInfo = useSelector((item)=>item.counter.userId)
    console.log(userInfo);
    
  return (
    <div className="UserBox py-[70px]">
        {userInfo.map((item)=>(
            item.map((user)=>(
        <div className="box rounded-[30px] bg-[#F6F5FF] p-[50px] flex gap-[20px] w-[100%]">
            <div className="user w-[35%]">
                <div className="imgBox w-[200px] h-[200px] flex justify-center items-center bg-[#4e4e4e] mx-auto rounded-[50%]">
                    <img className="imgBox w-[190px] h-[190px] rounded-[50%]" src="" alt="" />
                </div>
                <div className="boxText my-[30px]">
                <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Name: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>{user.username}</h3></h2>
                <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Number: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>{user.numder}</h3></h2>
                <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Email: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>{user.email}</h3></h2>
                <h2 className='font-[700] my-[10px] text-[22px] flex w-[100%] justify-between'>Address: <h3 className='  w-[500px] flex flex-wrap font-[500] ml-[10px]'>{user.address}</h3></h2>
                </div>
            </div>
            <div className="userInformation w-[65%]"></div>
        </div>  
            ))
        ))}
    </div>
  )
}

export default AccountUserDetail