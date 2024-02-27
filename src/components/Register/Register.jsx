

import React, { useState } from 'react';
import style from './Register.module.css'
import {Formik, useFormik } from 'formik';

import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';



export default function Register() {
  let navigate=useNavigate();
  const [error,setError]=useState(null);
  let [isLoading,setisLoading]=useState(false)
  // console.log(error);
 async function formRegister(values) {
 
  setisLoading(true)
    let { data }=await axios.post( `https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    
    .catch(
      (err)=>{

        setisLoading(false)
        setError(err.response.data.message)
      }
    )
   
    //then and catch
   if(data.message==='success'){
      console.log(data.token);
      setisLoading(false)
      navigate('/login')
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
  

  let phoneRegix=/^[0-9]{11}/
  let validateSchema=Yup.object({
    name:Yup.string().min(3,'name minlength is 3').max(10,'name maxlength is 10').required('name is required'),
    email:Yup.string().email('email is invalid').required('email is required'),
    phone:Yup.string().matches(phoneRegix,'phone is invalid').required('phone is required'),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}/,'passowrd start with uppercase').required('passwoed ies required'),
    rePassword:Yup.string().oneOf([Yup.ref('password')],'passowrd and repasowrd dosnt match').required('repasowrd is required')
  })
  
  let formik=useFormik({
   
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },validateSchema,
    onSubmit:formRegister
  })
  return <>

    <div className='w-75 mx-auto py-4'>
      <h1>Register Now</h1>
    <form action="" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input type="text" id='name' value={formik.values.name} className='form-control mb-2' name='name'  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.name&&formik.touched.name?<div className='alert alert-danger p-2 mt-2'>{formik.errors.name}</div> :''}
    


      <label htmlFor="phone">Phone :</label>
      <input type="number" id='phone'   value={formik.values.phone} className='form-control mb-2' name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.phone &&formik.touched.phone?<div className='alert alert-danger p-2 mt-2'>{formik.errors.phone}</div> :''}
     


      <label htmlFor="email">Email :</label>
      <input type="email" id='email'   value={formik.values.email} className='form-control mb-2' name='email'  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email &&formik.touched.email?<div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> :''}
      


      <label htmlFor="password">Password :</label>
      <input type="text" id='password'   value={formik.values.password} className='form-control mb-2' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.password&&formik.touched.password?<div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> :''}
      
      <label htmlFor="rePassword">rePassword :</label>
      <input type="text" id='rePassword'   value={formik.values.rePassword} className='form-control mb-2' name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.rePassword&&formik.touched.rePassword?<div className='alert alert-danger p-2 mt-2'>{formik.errors.rePassword}</div> :''}
     
     
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
      </button>: <button  disabled={!(formik.isValid&&formik.dirty)} type='submit' className='btn bg-main text-white mt-2'>Register</button>}
     
     
     
     
     
      
    </form>
    </div>
  
  </>
    

}


