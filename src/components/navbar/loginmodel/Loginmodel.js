import React, { useState } from 'react';
import "./Loginmodel.css";
import { AiOutlineClose } from "react-icons/ai";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import{auth} from "../../../config/firebase";
import { useDispatch } from 'react-redux';
import { setUser } from '../../../slices/userSlices';

const Loginmodel = ({isopen,setIsopen}) => {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [logintype,setLogintype]=useState(true);

const dispatch=useDispatch();
const register=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
        console.log(authUser);
    }).catch((error)=>{alert(error.message)});


}
const signIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
        dispatch(setUser(authUser.user))
        // console.log(authUser);
    }).catch((error)=>{alert(error.message)});
    


}


  return isopen ? (
    <>
    <div className='loginmodel-container'>
        <div className='loginmodel'>
        <div className='left'>
            <div className='left-container'>
                <p className='loginmodel-tittle'>Login</p>
                <p className='loginmodel-desc'>Get access to your Order , Wishlist and Recommanditions</p>
            </div>

        </div>
        <div className='right'>
            <div className='right-container'>
                <input className='login-input' type='mail' value={email} placeholder='mail' required onChange={(e)=>setEmail(e.target.value)}/>
                <input  className='login-input' type='password' value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
            <p className='termsandcon'>By continuing, you agree to Flipkart's  <span style={{color:"blue"}}>Terms of Use</span> and <span style={{color:"blue"}}>Privacy Policy</span>.</p>

             {
                logintype?(
                    <button className='login-btn'onClick={signIn}>Login</button>
                ):(
                    <button className='login-btn' onClick={register}>Sign up</button>
                )
             }
             {
                logintype?(
                    <p className='login-signup' onClick={()=>setLogintype(false)} >New to Flipkart? Create an account</p>
                ):(
                    <p className='login-signup' onClick={()=>setLogintype(true)} >Already an user? Login to an account</p>
                )
             }
            </div>
          
        </div>
        <div className='close-icon' onClick={()=>setIsopen(false)}>
        <AiOutlineClose/>

        </div>
        </div>
    </div>
    </>
  ):(<></>)
}

export default Loginmodel