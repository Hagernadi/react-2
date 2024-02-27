import axios from 'axios'
import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider'
export default function Home() {



function getProducted(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}


  return (<>
  <MainSlider />
  <CategorySlider />
  <Products />
 




    </>
  )
}

