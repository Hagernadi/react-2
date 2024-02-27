
import logo from '../../assests/images/freshcart-logo.svg'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { CounterContext } from '../../Context/CounterContext'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Navbar({userData}) {
  // let {counter}=useContext(CounterContext);
  let {userToken,setUserToken}=useContext(UserContext)
  // console.log(counter);
  let navigate=useNavigate();

  function logOut(){
    localStorage.setItem('userToken',null);
    setUserToken(null);
    navigate('/login');

  }
  return (<>
  
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       {userToken !== null?
        <> 
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Brand">Brand</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cart">Cart</Link>
        </li>
        </>:''}
     
      

       
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className='d-flex align-items-center'>
        <i class="fa-brands fa-facebook mx-2"></i>
        <i class="fa-brands fa-twitter mx-2"></i>
        <i class="fa-brands fa-instagram mx-2"></i>
        <i class="fa-brands fa-tiktok mx-2"></i>
        </li>

        {userToken !==null?<><li className="nav-item">
          <div className='d-flex justify-content-center'>
          <Link className="nav-link active" to={"/login"} onClick={()=>logOut()} >Logout</Link>
          <Link className="nav-link active" to={"/profile"}  >Profile</Link>
          </div>
        </li></>:<>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
        </li>
        </>}
      
        
       
      
       
      </ul>

    </div>
  </div>
</nav>
       
  
  </>
       
  )
}

