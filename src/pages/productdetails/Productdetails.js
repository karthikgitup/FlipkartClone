import React from 'react'
import "../productdetails/productdetails.css"
import { useState } from 'react'
import {useParams }from "react-router-dom";
import { ProductsData } from '../../ProductsData';
import { useEffect } from 'react';

const Productdetails = () => {
  const [data,setData]=useState({});
  const {id}=useParams();
  useEffect(()=>{
    const product=ProductsData.filter((item)=>{

      return item.id.toString()===id
  });
  setData(product[0]);
  console.log(data);

  },[id])
  return (
    <div>productdetails</div>
  )
}

export default Productdetails;