import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoCloseCircleSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { getDatabase, ref, set } from "firebase/database";

const CartTotal = ({ CartData }) => {
  let [userId, setuserId] = useState('')
  const db = getDatabase();
  let navigate = useNavigate()
  let [error, seterror] = useState(false)
  let [numderre, setnumder] = useState('')
  let [ countryre , setcountry] = useState('')
  let [addressre, setaddress] = useState('')
  let { totalPrice, totalquantity } = CartData.reduce((acc, item) => {
    acc.totalPrice += item.price * item.qun,
      acc.totalquantity += item.qun
    return (
      acc
    )
  }, { totalPrice: 0, totalquantity: 0 })
  let UserId = useSelector((item) => item.counter.userId)
  console.log(UserId);
  let [ Invalue , setInvalue ] = useState(false)
  let updateUserD = () => {
    setInvalue(true)
    setTimeout(() => {
      setInvalue(false)
    }, 1000);
    UserId.map((item) => {
      item.map((UserIndex) => {
        set(ref(db, 'users/' + (UserIndex.userID)), {
          username: UserIndex.username ,
          numder: numderre,
          address: addressre,
          country: countryre,
          userID: UserIndex.userID,
        })
      })
    })

  }
  let numberInput = (e) => {
    setnumder(e.target.value)
  }
  let CountryInput = (e) => {
    setcountry(e.target.value)
  }
  let adderssInput = (e) => {
    setaddress(e.target.value)
  }
  let HandleGoCheckout = () => {
    if (totalquantity) {
      setInvalue(true)
      setTimeout(() => {
        navigate('/Checkout')
      }, 1000);
    } else {
      seterror(true)
    }
  }
  let HandleCheErrMesRem = () => {
    seterror(false)
  }
  return (
    <div className="box w-[35%] py-[70px]">
      {error === true &&
        <div className=" p-[40px] errormesBox fixed top-[50%] left-[50%] w-[100%] h-[100%] bg-[#00000054] translate-y-[-50%] translate-x-[-50%]">
          <div className="box absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[300px] rounded-[10px] bg-[#fff] p-[50px]">
            <icon onClick={HandleCheErrMesRem} className='cursor-pointer top-0 right-0 bg-[#fff] rounded-[50%] text-[#000] text-[30px] absolute ' ><IoCloseCircleSharp /></icon>
             <h2 className='text-[20px] text-[#000] font-[400] '>There are no <span className='font-[700] text-[red]' >Prodect</span> on the <span className='font-[700] text-[red]' >Cart</span></h2>
             <h2 className='bg-[#19D16F] text-[#fff] mt-[20px] rounded w-[200px] h-[50px] flex justify-center items-center text-[18px] font-[600]'><Link to={'/'}>Shoping now</Link></h2>
          </div>
        </div>
      }
      { UserId.length > 0 ? "" :
      <>
        <div className=" p-[40px] errormesBox fixed top-[50%] left-[50%] w-[100%] h-[100%] bg-[#00000054] translate-y-[-50%] translate-x-[-50%]">

          <div className="box absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[300px] rounded-[10px] bg-[#fff] p-[50px]">
       <h2 className='text-[20px] text-[#000] font-[400] '><span className='font-[700] text-[red]' >Shoping</span> for <span className='font-[700] text-[red]' >Login</span></h2>
       <h2 className='cursor-pointer bg-[#19D16F] text-[#fff] mt-[20px] rounded w-[200px] h-[50px] flex justify-center items-center text-[18px] font-[600]'><Link to={'/Login'}>Login Now</Link></h2>
       </div>
       </div>
      
      </>
      }
      <div className="total w-[100%]">
        <h2 className='text-[20px] font-[600] text-[#1D3178] w-[100%] flex justify-center mb-[40px]'>Cart Totals</h2>
        <div className="totalBox bg-[#E8E6F1] w-[100%] p-[20px] h-[300px] rounded-[20px]">
          <h2 className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center'>Totalquantity:<span>{totalquantity}</span></h2>
          <h2 className=' border-b-[1px] border-[#fff8f8] w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center'>Totals:<span>{totalPrice.toFixed(2)}</span></h2>
          <h2 onClick={HandleGoCheckout} className='w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-center mt-[100px] items-center text-[#fff] bg-[#19D16F] rounded-[10px] cursor-pointer'>Proceed To Checkout</h2>
        </div>
      </div>
      {UserId.map((item) => (
        item.map((data) => (
          <div className="copon w-[100%]">
            <h2 className='text-[20px] font-[600] text-[#1D3178] w-[100%] flex justify-center my-[20px]'>User Address</h2>
            <div className="coponBox bg-[#E8E6F1] w-[100%] p-[20px] h-[300px] rounded-[20px]">
              <input value={`${ ((data.numder) == "" ) ? data.numder : (numderre == "" && Invalue === true ? data.numder :  numderre ) }`} onChange={numberInput} className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder={`${data.numder}`} type="text" />
              <input value={`${ ((data.country) == "" ) ? data.numder : (countryre == "" && Invalue === true ? data.counter  : countryre ) }`} onChange={CountryInput} className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder={`${(data.country) ? (data.country) : 'Enter Your country' }`} type="text" />
              <input value={`${((data.address) == "" ) ? data.address : (addressre == "" && Invalue === true ? data.address  : addressre) }`} onChange={adderssInput} className=' border-b-[1px] border-[#fff8f8]  w-[100%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-between items-center outline-none bg-[#fff0]' placeholder={`${data.address}`} type="text" />
              <h2 onClick={updateUserD} className='w-[65%] h-[50px] text-[17px] font-[600] py-[20px] flex justify-center mt-[60px] items-center text-[#fff] cursor-pointer bg-[#FB2E86] rounded-[10px]'>Submit</h2>
            </div>
          </div>
        ))
      ))}

    </div>
  )
}

export default CartTotal