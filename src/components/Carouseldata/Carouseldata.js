import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
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
  

const Carouseldata = ({datas}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
      };
  return (
    <div className='carouseldata'>
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
            {datas.map((data)=>{
                return (
                    <div className='carouseldata-imgcontainer' key={data.id}>
                        <img src={data.Imgsrc} alt="" className='carouseldata-img'/>

                    </div>
                )
            })}

        </Slider>
        

      
    </div>
  )
}

export default Carouseldata