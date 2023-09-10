
import './App.css';
import React from 'react';
import Productdetails from './pages/productdetails/Productdetails';
import Products from './pages/products/Products';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
// import { useEffect } from 'react';
// import { auth } from './config/firebase';
// import { useDispatch } from 'react-redux';
// import { setUser } from './slices/userSlices';


 const App = () => {
//   const dispatch=useDispatch()


       

  
  

// useEffect(()=>{
//   getUser();
// },[]);

  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/products" element={<Products/>} ></Route>
      <Route path="/productdetails/:id" element={<Productdetails/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App;
