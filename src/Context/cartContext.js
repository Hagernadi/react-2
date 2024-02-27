import { createContext } from "react";
import axios, { Axios } from "axios";

export let cartContext=createContext();
export function CartContextProvider(props){
    let headers={
        token:localStorage.getItem('userToken')
    }
  function addToCart(productId){
       return  axios.post('https://ecommerce.routemisr.com/api/v1/cart',
        {
            productId:productId
        },
        {
            headers:headers
        }).then((response)=>response)
        .catch((error)=>error);

    }

    function getLoggedUserCart(){
      return  axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers:headers
        })
        .then((response)=>response)
        .catch((error)=>error);
    }

    function removeCartItem(productId){
      return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
        .then((response)=>response)
        .catch((error)=>error);
    }

    function updateProductQuantity(productId,count){
      return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count:count
        },{
            headers:headers
        })
        .then((response)=>response)
        .catch((error)=>error);

    }



    return <cartContext.Provider value={{addToCart,getLoggedUserCart,removeCartItem,updateProductQuantity}}>
        {props.children}
    </cartContext.Provider>

}