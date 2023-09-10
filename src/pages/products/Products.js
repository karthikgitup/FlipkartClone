import React from 'react'
import "../products/products.css";
import {ProductsData} from "../../ProductsData";
import {Link} from "react-router-dom";
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';

const Products = () => {
  return (
    <div className='Products'>
      <div className='Products-filters'>
        <p className='filter-head'>Filters</p>
        <div className='category'>
          <p className='filter-categoryhead'>Categories</p>
          <div className='filter-category'>Mobiles</div>

        </div>
        <div className="price">
          <p className="pricehead"> Price</p>
          <input type='range' name="" id="" className="pricerange" />
          <div className='price-input'>
            <input value={0} className='price-box' /><p>to</p>
            <input value={50000} className='price-box' />

          </div>

        </div>
        <div className='brand'>
          <p>Brand</p>

        </div>

      </div>
      {/* <div> */}
        <div className='products-items'>
        <p className="totalresults">  Showing 1-{ProductsData.length} of {ProductsData.length} results</p>
{/* 
        </div> */}
        <div className='sort-by'>
          <p>Sort By</p>
          
          <ul className='sort-items'>
            <li className='sort-item'>Relevance</li>
            <li className='sort-item'>Popularity</li>
            <li className='sort-item'>Proce-Low to High</li>
            <li className='sort-item'>Price-High to LOw</li>
            <li className='sort-item'>Newest First</li>

          </ul>

        </div>
      {/* </div> */}
      
      <div className="">
          {ProductsData.map((item, index) => (
            <Link key={index} to={`/productdetails/${item.id}`}>
              <ProductDetailCard Data={item} />
            </Link>
          ))}
       

      </div>
</div>
    </div>
  )
}

export default Products;