import React, { useEffect, useState } from 'react';
import "./Loginmodel.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setLoginPageOpen} from '../../../slices/userSlices';
import axios from 'axios';

const Loginmodel = ({isopen,setIsopen}) => {

const [email,setEmail]=useState("");
const [username,setUserName]=useState("");
const [password,setPassword]=useState("");
const [logintype,setLogintype]=useState(true);
const dispatch=useDispatch();
const data=useSelector((state)=>state.userData);



const signIn= async (e)=>{
    e.preventDefault();
    try{
        const res= await axios.post("http://localhost:8080/api/v1/login",{
            email:email,
            password:password
        });
        console.log(res);
        
       if(res.status===200){
        
        sessionStorage.setItem("user",res.data.email);
        dispatch(setLogin(res.data));
        dispatch(setLoginPageOpen(false));
     

       }
       console.log(data);
   

    }catch(error){
        console.log(error);
    }
  
}
const register= async (e)=>{
    e.preventDefault();

   try{
    const res= await axios.post("http://localhost:8080/api/v1/register",{
        username:username,
        email:email,
        password:password
    });
    console.log(res.data);
 console.log(isopen);

   }catch(error){
    console.log(error);

   }


    
}



  return data.isloginpageopen ? (
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
            {
                logintype?(
                    <>
                    
                    <input className='login-input' type='mail' value={email} placeholder='mail' required onChange={(e)=>setEmail(e.target.value)}/>
                    <input  className='login-input' type='password' value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
                    </>):(
                    <>
                    <input className='login-input' type='text' value={username} placeholder='user name' required onChange={(e)=>setUserName(e.target.value)}/>
                    <input className='login-input' type='mail' value={email} placeholder='mail' required onChange={(e)=>setEmail(e.target.value)}/>
                    <input  className='login-input' type='password' value={password} placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
                    </>)
             }
           
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
                    <p className='login-signup'   onClick={()=>setLogintype(false)} >New to Flipkart? Create an account</p>
                ):(
                    <p className='login-signup' style={{marginTop:'40px' }}   onClick={()=>setLogintype(true)} >Already an user? Login to an account</p>
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