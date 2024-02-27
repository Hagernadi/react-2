

import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { BallTriangle } from 'react-loader-spinner';
// import style from "../Template/Template.module.css"
export default function Brand() {

  function getBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }

  let {data,isLoading,isFetching}= useQuery('brand',getBrands)
  console.log("isloading" ,isLoading);
  console.log("isfetching",isFetching);
  console.log(data?.data.data);


    
  return (<>
    {isLoading? <div className='w-100 py-5 d-flex justify-content-center'>
    <BallTriangle
          height={100}
          width={100}
          radius={5}
          color='#4fa94d'
          ariaLabel='ball-triangle-loading'
          wrapperStyle=""
          wrapperClass={{}}
          visible={true}
          
          />
    </div>:<div className="container py-2">
     
      <div className="row g-4">
        {data?.data.data.map((brand)=> <div className="col-md-4 img-hover">
          <div className=' img-category'>
          <img className='w-100'  src={brand.image} alt={brand.name} />
          
          <h1 className='h3 text-main py-3 text-center'>{brand.name}</h1>
          </div>
        
          {/* <button className='btn bg-main text-white w-100 btn-sm mt-2'>add to cart</button> */}
        </div>)}
       
      </div>
    </div>}
  
      
      </>
    )
}

