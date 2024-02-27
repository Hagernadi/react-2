

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  Style from './ProductDetails.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';


export default function ProductDetails() {
  let params = useParams();
   function getProductDetails(id){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      
      }
  let {isLoading ,isError, data} =useQuery('productDetails',()=>getProductDetails(params.id))
console.log(data?.data.data);
  return (<>
    {data?.data.data?<div className='row py-2 align-items-center'>
      <div className="col-md-4">
        <img src={data?.data.data.imageCover} className='w-100' alt={data?.data.data.title} />
      </div>
      <div className="col-md-8">
        <h2 className='h5'>{data?.data.data.title}</h2>
        <p>{data?.data.data.description}</p>
        <h6 className='text-main'>{data?.data.data.category.name}</h6>
        <h6 className='text-main'>Price : {data?.data.data.price} EGP</h6>
        <div className='d-flex justify-content-between'>
        <p>{data?.data.data.slug}</p>
        <p><i class="fa-solid fa-star rating-color"></i>{data?.data.data.ratingsAverage}</p>
        </div>
        <button className='btn bg-main text-white w-100 mt-2'>Add to cart</button>
      </div>
      
    </div> : ''}
    
    </> )
}

