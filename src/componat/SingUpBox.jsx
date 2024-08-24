import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUpBox = () => {
    let dispatch = useDispatch();
    let [name, setname] = useState('');
    let [email, setemail] = useState('');
    let [address, setaddress] = useState('');
    let [numder, setNumber] = useState('');
    let [password, setpostpassword] = useState('');
    let [Conpassword, setconpassword] = useState('');
    let [userID, setuserID] = useState('');
    let [errorLog, setErrorLog] = useState('');
    let [error, setError] = useState(false);
    let [error2, setError2] = useState(false);
    let [error3, setError3] = useState(false);
    let [error4, setError4] = useState(false);
    let [error5, setError5] = useState(false);
    let [error6, setError6] = useState(false);
    let [isVerified, setIsVerified] = useState(false);
    let [showVerificationMessage, setShowVerificationMessage] = useState(false);

    let [ MV , SetMV ] = useState(false)
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate();

    let PostEmailValue = (e) => setemail(e.target.value);
    let PostNumberValue = (e) => setNumber(e.target.value);
    let PostNameValue = (e) => setname(e.target.value);
    let PostPassValue = (e) => setpostpassword(e.target.value);
    let PostConPassValue = (e) => setconpassword(e.target.value);
    let PostAdderValue = (e) => setaddress(e.target.value);

    const handleSubmit = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(?:\+8801|8801|01)\d{9}$/;
        let valid = true;
      
        // Validations
        if (password.length < 8) {
          setError5(true);
          valid = false;
        } else {
          setError5(false);
        }
      
        if (password !== Conpassword) {
          setError6(true);
          valid = false;
        } else {
          setError6(false);
        }
      
        if (name.trim() === "") {
          setError(true);
          valid = false;
        } else {
          setError(false);
        }
      
        if (email.trim() === "" || !emailRegex.test(email)) {
          setError2(true);
          valid = false;
        } else {
          setError2(false);
        }
      
        if (!phoneRegex.test(numder)) {
          setError3(true);
          valid = false;
        } else {
          setError3(false);
        }
      
        if (address.trim() === "") {
          setError4(true);
          valid = false;
        } else {
          setError4(false);
        }
      
        if (!valid) {
          return;
        }
      
        toast('Processing');
        
        try {
          // Step 1: Create User with Email and Password
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          // Step 2: Send Email Verification
          await sendEmailVerification(user);
          toast('Verification email sent. Please check your inbox.');
          setShowVerificationMessage(true);
          SetMV(true)
      
          // Step 3: Poll for Email Verification Status
          const interval = setInterval(async () => {
            await user.reload();
            if (auth.currentUser.emailVerified) {
              clearInterval(interval);
              setIsVerified(true);
              toast('Email verified! Redirecting to login...');
            
             
              // Step 4: Update User Info in Firebase Realtime Database
              await set(ref(db, 'users/' + userID), {
                username: name,
                email: email,
                address: address,
                numder: numder,
                userID: userID,
                verify: "verify",
              });
              navigate('/')
              toast('User created and verified:', user);
            }
          }, 3000);
        } catch (error) {
          console.error('Error during registration:', error);
          setErrorLog(error.message);
          toast('Error during registration');
        }
      };
      
    useEffect(() => {
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            if (userID === "") {
                setuserID(1);
            } else {
                setuserID(snapshot.val().length);
            }
        });
    }, [db, userID]);


    return (
        <div className="Mainbox py-[70px] w-[100%]">
            {MV === true ?             <section className=' fixed top-0 left-0 w-[100%] bg-[#00000073] h-[100%] z-[9999]'>
                <h2 className='text-[36px] absolute left-[50%] bg-[#fff] px-[30px] py-[7px] rounded top-[300px] translate-x-[-50%] font-[600]'>Check You email</h2>
                <img className='w-[300px] absolute left-[50%] translate-x-[-50%] rounded-[30px] top-[400px]' src="data:image/png;base64,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"></img>
            </section>:<></> }
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className="LoginBox rounded-[7px] p-[30px] bg-[#F8F8FB] w-[544px] h-[700px] mx-auto">
                <h2 className='text-[36px] font-[700] flex justify-center mb-[10px]'>Sign up</h2>
                <span className='text-[#9096B2] text-[17px] flex justify-center mb-[25px]'>Please sign up using your account details below.</span>

                {/* Form Inputs */}
                <input onChange={PostNameValue} className={`${error === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='Full Name' type="text" />
                <input onChange={PostEmailValue} className={`${error2 === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='demo@gmail.com' type="text" />
                <input onChange={PostNumberValue} className={`${error3 === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='Phone Number' type="text" />
                <input onChange={PostAdderValue} className={`${error4 === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='Address' type="text" />
                <input onChange={PostPassValue} className={`${error5 === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='Password' type="password" />
                <input onChange={PostConPassValue} className={`${error6 === true ? "text-[red] border-[red]" : "text-[#9096B2]"} text-[17px] flex justify-center rounded border-[2px] my-[15px] outline-none px-[20px] border-[#9096B2] w-[100%] h-[52px]`} placeholder='Confirm Password' type="password" />
                <span className='text-[#ff0000] text-[17px] flex justify-start mb-[25px]'>{errorLog}</span>
                <h2 onClick={handleSubmit} className=' cursor-pointer w-[100%] h-[50px] bg-[#FB2E86] text-[#fff] text-[18px] mb-[35px] flex justify-center items-center rounded font-[600]'>Sing in</h2>
                <span className='text-[#9096B2] text-[17px] flex justify-center ' >You have aolrade an Account<Link to={'/Login'} className='text-[#44df44] underline'>Login</Link></span>
            </div>
        </div>
    )
}

export default SingUpBox