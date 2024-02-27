

import React from 'react'
import { jwtDecode } from 'jwt-decode'
export default function Profile({userData}) {
  let encodedToken=localStorage.getItem('userToken');
  let decodedToken=jwtDecode(encodedToken)
  return (<>
  <div className="container">
    <div className='py-5'>
    {/* <h4>Name : {userData.name}</h4> */}
    
    <h1 className='text-main'>Hello : {decodedToken.name}</h1>
    <h4>Your Role : {userData.role}</h4>
    </div>
  </div>
  
  
  </>
    
  )
}

