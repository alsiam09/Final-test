import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set , onValue} from "firebase/database";
import { useDispatch } from 'react-redux';

const SingUpBox = () => {
    let dispatch = useDispatch()
    let [name , setname] = useState('') 
    let [email , setemail] = useState('') 
    let [address , setaddress] = useState('') 
    let [numder , setNumber] = useState('') 
    let [password , setpassword] = useState('') 
    let [postpassword , setpostpassword] = useState('') 
    let [Conpassword , setconpassword] = useState('') 
    let [userID , setuserID] = useState('') 
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate()
    let PostEmailValue = (e) =>{
        setemail(e.target.value);
        
    }
    let PostNumberValue = (e) =>{
        setNumber(e.target.value);
        
    }
    let PostNameValue = (e) =>{
        setname(e.target.value);
        
    }
    let PostPassValue = (e) =>{
        setpostpassword(e.target.value);
        
    }
    let PostConPassValue = (e) =>{
        setconpassword(e.target.value);
        
    }
    let PostAdderValue = (e) =>{
        setaddress(e.target.value);
        
    }

 
        let handleSubmit = () => {
        if (postpassword === Conpassword) {
            setpassword(postpassword)
           setTimeout(() => {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              
              // ...
            }).then(()=>{
                updateProfile(auth.currentUser,{
                    displayName: name,
                    numder: numder,
                });
            })
            .then(()=>{
                set(ref(db, 'users/' + userID), {
                    username: name,
                    email: email,
                    address: address,
                    numder: numder,
                    userID: userID,
                  });
            })
            .then(()=>{
                navigate('/Login')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
              console.log(userID);
              
              // ..
            });
           }, 2000);
        }else{
            console.log('error');
            
        }
        
    }
    useEffect(()=>{
        const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {        
        if (userID === "") {
            setuserID(1)
        }else{
            setuserID(snapshot.val().length);
        }
      
    });
      })
      
      
    return (
    <div className="Mainbox py-[70px] w-[100%]">
    <div className="LoginBox rounded-[7px] p-[30px] bg-[#F8F8FB] w-[544px] h-[700px] mx-auto">
        <h2 className='text-[36px] font-[700] flex justify-center mb-[10px]'>Sing up</h2>
        <span className='text-[#9096B2] text-[17px] flex justify-center mb-[25px]' >Please login using account detail bellow.</span>
        <input onChange={PostNameValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Full Name' type="text" />
        <input onChange={PostEmailValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Email Address' type="text" />
        <input onChange={PostNumberValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Phone Number' type="text" />
        <input onChange={PostAdderValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Adderss' type="text" />
        <input onChange={PostPassValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Password' type="text" />
        <input onChange={PostConPassValue} className='text-[#9096B2] text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]' placeholder='Confirm Password' type="text" />
        <h2 onClick={handleSubmit} className='w-[100%] h-[50px] bg-[#FB2E86] text-[#fff] text-[18px] mb-[35px] flex justify-center items-center rounded font-[600]'>Sing in</h2>
        <span className='text-[#9096B2] text-[17px] flex justify-center ' >You have aolrade an Account<Link to={'/Login'} className='text-[#44df44] underline'>Login</Link></span>
    </div>
</div>
  )
}

export default SingUpBox