import React from 'react'
import logo from '../IMAGES1/png-logo.png'
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div style={{backgroundColor:'black',color:'white'}} className='footer '>  
          
          <footer class="footer-distributed">

			<div class="footer-left">

      <Link className="navbar-brand" to="/">
                <img style={{width:'9rem'}} src={logo} alt=".."/>
                </Link>

				<p class="footer-links">
					<Link to="/" class="link-1">Home</Link>
					
					<Link to="/services">Services</Link>
				
					<Link to="/influencer">Work</Link>
				
					<Link to="/brands">Brands</Link>
					
					<Link to="/tools">Tools</Link>
					
					<Link to="/about">About</Link>

          <Link to='/contactus'>Contact</Link>
				</p>

				<p class="footer-company-name"> SocialPubli © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>1007 One Indiabulls Park , Jetalpur Road</span>Vadodara , Gujarat</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>9723232454</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:influencermarketing@soicalpubli.co.in" style={{color:'white'}}>influencermarketing@soicalpubli.co.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Socialpubli is india's fastest growing influencer marketing. We use latest technologies and AI driven decisions to generate higher engagements.
				</p>

				<div class="footer-icons">

					<a className='face' href="#"><FaFacebookF/></a>
					<a className='twitt' href="#"><FaTwitter/></a>
					<a className='linkd' href="https://www.linkedin.com/company/socialpubli-influencer-marketing-company/"><FaLinkedinIn/></a>
					<a className='insta' href="https://instagram.com/socialpublindia?igshid=YmMyMTA2M2Y="><FaInstagram/></a>

				</div>

			</div>

		</footer>
          
          {/* <div className="row m-0 footer-wrapper">
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
                     <MdEmail/> <span>influencermarketing@socialpubli.co.in</span>
                  </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12 col-xm-12">
                  <h6>About the company</h6>
                  <p>Socialpubli is india's growing influencer marketing We use latest technologies and AI driven decisions to generate higher engagements.</p>
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
          </div> */}
    </div>
  )
}

export default Footer