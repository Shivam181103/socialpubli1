import React from 'react'
import "./Navbar.css"
import logo from '../../IMAGES1/png-logo.png';
const Navbar = () => {
  return (
     <>
       <div className=" nav-wrapper-custom nav-container  ">
      <a  class="nav-logo navbar-brand" href="#"><img style={{ width:'9rem', fill:'red'}} src={logo} alt="" /></a>
       <nav class="navbar navbar-expand-lg    ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav  navbar-nav-items ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Tools</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
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