

import React from 'react'

import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {

  if(localStorage.getItem('userToken')!==null){
    return props.children
  }
  else {
    <Navigate to={'/login'}></Navigate>
  }
  return (<>
  
    <div>ProtectedRoute</div>
    </>
  )
}

