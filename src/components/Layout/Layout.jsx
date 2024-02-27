

import React, { useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { useEffect } from 'react'


export default function Layout({userData}) {

  let {setUserToken}=useContext(UserContext)
  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null)
    {
      setUserToken(localStorage.getItem('userToken'))
    }
  },[])
  return (<>
    <Navbar userData={userData} />
   <div className="container">
   <Outlet></Outlet>
   </div>
    <Footer />
    </>
  )
}

