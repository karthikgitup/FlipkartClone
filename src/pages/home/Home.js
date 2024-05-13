import React, { useEffect } from 'react';
import "../home/home.css";
import {CategoryBarData,CarouselData,BestOf} from '../../data';
import Categorybardata from '../../components/Categorybardata/Categorybardata';
import Carouseldata from '../../components/Carouseldata/Carouseldata';
import ProductCarousel from '../../components/Productcarousel/Productcarousel';

const Home = () => {
useEffect(()=>{
  

},[])

  return (
    <div className="home">
      <div className='home-categorycontainer'>
        <div className='homecategory-bardata'>
          <div className='homecategory-bardatacontainer'>
            {CategoryBarData.map((item,index)=>{

           return   <Categorybardata key={index} imgsrc={item.imageSrc} category={item.category}/>
            })}

          </div>

        </div>
        <div className='homecategory-carousel'>
          <div className='homecategory-carouselcontainer'>
            <Carouseldata datas={CarouselData}/>

          </div>
           <div className='home-productcarousel'>
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title="Best of Electronics"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title="Winter Essentials"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title="Wedding & Gifting Specials"
            Data={BestOf.Electronics}
          /> 

           </div> 

        </div>


      </div>
    </div>
  )
}

export default Home;