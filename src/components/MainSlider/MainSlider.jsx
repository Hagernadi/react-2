

import React from 'react'
import slide1 from '../../assests/images/slider-image-1.jpeg'
import slide2 from '../../assests/images/slider-image-2.jpeg'
import slide3 from '../../assests/images/slider-image-3.jpeg'
import blog1 from '../../assests/images/grocery-banner-2.jpeg'
import blog2 from '../../assests/images/grocery-banner.png'
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return <>
  
  <div className="row gx-0 mb-4">
    <div className="col-md-9">
    <Slider {...settings}>
      <img height={300} className='w-100' src={slide1} alt="slide1" />
      <img height={300} className='w-100' src={slide2} alt="slide1" />
      <img height={300} className='w-100' src={slide3} alt="slide1" />
    </Slider>
    </div>
    <div className="col-md-3">
    <img height={150} className='w-100' src={blog1} alt="slide1" />
    <img height={150} className='w-100' src={blog2} alt="slide1" />
    </div>
  </div>

 
  
  
  </>
}

