import React,{useState} from 'react'
import "./Navbar.css"
import logo from '../../IMAGES1/png-logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
   
   return (
     <>
       <div className=" nav-wrapper-custom nav-container bg-transparent   ">
      <Link to='/' class="nav-logo navbar-brand" ><img  src={logo} alt="" /></Link>
       <nav class="navbar navbar-expand-lg    ">
  <div class="container-fluid">
    <button class="navbar-toggler toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span   class="navbar-toggler-icon  "></span>
    </button>
    <div class="collapse navbar-collapse nav-collapse-custom" id="navbarNav">
      <ul class="navbar-nav  navbar-nav-items ">
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='/underconstruction' class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='underconstruction' class="nav-link active" aria-current="page" >Services</Link>
        </li>
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='/underconstruction' class="nav-link active" aria-current="page" >Work</Link>
        </li>
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='/underconstruction' class="nav-link active" aria-current="page" >Tools</Link>
        </li>
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='underconstruction' class="nav-link active" aria-current="page" >About </Link>
        </li>
        <li class="nav-item">
          <Link style={{color:'#F7961D'}} to='underconstruction' class="nav-link active" aria-current="page" >Contact Us</Link>
        </li>
         
         
      </ul>
    </div>
  </div>
</nav>
       </div>
     </>
  )
}

export default Navbar