import React, { useEffect, useState } from 'react';
import "../navbar/navbar.css"
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Loginmodel from './loginmodel/Loginmodel';
import { useSelector ,useDispatch} from 'react-redux';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import {auth} from '../../config/firebase';
import { removeUser,setUser } from '../../slices/userSlices';

const Navbar = () => {
const [isopen,setIsopen]=useState(false);
const user=useSelector((state)=>state.userData.user);
//  const dispatch=useDispatch();
console.log(user);
useEffect(()=>{
  if(user){
    setIsopen(false);
  }
});
const signOuts=()=>{
  signOut(auth);

 }



    


  return (
    <>
    <div className='navbar-container'>
      <div className='navbar'>
        <Link to={"/"}><img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"  alt="flipkartlogo" className="navbar-logo" /></Link>
        <div className='navbar-search'>
          <input type="text" placeholder='search for products,brands and more' className='navbar-searchbox'/>
          <button className='navbar-searchbtn'><IoSearch/></button>
        </div>
       {user?(<h3 onClick={signOuts} >@{user?.email.slice(0,10)}</h3>):( <button className='navbar-btn' onClick={()=>setIsopen(true)}>Login</button>)}
        <div className='navbar-bcs'>
          <h3>Become a seller</h3>
        </div>
        <div className='navbar-more'>
          <h3>More<i className='more-down'><MdKeyboardArrowDown/> </i></h3>
        </div>
        <div className='navbar-cart'>
          <div className='cart-icon'><FaShoppingCart/></div>
          <Link  className="cart" to={"/cart"}>Cart</Link>

        </div>

        
      </div>
      <Loginmodel isopen={isopen} setIsopen={setIsopen} />
    </div>
    </>
  )
}

export default Navbar;