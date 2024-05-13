import "../navbar/navbar.css"
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Loginmodel from './loginmodel/Loginmodel';
import { useDispatch } from 'react-redux';
import { setLoginPageOpen } from '../../slices/userSlices';
import { useSelector } from 'react-redux';



const Navbar = () => {
const dispatch=useDispatch();
var  isuser=sessionStorage.getItem("user");
const datas=useSelector((state)=>state.userData);
if(isuser!=null){
  dispatch(setLoginPageOpen(false));

}else{
  dispatch(setLoginPageOpen(true));
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
       {!datas.isloginpageopen ? (<h3 >@{isuser?.slice(0,5)}</h3>) : ( <button className='navbar-btn' >Login</button>)}
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
      <Loginmodel  />
    </div>
    </>
  )
}

export default Navbar;