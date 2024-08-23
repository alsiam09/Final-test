import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from 'react-redux'
import { UserDetails } from './slice/prodectSlice';
const LoginBox = () => {
  const db = getDatabase();
  const auth = getAuth();
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [ userData , setuserData ] = useState([])
  let [ email , setemail ] = useState('')
  let [ password , setpassword ] = useState('')
  let [ errorLog , setErrorLog ] = useState('')
  let emailValue = (e) => {
    setemail(e.target.value);
  }
  let PassValue = (e) => {
    setpassword(e.target.value);
  }
  useEffect(()=>{   
    const starCountRef = ref(db, 'users/');
    let arr = []
onValue(starCountRef, (snapshot) => {
  snapshot.forEach((item)=>{
    arr.push(item.val());
  })
  setuserData(arr)
});
  })
  let LoginNow = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      let userIdFilter = userData.filter((item)=>item.email === email)
      dispatch(UserDetails(userIdFilter))
      // ...
    })
    .then(()=>{
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorLog(errorMessage);
      
    });  
  }
  return (
    <div className="Mainbox py-[70px] w-[100%]">
        <div className="LoginBox rounded-[7px] p-[30px] bg-[#F8F8FB] w-[544px] h-[474px] mx-auto">
            <h2 className='text-[36px] font-[700] flex justify-center mb-[10px]'>Login</h2>
            <span className='text-[#9096B2] text-[17px] flex justify-center mb-[25px]' >Please login using account detail bellow.</span>
            <input onChange={emailValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Email Address' type="text" />
            {errorLog === "Firebase: Error (auth/invalid-email)." ?<span className='text-[#ff0909] text-[17px] flex justify-start mb-[25px]' >Your email address could not be found</span>:""}
            <input onChange={PassValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Password' type="text" />
            {errorLog === "Firebase: Error (auth/missing-password)." ?<span className='text-[#ff0909] text-[17px] flex justify-start mb-[25px]' >The Password you entersd did not match</span>:""}
            <span className='text-[#9096B2] text-[17px] flex justify-start mb-[25px]' ><Link>Forgot your password?</Link></span>
            <h2 onClick={LoginNow} className='w-[100%] h-[50px] bg-[#FB2E86] text-[#fff] text-[18px] mb-[35px] flex justify-center items-center rounded font-[600]'>Sing in</h2>
            <span className='text-[#9096B2] text-[17px] flex justify-center ' >Don’t have an Account?<Link to={'/Singup'} className='text-[#44df44] underline'>Create account</Link></span>
        </div>
    </div>
  )
}

export default LoginBox