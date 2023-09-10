import React from 'react';
import "./Categorybardata.css";

const Categorybardata = ({imgsrc,category}) => {
  return (
    <div className='categorybar'>
        <img src={imgsrc} alt="" className='categorybar-img'/>
        <p className='categorybar-title'>{category}</p>
    </div>
  )
}

export default Categorybardata;