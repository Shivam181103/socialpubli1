import React from 'react'
import logo from '../IMAGES1/png-logo.png'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import './footer.css'
const Footer = () => {
  return (
    <div style={{backgroundColor:'black',color:'white'}} className='footer '>  
          <div className="row m-0 footer-wrapper">
              <div className="col col-lg-4 col-md-6 col-sm-12 col-xm-12">
                  <img style={{width:'9rem'}} src={logo} alt="" />
                  <div className="page-links">
                      <a href="">Home</a> |  <a href="">Services</a> | <a href="about">Work</a> | <a href="about">Brands</a> | <a href="about">Tools</a> | <a href="about">about</a> | <a href="about">Contact</a>
                  </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 col-xm-12 contacts">
                  <div className="location d-flex">
                     <GoLocation   /> <span>1007 One Indiabulls Park , Jetalpur Road Vadodara , Gujrat</span>
                  </div>
                  <div className="phone d-flex">
                    <BsFillTelephoneFill />  <span>9723232454</span>
                  </div>
                  <div className="email d-flex">
                     <MdEmail/> <span>ingluencermarketing@socialpubli.co.in</span>
                  </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 col-xm-12">
                  <h6>About the company</h6>
                  <p>Socialpuvli is india's growing influencer marketing We use latest technologies and AI driven decisions to genrate higher engagements.</p>
                  <div className="links">
                      <a href="">
                       <FaFacebookF style={{color:'white'}} />
                      </a>
                      <a href="">
                       <FaTwitter style={{color:'white'}}/>
                      </a>
                      <a href="">
                      <FaLinkedinIn style={{color:'white'}}/>
                      </a>
                      <a href="">
                      <FaInstagram style={{color:'white'}}/>
                      </a>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer