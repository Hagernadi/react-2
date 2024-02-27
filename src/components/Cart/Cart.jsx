

import React, { useContext, useEffect ,useState} from 'react'
import { cartContext } from '../../Context/cartContext'
import { BallTriangle } from 'react-loader-spinner';

// import style from "../Template/Template.module.css"
export default function Cart() {
  let {getLoggedUserCart,removeCartItem,updateProductQuantity}= useContext(cartContext)
  const [cartDetails,setCartDetails]=useState(null)

 async function updateCount(id , count){
  let {data}=  updateProductQuantity(id , count)
  setCartDetails(data);
  }

 async function removeItem(id){
    let {data} = await  removeCartItem(id)
    setCartDetails(data);
  }

 async function grtCart(){
 let {data}=  await getLoggedUserCart();
 setCartDetails(data);
  }




  useEffect(()=>{
    grtCart();
  },[])
  return <>
  {cartDetails?  <div className="w-75 p-3 my-3 mx-auto p-2 bg-main-light">
    <h3 className='mb-4'>Shopping Carts</h3>
    <h4 className='h6 text-main'>Cart Items :{cartDetails.numOfCartItems}</h4>
    <h6 className=' text-main fw-bold mb-4'> Total Cart Price :{cartDetails.data.totalCartPrice} EGP</h6>
    {cartDetails.data.products.map((product)=><div key={product.product.id} className='row border-buttom  py-2 px-2'>

      <div className="col-md-1 ">
        <img className='w-100' src={product.product.imageCover} alt="" />
      </div>
      <div className="col-md-11">
        <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3 className='h6'>{product.product.title.split(' ').slice(0,3).join(' ')}</h3>
              <h6 className='text-main'>Price :{product.price}</h6>
            </div>


            <div>
              <button onClick={()=>updateCount(product.product.id,product.count + 1)} className='brdr-main  py-1'>+</button>
              <span className='mx-2'>{product.count}</span>
              <button onClick={()=>updateCount(product.product.id,product.count - 1)} className='brdr-main  py-1'>-</button>
            </div>


        </div>

        <button onClick={()=>removeItem(product.product.id)} className='btn p-0'><i class="fa-solid fa-trash-can font-sm text-danger"></i> Remove</button>
      </div>

    </div>)}
  </div>:<section id='loading' className='d-flex justify-content-center align-items-center'>
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
     </section>}

  
  </>
}

