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
    
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate();

    let PostEmailValue = (e) => setemail(e.target.value);
    let PostNumberValue = (e) => setNumber(e.target.value);
    let PostNameValue = (e) => setname(e.target.value);
    let PostPassValue = (e) => setpostpassword(e.target.value);
    let PostConPassValue = (e) => setconpassword(e.target.value);
    let PostAdderValue = (e) => setaddress(e.target.value);

    const handleSubmit = () => {
        const emailRegex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        
        if (name === "") {
            setError(true);
            valid = false;
        } else {
            setError(false);
        }
        
        if (email === "" || !emailRegex.test(email)) {
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
        
        if (address === "") {
            setError4(true);
            valid = false;
        } else {
            setError4(false);
        }
        
        if (!valid) {
            return;
        }

        toast('Processing');
        
        setTimeout(() => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                    // Update user profile
  
                })
                .then(() => {
                    // Send verification email
                    return sendEmailVerification(auth.currentUser);
                })
                .then(() => {
                    toast('Verification email sent. Please check your inbox.');
                    setShowVerificationMessage(true);
                })
                .then(()=>{
                    const interval = setInterval(() => {
                        if (auth.currentUser) {
                            auth.currentUser.reload().then(() => {
                                if (auth.currentUser.emailVerified) {
                                    clearInterval(interval);
                                    setIsVerified(true);
                                    toast('Email verified! Redirecting to login...');
                                    navigate('/Login');
                                }
                            });
                        }
                    }, 3000); // Check every 3 seconds
            
                    return () => clearInterval(interval);
                })
                .then(() => {
                    // Save user details in the database
                    return set(ref(db, 'users/' + userID), {
                        username: name,
                        email: email,
                        address: address,
                        numder: numder,
                        userID: userID,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    setErrorLog(errorMessage);
                    toast("Error");
                });
        }, 1800);
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