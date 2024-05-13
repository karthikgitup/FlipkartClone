import React, { useEffect, useState } from 'react';
import './Productcarousel.css';
import {Link} from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from '../CategoryBanner/CategoryBanner';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md"
import axios from 'axios';


      const Prev = (props) => {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew
              style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
          </div>
        );
      };
      const Next = (props) => {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}>
            <MdArrowForwardIos
              style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
          </div>
        );
      };
      const ProductCarousel = ({BgImg,Title,Data}) => {

const[productsData,setProductsData] =useState([]);       
        const Settings = {
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll:1,
            infinite: false,
          };

           useEffect(  ()=>{
           const response=async ()=>{
            try{
              const res= await axios.get("http://localhost:8080/api/products");
              console.log(res);
              setProductsData(res.data);

            }catch(error){
              console.log(error);
            }
          

           }
            
           response();

          },[])
      
  return (
    <div className="CategoryCarousel">
    <div
      className="CategoryCarousel-left"
      style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
    >
      <p className="CategoryCarousel-title">{Title}</p>
      <button className="CategoryCarousel-btn">View All</button>
    </div>
    <div className="CategoryCarousel-right">
      <Slider nextArrow={<Next />} prevArrow={<Prev />}  {...Settings}>
        {productsData.map((item, index) => (
          <Link key={item.id} to={"/products"}>
            <CategoryBanner
              ImgSrc={item.url}
              Title={item.product}
              price={item.sellingprice}
            />
          </Link>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default ProductCarousel;