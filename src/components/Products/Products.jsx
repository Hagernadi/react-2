

import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
// import { Audio } from 'react-loader-spinner/dist/types'
// import { Audio } from 'react-loader-spinner';
import { BallTriangle } from 'react-loader-spinner';


import { cartContext } from '../../Context/cartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';





export default function Products() {
  // const [products,setProducts]=useState([])
  let {addToCart}=useContext(cartContext)

 async function addProduct(x){
    let response = await addToCart(x);
    if(response.data.status==='success')
    {
      toast.success('product  successfuly added',{
        duration: 3000,
        position: 'top-right',
      })
    }
    else{
      toast.error('Error adding product')
    }

    console.log(response);
  }
  function getProducted(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
 let {data,isLoading,isError,isFetching}= useQuery('producted',getProducted)
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
    <h2> Feature Products</h2>
    <div className="row g-4">
      {data?.data.data.map((product)=> <div key={product.id} className="col-md-2  img-hover">
        
        <div className='imag-category p-2 h-100'>
        <Link to={`/ProductDetails/${product.id}`}>
        <img className='w-100' src={product.imageCover} alt={product.title} />
        <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
        <h3 className='h5'>{product.title.split(" ").slice(0,1).join(' ')}</h3>

        <div className='d-flex justify-content-between mt-3'>
          <span>{product.price}EGP</span>
          <span className='mb-3'><i class="fa-solid fa-star rating-color"></i>{product.ratingsAverage}</span>
        </div>
        </Link>
        <button onClick={()=>addProduct(product._id)} className='btn bg-main text-white hiden  btn-sm mt-2 mb-3 w-100 text-center'>add to cart</button> 
      </div>
      
      
      
      </div>)}
     
    </div>
  </div>}  
    </>
  )
}

