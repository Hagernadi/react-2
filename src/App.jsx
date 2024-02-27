
import './App.css';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import Brand from './components/Brand/Brand';
import Notfound from './components/Notfound/Notfound';
import Profile from './components/Profile/Profile';
// import CounterContextProvider from './Context/CounterContext';
import UserContextProvider, { UserContext } from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { CartContextProvider } from './Context/cartContext';
import ProductDetails from './components/ProductDetails/ProductDetails';

// import { useContext, useEffect } from 'react';

function App() {
  // useEffect(()=>{
  //   if(localStorage.getItem !== null)
  //     {
  //       saveUserData();
  //     }
  // },[])

  const [userData,setUserData]=useState(null)
  // console.log(userData);
  function saveUserData(){
   let encodedtoken= localStorage.getItem('userToken');
   let decodedtoken= jwtDecode(encodedtoken);
  //  console.log(decodedtoken);
   setUserData(decodedtoken)
  }



let routes=createBrowserRouter([
  {path:"/",element:<Layout userData={userData} />,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'Home',element:<ProtectedRoute><Home/></ProtectedRoute>},
   
    {path:'Register',element:<Register/>},
    {path:'Categories',element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'Products',element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'Cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'Profile',element:<ProtectedRoute><Profile userData={userData}/></ProtectedRoute>},
    {path:'Brand',element:<ProtectedRoute><Brand/></ProtectedRoute>},
    {path:'ProductDetails/:id',element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'*',element:<Notfound/>},
    {path:'Login',element:<Login saveUserData={saveUserData}/>},
   
  ]}
])


  return <>

<UserContextProvider>
        <CartContextProvider>   
          <RouterProvider router={routes}></RouterProvider>
         <Toaster />
          </CartContextProvider>
  </UserContextProvider>



  

  </>
}



export default App;
