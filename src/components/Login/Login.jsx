


import React, { useContext, useState } from 'react';
import {Formik, useFormik } from 'formik';
import style from './Login.module.css'
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { UserContext } from '../../Context/UserContext';


export default function Login({saveUserData}) {
  // console.log(x);
  let {setUserToken}=useContext(UserContext);
  let navigate=useNavigate();
  const [error,setError]=useState(null);
  const [isLoading,setisLoading]=useState(false)
 async function formLogin(values) {
    setisLoading(true);
    let {data}=await axios.post( `https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    .catch(
      (err)=>{
        setisLoading(false)
        setError(err.response.data.message)
      }
    )
    if(data.message==='success'){
      console.log(data.token);
      setisLoading(false)
      localStorage.setItem('userToken',data.token)
      saveUserData()
      setUserToken(data.token)
      navigate('/home')
    }
  }

 /*  function validate(values){
    let regixphone=/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/


    let errors={};
    if(!values.name){
      errors.name="name is required"
    }
    else if(values.name.length<3){
      errors.name="name minlingth is 3"
    }
    else if(values.name.length>10){
      errors.name="name maxlength is 10"
    }
   

    if(!values.phone){
      errors.phone="phone is required"
    }
    else if(!regixphone.test(values.phone)){
      errors.phone="phone minlingth is 3"
    }
    else if(values.phone.length>10){
      errors.phone="phone maxlength is 10"
    }

    if(!values.email){
      errors.email="email is required"
    }
    else if(values.email.length<3){
      errors.email="email minlingth is 3"
    }
    else if(values.name.length>10){
      errors.email="email maxlength is 10"
    }

    if(!values.password){
      errors.password="password is required"
    }
    else if(values.password.length<3){
      errors.password="password minlingth is 3"
    }
    else if(values.password.length>10){
      errors.password="password maxlength is 10"
    }

    if(!values.rePassword){
      errors.rePassword="rePassword is required"
    }
    else if(values.rePassword.length<3){
      errors.rePassword="rePassword minlingth is 3"
    }
    else if(values.rePassword.length>10){
      errors.rePassword="rePassword maxlength is 10"
    } 

    




    return errors
  } */
  

  let validateSchema=Yup.object({
   
    email:Yup.string().email('email is invalid').required('email is required'),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}/,'passowrd start with uppercase').required('passwoed ies required'),
    
  })
  
  let formik=useFormik({
   
    initialValues:{
     
      email:'',
      password:'',
     
    },validationSchema:validateSchema,
    onSubmit:formLogin
  })
  return <>

    <div className='w-75 mx-auto py-4'>
    <h2>Login Now</h2>
    <form action="" onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email :</label>
      <input type="email" id='email'   value={formik.values.email} className='form-control mb-2' name='email'  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email &&formik.touched.email?<div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> :''}
      


      <label htmlFor="password">Password :</label>
      <input type="text" id='password'   value={formik.values.password} className='form-control mb-2' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.password&&formik.touched.password?<div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> :''}
      

      {isLoading ? <button className='btn bg-main text-white mt-2' type='button'>
        <Audio
        height='20'
        width='80'
        radius='9'
        color='white'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass
        
        />
      </button>: <>
      <div className='d-flex align-items-center'>
      <button  disabled={!(formik.isValid&&formik.dirty)} type='submit' className='mx-2 btn bg-main text-white mt-2'>Login</button>
      <Link to={'/register'} className='mt-2 text-main'> Register Now</Link>
      </div>
      
      
      </>
      
      
      }


     
    </form>
    </div>
  
  </>
    

}




