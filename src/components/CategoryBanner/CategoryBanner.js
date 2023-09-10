import React from 'react';
import "./CategoryBanner.css";

const CategoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className='CategoryBanner'>
        <img src={ImgSrc} className='CategoryBanner-img'/>
        <p className='CategoryBanner-title'>
            {Title >25 ?Title:Title.slice(0,15)+"...."}

        </p>
        <p className='CategoryBanner-shopnow'>Shop NOw!</p>
        <p className='CategoryBanner-Brands'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner