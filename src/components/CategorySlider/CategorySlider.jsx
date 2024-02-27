

import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";


export default function CategorySlider() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };



  function getCategories(){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  let {isLoading,isError,data}=useQuery('CategorySlider',getCategories)
  console.log(data?.data.data);
  return <>



    
  



    {data?.data.data? 
    <div className='py-3 mb-3'>
     <Slider {...settings}>

      {data?.data.data.map((category)=><img height='150' key={category._id} src={category.image} className='w-100'/>)}
    </Slider>
  </div>:' '}

    </>
}

